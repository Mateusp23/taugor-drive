import { db } from '@/services/firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';

export async function createUserDocument(uid: string, userData: any) {
  try {
    await setDoc(doc(db, "users", uid), userData);
    console.log("Documento do usuário criado com sucesso!");
  } catch (error) {
    console.error("Erro ao criar o documento do usuário:", error);
    throw error;
  }
}