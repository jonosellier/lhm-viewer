<script lang="ts">
	import { base } from '$app/paths';
	import { changePassword, changePasswordReset, userStore, type AuthResult } from '$lib/db';

	let newPassword: string;
	let passwordConfirm: string;

	let changeResult: Partial<AuthResult> = {};
	async function handleChangePassword() {
		changeResult = await changePasswordReset(newPassword, passwordConfirm);
		if (!changeResult.error) {
			passwordConfirm = newPassword = '';
		}
	}
</script>

<div class="flex justify-center items-center w-full h-full">
	<div class="p-5 border border-slate-500 rounded max-w-md w-full bg-slate-700">
		{#if $userStore}
			<h2 class="text-lg uppercase font-bold text-slate-400 mt-5">I forgot my password. Oopsie.</h2>
			<form on:submit={handleChangePassword}>
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
					disabled={newPassword !== passwordConfirm}
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
						<span>Password changed successfully. Try to remember this one. </span>
						<a
							href={`${base}/auth`}
							class="btn-sm hover:bg-emerald-900 hover:underline decoration-emerald-400 border-transparent"
							>I probably won't</a
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
		{/if}
	</div>
</div>
