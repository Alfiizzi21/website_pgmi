// Import the functions you need from the SDKs you need

import { initializeApp } from "@firebase/app";

// import { getAnalytics } from "@firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDWmTBbZ9DDwuFBO6K_qzBOap4XtxoT8xU",

  authDomain: "apipgmi.firebaseapp.com",

  projectId: "apipgmi",

  storageBucket: "apipgmi.appspot.com",

  messagingSenderId: "215714558161",

  appId: "1:215714558161:web:5ae4524153162acf4315f0",

  measurementId: "G-7TRHNG0RJG"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;