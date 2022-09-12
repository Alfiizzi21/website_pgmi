<script>
	import app from '$lib/external/firebase.js';
	import '../../app.css';
	import Header from '$lib/template/Header.svelte';
	import Footer from '$lib/template/Footer.svelte';
	const host = import.meta.env.VITE_appUrl;

	let load = false;
	let imgClass = '';
	let loadingClass = '';
	const loading = () => {
		imgClass = '';
		loadingClass = '-translate-y-full';
		setTimeout(() => {
			load = true;
		}, 400);
	};
</script>

<svelte:window on:load={loading()} />
{#if !load}
	<div
		class="fixed top-0 z-50 w-full h-screen pt-40 bg-sky-900 transition-transform duration-300 {loadingClass}"
	>
		<img
			width="660"
			height="199"
			class="w-40 animate-pulse mx-auto {imgClass}"
			src="{host}/logo.png"
			alt=""
		/>
	</div>
{/if}

<Header />
<slot />
<Footer />
