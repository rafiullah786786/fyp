// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
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
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
