// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { Export } from "phosphor-react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDv61UHNNdcsG5l9ayFwlIgsohlzZx2d0U",
  authDomain: "recicle-38ff3.firebaseapp.com",
  projectId: "recicle-38ff3",
  storageBucket: "recicle-38ff3.appspot.com",
  messagingSenderId: "928944542293",
  appId: "1:928944542293:web:b14c25157b53895672fadc",
  measurementId: "G-M40BW7XKRM"
};

const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
