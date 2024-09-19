/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: 'https://couple-gosa.netlify.app/', // 본인의 도메인으로 변경
  generateRobotsTxt: true, // robots.txt 파일도 생성
  sitemapSize: 7000, // 하나의 사이트맵에 포함될 URL 수
  changefreq: 'daily', // 페이지 변경 빈도
  priority: 0.7, // 기본 우선순위
  // 동적 페이지 추가
  additionalPaths: async (config) => [
    await config.transform(config, '/making/parents-test'),
    await config.transform(config, '/making/friends-test'),
    await config.transform(config, '/making/couple-test'),
    await config.transform(config, '/sheet/K6qibh90G78eAIySaliG'),
    await config.transform(config, '/result/94DSwuXauc4DQ1WLPnB1'),
  ],
};

export default config;
