<script lang="ts">
	import { base } from '$app/paths';
	import { userStore } from '$lib/db';
	import UserButton from './user-button.svelte';
	import logo from '$lib/assets/cmr-wider.webp';
	import { page } from '$app/stores';
</script>

<header
	class="ms-auto mr-0 p-3 z-50 flex flex-row-reverse gap-2 relative w-max items-center"
	style="margin-top: -0.25rem"
>
	<UserButton></UserButton>
	{#if $userStore}
		<a href={`${base}/charts`} class="btn btn-borderless">My Charts</a>
	{/if}
	<a href={`${base}/upload`} class="btn btn-borderless">Upload</a>
	{#if $page.url.pathname !== '/'}
		<a
			href={`${base}/`}
			class="rounded-lg hover:border-orange-500 border border-transparent p-0 overflow-hidden ring-orange-500/70 ring-0 hover:ring-4"
		>
			<img src={logo} alt="" class="h-10" /></a
		>
	{/if}
</header>

<style>
	header {
		z-index: 1000;
	}
</style>
