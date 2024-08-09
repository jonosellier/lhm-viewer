import  {readFileSync, writeFileSync} from 'node:fs';
console.time('read');
const csvData = readFileSync('LibreHardwareMonitorLog-2024-08-07.csv').toString();
console.timeEnd('read');

const [hwPathFull, heading, ...value] = csvData.split(/\r?\n/).filter(v => !!v);

const sensors = heading.split(',').map(v => v.replace(/"/g, '')).slice(1, undefined);
const [_,...hwPaths] = hwPathFull.split(',');

console.time(`processed ${value.length} rows`);
const data = value.map(v => {
	const [timeStamp, ...sensorReading] = v.split(',');
	const dataPoint = {time: new Date(timeStamp), sensor: {}};
	sensorReading.forEach((v, i) => dataPoint.sensor[hwPaths[i]] = +v);
	return dataPoint;
});

const pathTree = {children: {}};
hwPaths.forEach((pathStr, i) => {
	const path = pathStr.split('/').filter(v => v.length > 0).slice(0, -1); //last Id is unique and not needed
	let current = pathTree.children;
	path.forEach(p => {
			if(!current[p]){
				current[p] = {children: {}};;
			}
			current = current[p].children; // drill in
	});
	current[sensors[i]] = {selected: false, path: hwPaths[i]};
})

// const data = value.map(v => {
// 	const [timeStamp, ...sensorReading] = v.split(',');
// 	const dataPoint = {time: new Date(timeStamp), sensor: {}};

// 	sensorReading.forEach((v,i) => {
// 		const path = hwPaths[i].split('/').filter(v => !!v);
// 		let current = dataPoint.sensor;
// 		path.forEach(p => {
// 			if(!current[p]){
// 				current[p] = {};
// 			}
// 			current = current[p]; // drill in
// 		});
// 		current[sensors[i]] = +v
// 	})
// 	// sensorReading.forEach((v,i) => dataPoint[sensors[i]] = +v)
// 	return dataPoint;
// });

console.timeEnd(`processed ${value.length} rows`);

console.time('write');
writeFileSync('out.json', JSON.stringify({data, pathTree}, undefined, 2));
console.timeEnd('write');