# messenger-clone-react

# firebase config setup

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({

    <!-- configurations from firebase -->

});

const db = firebaseApp.firestore();

export default db ;
