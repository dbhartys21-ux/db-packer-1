import { SITE_CONFIG, SITE_URL, SAME_AS, ORG_ID, WEBSITE_ID } from './site';

/**
 * Reusable JSON-LD builders. Every page references the same Organization @id so
 * Google and AI engines consolidate all signals into a single business entity.
 */

export const EXPORT_MARKETS = [
  "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates",
  "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Nepal", "Bhutan", "Sri Lanka",
  "Bangladesh", "Maldives", "Kenya", "Nigeria", "South Africa", "Germany", "Netherlands",
  "France", "Singapore", "Malaysia"
];

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer"],
  "@id": ORG_ID,
  "name": SITE_CONFIG.name,
  "legalName": SITE_CONFIG.legalName,
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": SITE_CONFIG.logo
  },
  "image": `${SITE_URL}/facility.png`,
  "description": "ADBPack is an ISO 9001:2015 certified custom packaging manufacturer and exporter based in New Delhi, India. It produces mono cartons, rigid boxes, corrugated boxes, flexible pouches, cold and hot seal blisters, self-adhesive labels, canister boxes and printed tapes for pharmaceutical, cosmetic, FMCG, food, nutraceutical, liquor and D2C brands in India and worldwide.",
  "foundingDate": SITE_CONFIG.foundingYear,
  "founder": {
    "@type": "Person",
    "name": SITE_CONFIG.founder,
    "jobTitle": "Founder & CEO"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": SITE_CONFIG.contact.locality,
    "addressRegion": SITE_CONFIG.contact.region,
    "postalCode": SITE_CONFIG.contact.postalCode,
    "addressCountry": SITE_CONFIG.contact.country
  },
  "email": SITE_CONFIG.contact.email,
  "telephone": SITE_CONFIG.contact.phones[0].e164,
  "contactPoint": SITE_CONFIG.contact.phones.map((p, i) => ({
    "@type": "ContactPoint",
    "telephone": p.e164,
    "contactType": i === 0 ? "sales" : "customer service",
    "email": SITE_CONFIG.contact.email,
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Hindi"]
  })),
  "areaServed": [
    { "@type": "Country", "name": "India" },
    ...EXPORT_MARKETS.map(name => ({ "@type": "Country", "name": name }))
  ],
  "hasCredential": SITE_CONFIG.stats.certifications.map(c => ({
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "certification",
    "name": c
  })),
  "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50 },
  "knowsAbout": [
    "Custom packaging manufacturing",
    "Mono carton printing",
    "Rigid box manufacturing",
    "Corrugated box manufacturing",
    "Flexible pouch packaging",
    "Cold seal and hot seal blister packaging",
    "Self-adhesive label printing",
    "Paper tube canister packaging",
    "Pharmaceutical packaging",
    "Cosmetic packaging",
    "Export packaging"
  ],
  ...(SAME_AS.length ? { "sameAs": SAME_AS } : {})
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  "url": SITE_URL,
  "name": SITE_CONFIG.name,
  "publisher": { "@id": ORG_ID },
  "inLanguage": "en"
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "ADBPack - Custom Packaging Manufacturer & Exporter",
  "parentOrganization": { "@id": ORG_ID },
  "image": `${SITE_URL}/facility.png`,
  "url": SITE_URL,
  "telephone": SITE_CONFIG.contact.phones[0].e164,
  "email": SITE_CONFIG.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": SITE_CONFIG.contact.locality,
    "addressRegion": SITE_CONFIG.contact.region,
    "postalCode": SITE_CONFIG.contact.postalCode,
    "addressCountry": SITE_CONFIG.contact.country
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 28.6282, "longitude": 77.2973 },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "₹₹",
  "areaServed": "Worldwide"
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": `${SITE_URL}${it.path}`
  }))
});

