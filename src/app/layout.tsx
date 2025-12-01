import './globals.css';
import LayoutClient from './layout-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'portfolio-Hashizume',
  description: 'データサイエンスとWebエンジニアリングを主軸に、ジェネラティブアートの感性をスパイスとして加えるエンジニアのポートフォリオサイト',
  keywords: ['ポートフォリオ', 'エンジニア', 'データサイエンス', 'Webエンジニアリング', 'Rikuto Hashizume'],
  authors: [{ name: 'Rikuto Hashizume' }],
  creator: 'Rikuto Hashizume',
  openGraph: {
    title: 'portfolio-Hashizume',
    description: 'データサイエンスとWebエンジニアリングを主軸に、ジェネラティブアートの感性をスパイスとして加えるエンジニアのポートフォリオサイト',
    url: 'https://portfolio-hashizume.pages.dev', // Cloudflare PagesのURLに変更してください
    siteName: 'portfolio-Hashizume',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/ogp-image.png', // OGP画像のパス（後で追加）
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
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
