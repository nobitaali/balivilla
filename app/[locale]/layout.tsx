import '../globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Balitecture - Premier Property Architecture in Bali',
  description: 'Transform your vision into reality with our comprehensive property development services in Bali. Design, build, and manage luxury villas and resorts.',
  keywords: 'Bali property, villa construction, architecture Bali, luxury villas, property development, Bali real estate',
  authors: [{ name: 'Balitecture' }],
  openGraph: {
    title: 'Balitecture - Premier Property Architecture in Bali',
    description: 'Design, build, and manage luxury villas and resorts in Bali',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balitecture - Premier Property Architecture in Bali',
    description: 'Design, build, and manage luxury villas and resorts in Bali',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = locale === 'en' || locale === 'id'
      ? (await import(`../../locales/${locale}.json`)).default
      : notFound();
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
