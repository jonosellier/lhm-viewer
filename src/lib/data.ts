export type TreeItem =
	| { children: Record<string, TreeItem>; selected?: undefined; path: string }
	| { children?: undefined; selected: boolean; path: string };

export type DataPoint = {
	time: string;
	sensor: Record<string, number>;
};
