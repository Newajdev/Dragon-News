// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZG9eGQ9mu_IaRkVr9P_yvSSTpg35F07Q",
  authDomain: "dragon-news-794a0.firebaseapp.com",
  projectId: "dragon-news-794a0",
  storageBucket: "dragon-news-794a0.firebasestorage.app",
  messagingSenderId: "577428574288",
  appId: "1:577428574288:web:abcbb242e4513967c18155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);