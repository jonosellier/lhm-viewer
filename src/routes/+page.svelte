<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '$components/icon.svelte';
	import { scrollbar } from '$lib/actions/scrollbar';
	import logo from '$lib/assets/cmr-wider.webp';
</script>

<div class="flex w-full h-full items-center justify-between mx-auto absolute top-0 left-0">
	<div class="flex-grow h-full"></div>
	<div class="h-full main-menu me-96 pt-4 flex-shrink-0">
		<img src={logo} alt="" class="block h-40 mb-20" />
		<div class="ps-20">
			<a
				class="btn-lg btn-default text-start block my-10 max-w-2xl text-slate-500 hover:text-orange-500 duration-100"
				href={`${base}/upload`}
			>
				<div class="py-6 ps-8 flex justify-between items-center">
					<div class="pe-6">
						<h2 class="text-4xl font-bold uppercase text-slate-200 mb-4 tracking-wider">
							Import a new chart
						</h2>
						<p class="text-slate-300">Import data from Libre Hardware Monitor to view online</p>
					</div>
					<div class="me-4"><Icon icon="plus-lg" size={64}></Icon></div>
				</div>
			</a>
			<a
				class="btn-lg btn-default text-start block my-10 max-w-2xl text-slate-500 hover:text-orange-500 duration-100"
				href={`${base}/charts`}
			>
				<div class="py-6 ps-8 flex justify-between items-center">
					<div class="pe-6">
						<h2 class="text-4xl font-bold uppercase text-slate-200 mb-4 tracking-wider">
							View my charts
						</h2>
						<p class="text-slate-300">See previously uploaded chart data</p>
					</div>
					<div class="me-4"><Icon icon="graph-up" size={64}></Icon></div>
				</div>
			</a>
		</div>
	</div>
	<div
		class=" bg-slate-800 max-w-3xl flex-grow h-full border-l border-slate-500 pl-12 pr-5 overflow-auto"
		use:scrollbar
	>
		<div
			class="sticky top-0 h-20 w-full bg-gradient-to-b from-slate-800 via-slate-800 to-transparent"
		></div>
		<h1 class="text-4xl pb-3">Get Started</h1>
		<ol class="list-decimal marker:text-orange-500 text-xl ps-8 w-full">
			<li class="my-5">
				Using Libre Hardware Monitor, select <strong>Options</strong> in the menu bar and make sure
				<strong>Log Sensors</strong> is checked. This will start dumping every sensor reading to a log
				file.
			</li>
			<li class="my-5">
				Use your computer in whatever way you wanted to track the performance of, such as running a
				game or benchmark.
			</li>
			<li class="my-5">
				Optionally, save a Hardware Report by selecting <strong>File</strong> then
				<strong>Save Report</strong>. This will help you rename and group your sensors with the
				actual product name.
			</li>
			<li class="my-5">
				In this app, select <strong>Upload</strong> in the menu bar or click
				<a href={`${base}/upload`} class="btn btn-default text-lg inline-block">Upload new data</a>
			</li>
			<li class="my-5">
				Upload your log file and (optionally) your hardware report. Find the log file (<output
					>*.csv</output
				>) in the Libre Hardware Monitor installation folder (probably
				<output>C:\Program Files\Libre Hardware Monitor</output>). The log file will be named based
				on the date you ran LHM and you will possibly see multiple files. Find your hardware report
				(<output>LibreHardwareMonitor.Report.txt</output>) in your Documents folder (<output
					>C:\Users\yourname\Documents</output
				>)
			</li>
			<li class="my-5">
				Select what sensors you want to view in the chart. Sensors that show the same units (like
				temperature) will be put on the same chart and sensors from the same device will have a
				similar color but different brightness. If you had multiple LHM sessions that day, the app
				will automatically suggest subsets of data to display.
			</li>
			<li class="my-5">
				If you want to share this chart, you need to create an account first. When sharing the
				chart, it will only share the sensors you had selected and the subset of data you selected.
				Once the chart has been uploaded and shared, just send the link to anyone.
			</li>
		</ol>
	</div>

	<div class="flex-grow h-full bg-slate-800"></div>
</div>

<style>
	.main-menu {
		width: 100%;
		max-width: calc(1920px - 44rem);
		margin-left: -4rem;
	}
</style>
