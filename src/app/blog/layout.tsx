import { Metadata } from 'next';
import { getData } from '@/lib/data';

const siteUrl = 'https://z-ume01234.pages.dev';

export async function generateMetadata(): Promise<Metadata> {
  const data = getData('ja'); // デフォルトは日本語

  return {
    title: `${data.sections.blog} - portfolio-Hashizume`,
    description: `${data.sections.blog}一覧ページ。技術記事やブログ投稿を紹介しています。`,
    openGraph: {
      title: `${data.sections.blog} - portfolio-Hashizume`,
      description: `${data.sections.blog}一覧ページ。技術記事やブログ投稿を紹介しています。`,
      url: `${siteUrl}/blog`,
      type: 'website',
      images: [
        {
          url: '/images/ogp-image.png',
          width: 1200,
          height: 630,
          alt: `${data.sections.blog} - portfolio-Hashizume`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.sections.blog} - portfolio-Hashizume`,
      description: `${data.sections.blog}一覧ページ。技術記事やブログ投稿を紹介しています。`,
      images: ['/images/ogp-image.png'],
    },
    alternates: {
      canonical: `${siteUrl}/blog`,
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

