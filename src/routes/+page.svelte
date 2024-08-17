<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="flex w-full h-full items-center justify-center">
	<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
		<h1 class="text-4xl pb-6">Get Started</h1>
		<a href={`${base}/upload`} class="btn-lg btn-primary w-full mt-6">Upload new data</a>
	</div>
</div>
