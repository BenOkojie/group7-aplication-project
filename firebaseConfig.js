// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7SVgt1i5YRJ6XfyOYnWk3ZMgUdsrH96A",
  authDomain: "craftables-b56ca.firebaseapp.com",
  projectId: "craftables-b56ca",
  storageBucket: "craftables-b56ca.appspot.com",
  messagingSenderId: "1039463680725",
  appId: "1:1039463680725:web:77f422f0a69767e310705c",
  measurementId: "G-4N0Y834QPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);