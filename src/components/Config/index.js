// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuvPdcH2tWfc8KJODTLGFdy82V4KJhdaw",
  authDomain: "multi-auth-d5401.firebaseapp.com",
  projectId: "multi-auth-d5401",
  storageBucket: "multi-auth-d5401.appspot.com",
  messagingSenderId: "238768070649",
  appId: "1:238768070649:web:63faf60180261a1580a728",
  measurementId: "G-80W22N2E1B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};