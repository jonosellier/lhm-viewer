<!-- <script lang="ts">
	import type { SensorTree, TreeItem } from '$lib/data';
	import { keyValue } from '$lib/util';
	import GridTreeItem from './grid-tree-item.svelte';
</script>

<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
	<p class="text-center text-2xl">Select some sensor data to plot</p>
	<div class="grid grid-cols-10 gap-3">
		{#each keyValue(sensorTree) as [k, hardwareItem]}
			<div class="border border-slate-500 bg-slate-700 rounded-lg overflow-hidden">
				<h1 class="text-xl p-2">{k}</h1>
				{#if hardwareItem.children}
					<div class="h-96 overflow-auto">
						{#each keyValue(hardwareItem.children) as [type, child]}
							<GridTreeItem label={type.toString()} item={child}></GridTreeItem>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div> -->
