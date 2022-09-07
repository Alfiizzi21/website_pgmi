import { e as error } from "../../../../chunks/index2.js";
import { collection, getDocs } from "firebase/firestore";
import { d as db } from "../../../../chunks/firebase.js";
import "firebase/app";
import "firebase/storage";
async function load({ params }) {
  try {
    let tempArr = [];
    const profilRef = collection(db, "profil");
    const profilSnapshot = await getDocs(profilRef);
    profilSnapshot.forEach((doc) => {
      tempArr = [...tempArr, doc.data()];
    });
    let data = tempArr;
    return { data };
  } catch (err) {
    console.error(err);
    throw error(404, err);
  }
}
export {
  load
};
