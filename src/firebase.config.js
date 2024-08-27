// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt_zzBGJyC3I55XO8wXmXztMjt7THC9Mo",
  authDomain: "bangladeshv2demo.firebaseapp.com",
  projectId: "bangladeshv2demo",
  storageBucket: "bangladeshv2demo.appspot.com",
  messagingSenderId: "333690666157",
  appId: "1:333690666157:web:b663eccc78c6c71d825a24",
};

// console.log(firebaseConfig)
// Initialize Firebase


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
