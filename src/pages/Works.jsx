import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import { worksMeta } from "../lib/seo";
import { portfolioJsonLd, breadcrumbJsonLd } from "../lib/seo";
import { SERVICES } from "../data/services";

const categories = [
  "All",
  "Ceilings & Partitioning",
  "Construction",
  "Roofing",
];

const projects = [
  {
    id: 1,
    title: "Bulk head ceilings",
    category: "Ceilings & Partitioning",
    description:
      "Professional bulk head ceilings and partitioning installations with clean recessed lines, integrated lighting, and moisture-resistant finishes for contemporary interiors.",
    image: "/ceiling/Bulk head ceilings/1.webp",
    images: [
      "/ceiling/Bulk head ceilings/1.webp",
      "/ceiling/Bulk head ceilings/2.webp",
      "/ceiling/Bulk head ceilings/3.webp",
      "/ceiling/Bulk head ceilings/4.webp",
      "/ceiling/Bulk head ceilings/5.webp",
      "/ceiling/Bulk head ceilings/6.webp",
      "/ceiling/Bulk head ceilings/7.webp",
      "/ceiling/Bulk head ceilings/8.webp",
      "/ceiling/Bulk head ceilings/9.webp",
      "/ceiling/Bulk head ceilings/10.webp",
      "/ceiling/Bulk head ceilings/11.webp",
      "/ceiling/Bulk head ceilings/12.webp",
      "/ceiling/Bulk head ceilings/13.webp",
      "/ceiling/Bulk head ceilings/14.webp",
      "/ceiling/Bulk head ceilings/15.webp",
      "/ceiling/Bulk head ceilings/16.webp",
      "/ceiling/Bulk head ceilings/17.webp",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Building and renovation",
    category: "Construction",
    description:
      "Full building renovation and construction services, combining structural upgrades, interior finishes, and practical site management to refresh existing spaces.",
    image: "/construction/building and renovation/9.webp",
    images: [
      "/construction/building and renovation/1.webp",
      "/construction/building and renovation/2.webp",
      "/construction/building and renovation/3.webp",
      "/construction/building and renovation/4.webp",
      "/construction/building and renovation/5.webp",
      "/construction/building and renovation/6.webp",
      "/construction/building and renovation/7.webp",
      "/construction/building and renovation/8.webp",
      "/construction/building and renovation/9.webp",
      "/construction/building and renovation/10.webp",
      "/construction/building and renovation/11.webp",
      "/construction/building and renovation/12.webp",
      "/construction/building and renovation/13.webp",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Waterproofing",
    category: "Roofing",
    description:
      "Reliable roofing waterproofing solutions designed to protect structures from leaks, improve durability, and keep interiors dry through every season.",
    image: "/roofing/waterproofing/1.webp",
    images: [
      "/roofing/waterproofing/1.webp",
      "/roofing/waterproofing/2.webp",
      "/roofing/waterproofing/3.webp",
      "/roofing/waterproofing/4.webp",
      "/roofing/waterproofing/5.webp",
      "/roofing/waterproofing/6.webp",
      "/roofing/waterproofing/7.webp",
      "/roofing/waterproofing/8.webp",
      "/roofing/waterproofing/9.webp",
      "/roofing/waterproofing/10.webp",
    ],
    featured: true,
  },
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") {
      return true;
    }
    return (
      project.category.trim().toLowerCase() ===
      activeCategory.trim().toLowerCase()
    );
  });

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => setSelectedProject(null);

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((index) =>
      index === 0 ? selectedProject.images.length - 1 : index - 1,
    );
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((index) =>
      index === selectedProject.images.length - 1 ? 0 : index + 1,
    );
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedProject) return;
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.top = "";
    };
  }, [selectedProject]);

  const breadcrumbs = [{ label: "Our Works", url: null }];

  return (
    <>
      <SEO {...worksMeta()} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(portfolioJsonLd())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd(breadcrumbs))}
        </script>
      </Helmet>

      <Breadcrumb items={breadcrumbs} />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-20 bg-[#041f5e] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80')",
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
              Our Works
            </motion.p>
            <motion.h1
              className="font-serif text-2xl sm:text-5xl font-bold text-white mb-6 max-w-2xl text-balance"
              variants={itemVariants}
            >
              Featured Projects
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-lg max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Explore our portfolio of completed building projects in Limpopo,
              Gauteng, and Eastern Cape, South Africa. From roofing and
              construction to painting and maintenance, see our quality
              workmanship across South Africa.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          {activeCategory === "All" && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Featured Projects
              </motion.h2>
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {projects
                  .filter((p) => p.featured)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                      variants={itemVariants}
                      onClick={() => openProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-accent text-sm font-medium mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-white text-xl font-semibold mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">
                            {project.images.length} photos
                          </span>
                          <span className="text-white/60 text-sm">
                            Click to view gallery
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/20 md:group-hover:bg-black/20">
                        <span className="opacity-100 md:opacity-0 md:group-hover:opacity-100 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white text-sm backdrop-blur-sm">
                          View Gallery
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          )}

          {/* All Projects */}
          <div>
            {activeCategory === "All" && (
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                All Projects
              </motion.h2>
            )}
            <motion.div
              key={activeCategory}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group bg-secondary rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  variants={itemVariants}
                  onClick={() => openProject(project)}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-accent text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {project.images.length} photos
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {project.description}
                    </p>
                    <p className="text-accent text-sm font-medium">
                      Click to view gallery →
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services Links */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Explore Our Services
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              See more examples of our work in roofing, construction, painting,
              flooring, and maintenance services across South Africa.
            </p>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {SERVICES.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/services/${service.id}`}
                    className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-center"
                  >
                    <h3 className="font-medium text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-accent text-sm">View Service →</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeProject();
            }
          }}
          style={{ touchAction: "none" }}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
            <button
              type="button"
              onClick={closeProject}
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} image ${currentImageIndex + 1}`}
                className="h-[70vh] w-full object-cover sm:h-[80vh]"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white text-sm">
                {selectedProject.title} ({currentImageIndex + 1}/
                {selectedProject.images.length})
              </div>
            </div>

            <div className="border-t border-white/10 bg-slate-950 px-6 py-5 sm:px-8">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {selectedProject.images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 overflow-hidden rounded-2xl border transition ${
                      index === currentImageIndex
                        ? "border-accent"
                        : "border-white/10"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} thumbnail ${index + 1}`}
                      className="h-20 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Stats Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Our Track Record
            </h2>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-4xl font-bold text-accent mb-2">50+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-4xl font-bold text-accent mb-2">100%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-4xl font-bold text-accent mb-2">6+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <p className="text-4xl font-bold text-accent mb-2">2</p>
              <p className="text-muted-foreground">Provinces Served</p>
            </motion.div>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-white/70 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Join our growing list of satisfied clients. Contact us today for a
            free consultation and quote.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
            >
              Get Started Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
