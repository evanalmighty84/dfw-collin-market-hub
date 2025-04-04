
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  ogType?: string;
  twitterCardType?: string;
  locationSchema?: {
    name: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    streetAddress?: string;
  };
}

const SEOMeta: React.FC<SEOMetaProps> = ({
  title = "DFW Collin Market Hub | Find Real Estate in Dallas-Fort Worth & Collin County",
  description = "Connect with buyers and sellers in the Dallas-Fort Worth and Collin County real estate markets. Browse properties, find local agents, and discover market trends in North Texas.",
  keywords = "DFW real estate, Collin County homes, Dallas-Fort Worth property, buy home in Plano, sell house in Frisco, McKinney real estate, Allen TX properties, Richardson homes for sale",
  canonicalUrl = "https://dfwcollinmarkethub.com",
  ogImageUrl = "/images/dfw-collin-market-hub-og.jpg",
  ogType = "website",
  twitterCardType = "summary_large_image",
  locationSchema
}) => {
  // Create JSON-LD structured data for real estate organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "DFW Collin Market Hub",
    "description": description,
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/images/logo.png`,
    "sameAs": [
      "https://www.facebook.com/dfwcollinmarkethub",
      "https://twitter.com/dfwcollinmarket",
      "https://www.instagram.com/dfwcollinmarkethub"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Dallas-Fort Worth",
        "containsPlace": [
          {
            "@type": "City",
            "name": "Dallas"
          },
          {
            "@type": "City",
            "name": "Fort Worth"
          }
        ]
      },
      {
        "@type": "AdministrativeArea",
        "name": "Collin County",
        "containsPlace": [
          {
            "@type": "City",
            "name": "Plano"
          },
          {
            "@type": "City",
            "name": "Frisco"
          },
          {
            "@type": "City",
            "name": "McKinney"
          },
          {
            "@type": "City",
            "name": "Allen"
          }
        ]
      }
    ]
  };

  // Create location schema if provided
  const localBusinessSchema = locationSchema ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": locationSchema.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locationSchema.streetAddress || "",
      "addressLocality": locationSchema.addressLocality,
      "addressRegion": locationSchema.addressRegion,
      "postalCode": locationSchema.postalCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.0198",
      "longitude": "-96.6989"
    }
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="DFW Collin Market Hub" />

      {/* Geolocation Tags */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Dallas-Fort Worth, Collin County" />
      <meta name="geo.position" content="33.0198;-96.6989" />
      <meta name="ICBM" content="33.0198, -96.6989" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="DFW Collin Market Hub" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCardType} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {locationSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOMeta;
