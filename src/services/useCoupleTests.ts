import { db } from '@/firebaseConfig';
import { WritingTestStore } from '@/store/WritingTestStore';
import { ITestResult, ICoupleTestResult, IRanking } from '@/types/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';

export const useAddCoupleTest = () => {
  const addCoupleTest = async (result: ITestResult) => {
    const payload: ICoupleTestResult = {
      testType: 'couple',
      testQuestions: result.testQuestions,
      maker: result.maker,
      status: result.status,
      createdAt: new Date()?.toLocaleDateString(),
    };
    return addDoc(collection(db, 'couple-tests'), payload);
  };
  const queryClient = useQueryClient();
  const router = useRouter();
  const setIsAdOn = useSetAtom(WritingTestStore.IsAdOnAtom);
  const setIsCompleted = useSetAtom(WritingTestStore.IsCompletedAtom);
  return useMutation(
    {
      mutationFn: addCoupleTest,
      onSuccess: ({ id }) => {
        setIsAdOn(true);
        setIsCompleted(true);
        // 바로 이렇게 push하지말고, 광고 시청 후에 push하도록 수정
        router.push(`/couple-test/${id}`);
      },
      onError: (error) => {
        console.error(error);
      },
    },
    queryClient,
  );
};

export const useGetCoupleTest = () => {
  const getCoupleTest = async (docId: string): Promise<ICoupleTestResult> => {
    const docRef = doc(db, 'couple-tests', docId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data() as ICoupleTestResult;
    if (!data) throw new Error('No data found');
    return data;
  };
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  return useQuery<ICoupleTestResult>(
    {
      queryKey: ['coupleTest', id],
      queryFn: () => getCoupleTest(id as string),
      staleTime: Infinity,
    },
    queryClient,
  );
};

export const useAddTakedCoupleTestResult = () => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const { data } = useGetCoupleTest();

  if (!data) throw new Error('No data found');
  if (!id) throw new Error('No id found');

  const addTakedCoupleTestResult = async (newRanking: IRanking) => {
    const result = {
      ...data,
      rankings: data.rankings ? [...data.rankings, newRanking] : [newRanking],
    };
    const docRef = doc(db, 'couple-tests', id as string);
    return updateDoc(docRef, result);
  };

  return useMutation(
    {
      mutationFn: addTakedCoupleTestResult,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['coupleTest', id as string] });
        router.replace(`/couple-test/${id}/result`);
      },
      onError: (error) => {
        console.error(error);
      },
    },
    queryClient,
  );
};

export const useGetTakedCoupleTestResults = () => {};
