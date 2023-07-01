// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqVTniSMMmCN-WLBRn6uNCURlCRz2V1NU",
  authDomain: "todo-react-app-4e8dd.firebaseapp.com",
  projectId: "todo-react-app-4e8dd",
  storageBucket: "todo-react-app-4e8dd.appspot.com",
  messagingSenderId: "686028465431",
  appId: "1:686028465431:web:83c03471877c7b14a3c352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;