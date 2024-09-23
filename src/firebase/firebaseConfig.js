// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB271ItKklBhJIJCPeAuAXWB9mifvpG5jk",
  authDomain: "e-commerce-diploma.firebaseapp.com",
  projectId: "e-commerce-diploma",
  storageBucket: "e-commerce-diploma.appspot.com",
  messagingSenderId: "681054961271",
  appId: "1:681054961271:web:227c2cd706eac3cb74d072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;