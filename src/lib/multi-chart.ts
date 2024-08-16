import { get } from 'svelte/store';
import { preferences } from './preferences.store';
import { hslToHex } from './color-tools';

export type MetricType =
	| 'control'
	| 'voltage'
	| 'temperature'
	| 'fan'
	| 'load'
	| 'power'
	| 'clock'
	| 'factor'
	| 'smalldata'
	| 'data'
	| 'level'
	| 'throughput';

export class MultiChartData {
	private _pathMap = new Map<string, number>();
	private _chartType = new Map<string, MetricType>();

	charts: ChartData[] = [];
	xAxis: Date[] = [];
	subsets: [number, number][] = [];
	name: string;
	selectedSubset = -1;
	show: number[] = [];

	static readonly metricTypes: MetricType[] = [
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

	getChartType(path: string) {
		return this._chartType.get(path);
	}

	findByPath(path: string) {
		return this._pathMap.get(path);
	}

	constructor(csvData?: string, name?: string) {
		if (!csvData) {
			return;
		}
		const { hwPaths, sensors, dataRows } = this.readCsvData(csvData);
		this.name = name ?? new Date().toISOString();
		// used to set the same hue for every sensor on the same device
		const deviceSet = new Set<string>();

		// parse each path and set their index as well as sensor type
		hwPaths.forEach((v, i) => {
			this._pathMap.set(v, i);
			const [device, chartType, _sensor] = v.split('/');
			deviceSet.add(device); // add to a unique list of devices for color generation later on
			if (MultiChartData.metricTypes.includes(chartType as MetricType)) {
				this._chartType.set(v, chartType as MetricType);
			} else {
				console.warn('[MultiChartData]: Unknown type', chartType, 'in', v);
			}
		});

		const uniqueDevices = Array.from(deviceSet).sort(); // make array and sort for consistency
		let luminosity = 50;

		dataRows.forEach((row) => {
			const [timestamp, ...data] = row.split(','); // pull the timestamp and sensor reading from that time
			this.xAxis.push(new Date(timestamp)); // add the timestamp to the x axis
			// on every value fro that time
			data.forEach((c, i) => {
				// create a series for that value if it doesn't exist
				if (!this.charts[i]) {
					const hue =
						(uniqueDevices.indexOf(hwPaths[i].split('/')[0]) / uniqueDevices.length) * 360;
					luminosity = luminosity > 50 ? luminosity / 1.5 : luminosity * 1.7; // luminosity that is unalike to neighbors
					this.charts[i] = {
						label: sensors[i],
						path: hwPaths[i],
						values: [],
						color: hslToHex(hue, 100, luminosity)
					};
				}
				// add  the latest value to the series
				this.charts[i].values.push(+c);
			});
		});

		this.subsets = this.detectDataSubsets(this.xAxis);

		if (this.charts.length < 10) {
			this.show = this.charts.map((_, i) => i); // show all if small chart
		}
	}

	toCsv(options?: { sensorsToKeep?: number[]; subset?: [number, number] }) {
		if (options?.sensorsToKeep) {
			console.log('Trimming sensors to', options.sensorsToKeep);
		}
		const trimmedSensorData = options?.sensorsToKeep
			? this.charts.filter((_v, i) => options.sensorsToKeep?.includes(i))
			: this.charts;
		let xAxis = this.xAxis;
		if (options?.subset) {
			console.log('Trimming subset to', options.subset);
			trimmedSensorData.forEach((c) => {
				c.values = c.values.slice(options.subset?.[0], options.subset?.[1]);
			});
			xAxis = xAxis.slice(options.subset?.[0], options.subset?.[1]);
		}
		const hwPaths = `,${trimmedSensorData.map((v) => `"/${v.path}"`).join(',')}`;
		const sensors = `,${trimmedSensorData.map((v) => `"${v.label}"`).join(',')}`;
		const rows = xAxis.map((v, i) =>
			[v.toISOString()]
				.concat(trimmedSensorData.map((v) => v.values[i].toFixed(v.values[i] > 10 ? 0 : 2)))
				.join(',')
		);
		return [hwPaths, sensors, ...rows].join('\n');
	}

	private readCsvData(csvData: string) {
		// first 2 rows are the WMI path and sensor names, the rest values
		const [fullHwPath, sensorNames, ...dataRows] = csvData
			.split(/\r?\n/)
			.filter((v) => !!v)
			.map((v) => v.replace(/"/g, '')); // CSV uses quotes
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
			const [device, type, sensor] = pathStr.replace(pathMatcher, '$1:$2:$3').split(':');
			return `${device.replace(/\//g, '_').replace(/\{[A-F0-9-]+\}/, (substring) => {
				if (!macsSeen.includes(substring)) {
					macsSeen.push(substring);
				}
				return (macsSeen.indexOf(substring) + 1).toString();
			})}/${type}/${sensor}`;
		});

		return hwPaths;
	}

	private detectDataSubsets(data: Date[]) {
		const intervals = data
			.map((d, i) => {
				if (i > 0) {
					return d.valueOf() - data[i - 1].valueOf();
				}
				return 0;
			})
			.sort();

		const regularInterval = intervals[(intervals.length * 0.9) | 0]; // get 90th percentile

		const subsets: [number, number][] = [];
		let subsetStart = 0;
		for (let i = 1; i < data.length; i++) {
			const element = data[i];
			const prevElement = data[i - 1];
			const closenessToInterval = (element.valueOf() - prevElement.valueOf()) / regularInterval;
			if (closenessToInterval > 50) {
				console.log({ wanted: regularInterval, found: closenessToInterval });
				subsets.push([subsetStart, i - 1]); // push current subset
				subsetStart = i;
			}
		}
		subsets.push([subsetStart, data.length - 1]); // push final subset which has last elements

		return subsets;
	}
}

const pathMatcher = new RegExp(`/(.+)/(${MultiChartData.metricTypes.join('|')})/(.+)`);

export type ChartData = {
	label: string;
	path: string;
	values: number[];
	color: string;
};

export type SensorTree = {
	[device: string]: {
		path: string;
		children: {
			[sensorType: string]: {
				path: string;
				children: {
					[sensor: string]: {
						selected: boolean;
						path: string;
						color: string;
					};
				};
			};
		};
	};
};
