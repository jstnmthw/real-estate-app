import '@/app/globals.css';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} className={inter.className}>
      <body className="relative">{children}</body>
    </html>
  );
}
