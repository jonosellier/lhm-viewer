<script lang="ts">
	import { dataStore } from '$lib/uploaded-data.store';
	import HardwareChart from '$components/hardware-chart.svelte';
	import SensorSelector from '$components/sensor-selector.svelte';
	import DataSelector from '$components/data-selector.svelte';
	import { saveGraph, userStore } from '$lib/db';
	import SaveDialog from '$components/save-dialog.svelte';
	import { derived } from 'svelte/store';
	let saveOpen = false;

	const subset = derived(dataStore, (d) => d?.subsets[d.selectedSubset]);
</script>

{#if $dataStore}
	<div class="fixed top-0 left-0 w-full flex h-9 m-2 items-start z-40">
		<SensorSelector></SensorSelector>

		{#if $dataStore.subsets.length > 1}
			<div class="text-slate-500 uppercase pt-1 px-3">Data ranges:</div>
		{/if}

		<DataSelector></DataSelector>
		{#if $userStore}
			<button class="btn btn-primary ms-5" on:click={() => (saveOpen = true)}>Share Chart</button>
		{/if}
	</div>
	<HardwareChart></HardwareChart>
{:else}
	<slot></slot>
{/if}
{#if saveOpen}
	<div class="fixed top-0 z-50 w-full h-full backdrop-blur-lg" on:click={() => (saveOpen = false)}>
		<div
			on:click|stopPropagation={() => (saveOpen = true)}
			class="max-w-lg p-5 mx-auto mt-12 bg-slate-800 border border-slate-500 rounded-lg"
		>
			<SaveDialog></SaveDialog>
		</div>
	</div>
{/if}
