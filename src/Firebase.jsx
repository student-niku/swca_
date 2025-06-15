import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCP3P81PBodY74XsMfeYtfIgylcj9Wy6Qo",
    authDomain: "second-swca.firebaseapp.com",
    projectId: "second-swca",
    storageBucket: "second-swca.firebasestorage.app",
    messagingSenderId: "349581680957",
    appId: "1:349581680957:web:2db8515f17f8e9626ca554",
    measurementId: "G-F2E5HG0CZ2"
};


 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);