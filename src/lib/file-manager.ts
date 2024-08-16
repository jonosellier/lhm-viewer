import { MultiChartData } from './multi-chart';

export async function cacheSave(data: MultiChartData, id: string) {
	console.log('Caching with id', id);
	const compressedData = await compress(data.toCsv());
	return storeInIndexDb(compressedData, id);
}

export async function cacheLoad(id: string, name?: string) {
	const compressedData = await loadFromIndexDb(id);
	if (!compressedData) {
		return null;
	}
	console.log(`Cache hit. Saved ${(compressedData.byteLength / 1000) | 0}KB`);
	const csvString = await decompress(compressedData);
	console.log('Loading ', name);
	const data = new MultiChartData(csvString, name);
	return data;
}

function compress(data: string) {
	const byteArray = new TextEncoder().encode(data);
	const cs = new CompressionStream('gzip');
	const writer = cs.writable.getWriter();
	writer.write(byteArray);
	writer.close();
	return new Response(cs.readable).arrayBuffer();
}

function decompress(byteArray: ArrayBuffer) {
	const cs = new DecompressionStream('gzip');
	const writer = cs.writable.getWriter();
	writer.write(byteArray);
	writer.close();
	return new Response(cs.readable).arrayBuffer().then(function (arrayBuffer) {
		return new TextDecoder().decode(arrayBuffer);
	});
}

function storeInIndexDb(data: ArrayBuffer, key: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open('db', 1);

		request.onupgradeneeded = (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			if (!db.objectStoreNames.contains('graphStore')) {
				db.createObjectStore('graphStore');
			}
		};

		request.onsuccess = (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			const transaction = db.transaction('graphStore', 'readwrite');
			const store = transaction.objectStore('graphStore');
			const putRequest = store.put(data, key);

			putRequest.onsuccess = () => {
				const savedData = new Set(localStorage.getItem('savedData')?.split('|'));
				savedData.add(key);
				localStorage.setItem('savedData', Array.from(savedData).join('|'));
				resolve();
			};

			putRequest.onerror = (event) => {
				reject((event.target as IDBRequest).error);
			};
		};

		request.onerror = (event) => {
			reject((event.target as IDBOpenDBRequest).error);
		};
	});
}

function loadFromIndexDb(key: string): Promise<ArrayBuffer | null> {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open('db', 1);

		request.onsuccess = (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			const transaction = db.transaction('graphStore', 'readonly');
			const store = transaction.objectStore('graphStore');
			const getRequest = store.get(key);

			getRequest.onsuccess = () => {
				if (getRequest.result) {
					resolve(getRequest.result as ArrayBuffer);
				} else {
					resolve(null); // Return null if the key is not found
				}
			};

			getRequest.onerror = (event) => {
				reject((event.target as IDBRequest).error);
			};
		};

		request.onerror = (event) => {
			reject((event.target as IDBOpenDBRequest).error);
		};
	});
}
