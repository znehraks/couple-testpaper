import { useGetTestEntire } from '@/services/useTests';
import { TestType } from '@/types/utils';

export default function CoupleTestResultPage() {
  const { data, isLoading, isError, error } = useGetTestEntire({ testType: TestType.romance });

  console.log('isLoading', isLoading);
  console.log('isError', isError);
  console.log('error', error);

  console.log('data', data);

  return <div>결과</div>;
}
