// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const env = import.meta.env;
const firebaseConfig = {
  apiKey: env.VITE_DB_APIKEY,
  authDomain: env.VITE_DB_AUTHDOMAIN,
  projectId: env.VITE_DB_PROJECTID,
  storageBucket: env.VITE_DB_STORAGEBUCKET,
  messagingSenderId: env.VITE_DB_MESSAGINGSENDERID,
  appId: env.VITE_DB_APPID,
  measurementId: env.VITE_DB_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const firebaseApp = app;
export const database = db;
export const firebaseAlt = analytics;
