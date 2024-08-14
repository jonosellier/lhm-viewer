export type TreeItem =
	| { children: Record<string, TreeItem>; selected?: undefined; path: string }
	| { children?: undefined; selected: boolean; path: string };

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
