// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
import "typeface-oswald";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Lobby from "./Lobby";

const firebaseConfig = {
 apiKey: "AIzaSyCL95-ZS772zUevDUjsT13BieFKN6tpCP4",

  authDomain: "lizapoker-8d7d5.firebaseapp.com",

  databaseURL: "https://lizapoker-8d7d5-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "lizapoker-8d7d5",

  storageBucket: "lizapoker-8d7d5.appspot.com",

  messagingSenderId: "245629612904",

  appId: "1:245629612904:web:248534d0bf1db859c65cdd",

  measurementId: "G-EEN595PKKY"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementsByTagName("main")[0]);

reportWebVitals();
serviceWorkerRegistration.register();
