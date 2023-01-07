import '@/app/globals.css';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative">{children}</body>
    </html>
  );
}
