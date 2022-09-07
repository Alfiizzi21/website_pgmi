import { e as error } from "../../../../../../../chunks/index2.js";
import { doc, getDoc } from "firebase/firestore";
import { d as db } from "../../../../../../../chunks/firebase.js";
import "firebase/app";
import "firebase/storage";
async function load({ params }) {
  try {
    const pengumumanRef = doc(db, "pengumuman", params.id);
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
export {
  load
};
