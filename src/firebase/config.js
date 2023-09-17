import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1ak8HdbcZv1twdKbhdv1pAaPJTqC4iwU",
    authDomain: "aju-sample.firebaseapp.com",
    projectId: "aju-sample",
    storageBucket: "aju-sample.appspot.com",
    messagingSenderId: "292561226859",
    appId: "1:292561226859:web:deb2ff782488021068752e",
    measurementId: "G-RXGEVQG88E"
};

export default firebase.initializeApp(firebaseConfig);
