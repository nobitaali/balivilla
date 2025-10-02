'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-amber-400 mb-4 font-medium">
            {t('subtitle')}
          </p>
          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>{t('cta')}</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#projects"
              className="group px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm border border-white/20"
            >
              <Play size={20} />
              <span>{t('ctaSecondary')}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
