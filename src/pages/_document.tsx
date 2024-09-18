import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
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
        <meta property="og:title" content="연애는 고사하고" />
        <meta
          property="og:description"
          content="연애는 고사하고, 친구, 연인, 부모님에 대해 재밌는 시험으로 알아가는 시간"
        />
        <meta property="og:image" content="/cover_image.png" />
        <meta property="og:url" content="https://couple-test.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="mSndha_j73A3R-lyn05C1VsXP-d9FiaF-bH3vTj9U-k" />
        <link rel="preload" href="/NanumBaeEunHyeCe.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumSquareL.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumSquareB.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumSquareEB.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumSquareR.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/NanumMyeongjo.otf" as="font" type="font/otf" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon-144x144.png" sizes="114x114" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/0.png" as="image" type="image/png" />
        <link rel="preload" href="/5.png" as="image" type="image/png" />
        <link rel="preload" href="/10.png" as="image" type="image/png" />
        <link rel="preload" href="/15.png" as="image" type="image/png" />
        <link rel="preload" href="/20.png" as="image" type="image/png" />
        <link rel="preload" href="/25.png" as="image" type="image/png" />
        <link rel="preload" href="/30.png" as="image" type="image/png" />
        <link rel="preload" href="/35.png" as="image" type="image/png" />
        <link rel="preload" href="/40.png" as="image" type="image/png" />
        <link rel="preload" href="/45.png" as="image" type="image/png" />
        <link rel="preload" href="/50.png" as="image" type="image/png" />
        <link rel="preload" href="/55.png" as="image" type="image/png" />
        <link rel="preload" href="/60.png" as="image" type="image/png" />
        <link rel="preload" href="/65.png" as="image" type="image/png" />
        <link rel="preload" href="/70.png" as="image" type="image/png" />
        <link rel="preload" href="/75.png" as="image" type="image/png" />
        <link rel="preload" href="/80.png" as="image" type="image/png" />
        <link rel="preload" href="/85.png" as="image" type="image/png" />
        <link rel="preload" href="/90.png" as="image" type="image/png" />
        <link rel="preload" href="/95.png" as="image" type="image/png" />
        <link rel="preload" href="/100.png" as="image" type="image/png" />
        <link rel="preload" href="/correct.png" as="image" type="image/png" />
        <link rel="preload" href="/wrong.png" as="image" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              new PartnersCoupang.G({
                "id":808718,
                "template":"carousel",
                "trackingCode":"AF4635557",
                "width":"680",
                "height":"140",
                "tsource":""
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}
