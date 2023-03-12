import { getRequestConfig } from 'next-intl/server';
import fetcher from '@/lib/fetcher';

export const locales = {
  en: 'English',
  de: 'German',
  fr: 'French',
  th: 'Thai',
  ru: 'Russia',
  zh: 'Chinese (Simplified)',
};

export const locales2 = [
  {
    label: 'English',
    native: 'English',
    code: 'en',
  },
  {
    label: 'French',
    native: 'French',
    code: 'fr',
  },
  {
    label: 'German',
    native: 'German',
    code: 'de',
  },
  {
    label: 'Thai',
    native: 'Thai',
    code: 'th',
  },
  {
    label: 'Chinese (Simplified)',
    native: 'Chinese',
    code: 'zh',
  },
];

export default getRequestConfig(async ({ locale }) => ({
  messages: await getPageTranslations(locale),
}));

function getPageTranslations(locale: string) {
  return fetcher(`/api/page/${locale}/homepage`);
}
