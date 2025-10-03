'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MapPin, Palette, Sofa, Home, Hammer } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    {
      icon: MapPin,
      key: 'land',
      gradient: 'from-gray-800 to-black',
      href: `/${locale}/services/land`,
    },
    {
      icon: Palette,
      key: 'architecture',
      gradient: 'from-gray-700 to-gray-900',
      href: `/${locale}/services/architecture`,
    },
    {
      icon: Sofa,
      key: 'furniture',
      gradient: 'from-gray-600 to-gray-800',
      href: `/${locale}/services/furniture`,
    },
    {
      icon: Home,
      key: 'villaManagement',
      gradient: 'from-black to-gray-800',
      href: `/${locale}/services/villa-management`,
    },
    {
      icon: Hammer,
      key: 'construction',
      gradient: 'from-gray-900 to-black',
      href: `/${locale}/services/construction`,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.key}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {t(`${service.key}.title` as any)}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(`${service.key}.description` as any)}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
