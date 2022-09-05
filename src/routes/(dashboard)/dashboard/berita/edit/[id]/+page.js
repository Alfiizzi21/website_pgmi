import { error } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/external/firebase.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const beritaRef = doc(db, 'berita', params.id);
		const beritaSnapshot = await getDoc(beritaRef);
		const data = beritaSnapshot.data();
		return {
			data,
			id: params.id
		};
	} catch (err) {
		console.log(err);
		throw error(404, err);
	}
}
