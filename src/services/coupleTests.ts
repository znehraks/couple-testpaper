import { db } from '@/firebaseConfig';
import { ITestQuestion } from '@/types/utils';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

export const addCoupleTest = async (result: ITestQuestion[]) =>
  addDoc(collection(db, 'couple-tests'), {
    testType: 'couple',
    testQuestions: result,
    createdAt: new Date()?.toLocaleDateString(),
  });

export const getCoupleTest = async (docId: string): Promise<ITestQuestion[]> => {
  const docRef = doc(db, 'couple-tests', docId);
  const docSnap = await getDoc(docRef);
  console;
  return docSnap.data()?.testQuestions;
};
