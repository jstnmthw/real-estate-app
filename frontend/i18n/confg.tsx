export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'th', 'ru', 'zh'],
  locales2: [
    {
      locale: 'en',
      label: 'English',
      native: 'English',
      icon: 'en.svg',
    },
    {
      locale: 'th',
      label: 'Thai',
      native: 'ไทย',
      icon: 'th.svg',
    },
    {
      locale: 'ru',
      label: 'Russian',
      native: 'Русский',
      icon: 'ru.svg',
    },
    {
      locale: 'ru',
      label: 'Chinese',
      native: '中国人',
      icon: 'zh.svg',
    },
  ],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export type Locale2 = (typeof i18n)['locales2'][number];
