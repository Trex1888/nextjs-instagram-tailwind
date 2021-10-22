// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApIAFuW5C4lRC9ZB0mXzKn7MVPlUim8ds",
  authDomain: "insta2next.firebaseapp.com",
  projectId: "insta2next",
  storageBucket: "insta2next.appspot.com",
  messagingSenderId: "1011489350372",
  appId: "1:1011489350372:web:c3c6d57294ea29735942f1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

