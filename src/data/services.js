// Single source of truth for services used across UI + SEO.
// Extracted from existing app content (src/pages/Services.jsx, src/pages/Contact.jsx, src/pages/Home.jsx, src/pages/Works.jsx)

export const SERVICES = [
  {
    id: "roofing",
    title: "Roofing",
    shortDescription:
      "Complete roof designing, restoration, and installation services including cladding, steel structures, and refurbishment for all sectors.",
    features: [
      "Roof Design & Planning",
      "Installation & Cladding",
      "Steel Structure Building",
      "Restoration & Repairs",
      "IBR & Corrugated Sheeting",
      "Gutter Installation",
      "Waterproofing",
    ],
  },
  {
    id: "painting",
    title: "Painting",
    shortDescription:
      "Professional contract painting services with specialized spray systems including epoxy paints, poly-urea, and polyurethane coatings.",
    features: [
      "Contract Painting",
      "Industrial Coatings",
      "Epoxy Paint Systems",
      "Polyurethane Finishes",
      "Spray Applications",
      "Surface Preparation",
    ],
  },
  {
    id: "flooring",
    title: "Flooring",
    shortDescription:
      "Comprehensive flooring solutions from concrete and epoxy systems to vinyl and tile installations for any environment.",
    features: [
      "Epoxy Flooring",
      "Polyurethane Floors",
      "Concrete Systems",
      "Vinyl & Tile Installation",
      "Self-Leveling Floors",
      "Anti-Slip Coatings",
    ],
  },
  {
    id: "construction",
    title: "Construction",
    shortDescription:
      "Full building and structural construction services for residential and commercial projects of any scale.",
    features: [
      "Structural Building",
      "Residential Projects",
      "Commercial Development",
      "Renovations",
      "Extensions",
      "New Builds",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    shortDescription:
      "Reactive and preventive building maintenance services ensuring your property remains in optimal condition.",
    features: [
      "Facilities Management",
      "Reactive Repairs",
      "Preventive Care",
      "Emergency Services",
      "Scheduled Maintenance",
      "Property Inspections",
    ],
  },
  {
    id: "masonry",
    title: "Masonry",
    shortDescription:
      "Expert masonry work including brick and concrete block construction, grouting, and polished concrete installations.",
    features: [
      "Brick Masonry",
      "Concrete Blocks",
      "Rib & Block Slabs",
      "Polished Concrete",
      "Grouting",
      "Plastering",
    ],
  },
  {
    id: "ceilings-partitioning",
    title: "Ceilings & Partitioning",
    shortDescription:
      "Professional ceilings and partitioning services including suspended systems, acoustic panels, dry-walling, and maintenance for modern interiors.",
    features: [
      "Suspended Ceiling Installation",
      "Acoustic Ceiling Systems",
      "Partition Wall Construction",
      "Grid Systems",
      "Panel Replacement",
      "Ceilings & Partitions Maintenance",
    ],
  },
];

export const getServiceBySlug = (slug) =>
  SERVICES.find((s) => s.id === slug);

export const getServiceSlugs = () => SERVICES.map((s) => s.id);
