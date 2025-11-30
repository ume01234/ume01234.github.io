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
import OpeningAnimation from '@/components/OpeningAnimation'; // 追加

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  'book-open': BookOpen,
};

// Type B用: 配列を5行ごとにチャンクに分割
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  if (!array) return [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function Home() {
  const { language } = useLanguage();
  const data = getData(language);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Type B用のチャンクデータ（5行区切り）
  const certChunks = chunkArray(data.achievements.certifications, 5);
  const internshipChunks = chunkArray(data.achievements.internships, 5);
  const eventChunks = chunkArray(data.achievements.events, 5);

  // スクロール進捗を計算
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const maxScroll = scrollHeight - clientHeight;
      
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      
      const progress = scrollTop / maxScroll;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [loading, language]);

  return (
    <>
      <OpeningAnimation onComplete={() => setLoading(false)} />

      {!loading && (
        <main className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-coffee-cream">
          <LanguageSwitcher />
          
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

            {/* 隠しメッセージ */}
            <div className="absolute bottom-10 left-0 right-0 text-center z-0 pointer-events-none">
              <p className="text-[#3e2723]/30 text-sm font-serif tracking-widest">
                THANK YOU FOR READING
              </p>
            </div>
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
            <section className="min-h-[40vh] px-6 py-12 md:py-24 flex flex-col justify-center max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-8 text-coffee-espresso"
              >
                {data.sections.career}
              </motion.h2>
              <div className="text-coffee-dark leading-loose whitespace-pre-line text-lg">
                {data.profileData.about}
              </div>
            </section>

            {/* セクション2: 現在の主な取り組み (Netflix風 横スクロール) */}
            <section className="min-h-[40vh] px-6 py-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-coffee-espresso">
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
                      className="w-80 flex-shrink-0 group cursor-pointer"
                    >
                      {/* サムネイル */}
                      <div className="aspect-video bg-coffee-latte/20 rounded-md mb-4 overflow-hidden relative">
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
            <section className="min-h-[30vh] px-6 py-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-coffee-espresso">
                {data.sections.certifications}
              </h2>
              <div className="overflow-x-auto no-scrollbar pb-8">
                <div className="flex gap-16 min-w-max px-4">
                  {certChunks.map((chunk, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="w-64 flex-shrink-0"
                    >
                      <ul className="space-y-4 border-l-2 border-coffee-brown/20 pl-6">
                        {chunk.map((cert, j) => (
                          <li key={j} className="text-coffee-dark font-medium">
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* セクション4: インターン (Type B) */}
            <section className="min-h-[30vh] px-6 py-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-coffee-espresso">
                {data.sections.internships}
              </h2>
              <div className="overflow-x-auto no-scrollbar pb-8">
                <div className="flex gap-16 min-w-max px-4">
                  {internshipChunks.map((chunk, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="w-64 flex-shrink-0"
                    >
                      <ul className="space-y-4 border-l-2 border-coffee-brown/20 pl-6">
                        {chunk.map((item, j) => (
                          <li key={j} className="text-coffee-dark font-medium">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* セクション5: 外部イベント (Type B) */}
            <section className="min-h-[30vh] px-6 py-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-coffee-espresso">
                {data.sections.events}
              </h2>
              <div className="overflow-x-auto no-scrollbar pb-8">
                <div className="flex gap-16 min-w-max px-4">
                  {eventChunks.map((chunk, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="w-64 flex-shrink-0"
                    >
                      <ul className="space-y-4 border-l-2 border-coffee-brown/20 pl-6">
                        {chunk.map((item, j) => (
                          <li key={j} className="text-coffee-dark font-medium">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* セクション6: Works (Netflix風) */}
            <section className="min-h-[40vh] px-6 py-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-coffee-espresso">
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
                      <a href={work.url} target="_blank" rel="noopener noreferrer">
                        <div className="aspect-video bg-coffee-latte/20 rounded-md mb-4 overflow-hidden relative">
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
            <section className="min-h-[40vh] px-6 py-12 flex flex-col justify-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-coffee-espresso">
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
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        <div className="aspect-video bg-coffee-latte/10 rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
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
                <Link href="/blog">
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
              <div className="text-center text-coffee-dark/50 text-sm">
                <p>© 2024 {data.profileData.name}</p>
              </div>
            </footer>
          </div>
        </main>
      )}
    </>
  );
}