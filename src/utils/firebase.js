// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf4SHL-t7Lw-bhqr9ExMz-qBWS3b6A86g",
  authDomain: "gpt-netflix-1bc38.firebaseapp.com",
  projectId: "gpt-netflix-1bc38",
  storageBucket: "gpt-netflix-1bc38.appspot.com",
  messagingSenderId: "569015579477",
  appId: "1:569015579477:web:1243320fb8145da2e6b5dc",
  measurementId: "G-L72NHKG0XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();