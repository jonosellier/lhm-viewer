<script lang="ts">
	import { page } from '$app/stores';
	import { loadGraph } from '$lib/db';
	import { onMount } from 'svelte';
	import ChartView from '$components/chart-view.svelte';

	const id = $page.params['id'];
	onMount(() => {
		if (id) {
			loadGraph(id);
		}
	});
</script>

<ChartView>
	<div class="flex items-center justify-center h-full">
		<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
			<div class="text-3xl mb-8">loading...</div>
		</div>
	</div>
</ChartView>
