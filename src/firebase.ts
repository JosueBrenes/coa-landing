import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAG4z55fy9CxJIntv5GEJyJyHn4J2PTRvQ",
  authDomain: "citizen-of-arcanis.firebaseapp.com",
  projectId: "citizen-of-arcanis",
  storageBucket: "citizen-of-arcanis.firebasestorage.app",
  messagingSenderId: "899234121451",
  appId: "1:899234121451:web:33e73f6e2c755372aca0ae",
  measurementId: "G-ELG5637976",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
