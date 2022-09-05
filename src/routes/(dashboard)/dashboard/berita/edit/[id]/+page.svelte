<script>
	import { db, storage } from '$lib/external/firebase.js';
	import { updateDoc, doc, serverTimestamp } from 'firebase/firestore';
	import { goto } from '$app/navigation';
	import Editor from '@tinymce/tinymce-svelte';
	import { deleteObject, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

	export let data;

	let id = data.id;

	let berita = data.data;

	let inputBody = berita.body;
	let inputTitle = berita.title;
	let oldImageName = berita.imageName;
	let inputImage;
	let uploadImgProgress = 0;
	let imageUrl = berita.imageUrl;
	let newImageName = berita.imageName;
	let editImageMode = false;
	let date = new Date();
	let newImageRef = ref(storage, 'images/' + berita.imageName);

	console.log(inputImage);
	let button = 'bg-green-500 text-white hover:bg-green-400';
	let disabled = '';

	const replaceImage = () => {
		setTimeout(() => {
			const newImage = inputImage[0];
			const newImageExtension = newImage.name.split('.').pop();
			newImageName = `${date.getDate()}-${date.getMonth().toString()}-${date
				.getFullYear()
				.toString()}-berita-${Math.floor(Math.random() * 10000 + 1)}.${newImageExtension}`;

			newImageRef = ref(storage, 'images/' + newImageName);

			const uploadTask = uploadBytesResumable(newImageRef, newImage);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					uploadImgProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '%';
				},
				(error) => {
					alert(error);
				},
				() => {
					imageUrl = URL.createObjectURL(newImage);
					editImageMode = false;
					button = 'bg-green-500 text-white hover:bg-green-400';
					disabled = '';
				}
			);
		}, 300);
	};

	const updateBerita = async () => {
		button = 'bg-slate-300 text-slate-500';
		disabled = 'disabled';
		await getDownloadURL(ref(newImageRef))
			.then((url) => {
				imageUrl = url;
			})
			.catch((error) => {
				alert('error');
			});

		try {
			const beritaRef = doc(db, 'berita', id);
			const docRef = await updateDoc(beritaRef, {
				title: inputTitle,
				body: inputBody,
				imageUrl,
				imageName: newImageName,
				updateAt: serverTimestamp()
			});
			alert('berita berhasil di update');

			const oldImageRef = ref(storage, 'images/' + oldImageName);
			deleteObject(oldImageRef).catch((e) => alert(e));
			goto('/dashboard/berita');
		} catch (e) {
			console.error('Error adding document: ', e);
			button = 'bg-green-500 text-white hover:bg-green-400';
			disabled = '';
		}
	};
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
				scriptSrc="{import.meta.env.VITE_appUrl}/tinymce/tinymce.min.js"
				apiKey={import.meta.env.VITE_tinyMceApiKey}
			/>
		</div>
		<div class="flex flex-col font-semibold gap-1 z-0">
			{#if editImageMode}
				<div class="flex justify-between items-center">
					<label for="image">Image</label>
					<button
						class="py-1 px-2 bg-red-900 rounded text-white"
						on:click={() => (editImageMode = false)}>Batal</button
					>
				</div>
				<div class="bg-white rounded">
					<div class="w-full h-1 bg-slate-300 mt-1 mb-2">
						<div
							style="width: {uploadImgProgress};"
							class="h-1 bg-sky-900 transition-transform duration-300"
						/>
					</div>
					<input
						on:input={replaceImage}
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
			{:else}
				<div class="flex justify-between items-center">
					<div>Image</div>
					<button
						class="py-1 px-2 bg-sky-900 rounded text-white"
						on:click={() => (editImageMode = true)}>Ganti Image</button
					>
				</div>

				<div>
					<img src={imageUrl} alt="" />
				</div>
			{/if}
		</div>
		<input
			class="{button} py-2 px-4 font-bold rounded block cursor-pointer"
			{disabled}
			type="submit"
			value="Update"
		/>
	</form>
</section>
