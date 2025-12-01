'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ScrollToTopProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

export default function ScrollToTop({ scrollContainerRef }: ScrollToTopProps) {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const totalScrollHeight = scrollHeight - clientHeight;
      
      // スクロールできない場合や計算が無効な場合は非表示
      if (totalScrollHeight <= 0) {
        setIsVisible(false);
        return;
      }
      
      const scrollPercentage = scrollTop / totalScrollHeight;
      
      // 80%以上スクロールしたら表示
      setIsVisible(scrollPercentage > 0.8);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初期チェック
    handleScroll();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[70] p-3 bg-coffee-brown/80 hover:bg-coffee-brown backdrop-blur-sm border border-coffee-brown/30 rounded-full shadow-lg hover:shadow-xl transition-all text-coffee-cream hover:scale-110"
          aria-label={language === 'ja' ? 'ページトップに戻る' : 'Scroll to top'}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

