// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyBeJBV7Te16EPVVla7Ky_uMc-7r6mlCSmw",
  // authDomain: "auto-press.firebaseapp.com",
  // projectId: "auto-press",
  // storageBucket: "auto-press.appspot.com",
  // messagingSenderId: "767452088554",
  // appId: "1:767452088554:web:85d54274015ccc6eb16f93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
