import { Layout } from '@/components/Layout';
import { useRouter } from 'next/router';

export default function TestResultDetailPage() {
  const router = useRouter();
  return <Layout>결과{router.query.name}</Layout>;
}
