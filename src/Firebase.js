// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB57jWCauGLPqgG5iFZfYmksZBxtaBto2o",
  authDomain: "chatapp-c1c46.firebaseapp.com",
  projectId: "chatapp-c1c46",
  storageBucket: "chatapp-c1c46.appspot.com",
  messagingSenderId: "352829089352",
  appId: "1:352829089352:web:d1801903c78e59becdda7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth  = getAuth();