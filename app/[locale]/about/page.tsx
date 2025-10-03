import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Award, Users, Building, Clock, Target, Heart, Shield, Lightbulb } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'en' 
    ? 'About Us - Building Dreams, Creating Legacies | Balitecture'
    : 'Tentang Kami - Membangun Impian, Menciptakan Warisan | Balitecture';
    
  const description = locale === 'en'
    ? 'Learn about Balitecture\'s journey since 2008. We are a leading property development and architecture firm in Bali with 150+ completed projects and 15+ years of excellence.'
    : 'Pelajari perjalanan Balitecture sejak 2008. Kami adalah perusahaan pengembangan properti dan arsitektur terkemuka di Bali dengan 150+ proyek selesai dan 15+ tahun keunggulan.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://balitecture.com/${locale}/about`,
      languages: {
        'en': '/en/about',
        'id': '/id/about',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://balitecture.com/${locale}/about`,
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations('aboutPage');

  const stats = [
    { icon: Building, value: '150+', label: t('stats.projects'), color: 'text-white' },
    { icon: Clock, value: '15+', label: t('stats.years'), color: 'text-gray-300' },
    { icon: Users, value: '300+', label: t('stats.clients'), color: 'text-gray-200' },
    { icon: Award, value: '50+', label: t('stats.awards'), color: 'text-gray-100' },
  ];

  const values = [
    {
      icon: Target,
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
    },
    {
      icon: Heart,
      title: t('values.passion.title'),
      description: t('values.passion.description'),
    },
    {
      icon: Shield,
      title: t('values.integrity.title'),
      description: t('values.integrity.description'),
    },
    {
      icon: Lightbulb,
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
    },
  ];

  const team = [
    {
      name: 'David Anderson',
      role: t('team.ceo.role'),
      bio: t('team.ceo.bio'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Mitchell',
      role: t('team.architect.role'),
      bio: t('team.architect.bio'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: t('team.manager.role'),
      bio: t('team.manager.bio'),
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Lisa Rodriguez',
      role: t('team.designer.role'),
      bio: t('team.designer.bio'),
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const timeline = [
    {
      year: '2008',
      title: t('timeline.founded.title'),
      description: t('timeline.founded.description'),
    },
    {
      year: '2012',
      title: t('timeline.expansion.title'),
      description: t('timeline.expansion.description'),
    },
    {
      year: '2016',
      title: t('timeline.recognition.title'),
      description: t('timeline.recognition.description'),
    },
    {
      year: '2020',
      title: t('timeline.innovation.title'),
      description: t('timeline.innovation.description'),
    },
    {
      year: '2024',
      title: t('timeline.present.title'),
      description: t('timeline.present.description'),
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
            backgroundImage: 'url(https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">
                {t('story.title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('story.description1')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('story.description2')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('story.description3')}
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="bg-slate-900 rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon size={48} className={`${stat.color} mx-auto mb-4`} />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <p className="text-slate-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              {t('values.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('values.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              {t('timeline.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('timeline.description')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-black mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              {t('team.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('team.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-black font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">
            {t('mission.title')}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t('mission.description')}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}