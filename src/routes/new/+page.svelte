<script lang="ts">
	import ChartView from '$components/chart-view.svelte';
	import { base } from '$app/paths';
</script>

<ChartView>
	<div class="flex items-center justify-center h-full">
		<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
			<div class="text-3xl mb-8">Invalid chart</div>
			<a href={`${base}/upload`} class="btn btn-lg btn-primary">Upload new Data</a>
		</div>
	</div>
</ChartView>
