import '@/app/globals.css';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import { i18n } from '@/i18n/confg';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} className={inter.className}>
      <body className="relative">{children}</body>
    </html>
  );
}
