import {initializeApp} from 'firebase/app'
import { getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDfFoVPhRhV8qAqrG58BT0xuUQdrboM34s",
  authDomain: "chat-app-7e4a8.firebaseapp.com",
  projectId: "chat-app-7e4a8",
  storageBucket: "chat-app-7e4a8.firebasestorage.app",
  messagingSenderId: "133294993330",
  appId: "1:133294993330:web:cc401d3eefe58b7abd7eab",
  measurementId: "G-HR6JSH6GB6"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

