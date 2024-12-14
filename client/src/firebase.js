

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogflow-fb1d0.firebaseapp.com",
  projectId: "blogflow-fb1d0",
  storageBucket: "blogflow-fb1d0.appspot.com",
  messagingSenderId: "211525800004",
  appId: "1:211525800004:web:793a0bd70aed660287ec11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);