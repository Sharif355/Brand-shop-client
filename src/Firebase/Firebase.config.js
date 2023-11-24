// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkEQf7BKUxO9xV-Aw2jt1yhHXA2BPcJdg",
    authDomain: "brand-shop-b-8-p-hero.firebaseapp.com",
    projectId: "brand-shop-b-8-p-hero",
    storageBucket: "brand-shop-b-8-p-hero.appspot.com",
    messagingSenderId: "255080054080",
    appId: "1:255080054080:web:b8be617d714ee26a680ea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;