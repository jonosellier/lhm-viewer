<script lang="ts">
	export let open = false;
</script>

{#if open}
	<div class="fixed top-0 w-full h-full overflow-auto modal-bg">
		<div
			class="w-full min-h-full backdrop-blur-lg pt-12 pb-4"
			on:keyup={(e) => (e.key === 'esc' ? (open = false) : void 0)}
			on:click={() => (open = false)}
			role="presentation"
		>
			<div
				on:click|stopPropagation={() => (open = true)}
				on:keyup={(e) => (e.key === 'esc' ? (open = false) : void 0)}
				class="max-w-2xl p-5 mx-auto bg-slate-800 border border-slate-500 rounded-lg z-50"
				role="dialog"
			>
				<slot></slot>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-bg {
		z-index: 10000;
	}
</style>
