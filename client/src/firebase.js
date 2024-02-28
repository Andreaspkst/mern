// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-91d73.firebaseapp.com",
  projectId: "mern-blog-91d73",
  storageBucket: "mern-blog-91d73.appspot.com",
  messagingSenderId: "170699910805",
  appId: "1:170699910805:web:e784c93421c74f3e06b59c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);