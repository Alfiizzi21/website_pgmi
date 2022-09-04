<script>
	import img16_9 from '$lib/img/16_9.png';
	import { onMount } from 'svelte';
	import { db } from '$lib/external/firebase.js';
	import { collection, getDocs, doc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
	import Loading from '$lib/component/Loading.svelte';
	import { truncate } from '$lib/script/lib.js';

	let berita = [];
	let loading = true;
	const host = import.meta.env.VITE_appUrl;

	const getBerita = async () => {
		const beritaRef = collection(db, 'berita');
		const q = query(beritaRef, orderBy('updateAt', 'desc'));
		let beritaSnapshot = await getDocs(q);
		let tempArr = [];
		beritaSnapshot.docs.forEach((doc) => {
			let data = doc.data();
			data.id = doc.id;
			tempArr = [...tempArr, data];
		});
		berita = tempArr;
	};

	const deleteBerita = async (id) => {
		if (confirm('anda yakin ingin menghapus ini ?')) {
			loading = true;
			const beritaRef = doc(db, 'berita', id);
			await deleteDoc(beritaRef);
			await getBerita();
			loading = false;
		}
	};

	onMount(async () => {
		await getBerita();
		loading = false;
	});
</script>

<section class="dashboard-section">
	<div class="flex justify-between items-center">
		<div class="py-2 font-semibold text-lg uppercase">Daftar berita</div>
		<a href="{host}/dashboard/berita/add">
			<span class="material-icons hover:text-green-500"> add </span>
		</a>
	</div>

	<div class="overflow-x-auto relative">
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="py-3 px-6 text-center"> Title </th>
					<th scope="col" class="md:w-52 text-center"> Image </th>
					<th class="py-3 px-6"> Body </th>
					<th scope="col" class="py-3 px-6 text-center"> aksi </th>
				</tr>
			</thead>
			<tbody>
				{#each berita as b}
					<tr class="bg-white border-b">
						<th class="py-4 px-6 text-center font-medium">
							{b.title}
						</th>
						<td class="py-4 px-6 text-center">
							<img src={img16_9} alt="news" />
						</td>
						<td class="py-4 px-6">
							{@html truncate(b.body, 100)}
						</td>
						<td class="">
							<div on:click={(e) => deleteBerita(b.id)} class="cursor-pointer hover:text-red-500">
								<span class="material-icons"> delete </span>
							</div>
							<a href="{host}/dashboard/berita/edit/{b.id}" class="hover:text-blue-500">
								<span class="material-icons"> edit </span>
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
{#if loading}
	<div class="right-0 left-0 top-0 bottom-0 bg-black fixed bg-opacity-25">
		<div class="w-40 h-20 mt-28 bg-white rounded mx-auto flex justify-center items-center">
			<div class=" border-4 border-t-sky-500 w-10 h-10 rounded-full animate-spin" />
		</div>
	</div>
{/if}
