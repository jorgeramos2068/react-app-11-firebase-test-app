import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL4N_m6KiMe0EOeq5ggRU-xXf_cpmWY9M",
  authDomain: "react-firebase-test-app-jramos.firebaseapp.com",
  databaseURL: "https://react-firebase-test-app-jramos.firebaseio.com",
  projectId: "react-firebase-test-app-jramos",
  storageBucket: "react-firebase-test-app-jramos.appspot.com",
  messagingSenderId: "768180834528",
  appId: "1:768180834528:web:79dae01322417bc7d50085"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the DB
const db = firebase.firestore();

export {
  db,
  firebase
}
