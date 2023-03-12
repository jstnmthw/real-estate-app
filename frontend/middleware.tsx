import createIntlMiddleware from 'next-intl/middleware';
import { locales } from '@/i18n';

export default createIntlMiddleware({
  locales: Object.keys(locales),
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|img).*)'],
};
