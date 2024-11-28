import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5aB32SGGVNuLHve3AjcgftvnVHxvEZs0",
  authDomain: "olxclone-91be8.firebaseapp.com",
  projectId: "olxclone-91be8",
  storageBucket: "olxclone-91be8.appspot.com",
  messagingSenderId: "726939196403",
  appId: "1:726939196403:web:b810b2e03fab83e7ab1086",
  measurementId: "G-PDSSF4XTRJ"
};
  const firebase= initializeApp(firebaseConfig);


export { firebase };