'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Home, ArrowRight, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  bedrooms: string;
  status: string;
  image: string;
  description: string;
}

interface ProjectsClientProps {
  projects: Project[];
  categories: Array<{ key: string; label: string }>;
  locale: string;
  translations: {
    filterBy: string;
    bedrooms: string;
    viewDetails: string;
    statusCompleted: string;
    statusOngoing: string;
  };
}

export default function ProjectsClient({ 
  projects, 
  categories, 
  locale, 
  translations 
}: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center mr-6">
              <Filter size={20} className="text-slate-600 mr-2" />
              <span className="text-slate-600 font-medium">{translations.filterBy}</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.key
                    ? 'bg-black text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/${locale}/projects/${project.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status === 'completed' ? translations.statusCompleted : translations.statusOngoing}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-slate-600 mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="flex items-center text-slate-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  
                  <div className="flex items-center text-slate-600 mb-4">
                    <Home size={16} className="mr-2" />
                    <span className="text-sm">{project.area} • {project.bedrooms} {translations.bedrooms}</span>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-black group-hover:text-gray-700 transition-colors">
                    <span className="font-medium text-sm">{translations.viewDetails}</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}