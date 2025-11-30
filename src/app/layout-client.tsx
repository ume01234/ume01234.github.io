'use client';

import { useState } from 'react';
import OpeningAnimation from '@/components/OpeningAnimation';
import SteamCursor from '@/components/SteamCursor';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showContent, setShowContent] = useState(false);

  return (
    <LanguageProvider>
      <OpeningAnimation onComplete={() => setShowContent(true)} />
      {showContent && (
        <>
          <SteamCursor />
          {children}
        </>
      )}
    </LanguageProvider>
  );
}

