import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBdaxxTltEHxVUEYfkrgaPIa5diJLDxyvI",
  authDomain: "taugordrive-2b746.firebaseapp.com",
  projectId: "taugordrive-2b746",
  storageBucket: "taugordrive-2b746.appspot.com",
  messagingSenderId: "325325664858",
  appId: "1:325325664858:web:18986d6ba2f7426aafde63"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);