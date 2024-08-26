// scrollbar.js
import { OverlayScrollbars, type InitializationTarget, type Options } from 'overlayscrollbars';

export function scrollbar(node: InitializationTarget, options: Partial<Options> = {}) {
	console.log('initializing for ', node);
	const scrollbar = OverlayScrollbars(node, options);

	return {
		update(newOptions: Partial<Options>) {
			scrollbar.options(newOptions);
		},

		destroy() {
			scrollbar.destroy();
		}
	};
}
