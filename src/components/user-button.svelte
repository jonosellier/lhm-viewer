<script lang="ts">
	import { goto } from '$app/navigation';
	import { signOut, userStore } from '$lib/db';

	$: displayedUsername = $userStore?.email?.replace(/(....).*@.+\.(.+)/, '$1•••@•••.$2');
	function handleClick(e: Event) {
		if ($userStore) {
			if (confirm('Sign out?')) {
				signOut();
			}
		} else {
			goto('/auth');
		}
	}
</script>

<button
	class="text-sm border border-slate-500 text-slate-100 hover:bg-slate-800 rounded-full px-3 py-1"
	on:click={handleClick}
>
	{#if $userStore}
		Log out {displayedUsername}
	{:else}
		Sign In/Up
	{/if}
</button>

<style>
</style>
