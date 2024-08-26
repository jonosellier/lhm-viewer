<script lang="ts">
	import { dialogStore } from '$lib/dialog.service';
	import { onDestroy } from 'svelte';

	import autoAnimate from '@formkit/auto-animate';
	let text: string;
	let resolve: ((v: boolean) => void) | null = null;

	const unsubscribe = dialogStore.subscribe((dialog) => {
		text = dialog.text;
		resolve = dialog.resolve;
	});

	onDestroy(() => unsubscribe());

	const handleConfirm = () => {
		resolve?.(true);
		dialogStore.closeDialog(true);
	};

	const handleCancel = () => {
		resolve?.(false);
		dialogStore.closeDialog(false);
	};
</script>

{#if text}
	<div
		class="fixed top-0 z-50 w-full h-full backdrop-blur-lg"
		role="presentation"
		on:click={handleCancel}
		use:autoAnimate
	>
		<div
			class="max-w-lg p-5 mx-auto mt-12 bg-slate-800 border border-slate-500 rounded-lg text-white"
			on:click|stopPropagation
			on:keyup|stopPropagation
			role="dialog"
		>
			<p class="text-2xl mb-5">{text}</p>
			<div class="buttons">
				<button class="btn btn-primary me-3" on:click={handleConfirm}>Confirm</button>
				<button class="btn btn-default" on:click={handleCancel}>Cancel</button>
			</div>
		</div>
	</div>
{/if}
