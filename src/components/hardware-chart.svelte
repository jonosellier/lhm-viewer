<script lang="ts">
	export const ssr = false;
	import type { DataPoint } from '$lib/data';
	import { preferences, type Preferences } from '$lib/preferences.store';
	import type { LayoutAxis, PlotData } from 'plotly.js';
	import Plot, { type Data, type Layout } from 'svelte-plotly.js';
	export let data: DataPoint[];
	export let show: string[];
	export let deviceName: Record<string, string>;
	// export let labels: Record<string, string>;

	let seenTypes: string[] = [];

	let chartData: { layout: Partial<Layout>; data: Data[] } = { layout: {}, data: [] };

	const chartTypes = [
		'control',
		'voltage',
		'temperature',
		'fan',
		'load',
		'power',
		'clock',
		'factor',
		'data',
		'smalldata',
		'level',
		'throughput'
	];

	const chartLayout: Record<string, { unit: string; range?: [number, number] }> = {
		control: { unit: 'Unknown' },
		voltage: { unit: 'V', range: [0, 15] },
		temperature: { unit: 'deg C', range: [0, 100] },
		fan: { unit: 'RPM' },
		load: { unit: '%', range: [0, 100] },
		power: { unit: 'W' },
		clock: { unit: 'MHz' },
		factor: { unit: 'Unitless' },
		data: { unit: 'MB' },
		smalldata: { unit: 'KB' },
		level: { unit: 'Unitless' },
		throughput: { unit: 'KB/s' }
	};

	$: createPlotData(data, show, $preferences);

	function createLayout(traces: Partial<PlotData>[]) {
		const uniqueTraces = Array.from(new Set(traces.map((v) => v.yaxis))).length;

		const initialLayoutOptions = chartLayout[seenTypes[0]];
		const baseLayout: Partial<Layout> = {
			showlegend: true,
			paper_bgcolor: '#0f172a',
			plot_bgcolor: '#020617',
			font: { color: '#cbd5e1' },
			dragmode: 'pan' as any,
			yaxis: {
				domain: [0, 1 / uniqueTraces - 0.0125],
				title: `${seenTypes[0].toUpperCase()} (${initialLayoutOptions.unit})`,
				gridcolor: '#64748b',
				range: initialLayoutOptions.range
			},
			xaxis: {
				rangeslider: {
					visible: true,
					thickness: 0.1
				}
			}
		};
		for (let i = 2; i <= uniqueTraces; i++) {
			const layoutOptions = chartLayout[seenTypes[i - 1]];
			(baseLayout[`yaxis${i}` as keyof typeof baseLayout] as Partial<LayoutAxis>) = {
				domain: [(i - 1) / uniqueTraces, i / uniqueTraces - 0.0125],
				title: `${seenTypes[i - 1].toUpperCase()} (${layoutOptions.unit})`,
				gridcolor: '#64748b',
				range: layoutOptions.range
			};
		}

		return baseLayout;
	}

	function createPlotData(data: DataPoint[], show: string[], preferences: Preferences): any {
		if (show.length < 1) {
			chartData = {
				data: [],
				layout: {}
			};
			return;
		}
		const labels = data.map((v) => new Date(v.time));
		seenTypes = [];
		const traces: Partial<PlotData>[] = show.map((s) => {
			const chartType = chartTypes.find((v) => s.split('/').includes(v)) as string;
			if (chartType && !seenTypes.includes(chartType)) {
				console.log('Saw', chartType);
				seenTypes.push(chartType);
				console.log(seenTypes);
			}
			console.log('Putting data on ' + 'y' + +(seenTypes.findIndex((v) => v === chartType) + 1));
			return {
				type: 'scatter',
				x: labels,
				y: data.map((v) => v.sensor[s]),
				yaxis: 'y' + +(seenTypes.findIndex((v) => v === chartType) + 1),
				name: deviceName[s],
				line: {
					color: preferences.sensorColor[s] + '80'
				}
			};
		});

		chartData = {
			data: traces,
			layout: createLayout(traces)
		};
	}
</script>

<div class="w-full h-screen">
	<!-- {#each traceGroups as group, idx} -->
	<!-- <div
			id={chart}
			class="z-30 w-full flex-grow-1 h-full flex-shrink-1 border-slate-500 chart-el"
			class:hidden={traceGroups[idx].length < 1}
		></div> -->
	{#if chartData.data.length > 0}
		<Plot
			data={chartData.data}
			layout={chartData.layout}
			config={{ scrollZoom: true, displayModeBar: false }}
			fillParent={true}
			debounce={250}
		/>
	{:else}
		<div class="flex items-center justify-center h-full">
			<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
				<p class="text-center text-2xl">Select some sensor data to plot</p>
			</div>
		</div>
	{/if}
	<!-- {/each} -->
</div>

<style>
</style>
