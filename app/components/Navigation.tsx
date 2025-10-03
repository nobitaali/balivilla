'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span
              className={`text-2xl font-bold font-serif transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Balitecture
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`transition-colors hover:text-gray-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {t(item.key as any)}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${
                isScrolled
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Globe size={16} />
              <span className="uppercase text-sm font-medium">
                {locale === 'en' ? 'ID' : 'EN'}
              </span>
            </button>
          </div>

          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white rounded-lg shadow-xl p-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block text-slate-700 hover:text-gray-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key as any)}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 w-full px-4 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-slate-200 transition-all"
            >
              <Globe size={16} />
              <span className="uppercase text-sm font-medium">
                {locale === 'en' ? 'ID' : 'EN'}
              </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
