import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCr4Gm7NNPJC6-XDH_Dk8-zXOOfOtZTiHM",
  authDomain: "restraunt-app-33514.firebaseapp.com",
  projectId: "restraunt-app-33514",
  storageBucket: "restraunt-app-33514.appspot.com",
  messagingSenderId: "246120249689",
  appId: "1:246120249689:web:ee8c04f20f7fc72a5ab448",
  measurementId: "G-XZB5HCP7HL"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
