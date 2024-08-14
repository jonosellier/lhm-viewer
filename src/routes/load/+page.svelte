<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { load } from '$lib/file-manager';
	import { data } from '$lib/uploaded-data.store';

	const savedData = browser ? (localStorage.getItem('savedData')?.split('|') ?? []) : [];

	async function loadFile(name: string) {
		console.log('loading...');
		const newData = await load(name);
		console.log('done');
		console.log({ newData });
		if (newData.valid) {
			data.set(newData);
			goto('/');
		}
	}
</script>

<ul>
	{#each savedData as f}
		<li>{f} <button on:click={() => loadFile(f)}>Load</button></li>
	{/each}
</ul>

<style lang="css">
</style>
