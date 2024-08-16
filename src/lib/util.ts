export function keyValue<V, T extends Record<string, V>>(obj: T) {
	const keys: (keyof typeof obj)[] = Object.keys(obj);
	return keys.map((k) => [k, obj[k]]) as [keyof T, (typeof obj)[keyof T]][];
}

export function compress(data: string) {
	const byteArray = new TextEncoder().encode(data);
	const cs = new CompressionStream('gzip');
	const writer = cs.writable.getWriter();
	writer.write(byteArray);
	writer.close();
	return new Response(cs.readable).arrayBuffer();
}

export function decompress(byteArray: ArrayBuffer) {
	const cs = new DecompressionStream('gzip');
	const writer = cs.writable.getWriter();
	writer.write(byteArray);
	writer.close();
	return new Response(cs.readable).arrayBuffer().then(function (arrayBuffer) {
		return new TextDecoder().decode(arrayBuffer);
	});
}
