import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKi0m1TOfW0HydjL6KZWWy58GPovBkqKA",
    authDomain: "discord-6338f.firebaseapp.com",
    databaseURL: "https://discord-6338f.firebaseio.com",
    projectId: "discord-6338f",
    storageBucket: "discord-6338f.appspot.com",
    messagingSenderId: "678029088798",
    appId: "1:678029088798:web:36548f5a6c9028b857b60f",
    measurementId: "G-14Z70K0PCW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
