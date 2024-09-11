import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>모두의 시험</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="친구, 연인, 부모님에 대해 재미있는 시험문제 형식으로 서로를 더 가까이 잘 알아가는 시간을 제공합니다."
        />
        <meta
          name="keywords"
          content="친구, 연인, 커플, 부모님, 시험, 연애고사, 부모님고사, 솔로지옥, 하트시그널, 나는솔로, 결혼, 데이트, 연애"
        />
        <meta name="author" content="znehraks(Design.C)" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph 메타 태그 */}
        <meta property="og:title" content="모두의 시험" />
        <meta property="og:description" content="친구, 연인, 부모님에 대해 재밌는 시험으로 알아가는 시간" />
        <meta property="og:image" content="/cover_image.png" />
        <meta property="og:url" content="https://couple-test.netlify.app/" />
        <meta property="og:type" content="website" />
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
