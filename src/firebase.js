import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCS2Fv2ImkNXGSoe8DoLQMAF-9STCFraGQ",
  authDomain: "portofolio-mine.firebaseapp.com",
  projectId: "portofolio-mine",
  storageBucket: "portofolio-mine.firebasestorage.app",
  messagingSenderId: "180165868186",
  appId: "1:180165868186:web:ec7c97bad62c0a37783d23",
  measurementId: "G-435K2B0ET7"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Hapus atau komen baris analytics jika masih blank
// const analytics = getAnalytics(app); 

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);

// JANGAN ada baris "export default firebase" di bawah sini!