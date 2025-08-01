// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvvaKPReFKFwem4Il866h6H3vnVSUiCrA",
  authDomain: "damn-e4e25.firebaseapp.com",
  projectId: "damn-e4e25",
  storageBucket: "damn-e4e25.firebasestorage.app",
  messagingSenderId: "800627133450",
  appId: "1:800627133450:web:e452bcee3501eede2ca3f3",
  measurementId: "G-2QKM8YRYV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);