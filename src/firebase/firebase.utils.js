import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDUXIaK3Bpex5i3_jg6jPDEG5bG9S7PD20",
  authDomain: "crwn-db-429f2.firebaseapp.com",
  projectId: "crwn-db-429f2",
  storageBucket: "crwn-db-429f2.appspot.com",
  messagingSenderId: "406066863621",
  appId: "1:406066863621:web:d58185bfbd65c8ec3d466c",
  measurementId: "G-SEQV1VX6FZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
