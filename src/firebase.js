// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBOlOOXDbuezbWHjVw9d6Bb8gzAEDIqeIs",
//   authDomain: "react-auth-ce666.firebaseapp.com",
//   projectId: "react-auth-ce666",
//   storageBucket: "react-auth-ce666.appspot.com",
//   messagingSenderId: "689227568408",
//   appId: "1:689227568408:web:6cc2851d7a1647ab763a6d",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;