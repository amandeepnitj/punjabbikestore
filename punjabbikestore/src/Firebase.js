import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/firestore";

  const firebaseConfig =firebase.initializeApp(
    {
        apiKey: "AIzaSyA5UJsYIj4hEhwH9yZy_eOEMXwXJikyVdE",
        authDomain:"punjabbikestore.firebaseapp.com",
        projectId: "punjabbikestore",
        storageBucket:"punjabbikestore.appspot.com",
        messagingSenderId:"483252785631",
        appId: "1:483252785631:web:5d8cc1b1a451fa502c746a",
        measurementId:"G-TVZTMMYDGX"
      }
  );
  // export const auth = app.auth();
  // export const firestore = firebase.firestore();
  export default firebaseConfig;

  