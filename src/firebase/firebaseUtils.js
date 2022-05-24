import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJerNkE_tbrB86nSBx9mWLN3ZRcNXOovY",
  authDomain: "crwn-store-e514f.firebaseapp.com",
  projectId: "crwn-store-e514f",
  storageBucket: "crwn-store-e514f.appspot.com",
  messagingSenderId: "52651145723",
  appId: "1:52651145723:web:b718864ec61abf82fdb35e",
  measurementId: "G-XVDRSRQ46J"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;