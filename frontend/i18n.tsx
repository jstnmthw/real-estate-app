import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: await getPageTranslations(),
}));

const host = process.env.NEXT_PUBLIC_API_HOST;

async function getPageTranslations() {
  return await fetch(`${host}/api/page/en/homepage`)
    .then((response) => response.json())
    .then((data) => data);
}
