import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_sdJ3t6P8uvBGoDvzRyTApwXLEsE-lG4",
  authDomain: "crwn-db-4618b.firebaseapp.com",
  databaseURL: "https://crwn-db-4618b.firebaseio.com",
  projectId: "crwn-db-4618b",
  storageBucket: "crwn-db-4618b.appspot.com",
  messagingSenderId: "851539077929",
  appId: "1:851539077929:web:facd3373ed6da40880a538",
  measurementId: "G-DK5L7Z7EQK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
