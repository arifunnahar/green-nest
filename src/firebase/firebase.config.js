// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAj8UDK_dDZrDIzkaRBqh6YnnwQd_ilxA",
  authDomain: "green-nest-2254a.firebaseapp.com",
  projectId: "green-nest-2254a",
  storageBucket: "green-nest-2254a.firebasestorage.app",
  messagingSenderId: "883035820669",
  appId: "1:883035820669:web:275b1b007473b6dd5a9714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);