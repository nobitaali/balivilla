import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  const title = locale === 'en' 
    ? 'Balitecture - Premier Property Development & Architecture in Bali'
    : 'Balitecture - Pengembangan Properti & Arsitektur Premier di Bali';
    
  const description = locale === 'en'
    ? 'Transform your vision into reality with our comprehensive property development services in Bali. We design, build, and manage luxury villas and resorts with 15+ years of experience.'
    : 'Wujudkan visi Anda dengan layanan pengembangan properti komprehensif kami di Bali. Kami mendesain, membangun, dan mengelola vila dan resor mewah dengan pengalaman 15+ tahun.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://balitecture.com/${locale}`,
      languages: {
        'en': '/en',
        'id': '/id',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://balitecture.com/${locale}`,
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
