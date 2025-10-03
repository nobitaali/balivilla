interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Project' | 'Service';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData = {};

  switch (type) {
    case 'Organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Balitecture",
        "description": "Premier property development and architecture firm in Bali",
        "url": "https://balitecture.com",
        "logo": "https://balitecture.com/logo.png",
        "foundingDate": "2008",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Seminyak",
          "addressRegion": "Bali",
          "addressCountry": "Indonesia"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-361-123456",
          "contactType": "customer service",
          "availableLanguage": ["English", "Indonesian"]
        },
        "sameAs": [
          "https://www.instagram.com/balitecture",
          "https://www.facebook.com/balitecture"
        ],
        "areaServed": "Bali, Indonesia",
        "serviceType": [
          "Property Development",
          "Architecture Design",
          "Construction",
          "Villa Management",
          "Land Acquisition"
        ]
      };
      break;

    case 'LocalBusiness':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Balitecture",
        "description": "Premier property development and architecture firm in Bali",
        "image": "https://balitecture.com/og-image.jpg",
        "telephone": "+62-361-123456",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Raya Seminyak",
          "addressLocality": "Seminyak",
          "addressRegion": "Bali",
          "postalCode": "80361",
          "addressCountry": "Indonesia"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-8.6905",
          "longitude": "115.1729"
        },
        "url": "https://balitecture.com",
        "priceRange": "$$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150"
        }
      };
      break;

    case 'Project':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": data.title,
        "description": data.description,
        "image": data.image,
        "creator": {
          "@type": "Organization",
          "name": "Balitecture"
        },
        "dateCreated": data.year,
        "locationCreated": {
          "@type": "Place",
          "name": data.location
        },
        "about": {
          "@type": "Thing",
          "name": "Architecture and Construction"
        }
      };
      break;

    case 'Service':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.title,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "Balitecture"
        },
        "areaServed": "Bali, Indonesia",
        "serviceType": data.serviceType
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}