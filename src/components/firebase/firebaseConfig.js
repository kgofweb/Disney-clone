import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCssPfd22p4lM7pCjUaKWlUYDgZjYR1RkE",
  authDomain: "disney-clone-a23a5.firebaseapp.com",
  projectId: "disney-clone-a23a5",
  storageBucket: "disney-clone-a23a5.appspot.com",
  messagingSenderId: "508787340501",
  appId: "1:508787340501:web:97f95ec3a121fa9b8b5e5c",
  measurementId: "G-WMLCBEPKNR"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db