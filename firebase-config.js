// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { db } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Tl8MuJxu_LZEGc5hojz7vJA2DbInOdI",
  authDomain: "where-s-waldo-1cc9c.firebaseapp.com",
  projectId: "where-s-waldo-1cc9c",
  storageBucket: "where-s-waldo-1cc9c.appspot.com",
  messagingSenderId: "485989359098",
  appId: "1:485989359098:web:3ebdda1b743f4d1e0f9843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);