
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIXyUVNx7xv6zjD6HrHNLSxVra3GOC9l0",
  authDomain: "certificados-a42ac.firebaseapp.com",
  projectId: "certificados-a42ac",
  storageBucket: "certificados-a42ac.firebasestorage.app",
  messagingSenderId: "703312022288",
  appId: "1:703312022288:web:49081afee8e1f00f433395",
  measurementId: "G-Z2SWB955EQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDoc, doc, getDocs };
