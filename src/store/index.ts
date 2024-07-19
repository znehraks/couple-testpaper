import { licenses } from '@/data/licenses';
import { atom } from 'jotai';

export const IsGeneratingPDFAtom = atom(false);
IsGeneratingPDFAtom.debugLabel = 'IsGeneratingPDF';

export const IsDownloadBtnVisibleAtom = atom(false);
IsDownloadBtnVisibleAtom.debugLabel = 'IsDownloadBtnVisible';

export const CurrentLicensesAtom = atom<(keyof typeof licenses)[]>([]);
CurrentLicensesAtom.debugLabel = 'CurrentLicenses';
