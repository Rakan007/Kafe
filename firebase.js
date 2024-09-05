// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7CZh9_Hu1Uquizfc2_ccBS8yTIrA6Mec",
  authDomain: "chofee-shop.firebaseapp.com",
  projectId: "chofee-shop",
  storageBucket: "chofee-shop.appspot.com",
  messagingSenderId: "27066717666",
  appId: "1:27066717666:web:51b1594d1e7e635c09d5bb",
  measurementId: "G-LPHKV3MSLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);