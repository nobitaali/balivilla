'use client';

import { useTranslations } from 'next-intl';
import { Palette, Hammer, Hop as Home, TrendingUp, Building2, Lightbulb } from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Palette,
      key: 'architecture',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Hammer,
      key: 'construction',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Home,
      key: 'management',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      key: 'sales',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Building2,
      key: 'development',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Lightbulb,
      key: 'consultation',
      gradient: 'from-yellow-500 to-amber-500',
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
              <div
                key={service.key}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
