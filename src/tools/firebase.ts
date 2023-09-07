import { getAnalytics, logEvent } from 'firebase/analytics';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBN90GcGDAqgC6OFpGzv8Zt9lc41txCQI8',
  authDomain: 'su-ples.firebaseapp.com',
  projectId: 'su-ples',
  storageBucket: 'su-ples.appspot.com',
  messagingSenderId: '563127134930',
  appId: '1:563127134930:web:b20a9892265125d958db0b',
  measurementId: 'G-EPVCHMRV9E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analyticsApp = getAnalytics(app);
