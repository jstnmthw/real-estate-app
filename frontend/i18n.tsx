import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    Index: {
      title: 'Home',
      description: 'This is the home page.',
    },
    LocaleSwitcher: {
      switchLocale:
        'Switch to {locale, select, de {German} en {English} other {Unknown}}',
    },
  },
}));
