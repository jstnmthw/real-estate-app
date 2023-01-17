import { NextIntlConfig } from 'next-intl';

const config: NextIntlConfig = {
  locales: ['en', 'de'],
  defaultLocale: 'en',
  async getMessages({ locale }) {
    // return (await import(`../messages/${locale}.json`)).default;
    return await data(locale);
  },
};

function data(locale: string) {
  return fetch('http://api/api/page/' + locale).then((res) => res.json());
}

export default config;
