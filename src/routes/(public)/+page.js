import { error } from '@sveltejs/kit';
import { db } from '$lib/external/firebase.js';
import { timeConverter, timeConverterToDay} from '$lib/script/lib.js';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
const getBerita = async () => {
    const beritaRef = collection(db, 'berita');
    const q = query(beritaRef, orderBy('createdAt', 'desc'), limit(5));
    let tempArr = [];

    let beritaSnapshot = await getDocs(q);

    beritaSnapshot.forEach((doc) => {
        let data = doc.data();
        let date = timeConverter(data.createdAt.seconds);
        let day = timeConverterToDay(data.createdAt.seconds);
        data.tanggal = date;
        data.hari = day;
        tempArr = [...tempArr, data];
    });
    return tempArr;
};
const getPengumuman = async () => {
    const pengumumanRef = collection(db, 'pengumuman');
    const q = query(pengumumanRef, orderBy('createdAt', 'desc'), limit(4));
    let tempArr = [];

    let pengumumanSnapshot = await getDocs(q);

    pengumumanSnapshot.forEach((doc) => {
        let data = doc.data();
        let date = timeConverter(data.createdAt.seconds);
        let day = timeConverterToDay(data.createdAt.seconds);
        data.tanggal = date;
        data.hari = day;
        tempArr = [...tempArr, data];
    });
    return tempArr;
};
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
        const pengumuman = await getPengumuman();
        const berita = await getBerita();
		return {
            berita,
            pengumuman
		};
	} catch (err) {
		throw error(404, err);
	}
}