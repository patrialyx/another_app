import firebase from 'firebase/compat/app'
import 'firebase/compat/auth' 
import "firebase/compat/firestore"
const app = firebase.initializeApp({
    apiKey: "AIzaSyCDQ2SdotHMGKjBr3kE-c4ZcaWenOsG78k",
    authDomain: "trazible-produc.firebaseapp.com",
    databaseURL: "https://trazible.firebaseio.com/",
    projectId: "trazible-produc",
    storageBucket: "trazible-produc.appspot.com",
    messagingSenderId: "475156363231",
    appId: "1:475156363231:web:d2ef6e32742098e86f366a"
  }
)

export const auth = app.auth();
export const database = firebase.firestore()
export default app;