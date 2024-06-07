// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr1jKLjfpM9Iy1x65HwUgdV_UgrPz_hgc",
  authDomain: "mern-book-inven.firebaseapp.com",
  projectId: "mern-book-inven",
  storageBucket: "mern-book-inven.appspot.com",
  messagingSenderId: "942763231852",
  appId: "1:942763231852:web:254621eaa74c525fd2a649",
  measurementId: "G-DW2TCB0S10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;