// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDWx61rZktleXwnnvh2Agl_69yqTAIX3M",
  authDomain: "booknote-67b71.firebaseapp.com",
  projectId: "booknote-67b71",
  storageBucket: "booknote-67b71.appspot.com",
  messagingSenderId: "419625535077",
  appId: "1:419625535077:web:1565ed855663b39b24688c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
