'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
