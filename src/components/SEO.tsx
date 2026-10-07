import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '@/data/images';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  jsonLd?: object[];
}

export default function SEO({ title, description, path, image, type = 'website', jsonLd = [] }: SEOProps) {
  const url = `${BUSINESS.website.replace(/\/$/, '')}${path}`;
  const ogImage = image || 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200';

  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.addressStreet,
      addressLocality: BUSINESS.addressCity,
      addressRegion: BUSINESS.addressState,
      postalCode: BUSINESS.addressZip,
      addressCountry: 'US',
    },
    url: BUSINESS.website,
    areaServed: {
      '@type': 'City',
      name: 'Valley, AL',
    },
    openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-14:00',
  };

  const itemListJsonLd = path === '/services' ? [{
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${BUSINESS.website.replace(/\/$/, '')}/services/${s.slug}`,
    })),
  }] : [];

  const areaListJsonLd = path === '/service-areas' ? [{
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: serviceAreas.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${BUSINESS.website.replace(/\/$/, '')}/service-areas/${s.slug}`,
    })),
  }] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{JSON.stringify(baseJsonLd)}</script>
      {itemListJsonLd.map((jd, i) => (
        <script key={`il-${i}`} type="application/ld+json">{JSON.stringify(jd)}</script>
      ))}
      {areaListJsonLd.map((jd, i) => (
        <script key={`al-${i}`} type="application/ld+json">{JSON.stringify(jd)}</script>
      ))}
      {jsonLd.map((jd, i) => (
        <script key={`custom-${i}`} type="application/ld+json">{JSON.stringify(jd)}</script>
      ))}
    </Helmet>
  );
}
