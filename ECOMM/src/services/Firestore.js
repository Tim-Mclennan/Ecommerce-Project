import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCacOLJwhApAEa1u_X9yZMirGXl4S2pwws",
  authDomain: "ecommerce-store-d8f59.firebaseapp.com",
  projectId: "ecommerce-store-d8f59",
  storageBucket: "ecommerce-store-d8f59.appspot.com",
  messagingSenderId: "348272701333",
  appId: "1:348272701333:web:646b1eaa42741bfd55109c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);