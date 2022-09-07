import { e as error } from "../../../../../../../chunks/index2.js";
import { doc, getDoc } from "firebase/firestore";
import { d as db } from "../../../../../../../chunks/firebase.js";
import "firebase/app";
import "firebase/storage";
async function load({ params }) {
  try {
    const beritaRef = doc(db, "berita", params.id);
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
export {
  load
};
