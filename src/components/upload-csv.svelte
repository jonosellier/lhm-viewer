<script lang="ts">
	import { goto } from '$app/navigation';
	import { MultiChartData } from '$lib/multi-chart';
	import { preferences } from '$lib/preferences.store';
	import { parseReport } from '$lib/report-parser';
	import { dataStore } from '$lib/uploaded-data.store';
	import { base } from '$app/paths';
	import { userStore } from '$lib/db';
	import { notify } from '$lib/notification.service';

	let csvInputEl!: HTMLInputElement;
	let reportInputEl!: HTMLInputElement;
	let waiting = false;
	async function loadCsv() {
		try {
			if (!csvInputEl.files?.[0]) {
				notify.error('Please upload a log file');
				return;
			}
			waiting = true;
			const csvFile = csvInputEl.files[0];
			const csvContents = await csvFile.text();
			let reportContents = '';
			if (reportInputEl.files?.length) {
				const reportFile = reportInputEl.files[0];
				reportContents = await reportFile.text();
			} else if (Object.keys($preferences.sensorName).length < 1) {
				notify.info(
					'Sensor names might look a little weird unless you have uploaded a report at least once'
				);
			}
			waiting = false;
			if (reportContents) {
				console.log({ c: reportContents });
				const report = parseReport(reportContents);
				preferences.update((p) => {
					p.sensorName = { ...p.sensorName, ...report.sensors };
					console.log({ p });
					return p;
				});
			}
			dataStore.set(new MultiChartData(csvContents, csvFile.name, $userStore?.id));
			notify.info('Upload success');
			goto(base + '/new');
		} catch (e: any) {
			waiting = false;
			notify.error(e);
		}
	}
</script>

<p class="text-center text-2xl">
	Upload a Logging CSV file and optionally a Hardware Report from Libre Hardware Monitor to begin
</p>
<p>Uploading a hardware report will better group the sensor data with more user-friendly names</p>
<p class="text-slate-500 mt-6 ps-2">Log File</p>
<input type="file" accept=".csv" class="form-control mb-6" bind:this={csvInputEl} />
<p class="text-slate-500 ps-2">Hardware Report</p>
<input type="file" accept=".txt" class="form-control" bind:this={reportInputEl} />
<button
	class="btn-primary btn-lg mt-5 w-full"
	disabled={waiting || !csvInputEl?.files}
	on:click={() => loadCsv()}>{waiting ? 'Uploading' : 'Load in to Chart'}</button
>
