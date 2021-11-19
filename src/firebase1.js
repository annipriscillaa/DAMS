//import firebase from "firebase";
import { initializeApp } from "@firebase/app";
import firebase from "firebase/compat/app";
//auth = require("firebase/auth");
import { getAuth } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

//var firebase = require("firebase");
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvILGTvn0YGlsTAaOgtLMl6yenJynPY4c",
  authDomain: "dams-ad670.firebaseapp.com",
  projectId: "dams-ad670",
  storageBucket: "dams-ad670.appspot.com",
  messagingSenderId: "971713090975",
  appId: "1:971713090975:web:1fd25773c8cfdc48f359aa",
  measurementId: "G-74Z9KHX00F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};

const withEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    //alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

const asendPasswordResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email, null);
    alert("Password reset link sent");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  db,
  app,
  auth,
  firebaseConfig,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  asendPasswordResetEmail,
  logout,
};
