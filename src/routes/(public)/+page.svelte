<script>
	import { db } from '$lib/external/firebase.js';
	import { timeConverter, timeConverterToDay, truncate, removeTags } from '$lib/script/lib.js';
	import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
	import { onMount } from 'svelte';
	const host = import.meta.env.VITE_appUrl;

	let berita = new Promise((resolve) => {
		setInterval(() => {
			resolve;
		}, 100);
	});
	let pengumuman = new Promise((resolve) => {
		setInterval(() => {
			resolve;
		}, 100);
	});

	let agenda = new Promise((resolve) => {
		setInterval(() => {
			resolve;
		}, 100);
	});

	let welcomeClass = 'opacity-0 translate-y-40  text-xs';

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
	const getAgenda = async () => {
		const agendaRef = collection(db, 'agenda');
		const q = query(agendaRef, orderBy('createdAt', 'desc'), limit(4));
		let tempArr = [];

		let agendaSnapshot = await getDocs(q);

		agendaSnapshot.forEach((doc) => {
			let data = doc.data();
			let date = timeConverter(data.tanggal.seconds);
			let day = timeConverterToDay(data.tanggal.seconds);
			data.tanggal = date;
			data.hari = day;
			tempArr = [...tempArr, data];
		});
		return tempArr;
	};
	onMount(async () => {
		welcomeClass = 'text-xl sm:text-2xl lg:text-4xl w-60 lg:w-96';
		berita = await getBerita();
		agenda = await getAgenda();
		pengumuman = await getPengumuman();
	});
</script>

<svelte:head>
	<title>PGMI UIN Jambi</title>
</svelte:head>

<section id="hero">
	<div
		class="absolute aspect-video w-full bg-black bg-opacity-60 flex flex-col justify-center items-center"
	>
		<h1 class="text-white font-bold text-center transition-all duration-1000 {welcomeClass}">
			Selamat Datang Di <br /> Website Resmi <span class="block text-sky-600">PGMI UIN Jambi</span>
		</h1>
	</div>
	<picture class="w-full">
		<source media="(max-width: 640px)" srcset="image/hero-640w.jpg" />
		<source media="(max-width: 768px)" srcset="image/hero-768w.jpg" />
		<source media="(max-width: 1024px)" srcset="image/hero-1024w.jpg" />
		<source media="(max-width: 1280px)" srcset="image/hero-1280w.jpg" />
		<img width="1920" height="1080" class="w-full" src="image/hero.webp" alt="hero" />
	</picture>
</section>
<main class="container mx-auto">
	<div class="grid grid-cols-4 pb-8">
		<section class="col-span-4">
			<div class="section_title my-8">
				<h2 class="text-center text-xl md:text-2xl font-bold text-sky-900">BERITA TERBARU</h2>
				<div class="font-semibold text-sky-700">
					<a class="mx-auto flex w-max" href="/berita">
						<div>Lihat Semua Berita</div>
						<span class="material-icons"> arrow_right_alt </span>
					</a>
				</div>
			</div>
			<div class="grid md:grid-cols-3 md:grid-rows-4 xl:grid-rows-5 gap-2">
				{#await berita}
					<div class="mx-4 md:mx-0 md:row-span-4 xl:row-span-5 md:col-span-2 animate-pulse">
						<div class="aspect-video bg-slate-300" />
						<div class="w-36 mt-1 bg-slate-200 h-5 " />
						<div class="mt-2 bg-slate-400 h-6 " />
						<div class="mt-2 bg-slate-300 h-4 ml-4" />
						<div class="mt-2 bg-slate-300 h-4 md:hidden" />
						<div class="w-[350px] mt-2 bg-slate-300 h-4" />
					</div>
				{:then berita}
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
									<h3 class="text-xl font-semibold uppercase hover:text-sky-900">{b.title}</h3>
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
										<h3 class="text-lg font-semibold uppercase hover:text-sky-900">{b.title}</h3>
									</a>
								</div>
							</div>
						{/if}
					{/each}
				{:catch}
					<div class="bg-red-300 text-red-600 border border-red-600 p-2">error</div>
				{/await}
			</div>
		</section>
		<section class="col-span-4 lg:col-span-2">
			<div class="section_title my-8 mx-2 ">
				<h2 class="text-center text-xl md:text-2xl font-bold text-sky-900">AGENDA</h2>
			</div>
			<div>
				{#await agenda}
					<div>Loading</div>
				{:then agenda}
					{#each agenda as a}
						<div class="m-4 flex gap-4">
							<div class="w-16 h-20 rounded border border-sky-900 text-center font-semibold">
								<div class="center_all h-2/3 bg-sky-900 text-4xl text-white">
									{a.tanggal.split(' ')[0]}
								</div>
								<div class="rounded-b bg-white uppercase text-sky-900">
									{a.tanggal.split(' ')[1]}
								</div>
							</div>
							<div class="agenda w-3/4">
								<h3 class="agenda_title  text-lg sm:text-xl capitalize font-semibold">
									{a.kegiatan}
								</h3>
								<div class="agenda_ket flex flex-col text-base text-slate-500 md:flex-row md:gap-4">
									<div class="flex ">
										<span class="material-icons mr-2"> schedule </span>
										{a.jam}
									</div>
									<div class="flex">
										<span class="material-icons mr-2"> pin_drop </span>
										{a.lokasi}
									</div>
								</div>
							</div>
						</div>
					{/each}
				{/await}
			</div>
		</section>
		<section class="col-span-4 lg:col-span-2">
			<div class="section_title my-8 mx-2 ">
				<h2 class="text-center text-xl md:text-2xl font-bold text-sky-900">PENGUMUMAN</h2>
			</div>
			{#await pengumuman}
				<div>loading</div>
			{:then pengumuman}
				{#each pengumuman as p}
					<div class="m-4">
						<div class="flex text-base text-slate-500">
							<div class="flex capitalize">
								<span class="material-icons mr-2"> calendar_month </span>
								{p.hari}, {p.tanggal}
							</div>
						</div>
						<h3 class="text-lg sm:text-xl capitalize">
							{p.pengumuman}
						</h3>
					</div>
				{/each}
			{/await}
		</section>
	</div>
</main>

<style>
	.center_all {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
