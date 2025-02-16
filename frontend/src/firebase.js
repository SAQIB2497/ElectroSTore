import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR1AvmQ9AEPdUKKimEMUKLzX9VDRvuqxU",
  authDomain: "electrostore-2b6dd.firebaseapp.com",
  projectId: "electrostore-2b6dd",
  storageBucket: "electrostore-2b6dd.firebasestorage.app",
  messagingSenderId: "725027615006",
  appId: "1:725027615006:web:51e12fb30b36419a92d90f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);  // ✅ Firestore initialized
