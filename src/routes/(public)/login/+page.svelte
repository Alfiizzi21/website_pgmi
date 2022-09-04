<script>
	import Container from '$lib/component/Container.svelte';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';

	let email;
	let password;
	let loading = false;

	const auth = getAuth();

	const login = async () => {
		loading = true;
		let UserCredential = await signInWithEmailAndPassword(auth, email, password)
			.then((UserCredential) => {
				localStorage.setItem('uid', UserCredential.user.id);
				goto('/dashboard');
			})
			.catch((error) => {
				loading = false;
				alert('gagal login', error);
			});
	};
</script>

<Container>
	<div class="bg-sky-100 sm:w-96 mx-auto sm:mt-4 md:mt-20 mb-52 rounded p-4 shadow">
		<h1 class="text-center text-2xl font-semibold text-sky-900 uppercase m-2">login</h1>
		<form class="flex flex-col gap-2" on:submit|preventDefault={login} method="post">
			<div class="flex flex-col font-semibold gap-1">
				<label for="email">email</label>
				<input
					bind:value={email}
					type="email"
					class="py-1 px-4 text-sm rounded"
					name="email"
					id="email"
				/>
			</div>
			<div class="flex flex-col font-semibold gap-1">
				<label for="password">password</label>
				<input
					bind:value={password}
					type="password"
					class="py-1 px-4 text-sm rounded"
					name="password"
					id="password"
				/>
			</div>
			<input
				type="submit"
				class="bg-sky-900 py-1 rounded my-2 text-white font-semibold uppercase cursor-pointer"
				value="login"
			/>
		</form>
	</div>
</Container>
{#if loading}
	<div class="right-0 left-0 top-0 bottom-0 bg-black fixed bg-opacity-25">
		<div class="w-40 h-20 mt-28 bg-white rounded mx-auto flex justify-center items-center">
			<div class=" border-4 border-t-sky-500 w-10 h-10 rounded-full animate-spin" />
		</div>
	</div>
{/if}
