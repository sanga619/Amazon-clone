import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyChkLTHb50cRhPL5_tzmgt1fouoRAnSX8c",
    authDomain: "clone-942f7.firebaseapp.com",
    projectId: "clone-942f7",
    storageBucket: "clone-942f7.appspot.com",
    messagingSenderId: "823839531544",
    appId: "1:823839531544:web:69135ce60cf6883a65196d",
    measurementId: "G-R1F53395DE"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };