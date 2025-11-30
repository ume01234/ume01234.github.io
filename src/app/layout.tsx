import './globals.css';
import LayoutClient from './layout-client';

export const metadata = {
  title: 'Portfolio - Coffee & Flow',
  description: '就職活動用ポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
