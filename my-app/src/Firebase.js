// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGDXzwD0h-lfTGxlitbzyqmtUdfSh0h3U",
  authDomain: "mindz-c335b.firebaseapp.com",
  projectId: "mindz-c335b",
  storageBucket: "mindz-c335b.appspot.com",
  messagingSenderId: "997537476559",
  appId: "1:997537476559:web:e25c107e1c05dfe45facba",
  measurementId: "G-J75SWE13LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseConfig)
const db = getFirestore(firebaseConfig)


