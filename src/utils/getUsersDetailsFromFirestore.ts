import { User } from "@/context/UserContext";
import { db } from "@/services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";


async function getUserDetailsFromFirestore(uid: string): Promise<User | null> {
  const userDocRef = doc(db, 'users', uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    return userDocSnap.data() as User;
  } else {
    console.error('Documento do usuário não encontrado.');
    return null;
  }
}

export default getUserDetailsFromFirestore;