<script lang="ts">
	import { goto } from '$app/navigation';
	import { createUser, signIn, userStore } from '$lib/db';

	let email: string;
	let password: string;
	let passwordConfirm: string;
	let tab = 'login';
	$: signUpState = checkSignUpState(email, password, passwordConfirm);

	userStore.subscribe((v) => {
		if (v) {
			goto('/');
		}
	});

	function checkSignUpState(email: string, password: string, passwordConfirm: string) {
		if (!email) {
			return {
				valid: false,
				text: 'Enter your email'
			};
		}
		if (!password) {
			return {
				valid: false,
				text: 'Enter your password'
			};
		}
		if (password.length < 8) {
			return {
				valid: false,
				text: 'Password must be 8 characters'
			};
		}
		if (password !== passwordConfirm) {
			return {
				valid: false,
				text: 'Passwords do not match'
			};
		}

		return {
			valid: true,
			text: 'Sign Up'
		};
	}
</script>

<div class="flex justify-center items-center w-full h-full">
	<div class="p-5 border border-slate-500 rounded max-w-md w-full bg-slate-700">
		<div class="flex items-center">
			<button
				class="rounded px-2 py-1 text-lg text-slate-500 bg-slate-700 hover:bg-slate-600 hover:text-orange-600"
				class:text-orange-600={tab === 'login'}
				on:click={() => {
					tab = 'login';
				}}>Log In</button
			>
			<button
				class="rounded px-2 py-1 text-lg text-slate-500 bg-slate-700 hover:bg-slate-600 hover:text-orange-600"
				class:text-orange-600={tab === 'signup'}
				on:click={() => {
					tab = 'signup';
				}}>Sign Up</button
			>
		</div>
		{#if tab === 'login'}
			<div>
				<input
					type="email"
					bind:value={email}
					class="border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"
					placeholder="Email"
				/>
				<input
					type="password"
					bind:value={password}
					class="border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"
					placeholder="Password"
				/>
				<button
					class="text-lg px-3 py-2 block my-2 rounded-lg w-full bg-orange-600 text-white hover:bg-orange-500"
					on:click={() => {
						signIn({ email, password });
					}}>Sign In</button
				>
			</div>
		{:else}
			<div>
				<input
					type="email"
					bind:value={email}
					class="border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"
					placeholder="Email"
				/>
				<input
					type="password"
					bind:value={password}
					class="border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"
					placeholder="Password"
				/>
				<input
					type="password"
					bind:value={passwordConfirm}
					class="border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"
					placeholder="Confirm"
				/>
				<button
					class="text-lg px-3 py-2 block my-2 rounded-lg w-full bg-orange-600 border-orange-600 text-white hover:bg-orange-500 disabled:bg-slate-700 border disabled:border-slate-500"
					disabled={!signUpState.valid}
					on:click={() => {
						createUser({ email, password });
					}}
				>
					{signUpState.text}
				</button>
			</div>
		{/if}
	</div>
</div>

<style lang="css">
</style>
