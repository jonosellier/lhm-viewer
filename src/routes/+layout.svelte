<script>
	import UserButton from '$components/user-button.svelte';
	import { userStore } from '$lib/db';
	export const ssr = false;
	import '../app.css';
</script>

<div class="w-full h-screen bg-slate-900 text-slate-300">
	<slot />
</div>
