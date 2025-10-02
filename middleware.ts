import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(en|id)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
