<script>
	import Newsheader from '$lib/img/newsheader.jpg';
	import Sharemodal from '$lib/component/Sharemodal.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */  
	export let data;

	let berita = data.berita
	let meta = data.meta

	const url = $page.url.href;
</script>
<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content="{ meta.desc }">
	<meta name="googlebot" content="notranslate" />
	<meta property="og:title" content="{meta.title}" />
	<meta property="og:type" content="news" />
	<meta property="og:url" content="{url}" />
	<meta property="og:image" content="{meta.image}" />
	<meta name="twitter:title" content="{meta.title}">
	<meta name="twitter:description" content="{meta.desc}">
	<meta name="twitter:image" content=" {meta.image}">
	<meta name="twitter:card" content="summary_large_image">
</svelte:head>
  

<div class="text-2xl">
	<img
		class="absolute -z-10 h-52  object-cover object-center sm:h-auto"
		src={Newsheader}
		alt="news header"
	/>
	<div
		id="header"
		class="flex h-52 w-full  items-end p-10  font-bold uppercase text-white sm:h-auto md:text-4xl"
	>
		{berita.title}
	</div>

	<Sharemodal {url}>
		<div
			class="float-right mr-4 flex h-12 w-12 -translate-y-16 cursor-pointer items-center justify-center rounded-full bg-white hover:bg-sky-100"
		>
			<span class="material-icons text-sky-900"> share </span>
		</div>
	</Sharemodal>
</div>
<main class="container mx-auto">
	<img class="p-8" src={berita.image} alt="" />
	<div class="my-8 flex flex-col gap-2 indent-4 px-2">{@html berita.body}</div>
</main>

<style>
	#header {
		aspect-ratio: 3/1;
		background-color: rgba(0, 0, 0, 0.3);
	}
	p {
		text-indent: 1rem;
	}
</style>
