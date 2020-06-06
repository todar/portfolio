import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/performance";
const firebaseConfig = {
  apiKey: "AIzaSyBkWixHR85qwFC9daHZjj0TWTomd7B-mKY",
  authDomain: "roberttodar-6bef6.firebaseapp.com",
  databaseURL: "https://roberttodar-6bef6.firebaseio.com",
  projectId: "roberttodar-6bef6",
  storageBucket: "roberttodar-6bef6.appspot.com",
  messagingSenderId: "662041726157",
  appId: "1:662041726157:web:bfa3f580546a4715bb6d84",
  measurementId: "G-W1L0F617XE",
};

firebase.initializeApp(firebaseConfig);

// export default firebase;
firebase.analytics();
export const performance = firebase.performance();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
