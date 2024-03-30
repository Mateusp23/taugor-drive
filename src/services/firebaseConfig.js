import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBdaxxTltEHxVUEYfkrgaPIa5diJLDxyvI",
  authDomain: "taugordrive-2b746.firebaseapp.com",
  projectId: "taugordrive-2b746",
  storageBucket: "taugordrive-2b746.appspot.com",
  messagingSenderId: "325325664858",
  appId: "1:325325664858:web:18986d6ba2f7426aafde63"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
