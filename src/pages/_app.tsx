import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'jotai-devtools/styles.css';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === 'development' && <DevTools />}
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
