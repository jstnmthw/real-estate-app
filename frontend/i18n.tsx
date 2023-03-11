import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: await getPageTranslations(locale),
}));

const host = process.env.NEXT_PUBLIC_API_HOST;

async function getPageTranslations(locale: string) {
  return await fetch(`${host}/api/page/${locale}/homepage`)
    .then((response) => response.json())
    .then((data) => data);
}
