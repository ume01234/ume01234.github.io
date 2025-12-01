import { MetadataRoute } from 'next';
import { getData } from '@/lib/data';

const siteUrl = 'https://z-ume01234.pages.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/activities`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 動的ページ（Works詳細ページ）
  const data = getData('en'); // デフォルト言語で取得
  const workPages: MetadataRoute.Sitemap = data.works.map((work) => ({
    url: `${siteUrl}/works/${work.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...workPages];
}

