import { db } from '@/firebaseConfig';
import { TakingTestStore } from '@/store/TakingTestStore';
import { WritingTestStore } from '@/store/WritingTestStore';
import {
  ITestWithAnswerResult,
  IAddCoupleTestEntireQuery,
  IRanking,
  IAddCoupleTestSheetQuery,
  IEntireTest,
  TestType,
  ITestSheet,
} from '@/types/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const useAddTest = ({ testType }: { testType: TestType }) => {
  const queryClient = useQueryClient();
  const setStep = useSetAtom(WritingTestStore.StepAtom);
  const setIsAdOn = useSetAtom(WritingTestStore.IsAdOnAtom);
  const setTempTestSheetId = useSetAtom(WritingTestStore.TempTestSheetIdAtom);
  // const setIsCompleted = useSetAtom(WritingTestStore.IsCompletedAtom);
  testType === TestType.friends;
  const addTest = useCallback(
    async (result: ITestWithAnswerResult) => {
      const entireQuery: IAddCoupleTestEntireQuery = {
        testType,
        testQuestionWithAnswers: result.testQuestionWithAnswers,
        maker: result.maker,
        status: result.status,
        createdAt: new Date()?.toLocaleDateString(),
      };
      const { id: entireDocumentId } = await addDoc(collection(db, `${testType}-test`), entireQuery);
      const testSheetPayload: IAddCoupleTestSheetQuery = {
        testType,
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

      return addDoc(collection(db, `${testType}-test-sheet`), testSheetPayload);
    },
    [testType],
  );

  return useMutation(
    {
      mutationFn: addTest,
      onSuccess: ({ id }) => {
        setIsAdOn(true);
        setStep('COMPLETE');
        setTempTestSheetId(id);
        // setIsCompleted(true);
        // 바로 이렇게 push하지말고, 광고 시청 후에 push하도록 수정
        // router.push(`/sheet/${id}`);
      },
      onError: (error) => {
        console.error(error);
      },
    },
    queryClient,
  );
};

export const useGetTestEntire = ({ testType }: { testType: TestType }) => {
  const router = useRouter();
  const { data } = useGetTestSheet({ testType });
  const queryClient = useQueryClient();

  const getTestEntire = useCallback(
    async (docId?: string): Promise<IEntireTest> => {
      if (!docId) throw new Error('No docId found');
      const docRef = doc(db, `${testType}-test`, docId);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data() as IEntireTest;
      if (!data) throw new Error('No data found');
      return data;
    },
    [testType],
  );

  return useQuery<IEntireTest>(
    {
      queryKey: ['testEntire', data?.entireDocumentId ?? router.query.testEntireId],
      queryFn: () => getTestEntire(data?.entireDocumentId ?? (router.query.testEntireId as string)),
      enabled: !!(data?.entireDocumentId ?? router.query.testEntireId),
      staleTime: Infinity,
    },
    queryClient,
  );
};

export const useGetTestSheet = ({ testType }: { testType: TestType }) => {
  const router = useRouter();
  const { testSheetId } = router.query;
  const queryClient = useQueryClient();

  const getTestSheet = useCallback(
    async (docId: string): Promise<ITestSheet> => {
      const docRef = doc(db, `${testType}-test-sheet`, docId);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data() as ITestSheet;

      if (!data) throw new Error('No data found');
      return { ...data, id: docSnap.id };
    },
    [testType],
  );

  return useQuery<ITestSheet>(
    {
      queryKey: ['testSheet', testSheetId],
      queryFn: () => getTestSheet(testSheetId as string),
      staleTime: Infinity,
    },
    queryClient,
  );
};

export const useAddTakedTestResult = ({ testType }: { testType: TestType }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data } = useGetTestEntire({ testType });

  const selectedAnswers = useAtomValue(TakingTestStore.SelectedAnswersAtom);
  const testScore = useMemo(
    () =>
      data?.testQuestionWithAnswers.reduce((acc, question, index) => {
        if (question.answer === selectedAnswers[index]?.selectedAnswer.text) {
          return acc + 10;
        }
        return acc;
      }, 0) ?? 0,
    [data?.testQuestionWithAnswers, selectedAnswers],
  );

  const addTakedTestResult = useCallback(
    async ({ entireDocumentId, newRanking }: { entireDocumentId: string | undefined; newRanking: IRanking }) => {
      if (!entireDocumentId) throw new Error('No entireDocumentId found');
      const _newRanking = { ...newRanking, testScore };
      const result = {
        ...data,
        rankings: data?.rankings ? [...data.rankings, _newRanking] : [_newRanking],
      };
      const docRef = doc(db, `${testType}-test`, entireDocumentId);
      return updateDoc(docRef, result);
    },
    [data, testScore, testType],
  );

  return useMutation(
    {
      mutationFn: addTakedTestResult,
      onSuccess: (_, { entireDocumentId }) => {
        queryClient.invalidateQueries({ queryKey: ['testEntire', entireDocumentId] });
        router.replace(`/result/${entireDocumentId}`);
      },
      onError: (error) => {
        console.error(error);
      },
    },
    queryClient,
  );
};

export const useGetTakedCoupleTestResults = () => {};
