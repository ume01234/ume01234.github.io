'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en'); // デフォルトは英語

  useEffect(() => {
    // SSRエラー対策: windowオブジェクトの存在確認
    if (typeof window === 'undefined') return;
    
    // ローカルストレージから言語設定を読み込む
    try {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      if (savedLanguage === 'en' || savedLanguage === 'ja') {
        setLanguageState(savedLanguage);
      }
    } catch (error) {
      // localStorageが利用できない場合（プライベートモードなど）は無視
      console.warn('Failed to read from localStorage:', error);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // SSRエラー対策: windowオブジェクトの存在確認
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      // localStorageが利用できない場合（プライベートモードなど）は無視
      console.warn('Failed to write to localStorage:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

