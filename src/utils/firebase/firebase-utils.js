// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7C69roOnISYXux8lRtlHYuXfN7qgc_K8",
  authDomain: "shopping-db-a72d7.firebaseapp.com",
  projectId: "shopping-db-a72d7",
  storageBucket: "shopping-db-a72d7.appspot.com",
  messagingSenderId: "706240923083",
  appId: "1:706240923083:web:cc34ef80e588b1c495224e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const customSignInWithPopup = () =>
  signInWithPopup(auth, googleProvider);

export const customSignInWithRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const db = getFirestore();
export const createUserUsingAuth = async (user, info = {}) => {
  const userRef = doc(db, "users", user.uid);

  const userDataSnapshot = await getDoc(userRef);
  if (!userDataSnapshot.exists()) {
    try {
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        createdAt: new Date(),
        ...info,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};
