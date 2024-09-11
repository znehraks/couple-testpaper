import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/NanumBaeEunHyeCe.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumSquareL.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumSquareB.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumSquareEB.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumSquareR.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumMyeongjo.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumMyeongBold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumMyeongExtraBold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}
