import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7O59TmjgMq4Dqka_FLflBu9W0K0Ykgf4",
    authDomain: "fir-c628e.firebaseapp.com",
    projectId: "fir-c628e",
    storageBucket: "fir-c628e.appspot.com",
    messagingSenderId: "1087917112865",
    appId: "1:1087917112865:web:0dc037570bbf8dcfaded60",
    measurementId: "G-S4XM7065MS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
