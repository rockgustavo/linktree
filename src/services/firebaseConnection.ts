import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB96f6axvjCzIU2Jn1mIwNgSET6U8mN7TA",
  authDomain: "linktree-d270a.firebaseapp.com",
  projectId: "linktree-d270a",
  storageBucket: "linktree-d270a.appspot.com",
  messagingSenderId: "575958666274",
  appId: "1:575958666274:web:b331d8841e70f0b9700e7b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
