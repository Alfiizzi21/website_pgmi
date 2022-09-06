import { error } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/external/firebase.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const profilRef = doc(db, 'profil', params.id);
		const profilSnapshot = await getDoc(profilRef);
		const data = profilSnapshot.data();
		console.log(profilSnapshot.data());
		return {
			data,
			id: params.id
		};
	} catch (err) {
		console.log(err);
		throw error(404, err);
	}
}
