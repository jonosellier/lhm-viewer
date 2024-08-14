<script lang="ts">
	import type { TreeItem } from '$lib/data';
	import { preferences } from '$lib/preferences.store';
	import { selectedItems } from '$lib/selected-metrics.store';
	export let label = '';
	export let data: TreeItem;
	export let level = 0;
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

	let show = !![...$selectedItems].find((v) => v.includes(data.path));
	$: activatedChildren = [...$selectedItems].filter((v) => v.includes(data.path)).length;
	function toggle(e: Event) {
		show = !show;
	}
</script>

<div class="item-holder w-full">
	{#if data.children}
		<div
			class="px-2 bg-slate-700 border-b border-l border-slate-500 w-full text-start flex items-center heading"
			style={'top: ' + level * 32 + 'px; z-index: ' + (999 - level)}
		>
			<button
				class="hover:bg-slate-500 h-4 w-4 m-1 p-0 rounded-full text-orange-50 text-xs duration-150"
				on:click={toggle}
				class:rotate-180={!show}
				class:bg-orange-600={show}>▼</button
			>
			<div class="inline-flex flex-grow-1 w-full justify-between">
				<div class="ms-2 capitalize"><slot></slot></div>
				{#if alwaysShow || activatedChildren > 0}
					<span
						class="bg-slate-500 text-slate-200 rounded-full inline-block min-w-5 px-1 h-5 m-1 text-sm text-center"
					>
						{activatedChildren}
					</span>
				{/if}
			</div>
		</div>
		{#if show}
			<ul class="border-b border-l border-slate-500">
				{#each Object.keys(data.children) as el}
					<li>
						<svelte:self label={el} data={data.children[el]} level={level + 1}>{el}</svelte:self>
					</li>
				{/each}
			</ul>
		{/if}
	{:else}
		<label
			for={data.path?.replace(/\//g, '_')}
			class="flex align-top hover:text-slate-900 hover:bg-slate-300 px-2 rounded border border-transparent hover:border-slate-300"
			style={$preferences.sensorColor[data.path]
				? `--hover-color: ${$preferences.sensorColor[data.path]}40; --text: ${$preferences.sensorColor[data.path]}`
				: `--hover-color: ${data.color}40; --text: ${data.color}`}
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
					value={$preferences.sensorColor[data.path] ?? data.color}
					style:background-color={$preferences.sensorColor[data.path] ?? data.color}
				/>
			{/if}
		</label>
	{/if}
</div>

<style>
	.item-holder {
		position: relative;
	}
	.heading {
		margin: 0;
		position: sticky;
		height: 32px;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding-left: 0;
	}
	li:nth-child(even) {
		background-color: #00000020;
	}

	li {
		padding-left: 8px;
	}

	.item-holder:hover > button:not(:hover) {
		background-color: rgb(203 213 225);
		color: rgb(15 23 42);
	}

	label:has(input:checked):hover {
		background-color: var(--hover-color);
		border-color: var(--text);
		color: var(--text);
	}

	label:hover {
		background-color: #cbd5e140;
		color: #cbd5e1;
	}
</style>
