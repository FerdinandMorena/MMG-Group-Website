import { SERVICES } from "../data/services";

export const SITE = {
  name: "MMG Building Maintenance & Management",
  domain: "https://mmgbuilding.co.za",
  country: "ZA",
  region: "Limpopo, Gauteng, Eastern Cape",
  addressLocality: "Polokwane",
  addressRegion: "Limpopo",
  addressCountry: "South Africa",
  telephone: "+27 81 494 3895",
  whatsapp: "+27 81 494 3895",
};

export const LIMPOPO_TOWNS = [
  "Polokwane",
  "Mokopane",
  "Tzaneen",
  "Thohoyandou",
  "Louis Trichardt",
  "Musina",
  "Lebowakgomo",
  "Burgersfort",
  "Giyani",
  "Phalaborwa",
];

export const GAUTENG_TOWNS = [
  "Johannesburg",
  "Pretoria",
  "Sandton",
  "Midrand",
  "Centurion",
  "Randburg",
  "Germiston",
  "Roodepoort",
  "Alberton",
  "Benoni",
];

export const EASTERN_CAPE_TOWNS = [
  "East London",
  "Port Elizabeth",
  "Mthatha",
  "Grahamstown",
  "Queenstown",
  "Uitenhage",
  "Bhisho",
  "Butterworth",
  "Cradock",
  "Graaff-Reinet",
];

export const serviceKeywords = (serviceTitle) => [
  // Core geographic keywords
  `${serviceTitle} Limpopo`,
  `${serviceTitle} Gauteng`,
  `${serviceTitle} Eastern Cape`,
  `${serviceTitle} Polokwane`,
  `${serviceTitle} Johannesburg`,
  `${serviceTitle} Pretoria`,
  `${serviceTitle} East London`,
  `${serviceTitle} near me`,

  // Service type variations
  `professional ${serviceTitle}`,
  `commercial ${serviceTitle}`,
  `industrial ${serviceTitle}`,
  `residential ${serviceTitle}`,
  `emergency ${serviceTitle}`,
  `expert ${serviceTitle}`,

  // Problem-solution keywords
  `${serviceTitle} repairs`,
  `${serviceTitle} installation`,
  `${serviceTitle} maintenance`,

  // Business keywords
  `${serviceTitle} company`,
  `${serviceTitle} contractor`,
  `${serviceTitle} specialist`,

  // Service request keywords
  `get ${serviceTitle} quote`,
  `${serviceTitle} estimate`,
  `${serviceTitle} cost`,

  // Quality keywords
  `certified ${serviceTitle}`,
  `licensed ${serviceTitle}`,
  `experienced ${serviceTitle}`,

  // Time-based keywords
  `same day ${serviceTitle}`,
  `24/7 ${serviceTitle}`,

  // General business keywords
  "building maintenance Limpopo",
  "building maintenance Gauteng",
  "building maintenance Eastern Cape",
  "construction services near me",
];

export const serviceMeta = (service) => {
  const title = `${service.title} Limpopo, Gauteng, Eastern Cape | ${SITE.name}`;
  const description = `${SITE.name} provides ${service.title.toLowerCase()} services across Limpopo, Gauteng, and Eastern Cape, South Africa (including ${LIMPOPO_TOWNS.slice(
    0,
    2,
  ).join(
    ", ",
  )}, ${GAUTENG_TOWNS.slice(0, 2).join(", ")}, ${EASTERN_CAPE_TOWNS.slice(0, 2).join(", ")}). Get a fast quote for ${service.title.toLowerCase()} for residential, commercial, and industrial properties.`;

  // Generate keywords from service title and features
  const baseKeywords = serviceKeywords(service.title);
  const featureKeywords = service.features.flatMap((feature) => [
    `${feature} Limpopo`,
    `${feature} Gauteng`,
    `${feature} Eastern Cape`,
    `${feature} Polokwane`,
    `${feature} Johannesburg`,
    `${feature} Pretoria`,
    `${feature} East London`,
    `${feature} near me`,
    `${feature} services`,
    `professional ${feature}`,
    `${feature} contractor`,
    `${feature} specialist`,
  ]);

  return {
    title,
    description,
    keywords: [...baseKeywords, ...featureKeywords],
    canonical: `${SITE.domain}/services/${service.id}`,
  };
};

export const servicesIndexMeta = () => {
  const serviceList = SERVICES.map((s) => s.title).join(", ");
  return {
    title: `Building Services Limpopo, Gauteng, Eastern Cape | ${SITE.name}`,
    description: `${SITE.name} offers ${serviceList} across Limpopo, Gauteng, and Eastern Cape, South Africa. Request a quote for commercial, industrial, or residential projects.`,
    keywords: [
      // Core service keywords
      "building maintenance Limpopo",
      "building maintenance Gauteng",
      "building maintenance Eastern Cape",
      "construction services near me",
      "roofing services Limpopo",
      "roofing services Gauteng",
      "roofing services Eastern Cape",
      "painting services Polokwane",
      "painting services Johannesburg",
      "painting services East London",
      "flooring services Limpopo",
      "flooring services Gauteng",
      "flooring services Eastern Cape",
      "construction services near me",
      "maintenance services Polokwane",
      "maintenance services Johannesburg",
      "maintenance services East London",
      "masonry services Limpopo",
      "masonry services Gauteng",
      "masonry services Eastern Cape",
      "ceilings partitioning Limpopo",
      "ceilings partitioning Gauteng",
      "ceilings partitioning Eastern Cape",

      // Business type keywords
      "building contractors Limpopo",
      "building contractors Gauteng",
      "building contractors Eastern Cape",
      "construction companies near me",
      "maintenance companies Polokwane",
      "maintenance companies Johannesburg",
      "maintenance companies East London",
      "property maintenance services",
      "facility management Limpopo",
      "facility management Gauteng",
      "facility management Eastern Cape",

      // Service request keywords
      "get building quote Limpopo",
      "get building quote Gauteng",
      "get building quote Eastern Cape",
      "free construction quote",
      "roofing quote Polokwane",
      "roofing quote Johannesburg",
      "roofing quote East London",
      "painting estimate near me",
      "flooring cost Limpopo",
      "flooring cost Gauteng",
      "flooring cost Eastern Cape",

      // Quality keywords
      "professional building services",
      "expert construction Limpopo",
      "expert construction Gauteng",
      "expert construction Eastern Cape",
      "certified contractors near me",
      "licensed building services",
      "experienced maintenance Polokwane",
      "experienced maintenance Johannesburg",
      "experienced maintenance East London",
      "qualified roofing specialists",
      "trained painting technicians",

      // Emergency services
      "emergency building repairs",
      "urgent maintenance services",
      "24/7 construction support",
      "same day building services",

      // Dynamic service keywords
      ...SERVICES.flatMap((s) => [
        `${s.title} Limpopo`,
        `${s.title} Gauteng`,
        `${s.title} Eastern Cape`,
        `${s.title} near me`,
        `${s.title} Polokwane`,
        `${s.title} Johannesburg`,
        `${s.title} Pretoria`,
        `${s.title} East London`,
        `professional ${s.title}`,
        `commercial ${s.title}`,
        `industrial ${s.title}`,
        `residential ${s.title}`,
        `emergency ${s.title}`,
        `expert ${s.title}`,
        `${s.title} repairs`,
        `${s.title} installation`,
        `${s.title} maintenance`,
        `${s.title} company`,
        `${s.title} contractor`,
        `${s.title} specialist`,
        `get ${s.title} quote`,
        `certified ${s.title}`,
        `licensed ${s.title}`,
        `experienced ${s.title}`,
        `same day ${s.title}`,
      ]),
    ],
    canonical: `${SITE.domain}/services`,
  };
};

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.domain,
  description: `${SITE.name} is a 100% South African owned company providing professional building maintenance and construction services in Limpopo, Gauteng, and Eastern Cape since 2018.`,
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Limpopo",
    },
    {
      "@type": "AdministrativeArea",
      name: "Gauteng",
    },
    {
      "@type": "AdministrativeArea",
      name: "Eastern Cape",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.addressLocality,
    addressRegion: SITE.addressRegion,
    addressCountry: "ZA",
  },
  telephone: SITE.telephone,
  email: "mmg.situnda@gmail.com",
  priceRange: "$$",
  openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-13:00", "Su Closed"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/mmgbuilding",
    "https://www.instagram.com/mmgbuilding",
    "https://www.linkedin.com/company/mmg-building-maintenance",
  ],
});

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.domain,
  logo: `${SITE.domain}/logo.jpeg`,
  description: `${SITE.name} is a 100% South African owned company providing professional building maintenance and construction services in Limpopo, Gauteng, and Eastern Cape since 2018.`,
  foundingDate: "2018",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Limpopo",
    },
    {
      "@type": "AdministrativeArea",
      name: "Gauteng",
    },
    {
      "@type": "AdministrativeArea",
      name: "Eastern Cape",
    },
    ...LIMPOPO_TOWNS.map((t) => ({ "@type": "City", name: t })),
    ...GAUTENG_TOWNS.map((t) => ({ "@type": "City", name: t })),
    ...EASTERN_CAPE_TOWNS.map((t) => ({ "@type": "City", name: t })),
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.addressLocality,
    addressRegion: SITE.addressRegion,
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.telephone,
    contactType: "customer service",
    areaServed: "ZA",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/mmgbuilding",
    "https://www.instagram.com/mmgbuilding",
    "https://www.linkedin.com/company/mmg-building-maintenance",
  ],
});

export const portfolioJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Building Projects Portfolio - MMG Building Maintenance",
  description:
    "View our portfolio of completed construction, roofing, painting, flooring, and maintenance projects across Limpopo, Gauteng, and Eastern Cape, South Africa.",
  url: `${SITE.domain}/works`,
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.domain,
  },
  about: [
    {
      "@type": "Service",
      name: "Roofing Services",
      serviceType: "Roofing",
    },
    {
      "@type": "Service",
      name: "Construction Services",
      serviceType: "Construction",
    },
    {
      "@type": "Service",
      name: "Painting Services",
      serviceType: "Painting",
    },
    {
      "@type": "Service",
      name: "Flooring Services",
      serviceType: "Flooring",
    },
    {
      "@type": "Service",
      name: "Maintenance Services",
      serviceType: "Maintenance",
    },
    {
      "@type": "Service",
      name: "Ceilings & Partitioning",
      serviceType: "Ceilings & Partitioning",
    },
  ],
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Limpopo",
    },
    {
      "@type": "AdministrativeArea",
      name: "Gauteng",
    },
    {
      "@type": "AdministrativeArea",
      name: "Eastern Cape",
    },
  ],
});

export const serviceJsonLd = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${service.title} in Limpopo, Gauteng & Eastern Cape`,
  description: `${SITE.name} offers professional ${service.title.toLowerCase()} services across Limpopo, Gauteng, and Eastern Cape, South Africa. Get expert ${service.title.toLowerCase()} for residential, commercial, and industrial properties.`,
  serviceType: service.title,
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.domain,
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Limpopo",
    },
    {
      "@type": "AdministrativeArea",
      name: "Gauteng",
    },
    {
      "@type": "AdministrativeArea",
      name: "Eastern Cape",
    },
    ...LIMPOPO_TOWNS.map((t) => ({ "@type": "City", name: t })),
    ...GAUTENG_TOWNS.map((t) => ({ "@type": "City", name: t })),
    ...EASTERN_CAPE_TOWNS.map((t) => ({ "@type": "City", name: t })),
  ],
});

export const contactMeta = () => {
  return {
    title: `Contact | Building Services Quote Limpopo, Gauteng, Eastern Cape | ${SITE.name}`,
    description: `${SITE.name} - Get a free quote for building maintenance and construction services in Limpopo, Gauteng, and Eastern Cape, South Africa. Call/WhatsApp 081 494 3895 or email mmg.situnda@gmail.com. Offices in Polokwane, Johannesburg, Pretoria, East London.`,
    keywords: [
      // Core contact keywords
      "contact MMG",
      "building quote Limpopo",
      "building quote Gauteng",
      "building quote Eastern Cape",
      "construction services contact near me",
      "Polokwane building services",
      "Johannesburg building services",
      "Pretoria building services",
      "East London building services",
      "Limpopo construction quote",
      "Gauteng construction quote",
      "Eastern Cape construction quote",

      // Contact and quote keywords
      "get building quote",
      "free construction quote",
      "building estimate online",
      "construction pricing",
      "maintenance quote near me",
      "roofing quote Polokwane",
      "roofing quote Johannesburg",
      "roofing quote East London",
      "painting quote Limpopo",
      "painting quote Gauteng",
      "painting quote Eastern Cape",
      "flooring estimate near me",
      "construction cost calculator",
      "building services pricing",

      // Geographic contact keywords
      "contact building services Polokwane",
      "contact building services Johannesburg",
      "contact building services Pretoria",
      "contact building services East London",
      "building contractor contact Limpopo",
      "building contractor contact Gauteng",
      "building contractor contact Eastern Cape",
      "construction company phone number",
      "maintenance services contact",

      // Service-specific contact keywords
      "roofing services contact",
      "painting services quote",
      "flooring installation contact",
      "construction services estimate",
      "maintenance services booking",
      "masonry services contact",
      "ceilings partitioning quote",

      // Emergency contact keywords
      "emergency building contact",
      "urgent maintenance contact",
      "24/7 construction contact",
      "after hours building services",
      "weekend maintenance contact",

      // Business inquiry keywords
      "building company inquiry",
      "construction services inquiry",
      "property maintenance contact",
      "facility management quote",
      "commercial building contact",
      "industrial services estimate",

      // Location-specific contact
      "Polokwane construction contact",
      "Johannesburg building quote",
      "Pretoria maintenance contact",
      "East London roofing estimate",
      "Sandton building services",
      "Midrand construction contact",
      "Centurion property maintenance",
      "Tzaneen building quote",
      "Thohoyandou construction contact",
      "Mokopane maintenance services",

      // Communication keywords
      "building services WhatsApp",
      "construction company email",
      "maintenance services phone",
      "roofing contact number",
      "painting services contact",
      "flooring quote request",

      // Dynamic service contact keywords
      ...SERVICES.flatMap((s) => [
        `${s.title} quote Limpopo`,
        `${s.title} quote Gauteng`,
        `${s.title} quote Eastern Cape`,
        `${s.title} contact near me`,
        `${s.title} estimate Polokwane`,
        `${s.title} estimate Johannesburg`,
        `${s.title} estimate East London`,
        `contact ${s.title} services`,
        `get ${s.title} quote`,
        `${s.title} pricing`,
        `${s.title} cost estimate`,
        `book ${s.title} services`,
        `schedule ${s.title} work`,
        `arrange ${s.title} quote`,
        `emergency ${s.title} contact`,
        `urgent ${s.title} quote`,
        `${s.title} consultation`,
        `${s.title} assessment`,
        `${s.title} inspection booking`,
      ]),
    ],
    canonical: `${SITE.domain}/contact`,
  };
};

export const worksMeta = () => {
  return {
    title: `Portfolio | Building Projects Limpopo, Gauteng, Eastern Cape | ${SITE.name}`,
    description: `View ${SITE.name}'s portfolio of completed construction, roofing, painting, flooring, and maintenance projects in Limpopo, Gauteng, and Eastern Cape, South Africa. Quality workmanship for commercial, industrial, and residential properties.`,
    keywords: [
      // Core portfolio keywords
      "construction projects Limpopo",
      "construction projects Gauteng",
      "construction projects Eastern Cape",
      "building portfolio near me",
      "roofing projects Polokwane",
      "roofing projects Johannesburg",
      "roofing projects East London",
      "commercial construction Limpopo",
      "commercial construction Gauteng",
      "commercial construction Eastern Cape",

      // Project showcase keywords
      "building projects portfolio",
      "construction work examples",
      "roofing project gallery",
      "painting project showcase",
      "flooring installation portfolio",
      "maintenance project examples",
      "masonry work portfolio",
      "ceilings partitioning projects",

      // Geographic project keywords
      "Polokwane construction projects",
      "Johannesburg building portfolio",
      "Pretoria roofing projects",
      "East London painting work",
      "Limpopo property projects",
      "Gauteng construction gallery",
      "Eastern Cape building showcase",

      // Quality keywords
      "quality construction work",
      "professional building projects",
      "expert craftsmanship portfolio",
      "certified construction work",
      "experienced contractor projects",
      "skilled workmanship examples",
      "high quality building work",
      "professional maintenance projects",

      // Industry-specific project keywords
      "commercial building projects",
      "industrial construction portfolio",
      "residential property work",

      // Service-specific project keywords
      "roofing installation examples",
      "painting project gallery",
      "flooring work portfolio",
      "construction project showcase",
      "maintenance work examples",
      "masonry project gallery",
      "ceilings work portfolio",
      "partitioning project examples",

      // Before/after keywords
      "before after construction",
      "transformation projects",
      "renovation examples",
      "refurbishment portfolio",
      "restoration work gallery",
      "upgrade project showcase",

      // Size keywords
      "large scale projects",
      "small renovation work",

      // Client type keywords
      "corporate client projects",
      "government building work",
      "private property portfolio",
      "commercial client examples",
      "residential customer work",
      "industrial facility projects",

      // Dynamic service project keywords
      ...SERVICES.flatMap((s) => [
        `${s.title} projects Limpopo`,
        `${s.title} projects Gauteng`,
        `${s.title} projects Eastern Cape`,
        `${s.title} portfolio near me`,
        `${s.title} work examples Polokwane`,
        `${s.title} work examples Johannesburg`,
        `${s.title} work examples East London`,
        `${s.title} project gallery`,
        `${s.title} showcase`,
        `${s.title} examples`,
        `${s.title} before after`,
        `${s.title} transformation`,
        `completed ${s.title} projects`,
        `successful ${s.title} work`,
        `quality ${s.title} portfolio`,
        `professional ${s.title} examples`,
        `expert ${s.title} projects`,
        `certified ${s.title} work`,
        `experienced ${s.title} portfolio`,
        `commercial ${s.title} projects`,
        `industrial ${s.title} work`,
        `residential ${s.title} examples`,
      ]),
    ],
    canonical: `${SITE.domain}/works`,
  };
};

export const aboutMeta = () => {
  return {
    title: `About | Building Services Limpopo, Gauteng, Eastern Cape | ${SITE.name}`,
    description: `${SITE.name} is a 100% South African owned company providing professional building maintenance and construction services in Limpopo, Gauteng, and Eastern Cape since 2018. Offices in Polokwane, Johannesburg, Pretoria, East London. Trusted for roofing, painting, flooring, construction & maintenance across South Africa.`,
    keywords: [
      // Core about keywords
      "about MMG",
      "building company Limpopo",
      "building company Gauteng",
      "building company Eastern Cape",
      "construction services Polokwane",
      "construction services Johannesburg",
      "construction services Pretoria",
      "construction services East London",
      "South African building maintenance",
      "professional construction Limpopo",
      "professional construction Gauteng",
      "professional construction Eastern Cape",

      // Company information keywords
      "MMG building maintenance",
      "MMG construction services",
      "MMG about us",
      "MMG company profile",
      "MMG company history",
      "MMG company background",
      "MMG business overview",
      "MMG service overview",

      // Geographic company keywords
      "Polokwane building company",
      "Johannesburg construction company",
      "Pretoria building services",
      "East London maintenance company",
      "Limpopo construction firm",
      "Gauteng building contractors",
      "Eastern Cape property services",
      "South African building company",
      "local construction company",

      // Expertise keywords
      "experienced building company",
      "professional construction firm",
      "qualified building contractors",
      "certified maintenance company",
      "licensed construction services",
      "skilled building technicians",
      "trained construction professionals",
      "expert property maintenance",
      "specialized building services",

      // Service quality keywords
      "quality building services",
      "reliable construction company",
      "trusted building contractors",
      "dependable maintenance services",
      "professional workmanship",
      "high quality construction",
      "excellent building standards",
      "superior maintenance work",

      // Industry reputation keywords
      "reputable building company",
      "established construction firm",
      "leading maintenance services",
      "trusted property contractors",
      "renowned building company",
      "well known construction services",
      "respected maintenance company",

      // Business credentials keywords
      "registered building company",
      "insured construction services",
      "bonded maintenance contractors",
      "compliant building services",
      "certified construction company",
      "licensed property maintenance",
      "qualified building professionals",

      // Service scope keywords
      "comprehensive building services",
      "full service construction",
      "complete maintenance solutions",
      "total property services",
      "integrated building solutions",
      "holistic construction services",
      "end to end maintenance",

      // Client relationship keywords
      "client focused building company",
      "customer oriented construction",
      "relationship driven services",
      "partnership based maintenance",
      "collaborative building approach",
      "client centric construction",

      // Innovation keywords
      "modern building techniques",
      "advanced construction methods",
      "innovative maintenance solutions",
      "technology driven services",
      "cutting edge building practices",
      "latest construction technology",

      // Community keywords
      "local building company",
      "community focused construction",
      "locally owned maintenance",
      "South African owned business",
      "local construction experts",
      "community building services",
      "local property maintenance",

      // Dynamic service about keywords
      ...SERVICES.flatMap((s) => [
        `${s.title} company Limpopo`,
        `${s.title} company Gauteng`,
        `${s.title} company Eastern Cape`,
        `${s.title} services near me`,
        `${s.title} Polokwane`,
        `${s.title} Johannesburg`,
        `${s.title} Pretoria`,
        `${s.title} East London`,
        `professional ${s.title} company`,
        `expert ${s.title} services`,
        `qualified ${s.title} contractors`,
        `certified ${s.title} company`,
        `experienced ${s.title} professionals`,
        `reliable ${s.title} services`,
        `trusted ${s.title} company`,
        `quality ${s.title} work`,
        `skilled ${s.title} technicians`,
        `specialized ${s.title} services`,
        `${s.title} specialists`,
        `${s.title} experts`,
        `${s.title} professionals`,
        `${s.title} technicians`,
        `${s.title} contractors`,
        `${s.title} company profile`,
        `${s.title} service overview`,
        `${s.title} company history`,
        `${s.title} business background`,
      ]),
    ],
    canonical: `${SITE.domain}/about`,
  };
};

export const faqJsonLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
});

export const breadcrumbJsonLd = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${SITE.domain}${crumb.url}`,
  })),
});
