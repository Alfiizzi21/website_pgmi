<script>
	import { db, storage } from '$lib/external/firebase.js';
	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
	import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
	import { goto } from '$app/navigation';
	import { slugify } from '$lib/script/lib.js';
	import Editor from '@tinymce/tinymce-svelte';

	const host = import.meta.env.VITE_appUrl;

	let inputTitle = ' ';
	let preview = false;
	let uploadImgProgress = '0%';
	let inputBody = ' ';
	let inputImage;
	let imageName;
	let imageUrl;
	let button = 'bg-slate-300 text-slate-500';
	let disabled = 'disabled';
	let date = new Date();
	let imageRef;

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
				body: inputBody,
				year: date.getFullYear(),
				createdAt: serverTimestamp(),
				updateAt: serverTimestamp()
			});
			console.log('Document written with ID: ', docRef.id);
			goto('/dashboard/berita');
		} catch (e) {
			console.error('Error adding document: ', e);
			let button = 'bg-green-500 text-white hover:bg-green-400';
			let disabled = '';
		}
	};
</script>

<section class="dashboard-section">
	<div class="py-2 font-semibold text-lg uppercase">buat berita</div>
	<form class="flex flex-col gap-4" method="post" on:submit|preventDefault={addBerita}>
		<div class="flex flex-col font-semibold gap-1">
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
		<div class="flex flex-col font-semibold gap-1 z-0">
			<label for="title">Body</label>
			<Editor
				bind:value={inputBody}
				scriptSrc="{host}/tinymce/tinymce.min.js"
				apiKey={import.meta.env.VITE_tinyMceApiKey}
			/>
		</div>
		<div class="flex flex-col font-semibold gap-1 z-0">
			<label for="image">Image</label>
			{#if preview}
				<div class="bg-white rounded p-2">
					<img src={preview} alt="" />
				</div>
			{:else}
				<div class="bg-white rounded">
					<div class="w-full h-1 bg-slate-300 mt-1 mb-2">
						<div
							style="width: {uploadImgProgress};"
							class="h-1 bg-sky-900 transition-transform duration-300"
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
					<div class="text-xs px-2 mb-1 font-bold">
						Sangat disarankan mengunakan foto dengan aspect ratio 16:9 !
					</div>
				</div>
			{/if}
		</div>
		<input
			class="py-2 px-4 font-bold rounded block {button} cursor-pointer"
			{disabled}
			type="submit"
			value="Tambah"
		/>
	</form>
</section>
