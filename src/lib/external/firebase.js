// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";



// import { getAnalytics } from "@firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: import.meta.env.VITE_apiKey,

  authDomain: "apipgmi.firebaseapp.com",

  projectId: "apipgmi",

  storageBucket: import.meta.env.VITE_storageBucket,

  messagingSenderId: import.meta.env.VITE_messagingSenderId,

  appId: import.meta.env.VITE_appId,

  measurementId: "G-7TRHNG0RJG"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// firestore
export const db = getFirestore(app);

export default app;