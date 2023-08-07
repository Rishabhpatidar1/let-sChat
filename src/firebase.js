
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: " AIzaSyDD688E5dDDWQ7QzwhJoWHA2yywIfQzkXw ",
  authDomain: "let-s-chat-90683.firebaseapp.com",
  projectId: "let-s-chat-90683",
  storageBucket: "let-s-chat-90683.appspot.com",
  messagingSenderId: "416542092038",
  appId: "1:416542092038:web:d1be30fd676a4b8f620c87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();