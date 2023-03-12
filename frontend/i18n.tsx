import { getRequestConfig } from 'next-intl/server';
import fetcher from '@/lib/fetcher';
import { AbstractIntlMessages } from 'next-intl';

export const locales = [
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
  return fetcher<AbstractIntlMessages>(`/api/page/${locale}/homepage`);
}
