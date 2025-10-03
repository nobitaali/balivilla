'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on a service page
  const isServicePage = pathname.includes('/services/');
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const navItems = [
    { key: 'home', href: isHomePage ? '#home' : `/${locale}` },
    { key: 'projects', href: isHomePage ? '#projects' : `/${locale}#projects` },
    { key: 'about', href: isHomePage ? '#about' : `/${locale}#about` },
    { key: 'contact', href: isHomePage ? '#contact' : `/${locale}#contact` },
  ];

  const serviceItems = [
    { key: 'land', href: `/${locale}/services/land`, title: 'Land Acquisition' },
    { key: 'architecture', href: `/${locale}/services/architecture`, title: 'Architecture Design' },
    { key: 'furniture', href: `/${locale}/services/furniture`, title: 'Custom Furniture' },
    { key: 'villaManagement', href: `/${locale}/services/villa-management`, title: 'Villa Management' },
    { key: 'construction', href: `/${locale}/services/construction`, title: 'Construction' },
  ];

  // Get current active service
  const getCurrentService = () => {
    if (pathname.includes('/services/land')) return 'land';
    if (pathname.includes('/services/architecture')) return 'architecture';
    if (pathname.includes('/services/furniture')) return 'furniture';
    if (pathname.includes('/services/villa-management')) return 'villaManagement';
    if (pathname.includes('/services/construction')) return 'construction';
    return null;
  };

  const currentService = getCurrentService();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isServicePage ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span
              className={`text-2xl font-bold font-serif transition-colors ${
                isScrolled || isServicePage ? 'text-slate-900' : 'text-white'
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
                  isScrolled || isServicePage ? 'text-slate-700' : 'text-white'
                }`}
              >
                {t(item.key as any)}
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 transition-colors hover:text-gray-600 ${
                  isScrolled || isServicePage ? 'text-slate-700' : 'text-white'
                } ${currentService ? 'font-semibold' : ''}`}
              >
                <span>{t('services')}</span>
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {serviceItems.map((service) => (
                  <Link
                    key={service.key}
                    href={service.href}
                    className={`block px-4 py-3 transition-colors ${
                      currentService === service.key
                        ? 'bg-slate-100 text-black font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-black'
                    }`}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${
                isScrolled || isServicePage
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
              isScrolled || isServicePage ? 'text-slate-900' : 'text-white'
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
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-slate-700 hover:text-gray-600 transition-colors py-2"
              >
                <span>{t('services')}</span>
                <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.key}
                      href={service.href}
                      className={`block transition-colors py-1 text-sm ${
                        currentService === service.key
                          ? 'text-black font-semibold'
                          : 'text-slate-600 hover:text-gray-800'
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
