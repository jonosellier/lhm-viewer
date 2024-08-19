import { writable } from 'svelte/store';
export type Notification = { text: string; type: NotificationType };
export type NotificationType = 'error' | 'info';

export const notificationStore = writable<Notification[]>([]);

export const notify = {
	error: (text: string) => notificationStore.update((s) => s.concat({ text, type: 'error' })),
	info: (text: string) => notificationStore.update((s) => s.concat({ text, type: 'info' }))
};
