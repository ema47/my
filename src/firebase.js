import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBW2jFlmtVGuq_-8OTwjcsoU8FxTa3XtII",
    authDomain: "web-f3d42.firebaseapp.com",
    projectId: "web-f3d42",
    storageBucket: "web-f3d42.appspot.com",
    messagingSenderId: "1071373995961",
    appId: "1:1071373995961:web:0b6c4486bc638b9585f068"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  export {auth};