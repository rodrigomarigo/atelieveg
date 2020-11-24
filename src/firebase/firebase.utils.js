import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
        apiKey: "AIzaSyCzpQHMoO4owuEEvHi5w39RRNyEKneRVVQ",
        authDomain: "atelieveg-15197.firebaseapp.com",
        databaseURL: "https://atelieveg-15197.firebaseio.com",
        projectId: "atelieveg-15197",
        storageBucket: "atelieveg-15197.appspot.com",
        messagingSenderId: "723870104108",
        appId: "1:723870104108:web:8167f452af99fffdf32f89",
        measurementId: "G-M4YH8LTVYL"
    };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

