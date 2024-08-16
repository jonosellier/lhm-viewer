<script lang="ts">
	import { goto } from '$app/navigation';
	import { userStore } from '$lib/db';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($userStore) {
			goto('/charts');
		} else {
			goto('/upload');
		}
	});
</script>

<h1 class="text-4xl text-center mt-16">Loading...</h1>
