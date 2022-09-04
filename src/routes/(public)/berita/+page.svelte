<script>
	import Newsheader from '$lib/img/newsheader.jpg';
	import Newsimg from '$lib/img/16_9.png';
	import { page } from '$app/stores';
	import Sharemodal from '$lib/component/Sharemodal.svelte';
	import { db } from '$lib/external/firebase.js';
	import { timeConverter, timeConverterToHour } from '$lib/script/lib.js';
	import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
	import { onMount } from 'svelte';
	const host = import.meta.env.VITE_appUrl;

	let berita = [];

	let pilihanTahun;

	const getBeritaByYear = async (year) => {
		year = parseInt(year);
		console.log(year);
		const beritaRef = collection(db, 'berita');
		const q = query(beritaRef, where('year', '==', year));
		let tempArr = [];

		let beritaSnapshot = await getDocs(q);

		beritaSnapshot.forEach((doc) => {
			const date = timeConverter(doc.data().createdAt.seconds);
			const hour = timeConverterToHour(doc.data().createdAt.seconds);
			const data = doc.data();
			data.date = date;
			data.hour = hour;
			tempArr = [...tempArr, data];
		});
		berita = tempArr;
	};
	const selectYear = async () => {
		setTimeout(() => {
			getBeritaByYear(pilihanTahun);
		}, 500);
	};

	let params = $page.url.searchParams;
	console.log(params.get('year'));

	onMount(async () => {
		const tanggal = new Date();
		getBeritaByYear(tanggal.getFullYear().toString());
	});
</script>

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
		berita terbaru
	</div>
</div>
<div class="p-2 text-sm text-slate-500 sm:p-8">
	<a href={host}>Beranda</a> > <a href="{host}/berita">Semua Berita</a>
</div>
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
	<section class="my-8 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each berita as b}
			<div class="card mx-4 sm:mx-0">
				<figure class="overflow-hidden">
					<a href="{host}/berita/{b.slug}">
						<img
							class="hover:scale-150 transition-transform duration-500 cursor-pointer"
							src={Newsimg}
							alt=""
						/>
					</a>
				</figure>
				<div class="flex justify-between pt-2">
					<div class="flex text-sm font-semibold text-slate-700">
						<span class="material-icons text-base"> calendar_month </span>
						{b.date}
						<span class="material-icons ml-1 text-base"> schedule </span>
						{b.hour}
					</div>
					<Sharemodal url="{host}/berita/{b.slug}">
						<button class="">
							<span class="material-icons"> share </span>
						</button>
					</Sharemodal>
				</div>
				<a href="{host}/berita/{b.slug}">
					<h2 class="text-lg font-semibold hover:text-sky-900 cursor-pointer">
						{b.title}
					</h2>
				</a>
			</div>
		{/each}

		<!-- <div class="card mx-4 sm:mx-0">
			<img src={Newsimg} alt="" />
			<div class="flex justify-between pt-2">
				<div class="flex text-sm font-semibold text-slate-700">
					<span class="material-icons text-base"> calendar_month </span>
					17/8/2022
					<span class="material-icons ml-1 text-base"> schedule </span>
					17:30
				</div>
				<Sharemodal url="tes">
					<button class="">
						<span class="material-icons"> share </span>
					</button>
				</Sharemodal>
			</div>

			<h2 class="text-lg font-semibold">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eveniet.
			</h2>
		</div>
		<div class="card mx-4 sm:mx-0">
			<img src={Newsimg} alt="" />
			<div class="flex justify-between pt-2">
				<div class="flex text-sm font-semibold text-slate-700">
					<span class="material-icons text-base"> calendar_month </span>
					17/8/2022
					<span class="material-icons ml-1 text-base"> schedule </span>
					17:30
				</div>
				<Sharemodal url="tes">
					<button class="">
						<span class="material-icons"> share </span>
					</button>
				</Sharemodal>
			</div>

			<h2 class="text-lg font-semibold">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, eveniet.
			</h2>
		</div> -->
	</section>
	<!-- <embed src= "" width= "500" height= "375"> -->
	<!-- <div class="my-8 ">

		<nav aria-label="Page navigation example" class="mx-auto">
			<ul class="inline-flex -space-x-px">
			  <li>
				<a href="#" class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
			  </li>
			  <li>
				<a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
			  </li>
			  <li>
				<a href="#" aria-current="page" class="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700">2</a>
			  </li>
			  <li>
				<a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">Next</a>
			  </li>
			</ul>
		  </nav>
		  
	</div> -->
</main>

<style>
	#header {
		aspect-ratio: 3/1;
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>
