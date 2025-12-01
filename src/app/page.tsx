'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, BookOpen } from 'lucide-react';
import {
  getData,
  socialLinks,
} from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';
import LiquidBackground from '@/components/LiquidBackground';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import TypeBSection from '@/components/TypeBSection';
import ScrollToTop from '@/components/ScrollToTop';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  'book-open': BookOpen,
};

// Type B用: 配列を5行ごとにチャンクに分割
function chunkArray<T>(array: T[] | undefined | null, chunkSize: number): T[][] {
  if (!array || array.length === 0) return [];
  if (chunkSize <= 0) return [array];
  
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function Home() {
  const { language } = useLanguage();
  const data = getData(language);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Type B用のチャンクデータ（5行区切り）
  const certChunks = chunkArray(data.achievements.certifications, 5);
  const internshipChunks = chunkArray(data.achievements.internships, 5);
  const eventChunks = chunkArray(data.achievements.events, 5);

  // スクロール進捗を計算（パフォーマンス最適化: requestAnimationFrame使用）
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let rafId: number | null = null;
    let ticking = false;

    const updateScrollProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const maxScroll = scrollHeight - clientHeight;
      
      if (maxScroll <= 0) {
        setScrollProgress(0);
        ticking = false;
        return;
      }
      
      const progress = scrollTop / maxScroll;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          updateScrollProgress();
        });
        ticking = true;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // 初期値計算

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []); // 依存配列は空（マウント時のみ）

  return (
    <main className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-coffee-cream">
      <LanguageSwitcher />
      <ScrollToTop scrollContainerRef={scrollContainerRef} />
          
          {/* 左側: 固定サイドバー */}
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex md:w-[35%] lg:w-[30%] h-full flex-col items-center justify-center relative overflow-hidden bg-coffee-cream shadow-2xl z-10"
          >
            {/* コーヒー液体背景 */}
            <LiquidBackground scrollProgress={scrollProgress} />
            
            {/* 【修正】 mix-blend-difference を適用し、文字色を白に設定 */}
            {/* これにより、暗い液体の前では白く、明るいカップの前では黒く自動反転します */}
            <div className="relative z-10 text-center px-8 mix-blend-difference text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-serif mb-6 font-light drop-shadow-md"
                style={{ fontFamily: '"Noto Serif JP", serif' }}
              >
                {data.profileData.catchCopy}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl mb-2 drop-shadow-md"
              >
                {data.profileData.name}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm lg:text-base opacity-90 mb-8 drop-shadow-md font-medium"
              >
                {data.profileData.vision}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-4 justify-center"
              >
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon] || Github;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:scale-110 transition-transform"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            {/* 隠しメッセージ（飲み干した時に現れる） */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scrollProgress > 0.9 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-10 left-0 right-0 text-center z-20 pointer-events-none"
            >
              <p className="text-[#3e2723]/40 text-sm font-serif tracking-widest drop-shadow-sm">
                THANK YOU FOR READING
              </p>
            </motion.div>
          </motion.aside>

          {/* 右側: スクロール可能なコンテンツ */}
          {/* 【修正】 デザインをシンプルに戻しました */}
          <div 
            ref={scrollContainerRef} 
            className="flex-1 bg-coffee-cream overflow-y-auto relative scroll-smooth"
          >
            {/* モバイル用ヘッダー */}
            <section className="md:hidden min-h-screen flex flex-col items-center justify-center px-6 bg-coffee-gradient relative text-[#fdfbf7]">
              <div className="text-center z-10">
                <h1 className="text-4xl font-serif mb-6 font-light">
                  {data.profileData.catchCopy}
                </h1>
                <p className="text-xl mb-2">{data.profileData.name}</p>
                <p className="text-sm opacity-80 mb-8">{data.profileData.vision}</p>
              </div>
            </section>

            {/* セクション1: 経歴・学歴 */}
            <section className="min-h-[40vh] px-6 py-10 md:py-14 flex flex-col justify-center max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-8 text-coffee-espresso"
              >
                {data.sections.career}
              </motion.h2>
              <div className="text-coffee-dark leading-loose whitespace-pre-line text-lg">
                {data.profileData.about}
              </div>
            </section>

            {/* セクション2: 現在の主な取り組み (Netflix風 横スクロール) */}
            <section className="min-h-[40vh] px-6 py-10 md:py-14 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-coffee-espresso">
                {data.sections.activities}
              </h2>
              {/* スクロールエリア */}
              <div className="overflow-x-auto no-scrollbar pb-8">
                <div className="flex gap-6 min-w-max px-4">
                  {data.activities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="w-80 flex-shrink-0 group"
                    >
                      {/* サムネイル */}
                      <div 
                        className="aspect-video bg-coffee-latte/20 rounded-md mb-4 overflow-hidden relative"
                        aria-hidden="true"
                      >
                         <div className="absolute inset-0 bg-coffee-espresso/0 group-hover:bg-coffee-espresso/10 transition-colors duration-300" />
                         <div className="w-full h-full flex items-center justify-center text-coffee-brown/40">
                            Image
                         </div>
                      </div>
                      <h3 className="text-xl font-bold text-coffee-espresso mb-2 group-hover:text-coffee-brown transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-coffee-dark/80 leading-relaxed">
                        {activity.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* セクション3: 資格 (Type B: 5行区切り横スクロール) */}
            <TypeBSection title={data.sections.certifications} chunks={certChunks} />

            {/* セクション4: インターン (Type B) */}
            <TypeBSection title={data.sections.internships} chunks={internshipChunks} />

            {/* セクション5: 外部イベント (Type B) */}
            <TypeBSection title={data.sections.events} chunks={eventChunks} />

            {/* セクション6: Works (Netflix風) */}
            <section className="min-h-[40vh] px-6 py-10 md:py-14 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-coffee-espresso">
                {data.sections.works}
              </h2>
              <div className="overflow-x-auto no-scrollbar pb-8">
                <div className="flex gap-6 min-w-max px-4">
                  {data.works.map((work, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="w-80 flex-shrink-0 group"
                    >
                      <a 
                        href={work.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View ${work.title} - ${work.description}`}
                      >
                        <div 
                          className="aspect-video bg-coffee-latte/20 rounded-md mb-4 overflow-hidden relative"
                          aria-hidden="true"
                        >
                           <div className="absolute inset-0 bg-coffee-espresso/0 group-hover:bg-coffee-espresso/10 transition-colors duration-300" />
                           <div className="w-full h-full flex items-center justify-center text-coffee-brown/40">
                              Work Image
                           </div>
                        </div>
                        <h3 className="text-xl font-bold text-coffee-espresso mb-2 group-hover:text-coffee-brown transition-colors">
                          {work.title}
                        </h3>
                        <p className="text-sm text-coffee-dark/80 leading-relaxed">
                          {work.description}
                        </p>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* セクション7: Blog (Netflix風) */}
            <section className="min-h-[40vh] px-6 py-10 md:py-14 flex flex-col justify-center mb-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-coffee-espresso">
                {data.sections.blog}
              </h2>
              <div className="overflow-x-auto no-scrollbar pb-8">
                <div className="flex gap-6 min-w-max px-4">
                  {data.blogPosts.slice(0, 5).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="w-80 flex-shrink-0 group"
                    >
                      <a 
                        href={post.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Read article: ${post.title}`}
                      >
                        <div 
                          className="aspect-video bg-coffee-latte/10 rounded-md mb-4 flex items-center justify-center relative overflow-hidden"
                          aria-hidden="true"
                        >
                           <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/5 transition-colors" />
                           <span className="text-coffee-brown/40 font-serif">Article</span>
                        </div>
                        <h3 className="text-lg font-bold text-coffee-espresso mb-2 group-hover:text-coffee-brown transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-coffee-dark/70 mb-2 line-clamp-2">
                          {post.subtitle}
                        </p>
                        <p className="text-xs text-coffee-brown/60 font-mono">
                          {post.date}
                        </p>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex justify-end px-4">
                <Link 
                  href="/blog"
                  aria-label="View all blog posts"
                >
                  <span className="text-coffee-brown hover:text-coffee-espresso transition-colors font-medium border-b border-coffee-brown/30 hover:border-coffee-brown">
                    {data.sections.viewAll} →
                  </span>
                </Link>
              </div>
            </section>

            {/* スクロール余白 */}
            <div className="h-[20vh] w-full"></div>

            {/* Footer */}
            <footer className="px-6 py-12 border-t border-coffee-brown/10 bg-[#fffdf9]">
              <div className="text-center text-sm" style={{ color: '#B0E0E6' }}>
                <p>© 2024 {data.profileData.name}</p>
              </div>
            </footer>
          </div>
        </main>
  );
}