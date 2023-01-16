import { Locale } from '@/i18n/confg';

const pageProps = async function (locale: string, page: string) {
  const res = await fetch(`http://api/api/page/${locale}/${page}`);
  if (!res.ok) {
    throw new Error('Failed fetching page data');
  }
  return await res.json();
};

export const getPageProps = async (locale: Locale, page: string) =>
  pageProps(locale, page);
