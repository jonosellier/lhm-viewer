import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Preferences = {
	sensorColor: Record<string, string>;
};

export const preferences = writable<Preferences>(getSavedPrefs());

function getSavedPrefs() {
	if (browser) {
		return JSON.parse(localStorage.getItem('prefs') ?? '{"sensorColor": {}}');
	}
	return { sensorColor: {} };
}

preferences.subscribe((v) => {
	if (browser) {
		localStorage.setItem('prefs', JSON.stringify(v));
	}
});
