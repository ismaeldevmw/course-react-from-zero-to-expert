import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDx1ZWHwPETBwHsEVwx1h3pJyMj1NsUy8",
    authDomain: "react-app-curso-da1ee.firebaseapp.com",
    projectId: "react-app-curso-da1ee",
    storageBucket: "react-app-curso-da1ee.appspot.com",
    messagingSenderId: "478060406183",
    appId: "1:478060406183:web:014ae30db26fc3f1b98282"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}