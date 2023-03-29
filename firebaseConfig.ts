// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { Export } from "phosphor-react-native";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv61UHNNdcsG5l9ayFwlIgsohlzZx2d0U",
  authDomain: "recicle-38ff3.firebaseapp.com",
  projectId: "recicle-38ff3",
  storageBucket: "recicle-38ff3.appspot.com",
  messagingSenderId: "928944542293",
  appId: "1:928944542293:web:b14c25157b53895672fadc",
  measurementId: "G-M40BW7XKRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
