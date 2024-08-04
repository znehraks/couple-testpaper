import { useGetTestEntire } from '@/services/useTests';
import { TestType } from '@/types/utils';

export default function TestResultDetailPage() {
  const { data } = useGetTestEntire({ testType: TestType.romance });
  console.log('data', data);
  if (!data) return null;
  // return <Layout>결과{router.query.name}</Layout>;
  return null;
}
