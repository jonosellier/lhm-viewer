<script lang="ts">
	import UploadCsv from '$components/upload-csv.svelte';
	import { dataStore } from '$lib/uploaded-data.store';
	dataStore.set(undefined);
</script>

<div class="flex items-center justify-center h-full">
	<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
		<UploadCsv></UploadCsv>
	</div>
</div>
