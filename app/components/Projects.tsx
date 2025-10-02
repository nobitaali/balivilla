'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: 'Luxury Villa Seminyak',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Private Villa',
    },
    {
      title: 'Beachfront Resort Canggu',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Resort Development',
    },
    {
      title: 'Modern Villa Ubud',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Architecture Design',
    },
    {
      title: 'Cliffside Villa Uluwatu',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Luxury Property',
    },
    {
      title: 'Tropical Paradise Sanur',
      image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Villa Complex',
    },
    {
      title: 'Contemporary Villa Nusa Dua',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Modern Design',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-slate-900"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-amber-600 rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <button className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors font-medium group/btn">
                  <span>{t('viewProject')}</span>
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
