const ms = require('ms');
const withNextIntl = require('next-intl/plugin')(
  // This is the default, also the `src` folder is supported out of the box
  './i18n.tsx',
);

module.exports = withNextIntl({
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/a-/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        pathname: '/g/**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/img/**',
      },
    ],
  },
  headers() {
    return [
      {
        // Cache all content pages
        source: '/((?!_next|assets|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: [
              `s-maxage=` + ms('1d') / 1000,
              `stale-while-revalidate=` + ms('1y') / 1000,
            ].join(', '),
          },
        ],
        // If you're deploying on a host that doesn't support the `vary` header (e.g. Vercel),
        // make sure to disable caching for prefetch requests for Server Components.
        missing: [
          {
            type: 'header',
            key: 'Next-Router-Prefetch',
          },
        ],
      },
    ];
  },
});
