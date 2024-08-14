<script lang="ts">
	import { selectedItems } from '$lib/selected-metrics.store';
	import { data } from '$lib/uploaded-data.store';
	import HardwareChart from '$components/hardware-chart.svelte';
	import SensorSelector from '$components/sensor-selector.svelte';
	import UploadCsv from '$components/upload-csv.svelte';
	import DataSelector from '$components/data-selector.svelte';
	import { subset } from '$lib/data-subset.store';
</script>

{#if $data.valid}
	<div class="fixed top-0 left-0 w-full flex h-9 m-2 items-start z-50">
		<SensorSelector></SensorSelector>
		<DataSelector></DataSelector>
	</div>
	<HardwareChart
		data={$data.data}
		show={Array.from($selectedItems)}
		deviceName={$data.deviceName}
		subset={$subset}
	></HardwareChart>
{:else}
	<div class="flex items-center justify-center h-full">
		<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
			<UploadCsv></UploadCsv>
		</div>
	</div>
{/if}
