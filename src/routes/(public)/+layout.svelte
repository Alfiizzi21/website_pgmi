<script>
	import app from '$lib/external/firebase.js';
	import '../../app.css';
	import Header from '$lib/template/Header.svelte';
	import Footer from '$lib/template/Footer.svelte';
	import { navigating } from '$app/stores';
	const host = import.meta.env.VITE_appUrl;
	let loadingPage = false;
	let progress = 'w-0';
	$: if (!!$navigating) {
		loadingPage = true;
		setTimeout(() => {
			progress = 'w-1/2';
		}, 100);
		setTimeout(() => {
			progress = 'w-3/4';
		}, 200);
	} else {
		progress = 'w-full';
		setTimeout(() => {
			loadingPage = false;
			progress = 'w-0';
		}, 500);
	}

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
{#if loadingPage}
	<div class="fixed w-full top-0 z-50 h-[2px] bg-slate-100">
		<div class="{progress} bg-sky-900 h-full transition-all duration-500" />
	</div>
{/if}

<Header />
<slot />
<Footer />
