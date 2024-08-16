<script lang="ts">
	import { dataStore } from '$lib/uploaded-data.store';
	import { derived } from 'svelte/store';

	const subset = derived(dataStore, (d) => d?.subsets[d.selectedSubset]);

	function set(v: number) {
		dataStore.update((d) => {
			if (d) {
				d.selectedSubset = v;
			}
			return d;
		});
	}
</script>

{#if $dataStore.subsets.length > 1}
	<div class="flex gap-2 pt-1 flex-wrap">
		<button
			class="hover:border-orange-500 bg-slate-800 border border-slate-500 text-slate-300 rounded-full px-2"
			class:bg-orange-700={!$subset}
			class:bg-slate-800={$subset}
			on:click={() => set(-1)}
		>
			Show All
		</button>
		{#each $dataStore?.subsets ?? [] as [d1, d2], i}
			<button
				class="hover:border-orange-500 bg-slate-800 border border-slate-500 text-slate-300 rounded-full px-2"
				class:bg-orange-700={$subset?.join('|') === [d1, d2].join('|')}
				class:bg-slate-800={$subset?.join('|') !== [d1, d2].join('|')}
				on:click={() => set(i)}
			>
				{$dataStore.xAxis[d1].toLocaleTimeString('en-US', {
					timeStyle: 'short'
				})} - {$dataStore.xAxis[d2].toLocaleTimeString('en-US', {
					timeStyle: 'short'
				})}
			</button>
		{/each}
	</div>
{/if}

<style lang="css">
</style>
