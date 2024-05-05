// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth} from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMlR9UgIsPIOZSkwwbt5KGieasOpZe53Y",
  authDomain: "plant-pulse-new.firebaseapp.com",
  projectId: "plant-pulse-new",
  storageBucket: "plant-pulse-new.appspot.com",
  messagingSenderId: "317084371462",
  appId: "1:317084371462:web:6ca3f6054ace467a44d187",
  measurementId: "G-GN04E393JJ",
};


let auth;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
auth = initializeAuth (app);
const analytics = getAnalytics(app);

export default auth;
