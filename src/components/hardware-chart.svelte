<script lang="ts">
	import { MultiChartData, type MetricType } from '$lib/multi-chart';
	import { preferences, type Preferences } from '$lib/preferences.store';
	import { dataStore } from '$lib/uploaded-data.store';
	import { json } from '@sveltejs/kit';
	import type { LayoutAxis, PlotData } from 'plotly.js';
	import Plot, { type Data, type Layout } from 'svelte-plotly.js';
	import { derived } from 'svelte/store';

	let seenTypes: MetricType[] = [];

	const chartLayout: Record<MetricType, { unit: string; range?: [number, number] }> = {
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

	const chartData = derived([dataStore, preferences], ([d, p]) => createPlotData(d, d.show, p));

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
				title: `${seenTypes[0]?.toUpperCase()} (${initialLayoutOptions?.unit})`,
				gridcolor: '#64748b',
				range: initialLayoutOptions?.range
			},
			xaxis: {
				rangeslider: {
					visible: true,
					thickness: 0.1
				}
			}
		};
		for (let i = 2; i <= uniqueTraces; i++) {
			console.log('working on', i);
			const layoutOptions = chartLayout[seenTypes[i - 1]];
			(baseLayout[`yaxis${i}` as keyof typeof baseLayout] as Partial<LayoutAxis>) = {
				domain: [(i - 1) / uniqueTraces, i / uniqueTraces - 0.0125],
				title: `${seenTypes[i - 1]?.toUpperCase()} (${layoutOptions.unit})`,
				gridcolor: '#64748b',
				range: layoutOptions.range
			};
		}

		return baseLayout;
	}

	function createPlotData(data: MultiChartData, shownData: number[], prefs: Preferences) {
		if (shownData.length < 1 || data.charts.length < 1) {
			return { layout: {}, data: [] };
		}
		seenTypes = [];
		const selectedRange = data.subsets[data.selectedSubset];
		const traces: Partial<PlotData>[] = data.charts
			.filter((_, i) => shownData.includes(i))
			.map((c) => {
				const chartType = data.getChartType(c.path);
				if (chartType && !seenTypes.includes(chartType)) {
					console.log('Saw', chartType);
					seenTypes.push(chartType);
					console.log(seenTypes);
				}
				console.log('Putting data on ' + 'y' + +(seenTypes.findIndex((v) => v === chartType) + 1));
				return {
					type: 'scatter',
					x: data.xAxis,
					y: c.values.filter(
						(_v, i) => !selectedRange || (i >= selectedRange[0] && i <= selectedRange[1])
					),
					yaxis: 'y' + +(seenTypes.findIndex((v) => v === chartType) + 1),
					name: c.label,
					line: {
						color: prefs.sensorColor[c.path] ?? c.color
					}
				};
			});

		console.log({ traces });

		return {
			data: traces,
			layout: createLayout(traces)
		};
	}
</script>

<div class="w-full h-full">
	<!-- {#each traceGroups as group, idx} -->
	<!-- <div
			id={chart}
			class="z-30 w-full flex-grow-1 h-full flex-shrink-1 border-slate-500 chart-el"
			class:hidden={traceGroups[idx].length < 1}
		></div> -->
	{#if $chartData.data.length > 0}
		<Plot
			data={$chartData.data}
			layout={$chartData.layout}
			config={{ scrollZoom: true, displayModeBar: false }}
			fillParent={true}
			debounce={250}
		/>
	{:else}
		<div class="flex items-center justify-center h-full">
			<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
				<p class="text-center text-2xl">Select some sensor data to plot in the top-left</p>
			</div>
		</div>
	{/if}
	<!-- {/each} -->
</div>

<!-- <pre>{JSON.stringify(chartData, undefined, 2)}</pre> -->

<style>
</style>
