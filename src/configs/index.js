import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGP4ZS9hroI1Xvn9COtmNEvX11IJeSTn0",
  authDomain: "exe2-tera-candle.firebaseapp.com",
  projectId: "exe2-tera-candle",
  storageBucket: "exe2-tera-candle.appspot.com",
  messagingSenderId: "449009319106",
  appId: "1:449009319106:web:cb845c17e19ed4a7d90f5b",
  measurementId: "G-S9SFBDTWSZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const api = "https://escentedcandle-project-backend.onrender.com/api/v1";
export { api, storage };
