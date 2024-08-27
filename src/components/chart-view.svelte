<script lang="ts">
	import { dataStore } from '$lib/uploaded-data.store';
	import HardwareChart from '$components/hardware-chart.svelte';
	import SensorSelector from '$components/sensor-selector.svelte';
	import DataSelector from '$components/data-selector.svelte';
	import { userStore } from '$lib/db';
	import SaveDialog from '$components/save-dialog.svelte';
	import Modal from './modal.svelte';
	import { page } from '$app/stores';
	let saveOpen = false;

	const existingId = $page.params['id'];
</script>

{#if $dataStore}
	<div class="fixed top-0 left-0 w-full flex h-9 m-2 items-start z-40">
		<SensorSelector></SensorSelector>

		{#if $dataStore.subsets.length > 1}
			<div class="text-slate-500 uppercase pt-1 px-3">Data ranges:</div>
		{/if}

		<DataSelector></DataSelector>
		{#if $userStore}
			{#if $userStore?.id === $dataStore.owner || !$dataStore.owner}
				<button class="btn btn-primary ms-5" on:click={() => (saveOpen = true)}
					>{existingId ? 'Save Changes' : 'Share Chart'}</button
				>
			{/if}
		{:else}
			<span class="uppercase text-xs text-slate-500 font-bold mx-4 my-2"
				>Sign in to save charts</span
			>
		{/if}
	</div>
	<HardwareChart></HardwareChart>
{:else}
	<slot></slot>
{/if}
<Modal bind:open={saveOpen} title="Save Chart">
	<SaveDialog
		on:closed={() => {
			console.log('closed');
			saveOpen = false;
		}}
	></SaveDialog>
</Modal>
