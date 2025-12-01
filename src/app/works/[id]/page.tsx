import { getData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import WorkDetailClient from './WorkDetailClient';

const siteUrl = 'https://z-ume01234.pages.dev';

interface WorkDetailPageProps {
  params: {
    id: string;
  };
}

// 静的エクスポート用: すべてのworksのidを生成
export function generateStaticParams() {
  const data = getData('en'); // 英語版のデータからidを取得（どの言語でもidは同じ）
  return data.works.map((work) => ({
    id: work.id,
  }));
}

// メタデータ生成
export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const data = getData('en');
  const work = data.works.find((w) => w.id === params.id);

  if (!work) {
    return {
      title: 'Work Not Found',
    };
  }

  return {
    title: `${work.title} - portfolio-Hashizume`,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      url: `${siteUrl}/works/${work.id}`,
      type: 'website',
      images: [
        {
          url: '/images/ogp-image.png',
          width: 1200,
          height: 630,
          alt: work.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: work.title,
      description: work.description,
      images: ['/images/ogp-image.png'],
    },
    alternates: {
      canonical: `${siteUrl}/works/${work.id}`,
    },
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const data = getData('en'); // サーバー側ではデフォルト言語を使用（静的生成用）
  const work = data.works.find((w) => w.id === params.id);

  if (!work) {
    notFound();
  }

  return <WorkDetailClient workId={params.id} />;
}
