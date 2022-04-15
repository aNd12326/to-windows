// import firebase from "firebase/app";
// import "firebase/firebase";
// import "firebase/auth";

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyDxrxHdgvij4ogI5lJ-kkjmiLnne4b4mhM",

//   authDomain: "react-apps-cursos-2345f.firebaseapp.com",

//   projectId: "react-apps-cursos-2345f",

//   storageBucket: "react-apps-cursos-2345f.appspot.com",

//   messagingSenderId: "612800996005",

//   appId: "1:612800996005:web:da0f981b36b25d6b3fa34c",
// };

// firebase.initializeApp(firebaseConfig)

// const db = firebase.firestore()
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// export {
//   db,googleAuthProvider,firebase
// }

// v9 compat packages are API compatible with v8 code
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxrxHdgvij4ogI5lJ-kkjmiLnne4b4mhM",

  authDomain: "react-apps-cursos-2345f.firebaseapp.com",

  projectId: "react-apps-cursos-2345f",

  storageBucket: "react-apps-cursos-2345f.appspot.com",

  messagingSenderId: "612800996005",

  appId: "1:612800996005:web:da0f981b36b25d6b3fa34c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider, signInWithPopup, getAuth };
