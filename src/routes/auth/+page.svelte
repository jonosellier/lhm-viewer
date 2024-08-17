<script lang="ts">
	import { changePassword, createUser, signIn, signOut, userStore, type AuthResult } from '$lib/db';

	let email: string;
	let newPassword: string;
	let password: string;
	let passwordConfirm: string;
	let tab = 'login';
	$: signUpState = checkSignUpState(email, password, passwordConfirm);

	let changeResult: Partial<AuthResult> = {};
	let signUpResult: Partial<AuthResult> = {};
	let signInResult: Partial<AuthResult> = {};

	async function handleSignIn() {
		signInResult = await signIn({ email, password });
		if (!signInResult.error) {
			password = passwordConfirm = newPassword = '';
		}
	}
	async function handleSignUp() {
		signUpResult = await createUser({ email, password });
		if (!signUpResult.error) {
			password = passwordConfirm = newPassword = '';
		}
	}
	async function handleChangePassword() {
		changeResult = await changePassword(password, newPassword, passwordConfirm);
		if (!changeResult.error) {
			password = passwordConfirm = newPassword = '';
		}
	}

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
		{#if $userStore}
			<h2 class="text-lg uppercase font-bold text-slate-400">Account details</h2>
			<table>
				<tr>
					<th class="text-start pe-2">Email</th>
					<td>{$userStore.email}</td>
				</tr>
				<tr>
					<th class="text-start pe-2">Account confirmed</th>
					<td
						>{$userStore.confirmed_at
							? new Date($userStore.confirmed_at).toLocaleString('en-US', {
									dateStyle: 'short',
									timeStyle: 'short'
								})
							: 'Account Unconfirmed'}</td
					>
				</tr>
			</table>
			<hr class="my-8 border-slate-500" />
			<h2 class="text-lg uppercase font-bold text-slate-400 mt-5">Update Password</h2>
			<form on:submit={handleChangePassword}>
				<input
					type="password"
					bind:value={password}
					class="border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"
					placeholder="Current Password"
				/>
				<input
					type="password"
					bind:value={newPassword}
					class="border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"
					placeholder="New Password"
				/>
				<input
					type="password"
					bind:value={passwordConfirm}
					class="border border-slate-500 bg-slate-900 hover:border-orange-600 focus:border-orange-600 text-white text-lg px-3 py-2 block my-2 rounded-lg w-full"
					placeholder="Confirm New Password"
				/>
				<button
					class="text-lg px-3 py-2 block my-2 rounded-lg w-full bg-orange-600 text-white hover:bg-orange-500"
					disabled={!password || newPassword !== passwordConfirm}
					type="submit">Change Password</button
				>
				{#if newPassword !== passwordConfirm}
					<div class="my-5 p-3 bg-red-800 border border-red-400 text-red-100 rounded-lg">
						Passwords do not match
					</div>
				{/if}

				{#if changeResult.user}
					<div
						class="my-5 p-3 bg-emerald-800 border border-emerald-400 text-emerald-100 rounded-lg flex justify-between"
					>
						<span>Password changed successfully</span>
						<button
							class="text-emerald-100 hover:bg-emerald-900 rounded-full px-1"
							on:click={() => (changeResult = {})}>&times;</button
						>
					</div>
				{/if}
				{#if changeResult.error}
					<div
						class="my-5 p-3 bg-red-800 border border-red-400 text-red-100 rounded-lg flex justify-between"
					>
						<span>{changeResult.error}</span>
						<button
							class="text-red-100 hover:bg-red-900 rounded-full px-1"
							on:click={() => (changeResult = {})}>&times;</button
						>
					</div>
				{/if}
			</form>
			<hr class="my-8 border-slate-500" />
			<button class="btn-lg bg-red-700 border-red-500 text-red-100 w-full" on:click={signOut}
				>Log out</button
			>
		{:else}
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
				<form on:submit={handleSignIn}>
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
						type="submit">Sign In</button
					>
				</form>
				{#if signInResult.error}
					<div
						class="my-5 p-3 bg-red-800 border border-red-400 text-red-100 rounded-lg flex justify-between"
					>
						<span>{signInResult.error}</span>
						<button
							class="text-red-100 hover:bg-red-900 rounded-full px-1"
							on:click={() => (signInResult = {})}>&times;</button
						>
					</div>
				{/if}
			{:else}
				<form on:submit={handleSignUp}>
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
						type="submit"
					>
						{signUpState.text}
					</button>
				</form>
				{#if signUpResult.error}
					<div
						class="my-5 p-3 bg-red-800 border border-red-400 text-red-100 rounded-lg flex justify-between"
					>
						<span>{signUpResult.error}</span>
						<button
							class="text-red-100 hover:bg-red-900 rounded-full px-1"
							on:click={() => (signUpResult = {})}>&times;</button
						>
					</div>
				{/if}
			{/if}
		{/if}
	</div>
</div>

<style lang="css">
</style>
