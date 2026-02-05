
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBS1jyfwdLttxbBhQZ13imfRV_5Xov4gaY",
  authDomain: "mydsd-964c3.firebaseapp.com",
  projectId: "mydsd-964c3",
  storageBucket: "mydsd-964c3.firebasestorage.app",
  messagingSenderId: "1041638614580",
  appId: "1:1041638614580:web:9af531d5f1b923f1fc8c61",
  measurementId: "G-NCH7KWTWR7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
