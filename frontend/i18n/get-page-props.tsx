import 'server-only';
import { Locale } from '@/i18n/confg';

const pageProps = function (locale: string, page: string) {
  return fetch('page' + locale + page);
};

export const getPageProps = async (locale: Locale, page: string) =>
  pageProps(locale, page);
