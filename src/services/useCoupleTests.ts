import { db } from '@/firebaseConfig';
import { WritingTestStore } from '@/store/WritingTestStore';
import {
  ITestWithAnswerResult,
  IAddCoupleTestEntirePayload,
  IRanking,
  IAddCoupleTestSheetPayload,
  IAddCoupleTestEntireResponse,
} from '@/types/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';

export const useAddCoupleTest = () => {
  const addCoupleTest = async (result: ITestWithAnswerResult) => {
    const entirePayload: IAddCoupleTestEntirePayload = {
      testType: 'couple',
      testQuestionWithAnswers: result.testQuestionWithAnswers,
      maker: result.maker,
      status: result.status,
      createdAt: new Date()?.toLocaleDateString(),
    };
    const { id: entireDocumentId } = await addDoc(collection(db, 'couple-tests'), entirePayload);
    const testSheetPayload: IAddCoupleTestSheetPayload = {
      testType: 'couple',
      maker: result.maker,
      status: result.status,
      createdAt: new Date()?.toLocaleDateString(),
      testQuestions: result.testQuestionWithAnswers.map((question) => ({
        question: question.question,
        choices: question.choices,
        type: question.type,
      })),
      entireDocumentId,
    };

    return addDoc(collection(db, 'couple-tests-sheet'), testSheetPayload);
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

export const useGetCoupleTestEntire = () => {
  const { data } = useGetCoupleTestSheet();
  const queryClient = useQueryClient();

  const getCoupleTestEntire = async (docId?: string): Promise<IAddCoupleTestEntireResponse> => {
    if (!docId) throw new Error('No docId found');
    const docRef = doc(db, 'couple-tests', docId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data() as IAddCoupleTestEntireResponse;
    if (!data) throw new Error('No data found');
    return data;
  };
  return useQuery<IAddCoupleTestEntireResponse>(
    {
      queryKey: ['coupleTest', data?.entireDocumentId],
      queryFn: () => getCoupleTestEntire(data?.entireDocumentId),
      enabled: !!data?.entireDocumentId,
    },
    queryClient,
  );
};

export const useGetCoupleTestSheet = () => {
  const getCoupleTestSheet = async (docId: string): Promise<IAddCoupleTestSheetPayload> => {
    const docRef = doc(db, 'couple-tests-sheet', docId);
    const docSnap = await getDoc(docRef);
    docSnap.id;
    const data = docSnap.data() as IAddCoupleTestSheetPayload;

    if (!data) throw new Error('No data found');
    return data;
  };
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  return useQuery<IAddCoupleTestSheetPayload>(
    {
      queryKey: ['coupleTest', id],
      queryFn: () => getCoupleTestSheet(id as string),
      staleTime: Infinity,
    },
    queryClient,
  );
};

export const useAddTakedCoupleTestResult = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data } = useGetCoupleTestEntire();

  if (!data) throw new Error('No data found');

  const addTakedCoupleTestResult = async ({
    entireDocumentId,
    newRanking,
  }: {
    entireDocumentId: string | undefined;
    newRanking: IRanking;
  }) => {
    if (!entireDocumentId) throw new Error('No entireDocumentId found');
    const result = {
      ...data,
      rankings: data.rankings ? [...data.rankings, newRanking] : [newRanking],
    };
    const docRef = doc(db, 'couple-tests', entireDocumentId);
    return updateDoc(docRef, result);
  };

  return useMutation(
    {
      mutationFn: addTakedCoupleTestResult,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['coupleTest', data.id as string] });
        router.replace(`/couple-test/${data.id}/result`);
      },
      onError: (error) => {
        console.error(error);
      },
    },
    queryClient,
  );
};

export const useGetTakedCoupleTestResults = () => {};
