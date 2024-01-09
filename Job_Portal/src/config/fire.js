import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyC3wWyAW4LPOQcYcsKSqa8ZVJ9yrD49FSQ",
    authDomain: "jobportal-a44b1.firebaseapp.com",
    projectId: "jobportal-a44b1",
    storageBucket: "jobportal-a44b1.appspot.com",
    messagingSenderId: "365060664619",
    appId: "1:365060664619:web:56b58fb6991faf8475a96e",
    measurementId: "G-718QM8N9L9"
  };

  const fire =initializeApp(firebaseConfig)
  const firestore = getFirestore();
  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
  
  const auth = getAuth();
  export {fire, auth, firestore, db, firebaseApp};