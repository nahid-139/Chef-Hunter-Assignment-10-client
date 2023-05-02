// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNm9dMf4pC0qdgwbaFcTf_T_OHr8pxSUU",
  authDomain: "chef-recipe-hunter-ac1db.firebaseapp.com",
  projectId: "chef-recipe-hunter-ac1db",
  storageBucket: "chef-recipe-hunter-ac1db.appspot.com",
  messagingSenderId: "501649337622",
  appId: "1:501649337622:web:6a2710bb29fe7a473b3437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;