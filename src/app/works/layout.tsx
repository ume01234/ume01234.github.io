import { Metadata } from 'next';
import { getData } from '@/lib/data';

const siteUrl = 'https://z-ume01234.pages.dev';

export async function generateMetadata(): Promise<Metadata> {
  const data = getData('ja'); // デフォルトは日本語

  return {
    title: `${data.sections.works} - portfolio-Hashizume`,
    description: `${data.sections.works}一覧ページ。プロジェクトや作品を紹介しています。`,
    openGraph: {
      title: `${data.sections.works} - portfolio-Hashizume`,
      description: `${data.sections.works}一覧ページ。プロジェクトや作品を紹介しています。`,
      url: `${siteUrl}/works`,
      type: 'website',
      images: [
        {
          url: '/images/ogp-image.png',
          width: 1200,
          height: 630,
          alt: `${data.sections.works} - portfolio-Hashizume`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.sections.works} - portfolio-Hashizume`,
      description: `${data.sections.works}一覧ページ。プロジェクトや作品を紹介しています。`,
      images: ['/images/ogp-image.png'],
    },
    alternates: {
      canonical: `${siteUrl}/works`,
    },
  };
}

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

