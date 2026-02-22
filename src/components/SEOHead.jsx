import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = 'DigitEase - Digitalisons votre business',
  description = 'DigitEase est une startup innovante spécialisée dans la digitalisation des entreprises. Solutions sur mesure, création de sites web, SEO, et transformation digitale.',
  keywords = 'digitalisation, transformation digitale, création site web, SEO, marketing digital, startup, innovation, entreprise',
  image = '/og-image.jpg',
  url = 'https://digitease.fr',
  type = 'website',
  locale = 'fr_FR',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DigitEase',
    description: description,
    url: url,
    logo: `${url}/logo.png`,
    sameAs: [
      'https://www.facebook.com/digitease',
      'https://www.linkedin.com/company/digitease',
      'https://twitter.com/digitease',
      'https://www.instagram.com/digitease',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-6-12-34-56-78',
      contactType: 'customer service',
      availableLanguage: ['French', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DigitEase',
    url: url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Services de digitalisation',
    provider: {
      '@type': 'Organization',
      name: 'DigitEase',
    },
    description: 'Solutions complètes de transformation digitale pour entreprises',
    serviceType: [
      'Création de sites web',
      'Référencement SEO',
      'Marketing digital',
      'Transformation digitale',
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="DigitEase" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="DigitEase" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Theme Color */}
      <meta name="theme-color" content="#1976d2" />
      <meta name="msapplication-TileColor" content="#1976d2" />
    </Helmet>
  );
};

export default SEOHead;
