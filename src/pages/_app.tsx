import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'jotai-devtools/styles.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { Spinner } from '@/components/common/Spinner';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const fonts = [
      new FontFaceObserver('NanumBaeEunHyeCe'),
      new FontFaceObserver('NanumSquareL'),
      new FontFaceObserver('NanumSquareB'),
      new FontFaceObserver('NanumSquareEB'),
      new FontFaceObserver('NanumSquareR'),
      new FontFaceObserver('NanumMyeongjo'),
    ];

    Promise.all(fonts.map((font) => font.load()))
      .then(() => {
        setFontsLoaded(true);
      })
      .catch((err) => {
        console.error('Some fonts were not loaded', err);
        setFontsLoaded(true); // 폰트 로딩 실패시에도 앱을 표시
      });
  }, []);

  if (!fontsLoaded) return <Spinner />;
  return (
    <>
      <Head>
        <title>연애는 고사하고</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV === 'development' && <DevTools />}
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
