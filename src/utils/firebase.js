// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZMf16RWR6xxmKxinpHAuq9H0GLDtb7r8",
  authDomain: "netflixgpt-8ec82.firebaseapp.com",
  projectId: "netflixgpt-8ec82",
  storageBucket: "netflixgpt-8ec82.firebasestorage.app",
  messagingSenderId: "418091030201",
  appId: "1:418091030201:web:ca00a568be19477fb6ad68",
  measurementId: "G-7W7WWCGRSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();