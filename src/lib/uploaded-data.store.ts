import { writable } from 'svelte/store';
import type { DataPoint, TreeItem } from './data';

export class LhmData {
	data: DataPoint[] = [];
	pathTree: TreeItem = { children: {}, path: '' };
	deviceName: Record<string, string> = {};
	valid = false;
	constructor(csvData?: string) {
		if (!csvData) {
			return;
		}
		// first 2 rows are the WMI path and sensor names, the rest values
		const [hwPathFull, heading, ...value] = csvData.split(/\r?\n/).filter((v) => !!v);

		const [_emptySensor, ...sensors] = heading.split(',').map((v) => v.replace(/"/g, '')); // CSV uses quotes

		const [_emptyPath, ...hwPaths] = hwPathFull.split(',');

		console.time(`processed ${value.length} rows`);
		const data = value.map((v) => {
			const [timeStamp, ...sensorReading] = v.split(',');
			const dataPoint: DataPoint = { time: timeStamp, sensor: {} };
			sensorReading.forEach((v, i) => (dataPoint.sensor[hwPaths[i]] = +v));
			return dataPoint;
		});

		const pathTree: TreeItem = { children: {}, path: '' };

		const deviceName: Record<string, string> = {};
		hwPaths.forEach((pathStr, i) => {
			const path = pathStr
				.split('/')
				.filter((v) => v.length > 0)
				.slice(0, -1); //last Id is unique and not needed
			let current = pathTree.children as Record<string, TreeItem>;
			let currentPathStr = '';
			path.forEach((p) => {
				if (!current[p]) {
					currentPathStr = `${currentPathStr}/${p}`;
					current[p] = { children: {}, path: currentPathStr };
				}
				current = current[p].children as Record<string, TreeItem>; // drill in
			});
			current[sensors[i]] = { selected: false, path: hwPaths[i] };
			deviceName[pathStr] = sensors[i];
		});

		this.pathTree = pathTree;
		this.data = data;
		this.valid = true;
		this.deviceName = deviceName;
	}
}

export const data = writable(new LhmData());

data.subscribe((v) => console.log(v));
