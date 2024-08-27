<script lang="ts">
	import type { IconId } from '$lib/icon';

	export let icon: IconId = 'bootstrap';
	export let size = 32;
</script>

<svg class="bi" width={size} height={size} fill="currentColor">
	<use xlink:href={`bootstrap-icons.svg#${icon}`} />
</svg>
