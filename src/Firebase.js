
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyA7an_sTGqKO68c53dY966B6JrpbGlTgfc",
  authDomain: "clod-messaging-82e15.firebaseapp.com",
  projectId: "clod-messaging-82e15",
  storageBucket: "clod-messaging-82e15.appspot.com",
  messagingSenderId: "819961140317",
  appId: "1:819961140317:web:2bbb11d27d1c5e79a429b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging=getMessaging(app)