import { getRequestConfig } from 'next-intl/server';
import fetcher from '@/lib/fetcher';

export default getRequestConfig(async ({ locale }) => ({
  messages: await getPageTranslations(locale),
}));

function getPageTranslations(locale: string) {
  return fetcher(`/api/page/${locale}/homepage`);
}
