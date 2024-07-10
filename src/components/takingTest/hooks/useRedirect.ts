import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useRedirect = ({
  redirectCondition,
  redirectPath,
}: {
  redirectCondition: boolean;
  redirectPath: string;
}) => {
  const router = useRouter();
  useEffect(() => {
    if (redirectCondition) {
      router.replace(redirectPath);
      return;
    }
  }, [router, redirectCondition, redirectPath]);
};
