<script>
	import { data } from '$lib/uploaded-data.store';
	import TreeItem from './tree-item.svelte';
	let isOpen = true;
</script>

<div class="fixed top-0 start-0 w-92 h-screen z-50 p-3 flex flex-col">
	<div class="border border-slate-500 rounded-sm overflow-auto bg-slate-800 w-full flex-grow-1">
		<TreeItem label={'Sensors'} data={$data.pathTree} />
	</div>
</div>
