import './globals.css';
import LayoutClient from './layout-client';
import { Metadata } from 'next';
import Script from 'next/script';
import { socialLinks, emailAddress } from '@/lib/data';

const siteUrl = 'https://z-ume01234.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'portfolio-Hashizume',
  description: 'データサイエンスとWebエンジニアリングを主軸に、ジェネラティブアートの感性をスパイスとして加えるエンジニアのポートフォリオサイト',
  keywords: ['ポートフォリオ', 'エンジニア', 'データサイエンス', 'Webエンジニアリング','Rikuto', 'Rikuto Hashizume', 'Hashizume', 'ume01234','橋爪','橋爪陸人','陸人','学生エンジニア','筑波大学'],
  authors: [{ name: 'Rikuto Hashizume' }],
  creator: 'Rikuto Hashizume',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'portfolio-Hashizume',
    description: 'データサイエンスとWebエンジニアリングを主軸に、ジェネラティブアートの感性をスパイスとして加えるエンジニアのポートフォリオサイト',
    url: siteUrl,
    siteName: 'portfolio-Hashizume',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/ogp-image.png',
        width: 1200,
        height: 630,
        alt: 'portfolio-Hashizume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'portfolio-Hashizume',
    description: 'データサイエンスとWebエンジニアリングを主軸に、ジェネラティブアートの感性をスパイスとして加えるエンジニアのポートフォリオサイト',
    images: ['/images/ogp-image.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico', sizes: 'any' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 構造化データ（JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rikuto Hashizume',
    alternateName: ['橋爪 陸人', 'Hashizume Rikuto'],
    url: siteUrl,
    jobTitle: 'Student Engineer',
    description: 'データサイエンスとWebエンジニアリングを主軸に、ジェネラティブアートの感性をスパイスとして加えるエンジニア',
    email: emailAddress,
    sameAs: socialLinks.map(link => link.url),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Tsukuba',
    },
    knowsAbout: [
      'Data Science',
      'Web Engineering',
      'Generative Art',
      'Machine Learning',
      'TypeScript',
      'Python',
      'React',
      'Next.js',
    ],
  };

  return (
    <html lang="ja" className="scroll-smooth">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
