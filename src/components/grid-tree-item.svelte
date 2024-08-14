<script lang="ts">
	import type { TreeItem } from '$lib/data';
	import { preferences } from '$lib/preferences.store';
	import { selectedItems } from '$lib/selected-metrics.store';
	export let label = '';
	export let data: TreeItem;
	export let alwaysShow = false;

	function handleChange(e: Event, data: TreeItem) {
		const set = $selectedItems;
		if (set.has(data.path as string)) {
			set.delete(data.path as string);
		} else {
			set.add(data.path as string);
		}
		selectedItems.set(set);
	}

	function setColor(path: string, value: string): any {
		preferences.update((p) => {
			p.sensorColor[path] = value;
			return p;
		});
	}
</script>

<div class="item-holder w-full">
	{#if data.children}
		<div class="px-2 bg-slate-700 border-b border-l border-slate-500 w-full text-start heading">
			<slot><h3 class="font-bold">{label.toUpperCase()}</h3></slot>
		</div>
		<ul class="border-b border-l border-slate-500">
			{#each Object.keys(data.children) as el}
				<li>
					<svelte:self label={el} data={data.children[el]}>{el}</svelte:self>
				</li>
			{/each}
		</ul>
	{:else}
		<label
			for={data.path?.replace(/\//g, '_')}
			class="flex align-top hover:text-slate-900 hover:bg-slate-300 px-2 rounded border border-transparent hover:border-slate-300"
			style={$preferences.sensorColor[data.path]
				? `--hover-color: ${$preferences.sensorColor[data.path]}40; --text: ${$preferences.sensorColor[data.path]}`
				: ''}
			><input
				type="checkbox"
				checked={$selectedItems.has(data.path)}
				on:click={(e) => handleChange(e, data)}
				id={data.path?.replace(/\//g, '_')}
			/>
			<span class="flex-shrink-1 w-full ps-3">{label}</span>
			{#if $selectedItems.has(data.path)}
				<input
					type="color"
					on:change={(e) => setColor(data.path, e.currentTarget.value)}
					class="w-4 h-4 m-1 rounded-sm"
					value={$preferences.sensorColor[data.path]}
					style:background-color={$preferences.sensorColor[data.path]}
				/>
			{/if}
		</label>
	{/if}
</div>

<style>
	.item-holder {
		position: relative;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding-left: 0;
	}
	li:nth-child(even) {
		background-color: #00000020;
	}

	.item-holder:hover > button:not(:hover) {
		background-color: rgb(203 213 225);
		color: rgb(15 23 42);
	}

	label:has(input:checked):hover {
		background-color: var(--hover-color);
		border-color: var(--text);
	}

	label:has(input:checked) {
		--hover-color: #cbd5e140;
		--text: #cbd5e1;
		color: var(--text);
	}
</style>
