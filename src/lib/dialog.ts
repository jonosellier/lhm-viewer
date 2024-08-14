import { writable } from 'svelte/store';

export const confirmDialogs = writable<{ text: string; id: number; prom: Promise<boolean> }[]>([]);

export function confirm(text: string) {
	const id = Date.now();
	const prom = new Promise<boolean>((v) => {
		return v;
	});
	confirmDialogs.update((d) => d.concat({ text, id, prom }));
}
