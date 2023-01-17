import '@/app/globals.css';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import { useLocale } from 'next-intl';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function LocaleLayout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  return (
    <html lang={locale} className={inter.className}>
      <body className="relative">{children}</body>
    </html>
  );
}
