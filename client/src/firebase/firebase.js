// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rodha-7a832.firebaseapp.com",
  projectId: "rodha-7a832",
  storageBucket: "rodha-7a832.appspot.com",
  messagingSenderId: "675541705446",
  appId: "1:675541705446:web:5d31b64df0065a843dd127"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);