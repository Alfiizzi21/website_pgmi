import { e as error } from "../../../../../../../chunks/index2.js";
import { doc, getDoc } from "firebase/firestore";
import { d as db } from "../../../../../../../chunks/firebase.js";
import "firebase/app";
import "firebase/storage";
async function load({ params }) {
  try {
    const profilRef = doc(db, "profil", params.id);
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
export {
  load
};
