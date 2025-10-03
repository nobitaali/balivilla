import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ProjectsClient from '../../components/ProjectsClient';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'en' 
    ? 'Our Projects - Showcasing Excellence in Every Build | Balitecture'
    : 'Proyek Kami - Menampilkan Keunggulan di Setiap Bangunan | Balitecture';
    
  const description = locale === 'en'
    ? 'Explore our portfolio of 150+ completed luxury villas, resorts, and commercial properties in Bali. From Seminyak to Ubud, discover our award-winning architectural projects.'
    : 'Jelajahi portofolio 150+ vila mewah, resor, dan properti komersial yang telah selesai di Bali. Dari Seminyak hingga Ubud, temukan proyek arsitektur pemenang penghargaan kami.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://balitecture.com/${locale}/projects`,
      languages: {
        'en': '/en/projects',
        'id': '/id/projects',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://balitecture.com/${locale}/projects`,
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
  };
}

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations('projectsPage');

  const categories = [
    { key: 'all', label: t('filters.all') },
    { key: 'villa', label: t('filters.villa') },
    { key: 'resort', label: t('filters.resort') },
    { key: 'commercial', label: t('filters.commercial') },
    { key: 'residential', label: t('filters.residential') },
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Seminyak',
      category: 'villa',
      location: 'Seminyak, Bali',
      year: '2023',
      area: '450 m²',
      bedrooms: '4',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('projects.villa1.description'),
      features: [
        t('projects.villa1.features.pool'),
        t('projects.villa1.features.garden'),
        t('projects.villa1.features.garage'),
        t('projects.villa1.features.security'),
      ],
    },
    {
      id: 2,
      title: 'Beachfront Resort Canggu',
      category: 'resort',
      location: 'Canggu, Bali',
      year: '2022',
      area: '2,500 m²',
      bedrooms: '24',
      status: 'completed',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('projects.resort1.description'),
      features: [
        t('projects.resort1.features.beachfront'),
        t('projects.resort1.features.restaurant'),
        t('projects.resort1.features.spa'),
        t('projects.resort1.features.pool'),
      ],
    },
    {
      id: 3,
      title: 'Modern Villa Ubud',
      category: 'villa',
      location: 'Ubud, Bali',
      year: '2023',
      area: '320 m²',
      bedrooms: '3',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('projects.villa2.description'),
      features: [
        t('projects.villa2.features.view'),
        t('projects.villa2.features.yoga'),
        t('projects.villa2.features.organic'),
        t('projects.villa2.features.sustainable'),
      ],
    },
    {
      id: 4,
      title: 'Cliffside Villa Uluwatu',
      category: 'villa',
      location: 'Uluwatu, Bali',
      year: '2024',
      area: '380 m²',
      bedrooms: '3',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('projects.villa3.description'),
      features: [
        t('projects.villa3.features.cliff'),
        t('projects.villa3.features.infinity'),
        t('projects.villa3.features.elevator'),
        t('projects.villa3.features.cinema'),
      ],
    },
    {
      id: 5,
      title: 'Tropical Paradise Sanur',
      category: 'residential',
      location: 'Sanur, Bali',
      year: '2023',
      area: '280 m²',
      bedrooms: '2',
      status: 'completed',
      image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('projects.residential1.description'),
      features: [
        t('projects.residential1.features.tropical'),
        t('projects.residential1.features.courtyard'),
        t('projects.residential1.features.natural'),
        t('projects.residential1.features.meditation'),
      ],
    },
    {
      id: 6,
      title: 'Contemporary Villa Nusa Dua',
      category: 'villa',
      location: 'Nusa Dua, Bali',
      year: '2022',
      area: '520 m²',
      bedrooms: '5',
      status: 'completed',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('projects.villa4.description'),
      features: [
        t('projects.villa4.features.contemporary'),
        t('projects.villa4.features.smart'),
        t('projects.villa4.features.wine'),
        t('projects.villa4.features.gym'),
      ],
    },
    {
      id: 7,
      title: 'Boutique Hotel Jimbaran',
      category: 'commercial',
      location: 'Jimbaran, Bali',
      year: '2024',
      area: '1,200 m²',
      bedrooms: '12',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('projects.commercial1.description'),
      features: [
        t('projects.commercial1.features.boutique'),
        t('projects.commercial1.features.rooftop'),
        t('projects.commercial1.features.conference'),
        t('projects.commercial1.features.wellness'),
      ],
    },
    {
      id: 8,
      title: 'Eco Resort Munduk',
      category: 'resort',
      location: 'Munduk, Bali',
      year: '2024',
      area: '3,500 m²',
      bedrooms: '18',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('projects.resort2.description'),
      features: [
        t('projects.resort2.features.eco'),
        t('projects.resort2.features.mountain'),
        t('projects.resort2.features.adventure'),
        t('projects.resort2.features.local'),
      ],
    },
  ];

  const translations = {
    filterBy: t('filterBy'),
    bedrooms: t('bedrooms'),
    viewDetails: t('viewDetails'),
    statusCompleted: t('status.completed'),
    statusOngoing: t('status.ongoing'),
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <ProjectsClient 
        projects={projects}
        categories={categories}
        locale={locale}
        translations={translations}
      />

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif">
              {t('stats.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('stats.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-gray-400">{t('stats.completed')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25</div>
              <p className="text-gray-400">{t('stats.ongoing')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-gray-400">{t('stats.satisfaction')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-gray-400">{t('stats.awards')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}