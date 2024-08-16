<script lang="ts">
	import { dataStore } from '$lib/uploaded-data.store';
	import { derived } from 'svelte/store';
	import DataSelector from './data-selector.svelte';
	import SensorSelector from './sensor-selector.svelte';
	import { saveGraph } from '$lib/db';
	import { goto } from '$app/navigation';
	const selectedRange = derived(
		dataStore,
		(d) => d?.subsets[d.selectedSubset] ?? ([0, 0] as [number, number])
	);
</script>

<h2 class="text-sm text-slate-400 ps-2">Name</h2>
<input
	type="text"
	class="form-control text-lg"
	value={$dataStore?.name ?? ''}
	on:change={(e) =>
		dataStore.update((d) => {
			d.name = e.currentTarget.value;
			return d;
		})}
/>
<h2 class="text-sm text-slate-400 ps-2 pt-3">
	Select sensors to export (leave empty to export all)
</h2>
<div class="flex">
	<div class="h-8 z-50">
		<SensorSelector startOpen={false} maxHeight="512px" />
	</div>

	<button
		class="btn btn-default ms-3 flex-grow"
		on:click={() => {
			if ($dataStore) {
				$dataStore.show = [];
			}
		}}>All</button
	>
</div>

<div class="z-30">
	<h2 class="text-sm text-slate-400 ps-2 pt-3">Select timeframe to export</h2>
	<DataSelector></DataSelector>
</div>

<hr class="border-slate-500 my-5" />
This will share
<strong
	>{$selectedRange[1] > 0 ? $selectedRange[1] - $selectedRange[0] : $dataStore.xAxis.length}</strong
>
readings from
<strong>{$dataStore.show.length ?? 0}</strong>
sensors to the public. Anyone who has the link can see it.
<hr class="border-slate-500 my-5" />
<button class="btn btn-primary" on:click={async () => goto('/' + (await saveGraph()))}>
	Share to The World
</button>

<style lang="css">
</style>
