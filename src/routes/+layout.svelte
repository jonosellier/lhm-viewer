<script lang="ts">
	import Header from '$components/header.svelte';
	import '../app.css';
	import ConfirmDialog from '$components/dialog.svelte';
	import Notifications from '$components/notifications.svelte';
</script>

<div class="w-full h-screen bg-slate-900 text-slate-300 flex flex-col">
	<Header></Header>
	<main class="flex-grow">
		<slot />
	</main>
</div>
<ConfirmDialog />
<Notifications></Notifications>
