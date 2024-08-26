<script lang="ts">
	import Header from '$components/header.svelte';
	import '../app.css';
	import ConfirmDialog from '$components/dialog.svelte';
	import Notifications from '$components/notifications.svelte';
	import { scrollbar } from '$lib/actions/scrollbar';
	import autoAnimate from '@formkit/auto-animate';
</script>

<div class="w-full h-screen bg-slate-900 text-slate-300 flex flex-col overflow-auto">
	<Header></Header>
	<main class="flex-grow" use:autoAnimate>
		<slot />
	</main>
</div>
<ConfirmDialog />
<Notifications></Notifications>
