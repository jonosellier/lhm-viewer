<script lang="ts">
	import { dataStore } from '$lib/uploaded-data.store';
	import { createEventDispatcher } from 'svelte';

	let shown = $dataStore.show;

	let sensors = $dataStore.charts.map(({ path, label, color, values }, i) => {
		const [device, type, sensorId] = path.split('/');
		return { label, device, type, color, values, sensorId, show: shown.includes(i) };
	});

	const dispatch = createEventDispatcher();

	let deviceSet = new Set(sensors.map((s) => s.device));
	let devices = Array.from(deviceSet);

	function saveSensors() {
		const d = $dataStore;
		d.charts = sensors.map(({ label, device, type, color, values, sensorId }, i) => ({
			label,
			path: `${device}/${type}/${sensorId}`,
			color,
			values
		}));
		const newShown: number[] = [];
		sensors.forEach((s, i) => {
			if (s.show) {
				newShown.push(i);
			}
		});
		d.show = newShown;
		d.regenerateMap();
		dataStore.set(d);
	}
</script>

<h2 class="text-lg uppercase font-bold text-slate-400 mt-5 mb-4">Devices</h2>
<div class="border border-slate-500 rounded">
	{#each devices as device}
		<div class="border-b border-slate-500 flex items-center justify-between p-2 last:border-b-0">
			<input
				type="text"
				class="form-control-sm me-4"
				bind:value={device}
				on:blur={() => {
					deviceSet = new Set(devices);
					sensors = sensors.map((s) => {
						if (!deviceSet.has(s.device)) {
							return { ...s, device };
						}
						return s;
					});
				}}
			/><button
				class="text-white hover:text-red-700 rounded-full px-1"
				on:click={() => {
					deviceSet.delete(device);
					devices = Array.from(deviceSet);
				}}>&times;</button
			>
		</div>
	{/each}
</div>
<button class="btn btn-default mt-3" on:click={() => (devices = devices.concat('New device'))}
	>Add new device</button
>
<h2 class="text-lg uppercase font-bold text-slate-400 mt-5 mb-4">Sensors</h2>
<div class="border rounded border-slate-500">
	{#each sensors as sensor}
		<div class="border-b border-slate-500 flex items-center justify-between p-2 last:border-b-0">
			<h3 class="font-bold">{sensor.label}:</h3>
			<div class="flex items-center">
				<span class="text-xs uppercase font-bold text-slate-500 me-3">{sensor.type}</span>
				<select class="form-control-sm" bind:value={sensor.device}>
					{#each devices as device}
						<option value={device}>{device}</option>
					{/each}
				</select>
			</div>
		</div>
	{/each}
</div>
<div class="mt-6">
	<button
		class="btn btn-primary"
		on:click={() => {
			saveSensors();
			dispatch('closed', {
				closed: true
			});
		}}>Save Changes</button
	>
	<button
		class="btn btn-default"
		on:click={() => {
			console.log('dispatching close');
			dispatch('closed', {
				closed: true
			});
		}}>Cancel</button
	>
</div>

<style lang="css">
</style>
