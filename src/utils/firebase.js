// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrxc1HU2PHDInQQ-5R9_AnXsghBr_DBbM",
  authDomain: "comment-api-cfdcf.firebaseapp.com",
  projectId: "comment-api-cfdcf",
  storageBucket: "comment-api-cfdcf.appspot.com",
  messagingSenderId: "941279832976",
  appId: "1:941279832976:web:025fc7bc3fe2a3d29ba115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);