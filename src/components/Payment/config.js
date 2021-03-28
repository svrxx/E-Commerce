import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCvnkk_31nxFXh4pMOCahq9518g18Tn_tU",
    authDomain: "commerce-vs.firebaseapp.com",
    projectId: "commerce-vs",
    storageBucket: "commerce-vs.appspot.com",
    messagingSenderId: "107715865716",
    appId: "1:107715865716:web:a1b1bfde10e19e8ab43521",
    measurementId: "G-MEPT63BDH8"
  });

  var db =  firebaseApp.firestore();

export { db };