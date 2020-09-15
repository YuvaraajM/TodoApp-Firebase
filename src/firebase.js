import firebase from "firebase";
require("firebase/firestore");

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6X-lJLdnj9ZaKDTMLqCnzODGcbs33DSg",
  authDomain: "todo-app-f4cfd.firebaseapp.com",
  databaseURL: "https://todo-app-f4cfd.firebaseio.com",
  projectId: "todo-app-f4cfd",
  storageBucket: "todo-app-f4cfd.appspot.com",
  messagingSenderId: "682270875703",
  appId: "1:682270875703:web:e2ab816a968da7f3865fb2",
  measurementId: "G-1HMLECBXBF",
});

const db = firebaseApp.firestore();

export default db;
