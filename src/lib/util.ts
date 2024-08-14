export function keyValue<V, T extends Record<string, V>>(obj: T) {
	const keys: (keyof typeof obj)[] = Object.keys(obj);
	return keys.map((k) => [k, obj[k]]) as [keyof T, (typeof obj)[keyof T]][];
}
