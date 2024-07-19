import { licenses } from '@/data/licenses';
import { CurrentLicensesAtom } from '@/store';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

export const useLicenses = (licenseNames: (keyof typeof licenses)[]) => {
  const setCurrentLicenses = useSetAtom(CurrentLicensesAtom);
  useEffect(() => {
    setCurrentLicenses(licenseNames);
  }, [licenseNames, setCurrentLicenses]);
  const sanitizeLicenseNames = useCallback(() => {
    setCurrentLicenses([]);
  }, [setCurrentLicenses]);
  return { sanitizeLicenseNames };
};
