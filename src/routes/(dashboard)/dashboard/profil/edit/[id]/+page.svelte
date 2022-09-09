<script>
	import { slugify } from '$lib/script/lib.js';
	import { goto } from '$app/navigation';
	import { db } from '$lib/external/firebase.js';
	import { doc, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
	import { onMount } from 'svelte';
	const host = import.meta.env.VITE_appUrl;

	export let data;
	const id = data.id;

	let editor;

	let button = 'bg-green-500 text-white hover:bg-green-400';
	let disabled = '';
	let title = data.data.title;

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
				body: editor.getData(),
				updateAt: serverTimestamp()
			});
			goto(`${host}/dashboard/profil`);
		} catch (err) {
			alert(err);
		}
	};

	onMount(async () => {
		editor = await loadingEditor();
	});
</script>

<section class="dashboard-section">
	<div class="py-2 font-semibold text-lg uppercase">buat profil section</div>
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={updateSection}>
		<div class="flex flex-col gap-1">
			<label class="font-semibold" for="title">Title</label>
			<input
				required
				bind:value={title}
				type="text"
				class="py-1 px-4 text-sm rounded"
				name="title"
				id="title"
			/>
		</div>
		<div class="flex flex-col gap-1 z-0">
			<label class="font-semibold" for="title">Body</label>
			<textarea value={data.data.body} name="body" id="editor" />
		</div>
		<input
			class="py-2 px-4 font-bold rounded block {button} cursor-pointer"
			{disabled}
			type="submit"
			value="Simpan"
		/>
	</form>
</section>
