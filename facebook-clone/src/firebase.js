import firebase from "firebase";

const  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQ-D0J1YEDXG_7DyxVeYp7QoYcHGMhgM4",
    authDomain: "clone-messenger-facebook.firebaseapp.com",
    projectId: "clone-messenger-facebook",
    storageBucket: "clone-messenger-facebook.appspot.com",
    messagingSenderId: "394778520836",
    appId: "1:394778520836:web:1d25d20b3365376f0bb451",
    measurementId: "G-LLRT7M8B1E"
});

const db = firebaseApp.firestore();

export default db;