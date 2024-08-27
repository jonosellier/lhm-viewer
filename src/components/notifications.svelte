<script lang="ts">
	import { base } from '$app/paths';
	import { notificationStore } from '$lib/notification.service';
	function close(idx: number) {
		notificationStore.update((n) => n.filter((_, i) => i !== idx));
	}

	let privOpen = true;
</script>

<div class="fixed bottom-0 end-0 z-50 w-80 me-2">
	{#if privOpen}
		<div
			class="px-4 py-3 mb-2 flex justify-between items-center border rounded-lg bg-slate-700 text-slate-100 border-slate-500"
		>
			<div>
				By using this website, you are agreeing to our terms of use and privacy policy which is
				located <a class="text-orange-500" href={`${base}/privacy`}>here</a>

				<button class="btn-sm btn-default block mt-4" on:click={() => (privOpen = false)}
					>I understand</button
				>
			</div>
		</div>
	{/if}

	{#each $notificationStore as n, index}
		<div
			class={'px-4 py-3 mb-2 flex justify-between items-center border rounded-lg ' +
				(n.type === 'error'
					? 'bg-red-800 border border-red-400 text-red-100'
					: 'bg-slate-700 text-slate-100 border-slate-500')}
		>
			{n.text}
			<button
				class="text-grey-100 hover:bg-grey-900/50 rounded-full px-1"
				on:click={() => close(index)}>&times;</button
			>
		</div>
	{/each}
</div>

<style lang="css">
</style>
