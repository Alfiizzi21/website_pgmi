<script>
	import Editor from '@tinymce/tinymce-svelte';
	import { slugify } from '$lib/script/lib.js';
	import { goto } from '$app/navigation';
	import { db } from '$lib/external/firebase.js';
	import { addDoc, collection, doc, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
	const host = import.meta.env.VITE_appUrl;

	export let data;
	const id = data.id;

	let button = 'bg-green-500 text-white hover:bg-green-400';
	let disabled = '';
	let title = data.data.title;
	let body = data.data.body;

	const updateSection = async () => {
		try {
			const profilLinkRef = doc(db, 'profilLink', id);
			await setDoc(profilLinkRef, {
				title,
				secRef: slugify(title)
			});
			const profilRef = doc(db, 'profil', id);
			await setDoc(profilRef, {
				title,
				secRef: slugify(title),
				body,
				updateAt: serverTimestamp()
			});
			goto(`${host}/dashboard/profil`);
		} catch (err) {
			alert(err);
		}
	};
</script>

<section class="dashboard-section">
	<div class="py-2 font-semibold text-lg uppercase">buat profil section</div>
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={updateSection}>
		<div class="flex flex-col font-semibold gap-1">
			<label for="title">Pengumuman</label>
			<input
				required
				bind:value={title}
				type="text"
				class="py-1 px-4 text-sm rounded"
				name="title"
				id="title"
			/>
		</div>
		<div class="flex flex-col font-semibold gap-1 z-0">
			<label for="title">Keterangan</label>
			<Editor
				bind:value={body}
				scriptSrc="{host}/tinymce/tinymce.min.js"
				apiKey={import.meta.env.VITE_tinyMceApiKey}
			/>
		</div>
		<input
			class="py-2 px-4 font-bold rounded block {button} cursor-pointer"
			{disabled}
			type="submit"
			value="Tambah"
		/>
	</form>
</section>
