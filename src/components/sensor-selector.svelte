<script>
	import { selectedItems } from '$lib/selected-metrics.store';
	import { data } from '$lib/uploaded-data.store';
	import { derived } from 'svelte/store';
	import TreeItem from './tree-item.svelte';
	let isOpen = true;

	const selectedCount = derived(selectedItems, (s) => [...s].length);
</script>

<div class="fixed top-0 start-0 w-92 h-screen z-50 p-3 flex flex-col">
	<div class="border border-slate-500 rounded-sm overflow-auto bg-slate-800 w-full flex-grow-1">
		<TreeItem label={'Sensors'} data={$data.pathTree}
			>Sensors <span
				class="bg-slate-500 text-slate-200 rounded-full inline-block min-w-5 px-1 h-5 m-1 text-sm text-center"
				>{$selectedCount}</span
			></TreeItem
		>
	</div>
</div>
