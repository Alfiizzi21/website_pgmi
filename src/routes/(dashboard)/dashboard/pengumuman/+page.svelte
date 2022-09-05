<script>
	import { db } from '$lib/external/firebase.js';
	import { collection, getDocs, orderBy, query, doc, deleteDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	const host = import.meta.env.VITE_appUrl;
	let loading = true;
	let pengumuman = [];

	const getPengumuman = async () => {
		loading = true;
		let tempArr = [];
		const pengumumanRef = collection(db, 'pengumuman');
		const q = query(pengumumanRef, orderBy('updateAt', 'desc'));

		const pengumumanSnapshot = await getDocs(q);

		pengumumanSnapshot.forEach((doc) => {
			let data = doc.data();
			data.id = doc.id;
			tempArr = [...tempArr, data];
		});

		pengumuman = tempArr;
		loading = false;
	};
	const deletePengumuman = (id) => {
		loading = true;
		try {
			if (confirm('Anda Yakin?')) {
				const pegumumanRef = doc(db, 'pengumuman', id);
				deleteDoc(pegumumanRef);
				getPengumuman();
			}
		} catch (err) {
			alert(err);
		}
		loading = false;
	};

	onMount(async () => {
		await getPengumuman();
	});
</script>

<section class="dashboard-section">
	<div class="overflow-x-auto relative">
		<div class="flex justify-between items-center">
			<div class="py-2 font-semibold text-lg uppercase">Pengumuman</div>
			<a href="{host}/dashboard/pengumuman/add">
				<span class="material-icons hover:text-green-500"> add </span>
			</a>
		</div>
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="py-3 px-6 text-center"> Pengumuman </th>
					<th class="py-3 px-6 text-center"> Keterangan </th>
					<th scope="col" class="py-3 px-6 text-center"> aksi </th>
				</tr>
			</thead>
			<tbody>
				{#each pengumuman as p}
					<tr class="bg-white border-b">
						<th class="py-4 px-6 text-center font-medium">
							{p.pengumuman}
						</th>
						<td class="py-4 px-6 text-center">
							{@html p.keterangan}
						</td>
						<td class="flex flex-col items-center">
							<div
								on:click={() => deletePengumuman(p.id)}
								class="cursor-pointer hover:text-red-500"
							>
								<span class="material-icons"> delete </span>
							</div>
							<a href="{host}/dashboard/berita/edit/{p.id}" class="hover:text-blue-500">
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
