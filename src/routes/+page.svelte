<script lang="ts">
	import { selectedItems } from '$lib/selected-metrics.store';
	import { data } from '$lib/uploaded-data.store';
	import HardwareChart from '../components/hardware-chart.svelte';
	import SensorSelector from '../components/sensor-selector.svelte';
	import TreeItem from '../components/tree-item.svelte';
	import UploadCsv from '../components/upload-csv.svelte';
</script>

<div class="w-full h-screen bg-slate-900 text-slate-300">
	{#if $data.valid}
		<SensorSelector></SensorSelector>
		<HardwareChart data={$data.data} show={Array.from($selectedItems)} deviceName={$data.deviceName}
		></HardwareChart>
	{:else}
		<UploadCsv></UploadCsv>
	{/if}
</div>

<style>
	table {
		border-collapse: collapse;
		vertical-align: top;
	}

	tr:nth-child(even) {
		background-color: #0000000f;
	}

	th,
	td {
		padding-left: 8px;
		text-align: center; /* Centers the text horizontally */
		vertical-align: top; /* Centers the text vertically */
		text-align: left;
	}

	th {
		background-color: #f2f2f2;
	}
</style>
