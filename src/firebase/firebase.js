import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firebase-firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNOGs-ZBK_dqEvCF8oBveY3guMgGYD-Gs",
  authDomain: "moshe-1c907.firebaseapp.com",
  projectId: "moshe-1c907",
  storageBucket: "moshe-1c907.appspot.com",
  messagingSenderId: "728929483027",
  appId: "1:728929483027:web:36ca6a30384bd883efc2e6",
  measurementId: "G-T8H7R9H7QC"
};

  firebase.initializeApp(firebaseConfig)

  export const auth=firebase.auth()
  export const db=firebase.firestore()
