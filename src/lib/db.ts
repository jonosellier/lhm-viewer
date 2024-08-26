import { createClient, type User } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_KEY } from '$env/static/public';
import { get, writable } from 'svelte/store';
import { dataStore } from './uploaded-data.store';
import { compress, decompress } from './util';
import type { Database } from './database.types';
import { cacheLoad, cacheSave } from './file-manager';
import { MultiChartData } from './multi-chart';
import { goto } from '$app/navigation';
import { notify } from './notification.service';

const supabaseUrl = 'https://eysidivvvfuojxtjhect.supabase.co';
const supabase = createClient<Database>(supabaseUrl, PUBLIC_SUPABASE_KEY);

interface UserCredentials {
	email: string;
	password: string;
}

export type AuthResult =
	| {
			error: null;
			user: User;
	  }
	| {
			error: string;
			user: null;
	  }
	| {
			error: string;
			user: null;
	  };

const refresh = await supabase.auth.refreshSession();
const currentUser = refresh.data?.user;

export const userStore = writable<User | undefined>(currentUser ?? undefined);

supabase.auth.onAuthStateChange((event, session) => {
	switch (event) {
		case 'PASSWORD_RECOVERY':
			userStore.set(session?.user);
			notify.info('Logged you in. Please change your password now.');
			goto('/auth');
			break;
		default:
			break;
	}
});

export async function createUser({ email, password }: UserCredentials): Promise<AuthResult> {
	const { data, error } = await supabase.auth.signUp({
		email,
		password
	});

	if (error) {
		console.error('Error creating user:', error);
		return { user: null, error: error.message };
	}

	const { user } = data;
	if (user) {
		userStore.set(user);
		return { user, error: null };
	}
	return { user: null, error: 'Unknown error' };
}

export async function signIn({ email, password }: UserCredentials): Promise<AuthResult> {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (error) {
		console.error('Error signing in user:', error);
		return { user: null, error: error.message };
	}

	const { user } = data;
	userStore.set(user);
	return { user, error: null };
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();
	if (error) {
		throw new Error(error.message);
	} else {
		userStore.set(undefined);
	}
}

export async function saveGraph(id?: string) {
	const dataToSave: MultiChartData = get(dataStore) as MultiChartData;
	if (!dataStore) {
		return;
	}

	const now = new Date().toISOString();
	const fileName = dataToSave.name ?? 'Upload-' + now;

	console.log('Saving data at', now);
	console.log('Compressing...');
	const ops: {
		sensorsToKeep?: number[];
		subset?: [number, number];
	} = {};
	if (dataToSave.selectedSubset >= 0) {
		ops.subset = dataToSave.subsets[dataToSave.selectedSubset];
	}
	if (dataToSave.show.length > 0) {
		ops.sensorsToKeep = dataToSave.show;
	}
	const compressedData = await compress(
		dataToSave.toCsv(Object.keys(ops).length > 0 ? ops : undefined)
	);
	const bucketPath = btoa(
		String.fromCharCode(
			...new Uint8Array(await window.crypto.subtle.digest('SHA-256', compressedData))
		)
			.replaceAll('+', '-')
			.replaceAll('/', '_')
	);
	const fileBlob = new Blob([compressedData]);
	console.log('Uploading to bucket...');
	const { data: storageData, error } = await supabase.storage
		.from('graphs')
		.upload(bucketPath, fileBlob);
	if (error) {
		if ((error as any).statusCode === '409') {
			console.warn('No chart changes to save');
		} else {
			console.error('Upload error:', error);
			throw error;
		}
	}
	console.log('Uploaded successfully!', storageData);

	const insertRes = await supabase
		.from('graphs')
		.upsert({
			created_at: now,
			display_name: fileName,
			data_path: bucketPath,
			id
		})
		.select();
	if (insertRes.error) {
		console.error('Metadata error:', insertRes.error);
		throw insertRes.error;
	}
	console.log('Inserted into graph table');
	return insertRes.data[0].id;
}

export async function loadGraph(id: string) {
	console.log('Loading with id', id);
	const dbRes = await supabase.from('graphs').select('*').limit(1).eq('id', id);
	console.log({ dbRes });
	if (dbRes.error) {
		console.error('Retrieval error:', dbRes.error);
		throw dbRes.error;
	}
	const dbData = dbRes?.data?.[0];
	console.log({ dbData });
	if (!dbData?.data_path) {
		console.log('Not found in DB. Giving up :(');
		return false;
	}
	// console.log('Searching cache');
	// const cacheData = await cacheLoad(id, dbData.display_name, dbData.created_by ?? '');
	// if (cacheData) {
	// 	dataStore.set(cacheData);
	// 	return false;
	// }
	console.log('Cache miss. Checking DB');
	console.log('Getting blob');
	const blobRes = await supabase.storage.from('public').download(`graphs/${dbData.data_path}`);
	if (blobRes.error) {
		console.error('Retrieval error for id', 'and path', blobRes.error);
		throw blobRes.error;
	}
	if (!blobRes.data) {
		console.log("Blob doesn't exist. Giving up :(");
	}

	const buf = await blobRes.data.arrayBuffer();
	const csvString = await decompress(buf);
	const obj = new MultiChartData(csvString, dbData.display_name, dbData.created_by ?? '');
	if (obj.charts.length) {
		console.log('Caching for later');
		await cacheSave(obj, id);
		dataStore.set(obj);
	}
}

export async function getMyCharts() {
	const { data, error } = await supabase
		.from('graphs')
		.select('*')
		.eq('created_by', get(userStore)?.id ?? '');
	if (error) {
		console.error('Retrieval error:', error);
		throw error;
	}

	return data;
}

export async function deleteChart(id: string) {
	const { error } = await supabase.from('graphs').delete().eq('id', id);

	if (error) {
		console.error('Delete error:', error);
		throw error;
	}

	return !!error;
}

export async function changePassword(
	current: string,
	newPw: string,
	confirm: string
): Promise<AuthResult> {
	const session = get(userStore);
	if (!session || !current || newPw !== confirm) {
		return { error: 'Validation error', user: null };
	}
	const signInRes = await signIn({ email: session.email ?? '', password: current });
	if (signInRes.error) {
		return { error: signInRes.error, user: null };
	}
	const { error, data } = await supabase.auth.updateUser({
		password: newPw
	});

	const { user } = data;

	if (error) {
		console.error(error);
		return { error: error.message, user: null };
	}

	if (!user) {
		return { user: null, error: 'Empty user' };
	}
	return { user, error: null };
}

export async function changePasswordReset(newPw: string, confirm: string): Promise<AuthResult> {
	const session = get(userStore);
	if (!session || newPw !== confirm) {
		return { error: 'Validation error', user: null };
	}
	const { error, data } = await supabase.auth.updateUser({
		password: newPw
	});

	const { user } = data;

	if (error) {
		console.error(error);
		return { error: error.message, user: null };
	}

	if (!user) {
		return { user: null, error: 'Empty user' };
	}
	return { user, error: null };
}

export async function resetPassword(email: string): Promise<Partial<AuthResult>> {
	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: 'https://jonosellier.github.io/lhm-viewer/change-pw'
	});
	if (error) {
		return { user: null, error: error.message };
	}
	notify.info('A password reset message has been sent to ' + email);
	return {};
}
