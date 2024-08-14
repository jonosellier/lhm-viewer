export type TreeItem =
	| { children: Record<string, TreeItem>; selected?: undefined; path: string }
	| { children?: undefined; selected: boolean; path: string; color: string };

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

export type DataPoint = {
	time: Date;
	sensor: Record<string, number>;
};
