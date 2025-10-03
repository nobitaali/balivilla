import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Calendar, MapPin, Home, Users, ArrowLeft, Check, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params;
  
  // You would typically fetch project data here
  const projectTitles: { [key: string]: { en: string; id: string } } = {
    '1': { en: 'Luxury Villa Seminyak', id: 'Vila Mewah Seminyak' },
    '2': { en: 'Beachfront Resort Canggu', id: 'Resor Tepi Pantai Canggu' },
  };
  
  const projectTitle = projectTitles[id]?.[locale as 'en' | 'id'] || 'Project Details';
  
  const title = locale === 'en' 
    ? `${projectTitle} - Project Details | Balitecture`
    : `${projectTitle} - Detail Proyek | Balitecture`;
    
  const description = locale === 'en'
    ? `Explore the detailed case study of ${projectTitle}, showcasing our architectural excellence and construction quality in Bali.`
    : `Jelajahi studi kasus detail ${projectTitle}, menampilkan keunggulan arsitektur dan kualitas konstruksi kami di Bali.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://balitecture.com/${locale}/projects/${id}`,
      languages: {
        'en': `/en/projects/${id}`,
        'id': `/id/projects/${id}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://balitecture.com/${locale}/projects/${id}`,
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
  };
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id: projectId } = await params;
  const t = await getTranslations('projectDetail');

  // Project data - in real app this would come from API/database
  const projectsData: { [key: string]: any } = {
    '1': {
      title: 'Luxury Villa Seminyak',
      location: 'Seminyak, Bali',
      year: '2023',
      area: '450 m²',
      bedrooms: '4',
      bathrooms: '5',
      status: 'completed',
      client: 'Private Client',
      duration: '8 months',
      budget: '$850,000',
      architect: 'Sarah Mitchell',
      contractor: 'Balitecture Construction',
      mainImage: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      description: t('villa1.description'),
      challenge: t('villa1.challenge'),
      solution: t('villa1.solution'),
      result: t('villa1.result'),
      features: [
        t('villa1.features.pool'),
        t('villa1.features.garden'),
        t('villa1.features.garage'),
        t('villa1.features.security'),
        t('villa1.features.kitchen'),
        t('villa1.features.terrace'),
      ],
      materials: [
        t('villa1.materials.teak'),
        t('villa1.materials.stone'),
        t('villa1.materials.glass'),
        t('villa1.materials.steel'),
      ],
      awards: [
        t('villa1.awards.design'),
        t('villa1.awards.sustainability'),
      ],
    },
    '2': {
      title: 'Beachfront Resort Canggu',
      location: 'Canggu, Bali',
      year: '2022',
      area: '2,500 m²',
      bedrooms: '24',
      bathrooms: '30',
      status: 'completed',
      client: 'Resort Development Group',
      duration: '18 months',
      budget: '$3,200,000',
      architect: 'David Anderson',
      contractor: 'Balitecture Construction',
      mainImage: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      description: t('resort1.description'),
      challenge: t('resort1.challenge'),
      solution: t('resort1.solution'),
      result: t('resort1.result'),
      features: [
        t('resort1.features.beachfront'),
        t('resort1.features.restaurant'),
        t('resort1.features.spa'),
        t('resort1.features.pool'),
        t('resort1.features.conference'),
        t('resort1.features.fitness'),
      ],
      materials: [
        t('resort1.materials.bamboo'),
        t('resort1.materials.local'),
        t('resort1.materials.recycled'),
        t('resort1.materials.natural'),
      ],
      awards: [
        t('resort1.awards.hospitality'),
        t('resort1.awards.eco'),
      ],
    },
    // Add more projects as needed
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${project.mainImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-white hover:text-gray-300 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            {t('backToProjects')}
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
            {project.title}
          </h1>
          <div className="flex items-center justify-center text-gray-300">
            <MapPin size={20} className="mr-2" />
            <span className="text-xl">{project.location}</span>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <Calendar size={24} className="mx-auto mb-2 text-slate-600" />
              <div className="font-bold text-slate-900">{project.year}</div>
              <div className="text-sm text-slate-600">{t('info.year')}</div>
            </div>
            <div className="text-center">
              <Home size={24} className="mx-auto mb-2 text-slate-600" />
              <div className="font-bold text-slate-900">{project.area}</div>
              <div className="text-sm text-slate-600">{t('info.area')}</div>
            </div>
            <div className="text-center">
              <Users size={24} className="mx-auto mb-2 text-slate-600" />
              <div className="font-bold text-slate-900">{project.bedrooms}</div>
              <div className="text-sm text-slate-600">{t('info.bedrooms')}</div>
            </div>
            <div className="text-center">
              <Clock size={24} className="mx-auto mb-2 text-slate-600" />
              <div className="font-bold text-slate-900">{project.duration}</div>
              <div className="text-sm text-slate-600">{t('info.duration')}</div>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 mx-auto mb-2 text-slate-600">$</div>
              <div className="font-bold text-slate-900">{project.budget}</div>
              <div className="text-sm text-slate-600">{t('info.budget')}</div>
            </div>
            <div className="text-center">
              <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                project.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
              }`}></div>
              <div className="font-bold text-slate-900">
                {project.status === 'completed' ? t('status.completed') : t('status.ongoing')}
              </div>
              <div className="text-sm text-slate-600">{t('info.status')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">
                  {t('sections.overview')}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('sections.challenge')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('sections.solution')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('sections.result')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.result}
                </p>
              </div>

              {/* Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {t('sections.gallery')}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((image: string, index: number) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Details */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t('sidebar.details')}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">{t('sidebar.client')}</span>
                    <span className="font-medium text-slate-900">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{t('sidebar.architect')}</span>
                    <span className="font-medium text-slate-900">{project.architect}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{t('sidebar.contractor')}</span>
                    <span className="font-medium text-slate-900">{project.contractor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{t('sidebar.bathrooms')}</span>
                    <span className="font-medium text-slate-900">{project.bathrooms}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t('sidebar.features')}
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <Check size={16} className="text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t('sidebar.materials')}
                </h3>
                <ul className="space-y-2">
                  {project.materials.map((material: string, index: number) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              {project.awards && project.awards.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {t('sidebar.awards')}
                  </h3>
                  <ul className="space-y-2">
                    {project.awards.map((award: string, index: number) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <Award size={16} className="text-yellow-600 mr-2 flex-shrink-0" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
              {t('related.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('related.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related project cards would go here */}
            {[3, 4, 5].map((id) => (
              <Link
                key={id}
                href={`/projects/${id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://images.pexels.com/photos/${id === 3 ? '1438832' : id === 4 ? '323780' : '1268871'}/pexels-photo-${id === 3 ? '1438832' : id === 4 ? '323780' : '1268871'}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={`Project ${id}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {id === 3 ? 'Modern Villa Ubud' : id === 4 ? 'Cliffside Villa Uluwatu' : 'Tropical Paradise Sanur'}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {id === 3 ? 'Ubud, Bali' : id === 4 ? 'Uluwatu, Bali' : 'Sanur, Bali'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}