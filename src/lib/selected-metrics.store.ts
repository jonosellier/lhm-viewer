import { get, writable } from 'svelte/store';
import { preferences, type Preferences } from './preferences.store';
import { getRandomHexColor } from './color-tools';

export const selectedItems = writable(new Set<string>());

selectedItems.subscribe((s) => {
	const colorUpdate: Preferences['sensorColor'] = {};
	let shouldUpdate = false;
	[...s].forEach((p) => {
		if (!get(preferences).sensorColor[p]) {
			colorUpdate[p] = getRandomHexColor();
			shouldUpdate = true;
		}
	});

	if (shouldUpdate) {
		preferences.update((p) => {
			p.sensorColor = { ...p.sensorColor, ...colorUpdate };
			return p;
		});
	}
});
