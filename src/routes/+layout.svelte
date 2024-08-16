<script>
	import Header from '$components/header.svelte';
	export const ssr = false;
	import '../app.css';
</script>

<div class="w-full h-screen bg-slate-900 text-slate-300 flex flex-col">
	<Header></Header>
	<main class="flex-grow">
		<slot />
	</main>
</div>
