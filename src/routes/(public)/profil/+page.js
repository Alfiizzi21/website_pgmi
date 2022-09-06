import { error } from '@sveltejs/kit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/external/firebase.js';

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
	try {
        let tempArr = [];
		const profilRef = collection(db, 'profil');
		const profilSnapshot = await getDocs(profilRef);
		profilSnapshot.forEach((doc) => {
            tempArr = [...tempArr, doc.data()];
        });
        let data = tempArr
		return {data}
	} catch (err) {
		console.error(err);
		throw error(404, err);
	}
}