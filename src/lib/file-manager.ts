import { LhmData, type LhmFile } from './uploaded-data.store';

export async function save(data: LhmData, newName?: string) {
	if (newName) {
		data.name = newName;
	}
	const compressedData = await compress(data.toJson());
	return storeInDb(compressedData, data.name);
}

export async function load(name: string) {
	const compressedData = await loadFromDb(name);
	if (!compressedData) {
		alert('No data');
		return new LhmData();
	}
	const jsonString = await decompress(compressedData);
	const lhmFile: LhmFile = JSON.parse(jsonString);
	lhmFile.subsets = lhmFile.subsets.map(([a, b]) => [new Date(a), new Date(b)]);
	return LhmData.fromFile(lhmFile);
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

function storeInDb(data: ArrayBuffer, key: string): Promise<void> {
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

function loadFromDb(key: string): Promise<ArrayBuffer | null> {
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
