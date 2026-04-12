import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Hammer,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { SERVICES } from "../data/services";
import { SITE, localBusinessJsonLd } from "../lib/seo";

const serviceHighlights = [
  {
    title: "Roofing",
    description: "Complete roof design, restoration, and installation",
  },
  {
    title: "Painting",
    description: "Industrial and commercial painting services",
  },
  {
    title: "Flooring",
    description: "Epoxy, polyurethane, and concrete systems",
  },
  { title: "Construction", description: "Full building and structural works" },
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

export default function Home() {
  return (
    <>
      <SEO
        title={`Building Maintenance in Limpopo, Gauteng & Eastern Cape | Construction Services Near Me | ${SITE.name}`}
        description={`${SITE.name} provides building maintenance and construction services across Limpopo, Gauteng, and Eastern Cape, South Africa. Explore ${SERVICES.map(
          (s) => s.title,
        ).join(", ")} and request a fast quote.`}
        keywords={[
          // Core home keywords
          "building maintenance Limpopo",
          "building maintenance Gauteng",
          "building maintenance Eastern Cape",
          "construction services near me",
          "home improvement services Limpopo",
          "home improvement services Gauteng",
          "home improvement services Eastern Cape",

          // Comprehensive service keywords
          "roofing services Polokwane",
          "roofing services Johannesburg",
          "roofing services East London",
          "painting services Limpopo",
          "painting services Gauteng",
          "painting services Eastern Cape",
          "flooring services near me",
          "construction services Polokwane",
          "construction services Johannesburg",
          "construction services East London",
          "maintenance services Limpopo",
          "maintenance services Gauteng",
          "maintenance services Eastern Cape",
          "masonry services near me",
          "ceilings partitioning Polokwane",
          "ceilings partitioning Johannesburg",
          "ceilings partitioning East London",

          // Business type keywords
          "building contractors near me",
          "construction companies Limpopo",
          "construction companies Gauteng",
          "construction companies Eastern Cape",
          "property maintenance services",
          "facility management Polokwane",
          "facility management Johannesburg",
          "facility management East London",

          // Geographic keywords
          "Polokwane building services",
          "Johannesburg construction",
          "Pretoria building maintenance",
          "East London property services",
          "Sandton commercial construction",
          "Midrand industrial services",
          "Centurion building contractors",
          "Tzaneen property maintenance",
          "Thohoyandou construction services",
          "Mokopane building work",

          // Service request keywords
          "get building quote",
          "free construction quote",
          "building estimate online",
          "roofing quote near me",
          "painting cost Limpopo",
          "painting cost Gauteng",
          "painting cost Eastern Cape",
          "flooring estimate Polokwane",
          "flooring estimate Johannesburg",
          "flooring estimate East London",

          // Quality and expertise keywords
          "professional building services",
          "expert construction Limpopo",
          "expert construction Gauteng",
          "expert construction Eastern Cape",
          "certified contractors near me",
          "licensed building company",
          "experienced maintenance Polokwane",
          "experienced maintenance Johannesburg",
          "experienced maintenance East London",
          "qualified roofing specialists",
          "trained painting technicians",

          // Industry-specific keywords
          "commercial building maintenance",
          "industrial construction services",
          "residential property services",
          "contract building work",
          "structural maintenance near me",
          "infrastructure construction",
          "facility building services",

          // Emergency services keywords
          "emergency building repairs",
          "urgent maintenance services",
          "24/7 construction support",
          "same day building work",
          "emergency roofing repairs",
          "urgent painting services",
          "quick maintenance fixes",

          // Material and equipment keywords
          "building materials supply",
          "construction equipment rental",
          "roofing materials Limpopo",
          "roofing materials Gauteng",
          "roofing materials Eastern Cape",
          "painting supplies near me",
          "flooring materials Polokwane",
          "flooring materials Johannesburg",
          "flooring materials East London",

          // Seasonal keywords
          "preventive maintenance services",
          "year round construction",
          "all weather building services",
          "regular property maintenance",

          // Dynamic service keywords
          ...SERVICES.flatMap((s) => [
            `${s.title} Limpopo`,
            `${s.title} Gauteng`,
            `${s.title} Eastern Cape`,
            `${s.title} near me`,
            `local ${s.title} near me`,
            `${s.title} Polokwane`,
            `${s.title} Johannesburg`,
            `${s.title} Pretoria`,
            `${s.title} East London`,
            `${s.title} Sandton`,
            `${s.title} Midrand`,
            `${s.title} Centurion`,
            `${s.title} Tzaneen`,
            `${s.title} Thohoyandou`,
            `${s.title} Mokopane`,
            `${s.title} Port Elizabeth`,
            `${s.title} Mthatha`,
            `${s.title} Queenstown`,
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
            `${s.title} materials`,
            `${s.title} supplies`,
            `${s.title} equipment`,
          ]),
        ]}
        canonical={`${SITE.domain}/`}
        jsonLd={localBusinessJsonLd()}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#041f5e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-accent font-medium mb-4 tracking-wider uppercase pt-10 text-sm"
              variants={itemVariants}
            >
              Professional Building Services Since 2018
            </motion.p>
            <motion.h1
              className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
              variants={itemVariants}
            >
              Building Maintenance & Construction Services in Limpopo, Gauteng &
              Eastern Cape
            </motion.h1>
            <motion.p
              className="text-sm sm:text-lg text-white/80 mb-8 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              {SITE.name} delivers local building maintenance and construction
              services across Limpopo, Gauteng, and Eastern Cape, South Africa.
              From roofing to flooring, we bring professionalism to every
              project.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-16"
              variants={itemVariants}
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
              >
                View Services
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Request a Quote
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                variants={itemVariants}
              >
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Building2 className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Commercial</p>
                  <p className="text-white/60 text-sm">& Industrial</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                variants={itemVariants}
              >
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Hammer className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Construction</p>
                  <p className="text-white/60 text-sm">& Renovation</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                variants={itemVariants}
              >
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Shield className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Quality</p>
                  <p className="text-white/60 text-sm">Guaranteed</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="pt-12 pb-24 bg-[#041f5e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Local services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
              Home improvement & building services in Limpopo, Gauteng & Eastern
              Cape
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Explore our core services and request a quote. For each service,
              you can view a dedicated page optimized for South African
              searches.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceHighlights.map((service) => (
              <motion.div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
                Why choose us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Trusted building maintenance in South Africa
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Situnda Global Solutions (PTY) LTD, trading as {SITE.name}, has
                been delivering building services since 2018. We focus on
                professionalism, integrity, and quality workmanship.
              </p>

              <motion.div
                className="space-y-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "100% South African Owned Company",
                  "Offices in Limpopo, Gauteng & Eastern Cape",
                  "Commercial, Domestic & Industrial Services",
                  "Expert Team of Professionals",
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <CheckCircle2
                      className="text-accent flex-shrink-0"
                      size={20}
                    />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                  alt="Construction site with workers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl">
                <p className="text-4xl font-bold">2018</p>
                <p className="text-white/80 text-sm">Established</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#041f5e]">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
            Get a quote for your project in South Africa
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Call or WhatsApp for a fast response. We handle maintenance,
            construction, and service work across Limpopo, Gauteng, and Eastern
            Cape.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
