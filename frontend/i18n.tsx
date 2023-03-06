import { NextIntlConfig } from 'next-intl';

const config: NextIntlConfig = {
  locales: ['en', 'de'],
  defaultLocale: 'en',
  async getMessages({ locale }) {
    console.log('########### CALLING JSON ############');
    // return (await import(`messages/${locale}.json`)).default;
    return {
      Index: {
        title: 'Home',
        description: 'This is the home page.',
      },
      LocaleSwitcher: {
        switchLocale:
          'Switch to {locale, select, de {German} en {English} other {Unknown}}',
      },
    };
    // return await data(locale);
  },
};

function data(locale: string) {
  console.log('fechting data ##########');
  // return fetch('http://api/api/page/' + locale + '/homepage').then((res) =>
  return fetch('http://api/api/page/en/homepage').then((res) => res.json());
}

export default config;
