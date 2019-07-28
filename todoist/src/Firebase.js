import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCOXCp0klj0757jG2KhdH_TNUVZM2VUVYE",
  authDomain: "legendary-todoist.firebaseapp.com",
  databaseURL: "https://legendary-todoist.firebaseio.com",
  projectId: "legendary-todoist",
  storageBucket: "legendary-todoist.appspot.com",
  messagingSenderId: "822239534445",
  appId: "1:822239534445:web:31f7826611b21d3c"
});

export { firebaseConfig as firebase };
