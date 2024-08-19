import { writable } from 'svelte/store';

function createDialogStore() {
	const { subscribe, set } = writable<{ text: string; resolve: ((v: boolean) => void) | null }>({
		text: '',
		resolve: null
	});

	function confirm(text: string) {
		return new Promise((resolve) => {
			set({ text, resolve });
		}).finally(() => {
			set({ text: '', resolve: null });
		});
	}

	function closeDialog(response: boolean) {
		setTimeout(() => set({ text: '', resolve: null }), 0);
		return response;
	}

	return {
		subscribe,
		confirm,
		closeDialog
	};
}

export const dialogStore = createDialogStore();
