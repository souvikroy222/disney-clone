// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVO8tKLYCqvgrf6Gi9X84cqqXDlOJ__LA",
  authDomain: "disney-clone-b7e11.firebaseapp.com",
  projectId: "disney-clone-b7e11",
  storageBucket: "disney-clone-b7e11.appspot.com",
  messagingSenderId: "344719671708",
  appId: "1:344719671708:web:4d315f1dbb3551efa08859",
};

// Initialize Firebase
  const firestore = (
    firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
  ).firestore();
  

const db=getFirestore()
export {db,firestore}



