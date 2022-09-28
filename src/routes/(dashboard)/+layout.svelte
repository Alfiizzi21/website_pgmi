<script>
	import '../../app.css';
	import app from '$lib/external/firebase.js';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
	import NavButton from '$lib/component/NavButton.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	const host = import.meta.env.VITE_appUrl;

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
		class="flex px-4 justify-between z-50 shadow fixed items-center bg-sky-900 text-white top-0 right-0 left-0 h-14"
	>
		<a href={host}>
			<img height="40" width="133" src="{host}/logo.png" alt="pgmi logo" />
		</a>
		<button class="hover:text-red-500 hover:bg-sky-800 w-10 h-10 p-2 " on:click={logOut}>
			<span class="material-icons "> logout </span>
		</button>
	</header>
	<aside class="fixed bg-sky-900 w-20 top-14 h-screen text-white">
		<nav>
			<ul class="flex flex-col">
				<li>
					<NavButton link="" />
				</li>
				<li>
					<NavButton link="/profil" icon="badge" text="Profil" />
				</li>
				<li>
					<NavButton link="/berita" icon="newspaper" text="berita" />
				</li>
				<li>
					<NavButton link="/pengumuman" icon="campaign" text="Pengumuman" />
				</li>
				<li>
					<NavButton link="/agenda" icon="event" text="Agenda" />
				</li>
			</ul>
		</nav>
	</aside>
	<main class="mt-14 py-4 px-2 sm:pl-0 sm:ml-20 min-h-screen bg-sky-50">
		<slot />
	</main>
{:else}
	<div class="right-0 left-0 top-0 bottom-0 bg-black fixed bg-opacity-25">
		<div class="w-40 h-20 mt-28 bg-white rounded mx-auto flex justify-center items-center">
			<div class=" border-4 border-t-sky-500 w-10 h-10 rounded-full animate-spin" />
		</div>
	</div>
{/if}
