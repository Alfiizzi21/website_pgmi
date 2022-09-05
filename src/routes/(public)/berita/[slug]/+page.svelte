<script>
	import Newsheader from '$lib/img/newsheader.jpg';
	import {truncate,removeTags} from '$lib/script/lib.js';
	import Sharemodal from '$lib/component/Sharemodal.svelte';
	import { db } from '$lib/external/firebase.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { collection, getDocs, query, where } from 'firebase/firestore';

	const slug = $page.params.slug;

	let berita = {
		title: 'loading',
		body: '<p>loading</p>'
	};
	let render = false;

	onMount(async () => {
		const beritaRef = collection(db, 'berita');
		const q = query(beritaRef, where('slug', '==', slug));
		const beritaSnapshot = await getDocs(q);
		beritaSnapshot.forEach((e) => {
			berita = e.data();
			render = true;
		});
	});
	const url = $page.url.href;
</script>
<svelte:head>
	<title>{berita.title}</title>
	<meta name="description" content="{ truncate(removeTags(berita.body),150)}">
	<meta name="googlebot" content="notranslate" />
	<meta property="og:title" content="{berita.title}" />
	<meta property="og:type" content="news" />
	<meta property="og:url" content="{url}" />
	<meta property="og:image" content="{berita.image}" />
	<meta name="twitter:title" content="{berita.title}">
	<meta name="twitter:description" content="{ truncate(removeTags(berita.body),150)}">
	<meta name="twitter:image" content=" {berita.image}">
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
{#if !render}
	<div class="right-0 left-0 top-0 bottom-0 bg-black fixed bg-opacity-25">
		<div class="w-40 h-20 mt-28 bg-white rounded mx-auto flex justify-center items-center">
			<div class=" border-4 m border-t-sky-500 w-10 h-10 rounded-full animate-spin" />
		</div>
	</div>
{/if}

<style>
	#header {
		aspect-ratio: 3/1;
		background-color: rgba(0, 0, 0, 0.3);
	}
	p {
		text-indent: 1rem;
	}
</style>
