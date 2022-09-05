<script>
	import '../../app.css';
	import app from '$lib/external/firebase.js';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
	import NavButton from '$lib/component/NavButton.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let view = false;
	const auth = getAuth();

	const logOut = async () => {
		if (confirm('Anda yakin ingin Logout ?')) {
			signOut(auth);
		}
	};

	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				view = true;
				console.log('login sukses');
			} else {
				goto('/login');
			}
		});
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

{#if view}
	<header
		class="flex px-4 justify-between z-50 shadow fixed items-center bg-sky-500 text-white top-0 right-0 left-0 h-14"
	>
		<div class="text-2xl">Dashboard</div>
		<button on:click={logOut}>
			<span class="material-icons hover:text-red-500"> logout </span>
		</button>
	</header>
	<aside class="fixed bg-sky-500 w-20 top-14 h-screen text-white">
		<nav>
			<ul class="flex gap-2 flex-col">
				<li>
					<NavButton link="" />
				</li>
				<li>
					<NavButton link="berita" icon="newspaper" text="berita" />
				</li>
				<li>
					<NavButton link="pengumuman" icon="campaign" text="Pengumuman" />
				</li>
			</ul>
		</nav>
	</aside>
	<main class="mt-14 py-4 sm:ml-20">
		<slot />
	</main>
{:else}
	<div class="right-0 left-0 top-0 bottom-0 bg-black fixed bg-opacity-25">
		<div class="w-40 h-20 mt-28 bg-white rounded mx-auto flex justify-center items-center">
			<div class=" border-4 border-t-sky-500 w-10 h-10 rounded-full animate-spin" />
		</div>
	</div>
{/if}
