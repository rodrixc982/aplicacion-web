// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXQvIi8KfYAxh_bZF2zzt0y5u2Rp-jCEc",
  authDomain: "aplicacion-web-904db.firebaseapp.com",
  projectId: "aplicacion-web-904db",
  storageBucket: "aplicacion-web-904db.appspot.com",
  messagingSenderId: "191352276937",
  appId: "1:191352276937:web:afbcdd962fec619b084a18",
  measurementId: "G-XGZ7ZLWNVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);