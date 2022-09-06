import { error } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/external/firebase.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const pengumumanRef = doc(db, 'pengumuman', params.id);
		const pengumumanSnapshot = await getDoc(pengumumanRef);
		const data = pengumumanSnapshot.data();
		return {
			data,
			id: params.id
		};
	} catch (err) {
		console.log(err);
		throw error(404, err);
	}
}
