import { createClient, type User } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_KEY } from '$env/static/public';
import { writable } from 'svelte/store';

const supabaseUrl = 'https://eysidivvvfuojxtjhect.supabase.co';
const supabase = createClient(supabaseUrl, PUBLIC_SUPABASE_KEY);

interface UserCredentials {
	email: string;
	password: string;
}

export const userStore = writable<User | undefined>();

export async function createUser({ email, password }: UserCredentials) {
	try {
		const { data, error } = await supabase.auth.signUp({
			email,
			password
		});

		if (error) {
			throw new Error(error.message);
		}

		const { user } = data;
		if (user) {
			userStore.set(user);
		}
		return user;
	} catch (error) {
		console.error('Error creating user:', error);
		throw error;
	}
}

export async function signIn({ email, password }: UserCredentials) {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			throw new Error(error.message);
		}

		const { user } = data;
		userStore.set(user);
		return user;
	} catch (error) {
		console.error('Error signing in user:', error);
		throw error;
	}
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();
	if (error) {
		throw new Error(error.message);
	} else {
		userStore.set(undefined);
	}
}
