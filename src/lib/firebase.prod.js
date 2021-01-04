import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDL-1Tvgz8MfZBBBhrz3sSUmpQhodLLxts",
  authDomain: "netflix-b20ac.firebaseapp.com",
  projectId: "netflix-b20ac",
  storageBucket: "netflix-b20ac.appspot.com",
  messagingSenderId: "510348566469",
  appId: "1:510348566469:web:3b77f6f7fae9ddca1335ac"
}

const firebase = Firebase.initializeApp(config)


export { firebase };