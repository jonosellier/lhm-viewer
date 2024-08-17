<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { getMyCharts, userStore } from '$lib/db';
	import { onMount } from 'svelte';
	const myCharts = getMyCharts();
	onMount(() => {
		if (!$userStore) {
			goto(base + '/');
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
								<a class="btn btn-default" href={`${base}/${el.id}`}>Open</a>
								<button class="btn btn-default">Delete</button>
							</td>
						</tr>
					{:else}
						<tr><td class="px-6 py-4" colspan="3">No charts</td></tr>
					{/each}
					<tr
						><td class="px-6 py-4" colspan="3"
							><a href={`${base}/upload`} class="btn btn-default">Upload new chart</a></td
						></tr
					>
				{/await}
			</tbody>
		</table>
	</div>
</div>

<style>
</style>
