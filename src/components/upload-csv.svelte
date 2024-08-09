<script lang="ts">
	import { data, LhmData } from '$lib/uploaded-data.store';

	let inputEl!: HTMLInputElement;
	let waiting = false;
	async function loadCsv() {
		if (!inputEl.files) {
			return;
		}
		waiting = true;
		const uploadedFile = inputEl.files[0];
		const contents = await uploadedFile.text();
		waiting = false;
		data.set(new LhmData(contents));
	}
</script>

<div class="flex items-center justify-center h-full">
	<div class="p-8 rounded-xl border border-slate-500 bg-slate-800">
		<p class="text-center text-2xl">Upload a CSV file from Libre Hardware Monitor to begin</p>
		<input
			type="file"
			accept=".csv"
			class="bg-slate-700 rounded-lg border border-slate-500 w-full p-5 mt-6"
			bind:this={inputEl}
		/>
		<button
			class="bg-orange-700 text-white px-3 py-2 rounded-lg mt-5 w-full"
			disabled={waiting}
			on:click={() => loadCsv()}>{waiting ? 'Uploading' : 'Load in to Chart'}</button
		>
	</div>
</div>
