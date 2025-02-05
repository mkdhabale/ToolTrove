// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCResS5yiyernyyzI2Cbvmg1ZCIH95GT7o",
  authDomain: "react-firebase-auth-21ba3.firebaseapp.com",
  projectId: "react-firebase-auth-21ba3",
  storageBucket: "react-firebase-auth-21ba3.firebasestorage.app",
  messagingSenderId: "1050875969349",
  appId: "1:1050875969349:web:dd91bbf38279f6479b882c",
  measurementId: "G-QYRM9TXCLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, analytics, db };
