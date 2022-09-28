<script>
	import { goto } from '$app/navigation';
	import { db } from '$lib/external/firebase.js';
	import { doc, serverTimestamp, setDoc, Timestamp, updateDoc } from 'firebase/firestore';

	export let data;

	let old = data.data;

	let oldTanggal = new Date(old.tanggal.seconds * 1000);

	const now = new Date();

	const host = import.meta.env.VITE_appUrl;
	let button = 'bg-green-500 text-white hover:bg-green-400';
	let disabled = '';
	let stringselesai = old.stringselesai;
	let kegiatan = old.kegiatan;
	let tanggal = `${oldTanggal.getFullYear()}-0${oldTanggal.getMonth() + 1}-${oldTanggal.getDate()}`;
	let lokasi = old.lokasi;
	let mulai = old.jam.split(' - ')[0];
	let selesai = old.jam.split(' - ')[1];

	const addAgenda = async () => {
		try {
			const agendaRef = doc(db, 'agenda', kegiatan);
			await updateDoc(agendaRef, {
				kegiatan,
				tanggal: Timestamp.fromDate(new Date(tanggal + 'T01:00')),
				lokasi,
				stringselesai,
				jam: stringselesai ? mulai + ' - selesai' : mulai + ' - ' + selesai,
				updateAt: serverTimestamp()
			});
			goto(`${host}/dashboard/agenda`);
		} catch (err) {
			alert(err);
		}
	};
</script>

<section class="dashboard-section">
	<div class="py-2 font-semibold text-lg uppercase">Update agenda</div>
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={addAgenda}>
		<div class="flex flex-col font-semibold gap-1">
			<label for="kegiatan">Nama Kegiatan</label>
			<input
				required
				readonly
				bind:value={kegiatan}
				type="text"
				class="py-1 px-4 text-sm rounded bg-slate-200 text-slate-500"
				name="kegiatan"
				id="kegiatan"
			/>
		</div>
		<div class="flex flex-col font-semibold gap-1">
			<label for="lokasi">Lokasi</label>
			<input
				required
				bind:value={lokasi}
				type="text"
				class="py-1 px-4 text-sm rounded bg-slate-200"
				name="lokasi"
				id="lokasi"
			/>
		</div>
		<div class="flex flex-col font-semibold gap-1 z-0">
			<label for="kegiatan">Tanggal</label>
			<input
				required
				bind:value={tanggal}
				type="date"
				class="py-1 px-4 text-sm rounded bg-slate-200"
			/>
		</div>
		<div class="flex flex-col font-semibold gap-1 z-0">
			<label for="kegiatan">Jam</label>
			<div class="flex gap-2">
				<input
					required
					type="time"
					class="py-1 px-4 w-32 text-sm rounded bg-slate-200"
					bind:value={mulai}
				/>
				<span>-</span>
				<div>
					{#if stringselesai}
						<input class="w-32" type="text" value="Selesai" />
					{:else}
						<input
							required
							type="time"
							class="py-1 px-4 w-32 text-sm rounded bg-slate-200"
							bind:value={selesai}
						/>
					{/if}
				</div>
			</div>
			<div class="text-xs">
				<input type="checkbox" bind:checked={stringselesai} /> sampai dengan selesai
			</div>
		</div>

		<input
			class="py-2 px-4 font-bold rounded block {button} cursor-pointer"
			{disabled}
			type="submit"
			value="Update"
		/>
	</form>
</section>
