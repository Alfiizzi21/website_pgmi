<script>
	import { db } from '$lib/external/firebase.js';
	import { updateDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Editor from '@tinymce/tinymce-svelte';

	const host = import.meta.env.VITE_appUrl;

	let inputTitle;
	let inputBody;
	let renderBody = false;

	let button = 'bg-green-500 text-white hover:bg-green-400';
	let disabled = '';

	const beritaRef = doc(db, 'berita', $page.params.id);

	const getBerita = async () => {
		const beritaSnapshot = await getDoc(beritaRef);
		const data = beritaSnapshot.data();
		inputTitle = data.title;
		inputBody = data.body;
		renderBody = true;
	};

	const updateBerita = async () => {
		button = 'bg-slate-300 text-slate-500';
		disabled = 'disabled';

		try {
			const docRef = await updateDoc(beritaRef, {
				title: inputTitle,
				body: inputBody,
				updateAt: serverTimestamp()
			});
			alert('berita berhasil di update');
			goto('/dashboard/berita');
		} catch (e) {
			console.error('Error adding document: ', e);
			button = 'bg-green-500 text-white hover:bg-green-400';
			disabled = '';
		}
	};
	onMount(async () => {
		getBerita();
	});
</script>

<section class="dashboard-section">
	<div class="py-2 font-semibold text-lg uppercase">Update berita</div>
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={updateBerita}>
		<div class="flex flex-col font-semibold gap-1">
			<label for="title">Title</label>
			<input
				bind:value={inputTitle}
				type="text"
				class="py-1 px-4 text-sm rounded"
				name="title"
				id="title"
			/>
		</div>
		<div class="flex flex-col font-semibold gap-1 z-0">
			<label for="title">Body</label>
			<Editor
				bind:value={inputBody}
				scriptSrc="{host}/tinymce/tinymce.min.js"
				apiKey={import.meta.env.VITE_tinyMceApiKey}
			/>
		</div>
		<!-- <div class="flex flex-col font-semibold gap-1 z-0">
                <label for="image">Image</label>
                <input bind:files="{image}" class="bg-white px-4 py-2 rounded text-sm cursor-pointer" type="file" name="image" id="image">
            </div> -->
		<input
			class="py-2 px-4 font-bold rounded block {button} cursor-pointer"
			{disabled}
			type="submit"
			value="Update"
		/>
	</form>
</section>
