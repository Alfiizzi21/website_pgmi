<script>
	import img16_9 from '$lib/img/16_9.png';
	import Container from '$lib/component/Container.svelte';
	import { onMount } from 'svelte';
	import { db } from '$lib/external/firebase.js';
	import { timeConverter } from '$lib/script/lib.js';
	import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

	const host = import.meta.env.VITE_appUrl;
	let berita = [];

	const getBerita = async () => {
		const beritaRef = collection(db, 'berita');
		const q = query(beritaRef, orderBy('createdAt', 'desc'), limit(4));
		let tempArr = [];

		let beritaSnapshot = await getDocs(q);

		beritaSnapshot.forEach((doc) => {
			let date = timeConverter(doc.data().createdAt.seconds);
			let data = doc.data();
			data.tanggal = date;
			tempArr = [...tempArr, data];
		});
		berita = tempArr;
	};

	onMount(async () => {
		getBerita();
	});
</script>

<svelte:head>
	<title>PGMI UIN Jambi</title>
</svelte:head>

<section id="hero">
	<div class="absolute aspect-video w-full bg-black opacity-20" />
	<img src="hero.webp" alt="" />
</section>
<Container>
	<div class=" grid grid-cols-4 pb-8">
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
						<div class=" md:row-span-4 xl:row-span-5 md:col-span-2">
							<figure class="overflow-hidden aspect-video w-full">
								<a href="{host}/berita/{b.slug}">
									<img
										class="transition-transform object-cover hover:scale-150"
										src={b.imageUrl}
										alt=""
									/>
								</a>
							</figure>
							<div class="font-semibold uppercase text-slate-400">{b.tanggal}</div>
							<a href="{host}/berita/{b.slug}">
								<h2 class="text-xl font-semibold uppercase hover:text-sky-900">{b.title}</h2>
							</a>
						</div>
					{:else}
						<div class=" flex gap-2">
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

			<!-- {#each news as n, i}
						<div>
							{#if i == 0}
								<div class="m-4">
									<figure class="overflow-hidden aspect-video w-full">
										<a href="#">
											<img class="transition-transform object-cover hover:scale-150" src={n.image} alt="" />
										</a>
									</figure>
									<div class="font-semibold uppercase text-slate-400">17 agustus 2022</div>
									<a href="#">
										<h2 class="text-xl font-semibold uppercase hover:text-sky-900">
											lorem impum dulur
										</h2>
									</a>
								</div>
								{:else}
								<div class="m-4 flex gap-2">
									<div class="overflow-hidden">
										<a href="#">
											<img
												class="h-28 w-28 object-cover object-center transition-transform hover:scale-150"
												src={n.image}
												alt=""
											/>
										</a>
									</div>
									<div class="w-3/4">
										<div class="text-sm font-semibold uppercase text-slate-400">
											17 agustus 2022
										</div>
										<a href="#">
											<h2 class="text-lg font-semibold uppercase hover:text-sky-900">
												lorem impum dulur
											</h2>
										</a>
									</div>
								</div>
							{/if}
						</div>
						{/each} -->
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
			<div class="m-4">
				<div class="flex text-base text-slate-500">
					<div class="flex capitalize">
						<span class="material-icons mr-2"> calendar_month </span>
						kamis, 21 april 2020
					</div>
				</div>
				<h2 class="text-lg font-semibold capitalize">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sed.
				</h2>
			</div>
			<div class="m-4">
				<div class="flex text-base text-slate-500">
					<div class="flex capitalize">
						<span class="material-icons mr-2"> calendar_month </span>
						kamis, 21 april 2020
					</div>
				</div>
				<h2 class="text-lg font-semibold capitalize">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sed.
				</h2>
			</div>
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
