import { e as error } from "../../../../../chunks/index2.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { d as db } from "../../../../../chunks/firebase.js";
import { t as truncate, r as removeTags } from "../../../../../chunks/lib.js";
import "firebase/app";
import "firebase/storage";
async function load({ params }) {
  try {
    const slug = params.slug;
    let dataBerita;
    let dataMeta;
    const beritaRef = collection(db, "berita");
    const q = query(beritaRef, where("slug", "==", slug));
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
export {
  load
};
