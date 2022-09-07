import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDWmTBbZ9DDwuFBO6K_qzBOap4XtxoT8xU",
  authDomain: "apipgmi.firebaseapp.com",
  projectId: "apipgmi",
  storageBucket: "apipgmi.appspot.com",
  messagingSenderId: "215714558161",
  appId: "1:215714558161:web:5ae4524153162acf4315f0",
  measurementId: "G-7TRHNG0RJG"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {
  db as d,
  storage as s
};
