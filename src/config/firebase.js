// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkpqLpi92zWhKimjN_YMy37sZTuCoZsVE",
  authDomain: "vestuario-renueva.firebaseapp.com",
  projectId: "vestuario-renueva",
  storageBucket: "vestuario-renueva.appspot.com",
  messagingSenderId: "779662272817",
  appId: "1:779662272817:web:d2edc487db0b61006ca810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);