// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB67MlSDuxNJ5PBvREwNJbpmLvEaHYqhPo",
  authDomain: "live-chat-app-c8252.firebaseapp.com",
  projectId: "live-chat-app-c8252",
  storageBucket: "live-chat-app-c8252.appspot.com",
  messagingSenderId: "99239485982",
  appId: "1:99239485982:web:e8513b139a15d8200d440f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();