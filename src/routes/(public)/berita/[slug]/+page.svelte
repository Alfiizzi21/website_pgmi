<script>
	import Newsheader from '$lib/img/newsheader.jpg';
	import Sharemodal from '$lib/component/Sharemodal.svelte';
	import { page } from '$app/stores';
	import { timeConverter, timeConverterToHour } from '$lib/script/lib.js';
	export let data;
	const host = import.meta.env.VITE_appUrl;

	let berita = data.berita;

	const url = $page.url.href;
</script>

<svelte:head>
	<title>{berita.title}</title>
	<meta name="description" content={berita.desc} />
	<meta name="googlebot" content="notranslate" />
	<meta property="og:title" content={berita.title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={berita.imageUrl} />
</svelte:head>

<div class="text-2xl">
	<div class="md:mt-16">
		<img class="aspect-[3/1] w-full object-cover" src={Newsheader} alt="news header" />
		<div
			class="aspect-[3/1] w-full bg-black absolute top-16 bg-opacity-50 text-white flex items-end justify-between"
		>
			<div class="m-4 lg:m-8">
				<h1 class="capitalize font-semibold text-2xl  sm:text-3xl  xl:text-14">
					{berita.title}
				</h1>
				<div class="text-sm  font-semibold">
					PGMI UIN Jambi, {timeConverter(berita.createdAt.seconds)}, {timeConverterToHour(
						berita.createdAt.seconds
					)}
				</div>
			</div>

			<Sharemodal {url} title={berita.title}>
				<div
					class="float-right mr-4 flex h-12 w-12 -translate-y-4 lg:-translate-y-8 cursor-pointer items-center justify-center rounded-full bg-white hover:bg-sky-100"
				>
					<span class="material-icons text-sky-900"> share </span>
				</div>
			</Sharemodal>
		</div>
	</div>
</div>
<div class="p-2 text-sm text-slate-500 sm:py-4 sm:px-8">
	<a href={host}>Beranda</a> > <a href="{host}/berita">Berita</a> >
	<a href="{host}/berita/{berita.slug}">{berita.title}</a>
</div>
<main class="mt-4 mb-8 xl:max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl mx-auto">
	<article
		class="prose px-2 sm:px-0 max-w-none prose-p:indent-4 prose-img:rounded-md prose-img:shadow-md"
	>
		<img src={berita.imageUrl} alt={berita.imageName} />
		<h2 class="w-0 h-0 opacity-0">{berita.title}</h2>
		{@html berita.body}
	</article>
</main>
