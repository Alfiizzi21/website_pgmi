import { error, redirect } from '@sveltejs/kit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '$lib/external/firebase.js';
import { truncate, removeTags } from '$lib/script/lib.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const slug = params.slug;
		let dataBerita;
		let dataMeta;
		const beritaRef = collection(db, 'berita');
		const q = query(beritaRef, where('slug', '==', slug));
		const beritaSnapshot = await getDocs(q);
		beritaSnapshot.forEach((e) => {
			dataBerita = e.data();
			dataBerita.desc = truncate(removeTags(dataBerita.body), 150);
		});
		return {
			berita: dataBerita
		};
	} catch (err) {
		throw error(404, err);
	}
}
