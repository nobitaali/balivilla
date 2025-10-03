import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MapPin, Palette, Sofa, Home, Hammer, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'en' 
    ? 'Our Services - Comprehensive Property Solutions | Balitecture'
    : 'Layanan Kami - Solusi Properti Komprehensif | Balitecture';
    
  const description = locale === 'en'
    ? 'Discover our comprehensive property development services in Bali: land acquisition, architecture design, construction, villa management, and custom furniture. 15+ years of excellence.'
    : 'Temukan layanan pengembangan properti komprehensif kami di Bali: akuisisi tanah, desain arsitektur, konstruksi, manajemen vila, dan furnitur kustom. 15+ tahun keunggulan.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://balitecture.com/${locale}/services`,
      languages: {
        'en': '/en/services',
        'id': '/id/services',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://balitecture.com/${locale}/services`,
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
  };
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations('servicesPage');

  const services = [
    {
      icon: MapPin,
      key: 'land',
      gradient: 'from-gray-800 to-black',
      href: `/${locale}/services/land`,
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Palette,
      key: 'architecture',
      gradient: 'from-gray-700 to-gray-900',
      href: `/${locale}/services/architecture`,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sofa,
      key: 'furniture',
      gradient: 'from-gray-600 to-gray-800',
      href: `/${locale}/services/furniture`,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Home,
      key: 'villaManagement',
      gradient: 'from-black to-gray-800',
      href: `/${locale}/services/villa-management`,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Hammer,
      key: 'construction',
      gradient: 'from-gray-900 to-black',
      href: `/${locale}/services/construction`,
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const stats = [
    { number: '150+', label: t('stats.projects') },
    { number: '15+', label: t('stats.years') },
    { number: '300+', label: t('stats.clients') },
    { number: '50+', label: t('stats.awards') },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: t('testimonials.client1.role'),
      content: t('testimonials.client1.content'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Sarah Johnson',
      role: t('testimonials.client2.role'),
      content: t('testimonials.client2.content'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Michael Chen',
      role: t('testimonials.client3.role'),
      content: t('testimonials.client3.content'),
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

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

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
              {t('overview.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('overview.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.key}
                  href={service.href}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-80">
                    <Image
                      src={service.image}
                      alt={t(`services.${service.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">
                        {t(`services.${service.key}.title`)}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {t(`services.${service.key}.description`)}
                    </p>
                    <div className="flex items-center text-white group-hover:text-gray-300 transition-colors">
                      <span className="font-medium">{t('learnMore')}</span>
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

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
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              {t('process.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('process.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {t(`process.step${step}.title`)}
                </h3>
                <p className="text-slate-600">
                  {t(`process.step${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('cta.description')}
          </p>
          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>{t('cta.button')}</span>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}