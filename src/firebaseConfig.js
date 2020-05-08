// import firebase from "firebase"
// import "firebase/firestore"
import Firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/firestore'
//require('firebase/firestore')

const config = {
    apiKey: "AIzaSyDPessTf-a2FWGQzU31w99JkqGo7XrG67o",
    authDomain: "plans-d08ce.firebaseapp.com",
    databaseURL: "https://plans-d08ce.firebaseio.com",
    projectId: "plans-d08ce",
    storageBucket: "plans-d08ce.appspot.com",
    messagingSenderId: "255919070950",
    appId: "1:255919070950:web:14ab9e33664319c803a527"
}

Firebase.initializeApp(config);
const db = Firebase.firestore()
const auth = Firebase.auth()

const userCollection = db.collection('users')
const projectCollection = db.collection('projects')
function signIn(userName = null){
    console.log("user " + userName);
    Firebase.auth()
    .signInAnonymously()
        .then(function(){
            console.log("anaon signed in")
            return auth.currentUser;
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + ' ' + errorMessage)
            // ...
        });
}

export {
    db,
    auth,
    signIn,
    userCollection,
    projectCollection
}
