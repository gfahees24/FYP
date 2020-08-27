import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-FXSAhmUkIysEEMiiY87l1GB1zBsOfm4",
  authDomain: "brandor-494b0.firebaseapp.com",
  databaseURL: "https://brandor-494b0.firebaseio.com",
  projectId: "brandor-494b0",
  storageBucket: "brandor-494b0.appspot.com",
  messagingSenderId: "415850213394",
  appId: "1:415850213394:web:84ecaefc30a266f6c7a8cb"
};

if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      firebase.firestore();
  }



export default firebase;