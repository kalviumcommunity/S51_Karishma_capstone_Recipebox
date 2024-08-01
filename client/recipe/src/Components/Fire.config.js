// Fire.config.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaCZ_IWRIVmcWwKbghdCuFJUtI4NMjHBY",
  authDomain: "recipe-box-f16bb.firebaseapp.com",
  projectId: "recipe-box-f16bb",
  storageBucket: "recipe-box-f16bb.appspot.com",
  messagingSenderId: "39634714733",
  appId: "1:39634714733:web:b66045739e86feb27dbf64",
  measurementId: "G-5L1SNQ6XPB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
