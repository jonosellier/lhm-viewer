<script lang="ts">
	import { notificationStore } from '$lib/notification.service';
	function close(idx: number) {
		notificationStore.update((n) => n.filter((_, i) => i !== idx));
	}
</script>

<div class="fixed bottom-0 end-0 z-50 w-80 me-2">
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
