'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Sofa, Hammer, Truck, Star } from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function FurniturePage() {
  const t = useTranslations('services.furniture');

  const features = [
    {
      icon: Sofa,
      title: t('features.custom.title'),
      description: t('features.custom.description'),
    },
    {
      icon: Hammer,
      title: t('features.craftsmanship.title'),
      description: t('features.craftsmanship.description'),
    },
    {
      icon: Truck,
      title: t('features.delivery.title'),
      description: t('features.delivery.description'),
    },
    {
      icon: Star,
      title: t('features.materials.title'),
      description: t('features.materials.description'),
    },
  ];

  const projects = [
    {
      title: 'Teak Wood Living Set',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Teak Wood',
      category: 'Living Room',
    },
    {
      title: 'Bamboo Dining Collection',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Bamboo',
      category: 'Dining Room',
    },
    {
      title: 'Rattan Bedroom Suite',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      material: 'Rattan',
      category: 'Bedroom',
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
            backgroundImage: 'url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Custom Furniture"
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
          <div>
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
                    <p className="text-slate-600 mb-2">Material: {project.material}</p>
                    <p className="text-slate-600">Category: {project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}