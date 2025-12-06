export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://karneyplumbing.com',
    name: 'Karney Plumbing',
    image: 'https://karneyplumbing.com/images/logo.png',
    description: 'Family-owned plumbing company serving Tulsa, OK. Expert repairs, installations, and emergency plumbing services.',
    url: 'https://karneyplumbing.com',
    telephone: '+19189109977',
    email: 'info@karneyplumbing.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tulsa',
      addressRegion: 'OK',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.1540',
      longitude: '-95.9928',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Tulsa',
      },
      {
        '@type': 'City',
        name: 'Broken Arrow',
      },
      {
        '@type': 'City',
        name: 'Bixby',
      },
      {
        '@type': 'City',
        name: 'Owasso',
      },
      {
        '@type': 'City',
        name: 'Jenks',
      },
      {
        '@type': 'City',
        name: 'Glenpool',
      },
      {
        '@type': 'City',
        name: 'Sand Springs',
      },
      {
        '@type': 'City',
        name: 'Claremore',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://www.youtube.com',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

