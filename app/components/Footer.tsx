'use client';

import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 font-serif">Balitecture</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {tNav(link.key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Architecture Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Construction
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Villa Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Property Sales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400 text-sm">
            {currentYear} Balitecture. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
