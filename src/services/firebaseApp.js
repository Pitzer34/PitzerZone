import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA1EPDC2kMF-Di3BSCUhBQiVKpN3YobVFs',
  authDomain: 'pitzer-58dc4.firebaseapp.com',
  projectId: 'pitzer-58dc4',
  storageBucket: 'pitzer-58dc4.firebasestorage.app',
  messagingSenderId: '372651435376',
  appId: '1:372651435376:web:ad46bf585a04f43bbbdbb5',
  measurementId: 'G-EM1SXVDWJV',
};

/**
 * 初始化 Firebase 應用並返回主要服務（Auth、Firestore、Storage）。
 *
 * @param {FirebaseApp} [existingApp] - 可選的現有 Firebase 應用實例。
 * 如果提供了此參數，則使用該實例而不是創建新的應用。
 * @returns {Object} - 包含 `firebaseApp`、`auth`、`firestore` 和 `storage` 的 Firebase 服務實例。
 *
 * @property {FirebaseApp} firebaseApp - 初始化的 Firebase 應用實例。
 * @property {Auth} auth - Firebase Auth 用於驗證的服務。
 * @property {Firestore} firestore - Firebase Firestore 用於資料庫的服務。
 * @property {Storage} storage - Firebase Storage 用於儲存的服務。
 */
function initialize(existingApp) {
  const firebaseApp = existingApp || initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  return { firebaseApp, auth, firestore, storage };
}

export function getFirebase() {
  const existingApp = getApps().at(0);
  return initialize(existingApp);
}
