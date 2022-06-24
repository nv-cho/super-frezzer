import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzKwY0mvA8b9NxuSchqE7GSo0qNzzYSg8",
  authDomain: "basedatosfreezer-95d08.firebaseapp.com",
  projectId: "basedatosfreezer-95d08",
  storageBucket: "basedatosfreezer-95d08.appspot.com",
  messagingSenderId: "235960279765",
  appId: "1:235960279765:web:d8e1751a53d0cebcc7f85c",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export default db;
