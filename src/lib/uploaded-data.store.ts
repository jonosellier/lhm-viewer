import { get, writable } from 'svelte/store';
import type { DataPoint, SensorTree } from './data';
import { preferences } from './preferences.store';
import { hslToHex } from './color-tools';

export type LhmFile = {
	data: DataPoint[];
	pathTree: SensorTree;
	deviceName: Record<string, string>;
	name: string;
};

export class LhmData {
	data: DataPoint[] = [];
	pathTree: SensorTree = {};
	deviceName: Record<string, string> = {};
	valid = false;
	name: string = '';
	subsets: [Date, Date][] = [];
	static readonly metricTypes = [
		'control',
		'voltage',
		'temperature',
		'fan',
		'load',
		'power',
		'clock',
		'factor',
		'smalldata',
		'data',
		'level',
		'throughput'
	] as const;
	private readonly pathMatcher = new RegExp(`\/(.+)\/(${LhmData.metricTypes.join('|')})\/(.+)`);
	constructor(csvData?: string) {
		if (!csvData) {
			return;
		}

		const { hwPaths, sensors, dataRows } = this.readCsvData(csvData);

		const data = this.parseData(dataRows, hwPaths);

		const subsets = this.detectDataSubsets(data);

		const { pathTree, deviceName } = this.generatePathMappings(hwPaths, sensors);

		this.pathTree = pathTree;
		this.data = data;
		this.valid = true;
		this.deviceName = deviceName;
		this.subsets = subsets;
		this.colorSenors();
	}

	toFile(): LhmFile {
		const { data, pathTree, deviceName, name } = this;
		return { data, pathTree, deviceName, name };
	}

	static fromFile(file: LhmFile) {
		const { data, pathTree, deviceName, name } = file;
		const instance = new LhmData();
		instance.data = data;
		instance.pathTree = pathTree;
		instance.deviceName = deviceName;
		instance.name = name;
		instance.valid = true;
		return instance;
	}

	colorSenors(force = false) {
		let shouldUpdate = force;
		const p = get(preferences);
		const devices = Object.keys(this.pathTree.children ?? {});
		for (let i = 0; i < devices.length; i++) {
			const device = devices[i];
			for (const sensorType in this.pathTree[device].children ?? {}) {
				const sensors = Object.keys(this.pathTree[device].children?.[sensorType]?.children ?? {});
				for (let j = 0; j < sensors.length; j++) {
					const sensor = sensors[j];
					const path = this.pathTree[device]?.children?.[sensorType]?.children?.[sensor]?.path;
					if (path) {
						const color = hslToHex(
							((i / devices.length) * 360) | 0,
							100,
							90 - (((j / sensors.length) * 55) | 0)
						);
						console.log({
							color,
							device,
							sensor,
							path
						});
						if (force || !p.sensorColor[path]) {
							p.sensorColor[path] = color;
							shouldUpdate = true;
						}
					}
				}
			}
		}
		if (shouldUpdate) {
			preferences.set(p);
		}
	}

	toJson(pretty = false) {
		return JSON.stringify(this.toFile(), undefined, pretty ? 2 : 0);
	}

	private readCsvData(csvData: string) {
		// first 2 rows are the WMI path and sensor names, the rest values
		const [fullHwPath, sensorNames, ...dataRows] = csvData.split(/\r?\n/).filter((v) => !!v);
		const [_emptySensor, ...sensors] = sensorNames.split(',').map((v) => v.replace(/"/g, '')); // CSV uses quotes
		const hwPaths = this.parseHwPaths(fullHwPath);
		return {
			hwPaths,
			sensors,
			dataRows
		};
	}

	private parseHwPaths(fullHwPath: string) {
		const pathMap = get(preferences).sensorName;
		const pathMapKeys = Object.keys(pathMap).sort();
		const macsSeen: string[] = [];
		const [_emptyPath, ...hwPaths] = fullHwPath.split(',').map((pathStr) => {
			for (let i = 0; i < pathMapKeys.length; i++) {
				if (pathStr.includes(pathMapKeys[i])) {
					return pathStr.replace(pathMapKeys[i], pathMap[pathMapKeys[i]]);
				}
			}
			const [device, type, sensor] = pathStr.replace(this.pathMatcher, '$1:$2:$3').split(':');
			return `${device.replace(/\//g, '_').replace(/\{[A-F0-9-]+\}/, (substring) => {
				if (!macsSeen.includes(substring)) {
					macsSeen.push(substring);
				}
				return (macsSeen.indexOf(substring) + 1).toString();
			})}/${type}/${sensor}`;
		});

		return hwPaths;
	}

	private parseData(dataRows: string[], hwPaths: string[]) {
		return dataRows.map((v) => {
			const [timeStamp, ...sensorReading] = v.split(',');
			const dataPoint: DataPoint = { time: new Date(timeStamp), sensor: {} };
			sensorReading.forEach((v, i) => (dataPoint.sensor[hwPaths[i]] = +v));
			return dataPoint;
		});
	}

	private detectDataSubsets(data: DataPoint[]) {
		const intervals = data
			.map((d, i) => {
				if (i > 0) {
					return d.time.valueOf() - data[i - 1].time.valueOf();
				}
				return 0;
			})
			.sort();

		const regularInterval = intervals[(intervals.length * 0.9) | 0]; // get 90th percentile

		console.log(regularInterval);

		const subsets: [Date, Date][] = [];
		let subsetStart = 0;
		for (let i = 1; i < data.length; i++) {
			const element = data[i];
			const prevElement = data[i - 1];
			const closenessToInterval =
				(element.time.valueOf() - prevElement.time.valueOf()) / regularInterval;
			if (closenessToInterval > 50) {
				console.log({ wanted: regularInterval, found: closenessToInterval });
				subsets.push([data[subsetStart].time, data[i - 1].time]); // push current subset
				subsetStart = i;
			}
		}
		subsets.push([data[subsetStart].time, data[data.length - 1].time]); // push final subset which has last elements

		return subsets;
	}

	private generatePathMappings(hwPaths: string[], sensors: string[]) {
		const pathTree: SensorTree = {};
		const deviceName: Record<string, string> = {};
		hwPaths.forEach((pathStr, i) => {
			const [device, sensorType, sensor] = pathStr.split('/').filter((v) => v.length > 0);
			if (!pathTree[device]) {
				pathTree[device] = { path: device, children: {} };
			}
			if (!pathTree[device].children[sensorType]) {
				pathTree[device].children[sensorType] = { path: `${device}/${sensorType}`, children: {} };
			}
			if (!pathTree[device].children[sensorType].children[sensors[i]]) {
				pathTree[device].children[sensorType].children[sensors[i]] = {
					path: `${device}/${sensorType}/${sensor}`,
					selected: false
				};
				deviceName[pathStr] = sensors[i];
			}
		});

		return { pathTree, deviceName };
	}
}

export const data = writable(new LhmData());

data.subscribe((v) => console.log(v));
