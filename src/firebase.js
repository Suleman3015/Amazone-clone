// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDvJ8CuP7Dyz5ts1DMgrpbGIBR-tYHL4xI",
    authDomain: "e-clone-faed8.firebaseapp.com",
    projectId: "e-clone-faed8",
    storageBucket: "e-clone-faed8.appspot.com",
    messagingSenderId: "521457923897",
    appId: "1:521457923897:web:69bf5128e7cd7ff2621ae8",
    measurementId: "G-4XJQQ11X9Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };