// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
{
  apiKey: "AIzaSyBi713FYYhT8_H4r3ADpdRNBsvxWqvhmeI",
  authDomain: "todo-6b906d.firebaseapp.com",
  databaseURL: "https://todo-6b906d.firebaseio.com",
  projectId: "todo-6b906d",
  storageBucket: "todo-6b906d.appspot.com",
  messagingSenderId: "611125895210",
  appId: "1:611125895210:web:f05e7fce66548086a52353",
  measurementId: "G-Q55VRV241X",
});

const db = firebaseApp.firestore();
export default db;



