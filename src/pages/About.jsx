import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Users,
  Award,
} from "lucide-react";

const highlights = [
  "100% South African Owned Company",
  "Offices in Limpopo & Eastern Cape",
  "Commercial, Domestic & Industrial",
  "Expert Team of Professionals",
];

const values = [
  {
    number: "01",
    title: "Professionalism",
    description:
      "We maintain the highest standards in every aspect of our work, from initial consultation to project completion.",
    icon: Users,
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "Honest dealings and transparent communication form the foundation of our client relationships.",
    icon: Award,
  },
  {
    number: "03",
    title: "Honesty",
    description:
      "We provide accurate assessments, realistic timelines, and fair pricing for all our services.",
    icon: Target,
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "Our commitment to quality ensures superior results that exceed client expectations every time.",
    icon: Eye,
  },
];

const directors = [{ name: "Asandiswa Situnda", role: "Director" }];

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

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | MMG Building Maintenance & Management</title>
        <meta
          name="description"
          content="Learn about MMG Building Maintenance & Management - a 100% South African owned company established in 2018, providing quality building services with integrity across Limpopo and Eastern Cape."
        />
        <meta
          name="keywords"
          content="about MMG, South African construction company, building services, Polokwane, East London"
        />
        <link rel="canonical" href="https://mmgbuilding.co.za/about" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#041f5e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
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
              About Us
            </motion.p>
            <motion.h1
              className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 max-w-2xl text-balance"
              variants={itemVariants}
            >
              Building South Africa&apos;s Future With Excellence
            </motion.h1>
            <motion.p
              className="text-white/80 text-lg max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Established in 2018, MMG Building Maintenance & Management is
              committed to delivering quality construction and maintenance
              services across the nation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Your Trusted Partner in Building Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Situnda Global Solutions (PTY) LTD, trading as MMG Building
                Maintenance & Management, was established in 2018 as a private
                company dedicated to providing premium products and services to
                public institutions, private businesses, and households.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With headquarters in Polokwane, Limpopo Province and a satellite
                office in East London, Eastern Cape, we are strategically
                positioned to serve clients across South Africa with
                professional industrial building maintenance and construction
                services.
              </p>

              <motion.div
                className="grid sm:grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {highlights.map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <CheckCircle2
                      className="text-accent flex-shrink-0"
                      size={20}
                    />
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-border"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants}>
                  <p className="text-3xl font-bold text-foreground">2018</p>
                  <p className="text-muted-foreground text-sm">Established</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p className="text-3xl font-bold text-foreground">2</p>
                  <p className="text-muted-foreground text-sm">
                    Office Locations
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <p className="text-3xl font-bold text-foreground">100%</p>
                  <p className="text-muted-foreground text-sm">SA Owned</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                  alt="Construction site with workers"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="font-serif text-xl font-semibold mb-2">
                  {
                    '"To be the preferred service provider that is credible and has integrity"'
                  }
                </p>
                <p className="text-white/80 text-sm">— Our Vision</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-sm"
              variants={itemVariants}
            >
              <motion.div
                className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Target className="text-accent" size={28} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To supply our clients with quality service at a competitive
                price. We are dedicated to providing beneficial and
                cost-effective solutions with the best quality products and
                excellent service to our clients, always prioritizing their
                needs and satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-10 rounded-2xl shadow-sm"
              variants={itemVariants}
            >
              <motion.div
                className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Eye className="text-accent" size={28} />
              </motion.div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the preferred service provider that is credible and has
                integrity. We aim to build lasting relationships with our
                clients through consistent quality, transparent communication,
                and unwavering commitment to excellence in every project we
                undertake.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#041f5e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Our Values
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
              What Drives Us Forward
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              Our mission is to supply our clients with quality service at a
              competitive price, guided by our core values.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.number}
                className="bg-[#041f5e] p-8 hover:bg-white/5 transition-colors"
                variants={itemVariants}
              >
                <motion.p
                  className="text-accent text-4xl font-serif font-bold mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {value.number}
                </motion.p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Leadership
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Meet Our Directors
            </h2>
          </motion.div>

          <motion.div
            className="max-w-lg mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {directors.map((director) => (
              <motion.div
                key={director.name}
                className="text-center p-10 bg-secondary rounded-2xl shadow-sm"
                variants={itemVariants}
              >
                <motion.div
                  className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Users className="text-accent" size={48} />
                </motion.div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {director.name}
                </h3>
                <p className="text-accent font-medium text-lg">
                  {director.role}
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Leading our team with expertise and dedication to delivering
                  exceptional building maintenance and construction services
                  across South Africa.
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-2">
              Company Registration Number
            </p>
            <p className="text-foreground font-semibold">
              REG NO: 2026/244431/07
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let us bring our expertise and commitment to excellence to your next
            project.
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
              Contact Us Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
