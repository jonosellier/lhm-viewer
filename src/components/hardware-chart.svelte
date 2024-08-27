<script lang="ts">
	import { hexToHsl } from '$lib/color-tools';
	import { userStore } from '$lib/db';
	import { MultiChartData, type MetricType } from '$lib/multi-chart';
	import { preferences, type Preferences } from '$lib/preferences.store';
	import { dataStore } from '$lib/uploaded-data.store';
	import autoAnimate from '@formkit/auto-animate';
	import { json } from '@sveltejs/kit';
	import type { LayoutAxis, PlotData } from 'plotly.js';
	import Plot, { type Data, type Layout } from 'svelte-plotly.js';
	import { derived } from 'svelte/store';

	let seenTypes: MetricType[] = [];

	const readOnly = derived(
		[userStore, dataStore],
		([u, d]) => !u || (u.id !== d.owner && !!d.owner)
	);

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
	const legendData = derived([dataStore, preferences], ([d, p]) => {
		const shownCharts = d.show.map((v) => d.charts[v]);
		const uniqueDevices = [...new Set(shownCharts.map((v) => v.path.split('/')[0]))];
		return uniqueDevices.map((v) => {
			const colors = shownCharts
				.filter((c) => c.path.includes(v))
				.map((v) => p.sensorColor[v.path] ?? v.color)
				.sort((a, b) => hexToHsl(a).l - hexToHsl(b).l);
			const label = v;
			return { colors, label };
		});
	});

	function createLayout(traces: Partial<PlotData>[]) {
		const uniqueTraces = Array.from(new Set(traces.map((v) => v.yaxis))).length;

		const initialLayoutOptions = chartLayout[seenTypes[0]];
		const baseLayout: Partial<Layout> = {
			showlegend: false,
			paper_bgcolor: '#0f172a',
			plot_bgcolor: '#020617',
			font: { color: '#cbd5e1' },
			dragmode: 'pan' as any,
			hovermode: 'x',
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

<div class="w-full h-full overflow-x-hidden relative">
	<div class="absolute mt-5 text-3xl text-slate-300 z-30 ms-20 font-bold max-w-2xl">
		<input
			class="bg-slate-900 hover:bg-slate-800 focus:bg-slate-800 border border-slate-900 focus:border-slate-500 leading-relaxed px-1 rounded-lg min-w-md"
			style:width={`${Math.max(8, $dataStore.name.length) + 2}ch`}
			type="text"
			bind:value={$dataStore.name}
			readonly={$readOnly}
			placeholder="Chart title"
		/>
	</div>
	<div
		class="absolute bg-slate-950 rounded border border-slate-500 w-max h-min max-h-20 z-30 me-2 mt-5 grid grid-rows-3 gap-x-2 grid-flow-col end-0"
		style={`grid-template-rows: repeat(${Math.min($legendData.length, 3)}, minmax(0, 1fr));`}
		use:autoAnimate
	>
		{#each $legendData as el}
			<div class="flex justify-between items-center px-2">
				<div class="text-xs">{el.label}</div>
				<div class="inline-bloc ms-3">
					{#each el.colors as c}
						<div class="h-3 w-3 inline-block rounded-sm ms-1" style:background-color={c}></div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="ml-0 h-full" style:margin-right="-78px">
		{#if $chartData.data.length > 0}
			<Plot
				data={$chartData.data}
				layout={$chartData.layout}
				config={{
					scrollZoom: true,
					displayModeBar: false
				}}
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
	</div>
</div>

<!-- <pre>{JSON.stringify(chartData, undefined, 2)}</pre> -->

<style>
</style>
