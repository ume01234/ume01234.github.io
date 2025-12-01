import './globals.css';
import LayoutClient from './layout-client';

export const metadata = {
  title: 'portfolio-Hashizume',
  description: '就職活動用ポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
