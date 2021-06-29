import firebase from "firebase"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRD6eTw_7tUHAQYEjvz9cRRUIqKu8fLlw",
    authDomain: "robinhood-clone-17d92.firebaseapp.com",
    projectId: "robinhood-clone-17d92",
    storageBucket: "robinhood-clone-17d92.appspot.com",
    messagingSenderId: "471815910496",
    appId: "1:471815910496:web:dea0fc380ca3b12e633f05",
    measurementId: "G-KYKKN09X5R"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db  = firebaseApp.firestore();

export { db }