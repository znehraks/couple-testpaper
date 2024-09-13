import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MakingTest() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, [router]);
  return null;
}
