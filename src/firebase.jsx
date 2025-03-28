// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ZFO9VGlQRwIBNTfMhvVGzx6qEuoW5o0",
  authDomain: "reactcontactpage-d04aa.firebaseapp.com",
  databaseURL: "https://reactcontactpage-d04aa-default-rtdb.firebaseio.com",
  projectId: "reactcontactpage-d04aa",
  storageBucket: "reactcontactpage-d04aa.firebasestorage.app",
  messagingSenderId: "725074732961",
  appId: "1:725074732961:web:30441dbae5e13bcaca4de0",
  measurementId: "G-CY7Y262PZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);

export { app, database };