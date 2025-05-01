// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ7c6IW61vZfPeNrvGOKucd_KfJu_fRR0",
  authDomain: "vite-contact-a4ccf.firebaseapp.com",
  projectId: "vite-contact-a4ccf",
  storageBucket: "vite-contact-a4ccf.firebasestorage.app",
  messagingSenderId: "814966592902",
  appId: "1:814966592902:web:43360aa8693a426687c807",
  measurementId: "G-HS85EMBRRX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)