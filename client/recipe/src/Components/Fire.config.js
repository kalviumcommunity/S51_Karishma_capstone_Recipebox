// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaCZ_IWRIVmcWwKbghdCuFJUtI4NMjHBY",
  authDomain: "recipe-box-f16bb.firebaseapp.com",
  projectId: "recipe-box-f16bb",
  storageBucket: "recipe-box-f16bb.appspot.com",
  messagingSenderId: "39634714733",
  appId: "1:39634714733:web:b66045739e86feb27dbf64",
  measurementId: "G-5L1SNQ6XPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app