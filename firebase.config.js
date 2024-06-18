// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQMJavSABdLAVFtaDeUQxAZwrqRXfxrBo",
  authDomain: "wbc-phone-otp.firebaseapp.com",
  projectId: "wbc-phone-otp",
  storageBucket: "wbc-phone-otp.appspot.com",
  messagingSenderId: "463140715645",
  appId: "1:463140715645:web:a6ccc7fa8c85b10de40514",
  measurementId: "G-QTXLY86RHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
