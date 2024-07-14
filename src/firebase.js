// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBJsqblqS8ogORtabJ2cXeGeoDzSiyoj4",
  authDomain: "samlekha-travels.firebaseapp.com",
  projectId: "samlekha-travels",
  storageBucket: "samlekha-travels.appspot.com",
  messagingSenderId: "1008473618345",
  appId: "1:1008473618345:web:053d7f3d77ac7a006676b8",
  measurementId: "G-P1FJRVGQHB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);