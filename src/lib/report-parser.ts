export type LhmReport = {
	sensors?: Record<string, string>;
};

export function parseReport(report: string) {
	const sections = report.replace(/\r/g, '').split(/^-+$/gm);

	const sensorSection = sections.find((s) => s.match(/\nSensors\n\n/));

	const reportObj: LhmReport = {};

	if (sensorSection) {
		const sensorTree = sensorSection.replace(/\r?\nSensors(\r?\n)+((.+\n)+)/, '$2');
		const sensorMap = JSON.parse(
			`{${sensorTree
				.replace(
					/((\||(\+-))\s*)+([A-Za-z\s0-9-#/+_()*]+)(\s+:(\s+-?\d+(.\d+(E\+?-?\d\d)?)?)*)?\s\((.+)\)/gm,
					'"$9": "$4"'
				) // vaguely JSON KVP
				.split('\n') // to operate on each line...
				.filter((v) => !!v) // ... that isn't empty
				.map((v) => v.replace(/\s+"$/, '"')) // where we trim the trailing text from the value
				.join(',')}}`
		); // and make it a valid JSON obj body

		reportObj.sensors = sensorMap;
	}

	console.log(reportObj);

	return reportObj;
}
