// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABGR3jJLM2WVVbkqzyOZ1XbnIEPBRdois",
  authDomain: "firesheild-point.firebaseapp.com",
  projectId: "firesheild-point",
  storageBucket: "firesheild-point.firebasestorage.app",
  messagingSenderId: "32548020561",
  appId: "1:32548020561:web:38ce42c35fd74e44967370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)