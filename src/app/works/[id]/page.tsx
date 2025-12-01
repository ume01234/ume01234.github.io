import { getData } from '@/lib/data';
import { notFound } from 'next/navigation';
import WorkDetailClient from './WorkDetailClient';

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

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const data = getData('en'); // サーバー側ではデフォルト言語を使用（静的生成用）
  const work = data.works.find((w) => w.id === params.id);

  if (!work) {
    notFound();
  }

  return <WorkDetailClient workId={params.id} />;
}
