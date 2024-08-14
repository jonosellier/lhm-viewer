<script lang="ts">
	export const ssr = false;
	import type { DataPoint } from '$lib/data';
	import { preferences, type Preferences } from '$lib/preferences.store';
	import type { LayoutAxis, PlotData } from 'plotly.js';
	import Plot, { type Data, type Layout } from 'svelte-plotly.js';
	import SensorGrid from './sensor-grid.svelte';
	import { LhmData } from '$lib/uploaded-data.store';
	export let data: DataPoint[];
	export let show: string[];
	export let deviceName: Record<string, string>;
	export let deviceColor: Record<string, string>;
	export let subset: [Date, Date] | undefined = undefined;
	// export let labels: Record<string, string>;

	let seenTypes: (typeof LhmData.metricTypes)[number][] = [];

	let chartData: { layout: Partial<Layout>; data: Data[] } = { layout: {}, data: [] };

	const chartTypes = LhmData.metricTypes;

	const chartLayout: Record<
		(typeof LhmData.metricTypes)[number],
		{ unit: string; range?: [number, number] }
	> = {
		control: { unit: '%' },
		voltage: { unit: 'V', range: [0, 15] },
		temperature: { unit: '°C', range: [0, 115] },
		fan: { unit: 'RPM' },
		load: { unit: '%', range: [0, 105] },
		power: { unit: 'W' },
		clock: { unit: 'MHz' },
		factor: { unit: 'Unitless' },
		data: { unit: 'GB' },
		smalldata: { unit: 'KB' },
		level: { unit: 'Varied' },
		throughput: { unit: 'KB/s' }
	};

	$: createPlotData(data, show, $preferences, subset);

	function createLayout(traces: Partial<PlotData>[]) {
		const uniqueTraces = Array.from(new Set(traces.map((v) => v.yaxis))).length;

		const initialLayoutOptions = chartLayout[seenTypes[0]];
		const baseLayout: Partial<Layout> = {
			showlegend: false,
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

	function createPlotData(
		data: DataPoint[],
		show: string[],
		preferences: Preferences,
		selectedRange: [Date, Date] | undefined
	): any {
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
			const chartType = chartTypes.find((v) =>
				s.split('/').includes(v)
			) as (typeof LhmData.metricTypes)[number];
			if (chartType && !seenTypes.includes(chartType)) {
				console.log('Saw', chartType);
				seenTypes.push(chartType);
				console.log(seenTypes);
			}
			console.log('Putting data on ' + 'y' + +(seenTypes.findIndex((v) => v === chartType) + 1));
			return {
				type: 'scatter',
				x: labels,
				y: data
					.filter(
						(v) => !selectedRange || (v.time >= selectedRange[0] && v.time <= selectedRange[1])
					)
					.map((v) => v.sensor[s]),
				yaxis: 'y' + +(seenTypes.findIndex((v) => v === chartType) + 1),
				name: deviceName[s],
				line: {
					color: preferences.sensorColor[s] ?? deviceColor[s]
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
			<SensorGrid></SensorGrid>
		</div>
	{/if}
	<!-- {/each} -->
</div>

<style>
</style>
