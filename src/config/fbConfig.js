import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBbncSssOO5CYfjSw8h1EW9M_-etbB2ouY",
  authDomain: "concise-slate-234717.firebaseapp.com",
  databaseURL: "https://concise-slate-234717.firebaseio.com",
  projectId: "concise-slate-234717",
  storageBucket: "concise-slate-234717.appspot.com",
  messagingSenderId: "83776199556",
  appId: "1:83776199556:web:e8924f4c648368ef"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 