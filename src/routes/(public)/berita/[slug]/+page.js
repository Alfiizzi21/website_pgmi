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
			dataMeta = e.data();
			dataMeta.desc = truncate(removeTags(dataMeta.body), 150);
		});
		return {
			berita: dataBerita,
			meta: dataMeta
		};
	} catch (err) {
		throw error(404, err);
	}
}
