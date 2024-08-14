<script lang="ts">
	import { subset } from '$lib/data-subset.store';
	import { data } from '$lib/uploaded-data.store';
</script>

{#if $data.subsets.length > 1}
	<div class="flex gap-2 ms-4 pt-1">
		<div class="text-slate-500 uppercase">Data ranges:</div>
		<button
			class="hover:border-orange-500 bg-slate-800 border border-slate-500 text-slate-300 rounded-full px-2"
			class:bg-orange-700={!$subset}
			class:bg-slate-800={$subset}
			on:click={() => subset.set(undefined)}
		>
			Show All
		</button>
		{#each $data.subsets as [d1, d2]}
			<button
				class="hover:border-orange-500 bg-slate-800 border border-slate-500 text-slate-300 rounded-full px-2"
				class:bg-orange-700={$subset?.join('|') === [d1, d2].join('|')}
				class:bg-slate-800={$subset?.join('|') !== [d1, d2].join('|')}
				on:click={() => subset.set([d1, d2])}
			>
				{d1.toLocaleTimeString('en-US', {
					timeStyle: 'short'
				})} - {d2.toLocaleTimeString('en-US', {
					timeStyle: 'short'
				})}
			</button>
		{/each}
	</div>
{/if}

<style lang="css">
</style>
