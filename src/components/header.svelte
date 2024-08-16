<script lang="ts">
	import { userStore } from '$lib/db';
	import UserButton from './user-button.svelte';
</script>

<header class="ms-auto mr-0 w-50 p-3 z-50 flex flex-row-reverse gap-2">
	<UserButton></UserButton>
	{#if $userStore}
		<a href="/charts" class="btn btn-borderless">My Charts</a>
	{/if}
	<a href="/upload" class="btn btn-borderless">Upload</a>
</header>
