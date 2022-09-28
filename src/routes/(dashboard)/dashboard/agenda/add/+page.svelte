<script>
	import { goto } from '$app/navigation';
	import { db } from '$lib/external/firebase.js';
	import { doc, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';

	const now = new Date();

	const host = import.meta.env.VITE_appUrl;
	let button = 'bg-green-500 text-white hover:bg-green-400';
	let disabled = '';
	let stringselesai = true;
	let kegiatan;
	let tanggal;
	let lokasi;
	let mulai = `${now.getHours()}:${
		now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
	}`;
	let selesai = mulai;

	const addAgenda = async () => {
		try {
			const agendaRef = doc(db, 'agenda', kegiatan);
			await setDoc(agendaRef, {
				kegiatan,
				tanggal: Timestamp.fromDate(new Date(tanggal + 'T01:00')),
				lokasi,
				stringselesai,
				jam: stringselesai ? mulai + ' - selesai' : mulai + ' - ' + selesai,
				createdAt: serverTimestamp(),
				updateAt: serverTimestamp()
			});
			goto(`${host}/dashboard/agenda`);
		} catch (err) {
			alert(err);
		}
	};
</script>

<section class="dashboard-section">
	<div class="py-2 font-semibold text-lg uppercase">buat agenda</div>
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={addAgenda}>
		<div class="flex flex-col font-semibold gap-1">
			<label for="kegiatan">Nama Kegiatan</label>
			<input
				required
				bind:value={kegiatan}
				type="text"
				class="py-1 px-4 text-sm rounded bg-slate-200"
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
			value="Tambah"
		/>
	</form>
</section>
