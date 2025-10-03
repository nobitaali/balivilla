import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://balitecture.com'), // Replace with your actual domain
  title: {
    default: 'Balitecture - Premier Property Development & Architecture in Bali',
    template: '%s | Balitecture'
  },
  description: 'Leading property development and architecture firm in Bali. We design, build, and manage luxury villas, resorts, and commercial properties with 15+ years of experience.',
  keywords: [
    'Bali property development',
    'Bali architecture',
    'luxury villa construction Bali',
    'Bali real estate',
    'property management Bali',
    'villa design Bali',
    'resort construction Bali',
    'land acquisition Bali',
    'custom furniture Bali',
    'Seminyak villa',
    'Canggu property',
    'Ubud architecture'
  ],
  authors: [{ name: 'Balitecture Team' }],
  creator: 'Balitecture',
  publisher: 'Balitecture',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://balitecture.com',
    siteName: 'Balitecture',
    title: 'Balitecture - Premier Property Development & Architecture in Bali',
    description: 'Leading property development and architecture firm in Bali. We design, build, and manage luxury villas, resorts, and commercial properties.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Balitecture - Luxury Property Development in Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balitecture - Premier Property Development & Architecture in Bali',
    description: 'Leading property development and architecture firm in Bali. We design, build, and manage luxury villas, resorts, and commercial properties.',
    images: ['/og-image.jpg'], // You'll need to add this image
    creator: '@balitecture', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your actual verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export function generatePageMetadata({
  title,
  description,
  path,
  locale = 'en',
  images,
}: {
  title: string
  description: string
  path: string
  locale?: string
  images?: string[]
}): Metadata {
  const url = `https://balitecture.com${path}`
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'en': `/en${path.replace(/^\/(en|id)/, '')}`,
        'id': `/id${path.replace(/^\/(en|id)/, '')}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      images: images || ['/og-image.jpg'],
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
    twitter: {
      title,
      description,
      images: images || ['/og-image.jpg'],
    },
  }
}