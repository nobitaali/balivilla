'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MapPin, TrendingUp, Shield, Users } from 'lucide-react';

export default function LandPage() {
  const t = useTranslations('services.land');

  const features = [
    {
      icon: MapPin,
      title: t('features.location.title'),
      description: t('features.location.description'),
    },
    {
      icon: TrendingUp,
      title: t('features.investment.title'),
      description: t('features.investment.description'),
    },
    {
      icon: Shield,
      title: t('features.legal.title'),
      description: t('features.legal.description'),
    },
    {
      icon: Users,
      title: t('features.consultation.title'),
      description: t('features.consultation.description'),
    },
  ];

  const projects = [
    {
      title: 'Beachfront Land Canggu',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '2,500 m²',
      location: 'Canggu, Bali',
    },
    {
      title: 'Rice Field View Ubud',
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '1,800 m²',
      location: 'Ubud, Bali',
    },
    {
      title: 'Cliff Top Land Uluwatu',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      area: '3,200 m²',
      location: 'Uluwatu, Bali',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">
                {t('about.title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('about.description1')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Land Development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Projects */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
              {t('projects.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-2">Area: {project.area}</p>
                    <p className="text-slate-600">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-slate-50 rounded-3xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
              {t('process.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t('process.step1.title')}</h3>
                <p className="text-slate-600">{t('process.step1.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t('process.step2.title')}</h3>
                <p className="text-slate-600">{t('process.step2.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t('process.step3.title')}</h3>
                <p className="text-slate-600">{t('process.step3.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t('process.step4.title')}</h3>
                <p className="text-slate-600">{t('process.step4.description')}</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 font-serif">
              {t('whyChoose.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              {t('whyChoose.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">15+</div>
                <p className="text-slate-600">{t('whyChoose.stat1')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">500+</div>
                <p className="text-slate-600">{t('whyChoose.stat2')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">100%</div>
                <p className="text-slate-600">{t('whyChoose.stat3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}