<script>
	import { db } from '$lib/external/firebase.js';
	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
	import { goto } from '$app/navigation';
	import Editor from '@tinymce/tinymce-svelte';
	import { onMount } from 'svelte';

	const host = import.meta.env.VITE_appUrl;

	let editor;

	let pengumuman = ' ';
	let keterangan = ' ';
	let button = 'bg-green-500 text-white hover:bg-green-400';
	let disabled = '';
	let date = new Date();

	const loadingEditor = async () => {
		try {
			const module = await import('@ckeditor/ckeditor5-build-classic');
			let ClassicEditor = module.default;
			let editor = await ClassicEditor.create(document.querySelector('#editor'));
			return editor;
		} catch (error) {
			console.log(error);
		}
	};

	const addPengumuman = async () => {
		button = 'bg-slate-300 text-slate-500';
		disabled = 'disabled';

		const pengumumanRef = collection(db, 'pengumuman');
		try {
			const docRef = await addDoc(pengumumanRef, {
				pengumuman,
				keterangan: editor.getData(),
				createdAt: serverTimestamp(),
				updateAt: serverTimestamp()
			});
			console.log('Document written with ID: ', docRef.id);
			goto('/dashboard/pengumuman');
		} catch (e) {
			console.error('Error adding document: ', e);
			button = 'bg-green-500 text-white hover:bg-green-400';
			disabled = '';
		}
	};
	onMount(async () => {
		editor = await loadingEditor();
	});
</script>

<section class="dashboard-section">
	<div class="py-2 font-semibold text-lg uppercase">buat berita</div>
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={addPengumuman}>
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
			<textarea name="body" id="editor" />
		</div>
		<input
			class="py-2 px-4 font-bold rounded block {button} cursor-pointer"
			{disabled}
			type="submit"
			value="Tambah"
		/>
	</form>
</section>
