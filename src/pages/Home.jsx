import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Hammer,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

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
      <Helmet>
        <title>
          MMG Building Maintenance & Management | Professional Construction
          Services
        </title>
        <meta
          name="description"
          content="MMG Building Maintenance & Management provides comprehensive construction, roofing, painting, flooring, and industrial maintenance services across South Africa since 2018."
        />
        <meta
          name="keywords"
          content="building maintenance, construction, roofing, painting, flooring, South Africa, industrial services"
        />
        <link rel="canonical" href="https://mmgbuilding.co.za/" />
      </Helmet>

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
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
              variants={itemVariants}
            >
              Building Excellence Through Quality & Integrity
            </motion.h1>
            <motion.p
              className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              MMG Building Maintenance & Management delivers comprehensive
              construction, maintenance, and industrial solutions across South
              Africa. From roofing to flooring, we bring professionalism to
              every project.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-16"
              variants={itemVariants}
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
              >
                Our Services
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
              What We Do
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Building Solutions
            </h2>
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
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
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
                Why Choose Us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Your Trusted Partner in Building Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Situnda Global Solutions (PTY) LTD, trading as MMG Building
                Maintenance & Management, has been delivering exceptional
                building services since 2018. Our commitment to professionalism,
                integrity, and quality sets us apart.
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
                  "Offices in Limpopo & Eastern Cape",
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
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Contact us today for a free consultation and quote. We guarantee
            competitive rates with top-quality service.
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
