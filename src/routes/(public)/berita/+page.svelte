<script>
	import Newsheader from '$lib/img/newsheader.jpg';
	import Sharemodal from '$lib/component/Sharemodal.svelte';
	import { db } from '$lib/external/firebase.js';
	import { timeConverter, timeConverterToHour, removeTags, truncate } from '$lib/script/lib.js';
	import { collection, getDocs, query, where } from 'firebase/firestore';
	const host = import.meta.env.VITE_appUrl;

	const tanggal = new Date();
	let pilihanTahun;

	const getBeritaByYear = async (year) => {
		year = parseInt(year);
		const beritaRef = collection(db, 'berita');
		const q = query(beritaRef, where('year', '==', year));
		let tempArr = [];
		try {
			let beritaSnapshot = await getDocs(q);

			beritaSnapshot.forEach((doc) => {
				const date = timeConverter(doc.data().createdAt.seconds);
				const hour = timeConverterToHour(doc.data().createdAt.seconds);
				const data = doc.data();
				data.date = date;
				data.hour = hour;
				tempArr = [...tempArr, data];
			});
		} catch (err) {
			alert(err);
		}

		return tempArr;
	};
	const selectYear = async () => {
		setTimeout(() => {
			PromiseBerita = getBeritaByYear(pilihanTahun);
		}, 300);
	};
	let PromiseBerita = getBeritaByYear(tanggal.getFullYear().toString());
</script>

<div class="md:mt-16">
	<img class="aspect-[3/1] w-full object-cover" src={Newsheader} alt="news header" />
	<div class="aspect-[3/1] w-full bg-black absolute top-16 bg-opacity-50 text-white flex items-end">
		<div class="m-4 capitalize font-semibold text-2xl  sm:text-4xl lg:m-8 xl:text-14">
			berita terbaru
		</div>
	</div>
</div>
<div class="p-2 text-sm text-slate-500 sm:p-8">
	<a href={host}>Beranda</a> > <a href="{host}/berita">Berita</a>
</div>
<svelte:head>
	<title>Berita PGMI UIN Jambi</title>
</svelte:head>
<main class="container mx-auto">
	<div class="">
		<select
			on:change={selectYear}
			id="countries"
			bind:value={pilihanTahun}
			class="mx-auto block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900  focus:border-blue-500 focus:ring-blue-500"
		>
			<option value="2022">2022</option>
			<option value="2023">2023</option>
			<option value="2024">2024</option>
			<option value="2025">2025</option>
		</select>
	</div>
	{#await PromiseBerita}
		<div class="w-full flex justify-center my-4">
			<div class="w-10 h-10 border-4 border-t-sky-900 animate-spin rounded-full" />
		</div>
	{:then berita}
		{#if berita.length === 0}
			<div class="w-full text-center my-4 font-semibold">
				Tidak Ada Berita Di Tahun {pilihanTahun}
			</div>
		{:else}
			<section class="my-8 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{#each berita as b}
					<div class="card mx-4 sm:mx-0 shadow-md rounded">
						<figure class="aspect-video md:aspect-[3/2] overflow-hidden rounded">
							<a href="{host}/berita/{b.slug}">
								<img
									class="object-cover w-full cursor-pointer transition-transform duration-500 hover:scale-150 "
									src={b.imageUrl}
									alt=""
								/>
							</a>
						</figure>
						<div class="flex justify-between px-2">
							<div class="flex items-center text-sm font-semibold text-slate-700">
								<span class="material-icons text-base"> calendar_month </span>
								{b.date}
								<span class="material-icons ml-1 text-base"> schedule </span>
								{b.hour}
							</div>
							<Sharemodal url="{host}/berita/{b.slug}">
								<button class=" text-slate-700">
									<span class="material-icons"> share </span>
								</button>
							</Sharemodal>
						</div>
						<a href="{host}/berita/{b.slug}">
							<div class="px-2 pb-2">
								<h2 class="font-semibold text-lg hover:text-sky-900">
									{b.title}
								</h2>
								<p>
									{truncate(removeTags(b.body), 100)}
								</p>
							</div>
						</a>
					</div>
				{/each}
			</section>
		{/if}
	{/await}
</main>
