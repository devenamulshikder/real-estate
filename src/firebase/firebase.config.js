
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  apiKey: import.meta.env.VITE_APIKEY,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};


const app = initializeApp(firebaseConfig);
export default app;