import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBxkeSTvgV5TZphQPm_6dj2fajW96ikhAc",
    authDomain: "social-media-react-f17c0.firebaseapp.com",
    projectId: "social-media-react-f17c0",
    storageBucket: "social-media-react-f17c0.appspot.com",
    messagingSenderId: "345126231682",
    appId: "1:345126231682:web:726e944c7adfd3586c1e9b",
    measurementId: "G-92JYB006TD"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  

  export const auth = app.auth()
  export default app