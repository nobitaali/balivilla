import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale = 'en' }) => {
  const validLocale = (locale === 'en' || locale === 'id') ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`./locales/${validLocale}.json`)).default
  };
});
