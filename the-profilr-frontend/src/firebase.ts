// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBWCMA4kGecj2XDAxaXaMZkDG7KL9BsRfQ",
  authDomain: "the-profilr.firebaseapp.com",
  projectId: "the-profilr",
  storageBucket: "the-profilr.appspot.com",
  messagingSenderId: "749142592189",
  appId: "1:749142592189:web:c46ea4aff897d3d30605d4",
  measurementId: "G-9MSD5ZK7E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
