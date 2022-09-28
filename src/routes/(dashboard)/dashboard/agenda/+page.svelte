<script>
	import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
	import { db } from '$lib/external/firebase.js';
	import { timeConverter, timeConverterToDay, truncate, removeTags } from '$lib/script/lib.js';
	import { onMount } from 'svelte';

	let agenda = [];

	const host = import.meta.env.VITE_appUrl;

	const getAgendaeSection = async () => {
		try {
			let tempArr = [];
			const agendaRef = collection(db, 'agenda');
			const q = query(agendaRef, orderBy('updateAt'));
			const agendaSnapshot = await getDocs(q);
			agendaSnapshot.docs.forEach((doc) => {
				let data = doc.data();
				data.id = doc.id;
				data.tanggal = timeConverter(data.tanggal.seconds);
				tempArr = [...tempArr, data];
			});
			agenda = tempArr;
		} catch (err) {
			console.log(err);
		}
	};
	const deleteAgendaeSection = async (id) => {
		try {
			const agendaLinkRef = doc(db, 'agendaLink', id);
			await deleteDoc(agendaLinkRef);
			const agendaSectionRef = doc(db, 'agenda', id);
			await deleteDoc(agendaSectionRef);
			getAgendaeSection();
		} catch (err) {
			console.log(err);
		}
	};

	onMount(() => {
		getAgendaeSection();
	});
</script>

{#each agenda as p}
	<section class="dashboard-section">
		<div class="flex gap-2 items-center justify-between">
			<h2 class="py-2 font-semibold text-lg uppercase">{p.kegiatan}</h2>
			<div class="">
				<a href="./agenda/edit/{p.id}">
					<span class="material-icons cursor-pointer hover:text-blue-500"> edit </span>
				</a>
				<span
					on:click={() => deleteAgendaeSection(p.id)}
					class="material-icons cursor-pointer hover:text-red-500"
				>
					delete
				</span>
			</div>
		</div>
		<div class="m-4 flex gap-4 justify-center">
			<div class="w-14 h-20 rounded border border-sky-900 text-center font-semibold">
				<div class="center_all h-2/3 bg-sky-900 text-4xl text-white">{p.tanggal.split(' ')[0]}</div>
				<div class="rounded-b bg-white uppercase text-sky-900">{p.tanggal.split(' ')[1]}</div>
			</div>
			<div class="agenda">
				<div class="agenda_ket flex flex-col text-base text-slate-500">
					<div class="flex ">
						<span class="material-icons mr-2"> schedule </span>
						{p.jam}
					</div>
					<div class="flex">
						<span class="material-icons mr-2"> pin_drop </span>
						{p.lokasi}
					</div>
					<div class="flex">
						<span class="material-icons mr-2"> calendar_today </span>
						{p.tanggal}
					</div>
				</div>
			</div>
		</div>
	</section>
{/each}

<a href="./agenda/add">
	<section class="dashboard-section p-2 bg-sky-800 text-center cursor-pointer text-white">
		Tambahkan Agenda Baru
	</section>
</a>
