import { db } from '@/firebaseConfig';
import { ITestResult, ICoupleTestResult } from '@/types/utils';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

export const addCoupleTest = async (result: ITestResult) => {
  const payload: ICoupleTestResult = {
    testType: 'couple',
    testQuestions: result.testQuestions,
    maker: result.maker,
    status: result.status,
    createdAt: new Date()?.toLocaleDateString(),
  };
  return addDoc(collection(db, 'couple-tests'), payload);
};

export const getCoupleTest = async (docId: string): Promise<ICoupleTestResult> => {
  const docRef = doc(db, 'couple-tests', docId);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data() as ICoupleTestResult;
  if (!data) throw new Error('No data found');
  return data;
};
