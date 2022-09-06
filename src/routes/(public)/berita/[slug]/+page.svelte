<script>
	import Newsheader from '$lib/img/newsheader.jpg';
	import Sharemodal from '$lib/component/Sharemodal.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data;

	let berita = data.berita;
	let meta = data.meta;

	const url = $page.url.href;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.desc} />
	<meta name="googlebot" content="notranslate" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:type" content="news" />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={meta.image} />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.desc} />
	<meta name="twitter:image" content=" {meta.image}" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="text-2xl">
	<div class="md:mt-16">
		<img class="aspect-[3/1] w-full object-cover" src={Newsheader} alt="news header" />
		<div
			class="aspect-[3/1] w-full bg-black absolute top-16 bg-opacity-25 text-white flex items-end justify-between"
		>
			<div class="m-4 capitalize font-semibold text-2xl  sm:text-4xl lg:m-8 xl:text-14">
				{berita.title}
			</div>
			<Sharemodal {url}>
				<div
					class="float-right mr-4 flex h-12 w-12 -translate-y-4 lg:-translate-y-8 cursor-pointer items-center justify-center rounded-full bg-white hover:bg-sky-100"
				>
					<span class="material-icons text-sky-900"> share </span>
				</div>
			</Sharemodal>
		</div>
	</div>
</div>
<main class=" sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto my-6">
	<img class="object-cover aspect-[3/2] mx-2 sm:mx-auto" src={berita.imageUrl} alt="image_berita" />
	<div class="flex mt-4 flex-col gap-2 indent-4 px-2">{@html berita.body}</div>
</main>
