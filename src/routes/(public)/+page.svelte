<script>
	import Container from '$lib/component/Container.svelte';
	import { db } from '$lib/external/firebase.js';
	import { timeConverter, timeConverterToDay, truncate, removeTags } from '$lib/script/lib.js';
	import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
	import { onMount } from 'svelte';
	const host = import.meta.env.VITE_appUrl;

	let berita = [];
	let pengumuman = [];

	const getBerita = async () => {
		const beritaRef = collection(db, 'berita');
		const q = query(beritaRef, orderBy('createdAt', 'desc'), limit(5));
		let tempArr = [];

		let beritaSnapshot = await getDocs(q);

		beritaSnapshot.forEach((doc) => {
			let data = doc.data();
			let date = timeConverter(data.createdAt.seconds);
			let day = timeConverterToDay(data.createdAt.seconds);
			data.tanggal = date;
			data.hari = day;
			tempArr = [...tempArr, data];
		});
		return tempArr;
	};
	const getPengumuman = async () => {
		const pengumumanRef = collection(db, 'pengumuman');
		const q = query(pengumumanRef, orderBy('createdAt', 'desc'), limit(4));
		let tempArr = [];

		let pengumumanSnapshot = await getDocs(q);

		pengumumanSnapshot.forEach((doc) => {
			let data = doc.data();
			let date = timeConverter(data.createdAt.seconds);
			let day = timeConverterToDay(data.createdAt.seconds);
			data.tanggal = date;
			data.hari = day;
			tempArr = [...tempArr, data];
		});
		return tempArr;
	};
	onMount(async () => {
		berita = await getBerita();
		pengumuman = await getPengumuman();
	});
</script>

<svelte:head>
	<title>PGMI UIN Jambi</title>
</svelte:head>

<section id="hero">
	<div class="absolute aspect-video w-full bg-black opacity-20" />
	<picture class="w-full">
		<source media="(max-width: 640px)" srcset="hero-640w.jpg" />
		<source media="(max-width: 768px)" srcset="hero-768w.jpg" />
		<source media="(max-width: 1024px)" srcset="hero-1024w.jpg" />
		<source media="(min-width: 1280px)" srcset="hero-1280w.jpg" />
		<img class="w-full" src="hero.webp" alt="Chris standing up holding his daughter Elva" />
	</picture>
</section>
<Container>
	<div class="grid grid-cols-4 pb-8">
		<section class="col-span-4">
			<div class="section_title my-8">
				<h1 class="text-center text-2xl font-bold text-sky-900">BERITA TERBARU</h1>

				<div class="font-semibold text-sky-700">
					<a class="mx-auto flex w-max" href="/berita">
						<div>Lihat Semua Berita</div>
						<span class="material-icons"> arrow_right_alt </span>
					</a>
				</div>
			</div>
			<div class="grid md:grid-cols-3 md:grid-rows-4 xl:grid-rows-5 gap-2">
				{#each berita as b, i}
					{#if i == 0}
						<div class="mx-4 md:mx-0 md:row-span-4 xl:row-span-5 md:col-span-2">
							<figure class="overflow-hidden aspect-video w-full">
								<a href="{host}/berita/{b.slug}">
									<img
										class="transition-transform object-cover hover:scale-150"
										src={b.imageUrl}
										alt=""
									/>
								</a>
							</figure>
							<div class="font-semibold uppercase text-slate-400">{b.hari},{b.tanggal}</div>
							<a href="{host}/berita/{b.slug}">
								<h2 class="text-xl font-semibold uppercase hover:text-sky-900">{b.title}</h2>
								<div class="indent-4">{truncate(removeTags(b.body), 150)}</div>
							</a>
						</div>
					{:else}
						<div class="mx-4 md:mx-0 flex gap-2">
							<div class="overflow-hidden">
								<a href="{host}/berita/{b.slug}">
									<img
										class="h-28 w-28 object-cover object-center transition-transform hover:scale-150"
										src={b.imageUrl}
										alt=""
									/>
								</a>
							</div>
							<div class="w-3/4">
								<div class="text-sm font-semibold uppercase text-slate-400">{b.tanggal}</div>
								<a href="{host}/berita/{b.slug}">
									<h2 class="text-lg font-semibold uppercase hover:text-sky-900">{b.title}</h2>
								</a>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</section>
		<section class="col-span-4 lg:col-span-2">
			<div class="section_title my-8 mx-2 ">
				<h1 class="text-center text-2xl font-bold text-sky-900">AGENDA</h1>
			</div>
			<div>
				<div class="m-4 flex gap-4">
					<div class="w-16 rounded border border-sky-900 text-center font-semibold">
						<div class="center_all h-2/3 rounded-t bg-sky-900 text-4xl text-white">17</div>
						<div class="rounded-b bg-white uppercase text-sky-900">agu</div>
					</div>
					<div class="agenda w-3/4">
						<h2 class="agenda_title  text-lg font-semibold">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dolores.
						</h2>
						<div class="agenda_ket flex flex-col text-base text-slate-500 md:flex-row md:gap-4">
							<div class="flex ">
								<span class="material-icons mr-2"> schedule </span>
								07:30 - 09-11
							</div>
							<div class="flex">
								<span class="material-icons mr-2"> pin_drop </span>
								UIN Mendalo
							</div>
						</div>
					</div>
				</div>
				<div class="m-4 flex gap-4">
					<div class="w-16 rounded border border-sky-900 text-center font-semibold">
						<div class="center_all h-2/3 rounded-t bg-sky-900 text-4xl text-white">21</div>
						<div class="rounded-b bg-white uppercase text-sky-900">apr</div>
					</div>
					<div class="agenda w-3/4">
						<h2 class="agenda_title  text-lg font-semibold">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dolores.
						</h2>
						<div class="agenda_ket flex flex-col text-base text-slate-500 md:flex-row md:gap-4">
							<div class="flex ">
								<span class="material-icons mr-2"> schedule </span>
								07:30 - 09-11
							</div>
							<div class="flex">
								<span class="material-icons mr-2"> pin_drop </span>
								UIN Mendalo
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="col-span-4 lg:col-span-2">
			<div class="section_title my-8 mx-2 ">
				<h1 class="text-center text-2xl font-bold text-sky-900">PENGUMUMAN</h1>
			</div>
			{#each pengumuman as p}
				<div class="m-4">
					<div class="flex text-base text-slate-500">
						<div class="flex capitalize">
							<span class="material-icons mr-2"> calendar_month </span>
							{p.hari}, {p.tanggal}
						</div>
					</div>
					<h2 class="text-lg font-semibold capitalize">
						{p.pengumuman}
					</h2>
				</div>
			{/each}
		</section>
	</div>
</Container>

<style>
	.center_all {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
