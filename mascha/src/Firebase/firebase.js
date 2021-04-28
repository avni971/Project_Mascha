import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firebase-firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJZE4fb9V7zc_jCF2SWTHEp5RaFCSiyqc",
    authDomain: "mascha-844ab.firebaseapp.com",
    databaseURL: "https://mascha-844ab-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mascha-844ab",
    storageBucket: "mascha-844ab.appspot.com",
    messagingSenderId: "769520238157",
    appId: "1:769520238157:web:e09edefacccc40012c6604",
    measurementId: "G-PCXYKFZRC2"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth=firebase.auth()
  export const db=firebase.firestore()