// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtNJAi8U0VSV7UzR5IiXRYPpsXwZ935RU",
  authDomain: "madrasa-management-system.firebaseapp.com",
  databaseURL: "https://madrasa-management-system-default-rtdb.firebaseio.com",
  projectId: "madrasa-management-system",
  storageBucket: "madrasa-management-system.appspot.com",
  messagingSenderId: "817571513533",
  appId: "1:817571513533:web:5782ba22693d4d7702e3d4",
  measurementId: "G-B23RD8CNYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
