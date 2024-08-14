import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyC1jy14_S-pUClFpdSe835tSEqMB7G90iI",
  authDomain: "pucpr-devweb-f382d.firebaseapp.com",
  projectId: "pucpr-devweb-f382d",
  storageBucket: "pucpr-devweb-f382d.appspot.com",
  messagingSenderId: "738539805817",
  appId: "1:738539805817:web:be977e0dee33760f9248a8"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
};

export default firebase;
