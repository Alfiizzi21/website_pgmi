<script>
	import { collection, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
	import { db } from '$lib/external/firebase.js';
	import { onMount } from 'svelte';

	let profil = [];

	const host = import.meta.env.VITE_appUrl;

	const getProfileSection = async () => {
		try {
			let tempArr = [];
			const profilRef = collection(db, 'profil');
			const q = query(profilRef, orderBy('updateAt'));
			const profilSnapshot = await getDocs(q);
			profilSnapshot.docs.forEach((doc) => {
				let data = doc.data();
				data.id = doc.id;
				tempArr = [...tempArr, data];
			});
			profil = tempArr;
		} catch (err) {
			console.log(err);
		}
	};
	const deleteProfileSection = async (id) => {
		try {
			const profilLinkRef = doc(db, 'profilLink', id);
			await deleteDoc(profilLinkRef);
			const profilSectionRef = doc(db, 'profil', id);
			await deleteDoc(profilSectionRef);
			getProfileSection();
		} catch (err) {
			console.log(err);
		}
	};

	onMount(() => {
		getProfileSection();
	});
</script>

{#each profil as p}
	<section class="dashboard-section">
		<div class="flex gap-2 items-center justify-between">
			<div class="py-2 font-semibold text-lg uppercase">{p.title}</div>
			<div class="">
				<a href="./profil/edit/{p.id}">
					<span class="material-icons cursor-pointer hover:text-blue-500"> edit </span>
				</a>
				<span
					on:click={() => deleteProfileSection(p.id)}
					class="material-icons cursor-pointer hover:text-red-500"
				>
					delete
				</span>
			</div>
		</div>
		<div class="bg-white rounded p-2 indent-4">{@html p.body}</div>
	</section>
{/each}

<a href="./profil/add">
	<section class="dashboard-section p-2 bg-sky-800 text-center cursor-pointer text-white">
		Tambahkan Section Baru
	</section>
</a>
