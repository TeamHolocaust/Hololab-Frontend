import firebase from 'firebase/app'
import 'firebase/auth'

//Making the Firebase initialer
const app = firebase.initializeApp({

    apiKey: "AIzaSyAd2XajThp4HvutLUBvcT9LkkiLEEY7vMw",
    authDomain: "hololab-9b8cc.firebaseapp.com",
    databaseURL: "https://hololab-9b8cc-default-rtdb.firebaseio.com",
    projectId: "hololab-9b8cc",
    storageBucket: "hololab-9b8cc.appspot.com",
    messagingSenderId: "968649685164",
    appId: "1:968649685164:web:e9045f1e64fae445f88709",
    measurementId: "G-E5WS1PE14X"
})

export const auth = firebase.auth()
// export const googleProvider = new firebase.auth.GoogleAuthProvider()
export default app;