<script>
	import { selectedItems } from '$lib/selected-metrics.store';
	import { data } from '$lib/uploaded-data.store';
	import { derived } from 'svelte/store';
	import TreeItem from './tree-item.svelte';
	let isOpen = true;

	const selectedCount = derived(selectedItems, (s) => [...s].length);
</script>

<div class="border border-slate-500 rounded-sm overflow-auto bg-slate-800 flex-shrink-0 w-96 h-max">
	<TreeItem label={'Sensors'} data={{ children: $data.pathTree, path: '' }} alwaysShow={true}
		>Sensors</TreeItem
	>
</div>

<style>
	div {
		max-height: calc(100dvh - 16px);
	}
</style>
