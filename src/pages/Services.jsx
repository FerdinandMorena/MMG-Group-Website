import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Paintbrush,
  Layers,
  Building,
  Wrench,
  HardHat,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "roofing",
    icon: Home,
    title: "Roofing",
    description:
      "Complete roof designing, restoration, and installation services including cladding, steel structures, and refurbishment for all sectors.",
    features: [
      "Roof Design & Planning",
      "Installation & Cladding",
      "Steel Structure Building",
      "Restoration & Repairs",
      "IBR & Corrugated Sheeting",
      "Gutter Installation",
    ],
    image:
      "https://images.unsplash.com/photo-1632873669009-05e9da94a09b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "painting",
    icon: Paintbrush,
    title: "Painting",
    description:
      "Professional contract painting services with specialized spray systems including epoxy paints, poly-urea, and polyurethane coatings.",
    features: [
      "Contract Painting",
      "Industrial Coatings",
      "Epoxy Paint Systems",
      "Polyurethane Finishes",
      "Spray Applications",
      "Surface Preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "flooring",
    icon: Layers,
    title: "Flooring",
    description:
      "Comprehensive flooring solutions from concrete and epoxy systems to vinyl and tile installations for any environment.",
    features: [
      "Epoxy Flooring",
      "Polyurethane Floors",
      "Concrete Systems",
      "Vinyl & Tile Installation",
      "Self-Leveling Floors",
      "Anti-Slip Coatings",
    ],
    image:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "construction",
    icon: Building,
    title: "Construction",
    description:
      "Full building and structural construction services for residential and commercial projects of any scale.",
    features: [
      "Structural Building",
      "Residential Projects",
      "Commercial Development",
      "Renovations",
      "Extensions",
      "New Builds",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance",
    description:
      "Reactive and preventive building maintenance services ensuring your property remains in optimal condition.",
    features: [
      "Facilities Management",
      "Reactive Repairs",
      "Preventive Care",
      "Emergency Services",
      "Scheduled Maintenance",
      "Property Inspections",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "masonry",
    icon: HardHat,
    title: "Masonry",
    description:
      "Expert masonry work including brick and concrete block construction, grouting, and polished concrete installations.",
    features: [
      "Brick Masonry",
      "Concrete Blocks",
      "Rib & Block Slabs",
      "Polished Concrete",
      "Grouting",
      "Plastering",
    ],
    image:
      "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=800&q=80",
  },
];

const sectors = [
  "Commercial Buildings",
  "Industrial Facilities",
  "Residential Properties",
  "Government Projects",
  "Retail Spaces",
  "Warehouses",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | MMG Building Maintenance & Management</title>
        <meta
          name="description"
          content="Explore MMG's comprehensive building services including roofing, painting, flooring, construction, maintenance, and masonry for commercial, industrial, and residential sectors."
        />
        <meta
          name="keywords"
          content="roofing services, painting services, flooring installation, construction, building maintenance, masonry, South Africa"
        />
        <link rel="canonical" href="https://mmgbuilding.co.za/services" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#041f5e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-accent font-medium mb-4 tracking-wider uppercase text-sm"
              variants={itemVariants}
            >
              Our Services
            </motion.p>
            <motion.h1
              className="font-serif text-2xl sm:text-5xl font-bold text-white mb-6 max-w-2xl text-balance"
              variants={itemVariants}
            >
              Comprehensive Building Solutions
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-lg max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              From concept to completion, we provide beneficial and
              cost-effective solutions with quality products and excellent
              service across all sectors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div
                    className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <service.icon className="text-accent" size={28} />
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold text-foreground mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.div
                    className="grid sm:grid-cols-2 gap-3 mb-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        variants={itemVariants}
                      >
                        <CheckCircle2
                          className="text-accent flex-shrink-0"
                          size={18}
                        />
                        <span className="text-foreground text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                    >
                      Request a Quote
                      <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Sectors We Serve
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Expertise Across Industries
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide our services to a diverse range of sectors, ensuring
              quality and professionalism in every project.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sectors.map((sector) => (
              <motion.div
                key={sector}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
                variants={itemVariants}
              >
                <p className="text-foreground font-medium">{sector}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#041f5e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            className="text-white/70 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Every project is unique. Contact us to discuss your specific
            requirements and receive a tailored quote.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
            >
              Get Your Free Quote
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
