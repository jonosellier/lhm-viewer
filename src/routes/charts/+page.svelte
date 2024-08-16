<script lang="ts">
	import { goto } from '$app/navigation';
	import { getMyCharts, userStore } from '$lib/db';
	import { onMount } from 'svelte';
	const myCharts = getMyCharts();
	onMount(() => {
		if (!$userStore) {
			goto('/');
		}
	});
</script>

<div class="py-6 w-full">
	<div class="mx-auto relative overflow-x-auto border border-slate-500 rounded-lg w-max">
		<table class="text-sm text-left">
			<thead class="text-xs text-slate-300 uppercase bg-slate-700">
				<tr class="border border-slate-500">
					<th scope="col" class="px-6 py-3"> Name </th>
					<th scope="col" class="px-6 py-3"> Created At </th>
					<th scope="col" class="px-6 py-3"></th>
				</tr>
			</thead>
			<tbody>
				{#await myCharts}
					<tr><td class="px-6 py-4" colspan="3">Loading...</td></tr>
				{:then chart}
					{#each chart as el}
						<tr class="border border-slate-500">
							<td class="px-6 py-4">{el.display_name}</td>
							<td class="px-6 py-4"
								>{new Date(el.created_at)
									.toLocaleString('en-US', {
										dateStyle: 'short',
										timeStyle: 'short'
									})
									.replace(', ', ' at ')}</td
							>
							<td class="px-6 py-4">
								<a class="bg-slate-600 rounded px-2" href={`/${el.id}`}>Open</a>
								<button class="bg-slate-600 rounded px-2">Delete</button>
							</td>
						</tr>
					{/each}
				{/await}
			</tbody>
		</table>
	</div>
</div>

<style>
</style>
