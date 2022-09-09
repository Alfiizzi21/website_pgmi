<script>
	import { db, storage } from '$lib/external/firebase.js';
	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
	import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
	import { goto } from '$app/navigation';
	import { slugify } from '$lib/script/lib.js';
	import { onMount } from 'svelte';

	let editor;
	let inputTitle = ' ';
	let uploadImgProgress = '0%';
	let inputImage;

	let imageName;
	let imageUrl;

	let preview = false;
	let button = 'bg-slate-300 text-slate-500';
	let disabled = 'disabled';
	let date = new Date();
	let imageRef;

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

	const uploadImg = async () => {
		setTimeout(() => {
			const image = inputImage[0];
			const imageExtension = image.name.split('.').pop();
			imageName = `${date.getDate()}-${date.getMonth().toString()}-${date
				.getFullYear()
				.toString()}-berita-${Math.floor(Math.random() * 10000 + 1)}.${imageExtension}`;
			console.log(imageName);

			imageRef = ref(storage, 'images/' + imageName);

			const uploadTask = uploadBytesResumable(imageRef, image);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					uploadImgProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '%';
				},
				(error) => {
					alert(error);
				},
				() => {
					alert('image berhasil di upload');
					preview = URL.createObjectURL(image);
					button = 'bg-green-500 text-white hover:bg-green-400';
					disabled = '';
				}
			);
		}, 500);
	};

	const addBerita = async () => {
		button = 'bg-slate-300 text-slate-500';
		disabled = 'disabled';
		await getDownloadURL(ref(imageRef))
			.then((url) => {
				imageUrl = url;
			})
			.catch((error) => {
				alert('error');
			});

		const beritaRef = collection(db, 'berita');
		try {
			const docRef = await addDoc(beritaRef, {
				title: inputTitle,
				slug: slugify(inputTitle),
				imageUrl: imageUrl,
				imageName: imageName,
				body: editor.getData(),
				year: date.getFullYear(),
				createdAt: serverTimestamp(),
				updateAt: serverTimestamp()
			});
			console.log('Document written with ID: ', docRef.id);
			goto('/dashboard/berita');
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
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={addBerita}>
		<div class="flex flex-col gap-1">
			<label for="title">Title</label>
			<input
				required
				bind:value={inputTitle}
				type="text"
				class="py-1 px-4 text-sm rounded"
				name="title"
				id="title"
			/>
		</div>
		<div class="flex flex-col gap-1 z-0">
			<label for="image">Image</label>
			{#if preview}
				<div class="bg-white rounded p-2">
					<img src={preview} alt="" />
				</div>
			{:else}
				<div class="bg-white py-2 rounded">
					<div class="w-full h-1 bg-slate-300 mb-1">
						<div
							style="width: {uploadImgProgress};"
							class="h-1 bg-sky-900 transition-transform duration-500"
						/>
					</div>
					<input
						on:input={uploadImg}
						bind:files={inputImage}
						class="px-4 py-1 rounded text-sm cursor-pointer"
						type="file"
						accept="image/*"
						name="image"
						id="image"
					/>
				</div>
			{/if}
		</div>
		<div class="flex flex-col gap-1 z-0">
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
