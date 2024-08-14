import { writable } from 'svelte/store';

export const subset = writable<[Date, Date] | undefined>();
