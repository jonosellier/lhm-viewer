<script lang="ts">
	import { dataStore } from '$lib/uploaded-data.store';
	import { derived } from 'svelte/store';
	import TreeItem from './tree-item.svelte';
	import type { SensorTree } from '$lib/multi-chart';
	import Modal from './modal.svelte';
	import SensorEditor from './sensor-editor.svelte';
	import { scrollbar } from '$lib/actions/scrollbar';
	export let startOpen = true;
	export let maxHeight = 'calc(100dvh - 16px)';
	const pathTree = derived(dataStore, (d) => {
		const tree: SensorTree = {};
		(d?.charts ?? []).forEach((v) => {
			const [device, sensorType, sensor] = v.path.split('/');
			if (!tree[device]) {
				tree[device] = { path: device, children: {} };
			}
			if (!tree[device].children[sensorType]) {
				tree[device].children[sensorType] = { path: `${device}/${sensorType}`, children: {} };
			}
			if (!tree[device].children[sensorType].children[v.label]) {
				tree[device].children[sensorType].children[v.label] = {
					path: `${device}/${sensorType}/${sensor}`,
					selected: false,
					color: v.color
				};
			}
		});
		return tree;
	});

	let menuOpen = false;
	let editOpen = false;
</script>

<div class="border border-slate-500 rounded overflow-hidden">
	<div
		class=" overflow-auto bg-slate-800 flex-shrink-0 w-96"
		style:max-height={maxHeight}
		use:scrollbar
	>
		<div>
			<TreeItem
				label={'Sensors'}
				item={{ children: $pathTree, path: '' }}
				alwaysShow={true}
				{startOpen}
				bind:open={menuOpen}>Sensors</TreeItem
			>
			{#if menuOpen}
				<button class="btn-sm btn-default m-1 w-max" on:click={() => (editOpen = true)}
					>Edit sensors</button
				>
			{/if}
		</div>
	</div>
</div>
<Modal bind:open={editOpen} title="Edit Sensors"
	><SensorEditor
		on:closed={() => {
			editOpen = false;
		}}
	/></Modal
>
