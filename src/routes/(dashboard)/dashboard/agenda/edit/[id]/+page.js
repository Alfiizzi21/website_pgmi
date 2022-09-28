import { error } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/external/firebase.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const agendaRef = doc(db, 'agenda', params.id);
		const agendaSnapshot = await getDoc(agendaRef);
		const data = agendaSnapshot.data();
		return {
			data,
			id: params.id
		};
	} catch (err) {
		console.log(err);
		throw error(404, err);
	}
}
