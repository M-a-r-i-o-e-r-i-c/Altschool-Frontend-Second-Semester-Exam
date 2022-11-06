// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSC1DBLaZGyUB6xmrXkikTm1lphKrms54",
  authDomain: "react-counter-app-b9f6a.firebaseapp.com",
  projectId: "react-counter-app-b9f6a",
  storageBucket: "react-counter-app-b9f6a.appspot.com",
  messagingSenderId: "951256534271",
  appId: "1:951256534271:web:e0589a198956e4735150ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;