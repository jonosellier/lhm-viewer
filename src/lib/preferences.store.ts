import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Preferences = {
	sensorColor: Record<string, string>;
	sensorName: Record<string, string>;
};

export const preferences = writable<Preferences>(getSavedPrefs());

function getSavedPrefs(): Preferences {
	if (browser) {
		return JSON.parse(localStorage.getItem('prefs') ?? '{"sensorColor": {}, "sensorName": {}}');
	}
	return { sensorColor: {}, sensorName: {} };
}

preferences.subscribe((v) => {
	if (browser) {
		localStorage.setItem('prefs', JSON.stringify(v));
	}
});
