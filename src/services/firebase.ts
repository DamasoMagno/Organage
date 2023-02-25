import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUM9prdWyzdONE04_WO21Anv9Fu0mZcuA",
  authDomain: "organage.firebaseapp.com",
  projectId: "organage",
  storageBucket: "organage.appspot.com",
  messagingSenderId: "341131690757",
  appId: "1:341131690757:web:2c911184b1998ae7cd6d6c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };