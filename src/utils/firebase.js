// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2CbQluAYOAJDxy9TIZx1R-AvcK8uUt2c",
  authDomain: "netflixgpt-fcf6c.firebaseapp.com",
  projectId: "netflixgpt-fcf6c",
  storageBucket: "netflixgpt-fcf6c.firebasestorage.app",
  messagingSenderId: "664863540075",
  appId: "1:664863540075:web:cd6858f08d538c9a1c022e",
  measurementId: "G-B841K1MKNH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
