<script>
	import { db } from '$lib/external/firebase.js';
	import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
	import { goto } from '$app/navigation';
	import Editor from '@tinymce/tinymce-svelte';

	export let data;
	const id = data.id;
	const host = import.meta.env.VITE_appUrl;

	let pengumuman = data.data.pengumuman;
	let keterangan = data.data.keterangan;
	let button = 'bg-green-500 text-white hover:bg-green-400';
	let disabled = '';

	const updatePengumuman = async () => {
		button = 'bg-slate-300 text-slate-500';
		disabled = 'disabled';
		const pengumumanRef = doc(db, 'pengumuman', id);
		try {
			await updateDoc(pengumumanRef, {
				pengumuman,
				keterangan,
				updateAt: serverTimestamp()
			});
			goto('/dashboard/pengumuman');
		} catch (e) {
			console.error('Error adding document: ', e);
			button = 'bg-green-500 text-white hover:bg-green-400';
			disabled = '';
		}
	};
</script>

<section class="dashboard-section">
	<div class="py-2 font-semibold text-lg uppercase">buat berita</div>
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={updatePengumuman}>
		<div class="flex flex-col font-semibold gap-1">
			<label for="title">Pengumuman</label>
			<input
				required
				bind:value={pengumuman}
				type="text"
				class="py-1 px-4 text-sm rounded"
				name="title"
				id="title"
			/>
		</div>
		<div class="flex flex-col font-semibold gap-1 z-0">
			<label for="title">Body</label>
			<Editor
				conf={{
					plugins: ['lists', 'advlist'],
					toolbar:
						' undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify| numlist bullist | outdent indent ',
					menubar: false
				}}
				bind:value={keterangan}
				scriptSrc="{host}/tinymce/tinymce.min.js"
			/>
		</div>
		<input
			class="py-2 px-4 font-bold rounded block {button} cursor-pointer"
			{disabled}
			type="submit"
			value="simpan"
		/>
	</form>
</section>
