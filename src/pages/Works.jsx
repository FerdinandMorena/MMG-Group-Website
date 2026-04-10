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

const categories = [
  "All",
  "Roofing",
  "Flooring",
  "Construction",
  "Painting",
  "Maintenance",
];

const projects = [
  {
    id: 1,
    title: "Industrial Warehouse Roofing",
    category: "Roofing",
    description:
      "Complete roof installation for a 5,000 sqm industrial warehouse including IBR sheeting and gutter systems.",

    image:
      "https://images.unsplash.com/photo-1632873669009-05e9da94a09b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1632873669009-05e9da94a09b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092336060-6ee94ed74815?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Commercial Floor Coating",
    category: "Flooring",
    description:
      "Epoxy flooring installation for a commercial warehouse with anti-slip coating.",

    image:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518733057094-95b5313b00a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Office Building Construction",
    category: "Construction",
    description:
      "New build commercial office space with modern finishes and structural work.",

    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Factory Spray Painting",
    category: "Painting",
    description:
      "Industrial spray painting with specialized epoxy coatings for manufacturing facility.",

    image:
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Shopping Center Maintenance",
    category: "Maintenance",
    description:
      "Comprehensive maintenance contract for retail shopping center.",

    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Residential Roof Restoration",
    category: "Roofing",
    description:
      "Complete roof restoration and waterproofing for residential estate.",

    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581091870620-0b03398b05e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: 7,
    title: "Warehouse Floor System",
    category: "Flooring",
    description:
      "Polyurethane floor system installation for cold storage warehouse.",

    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534158592723-3e3f3c1b4106?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508896694512-9c6ad1d8d849?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: 8,
    title: "Office Block Extension",
    category: "Construction",
    description: "Two-story extension to existing commercial office building.",

    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1463668952892-3b6cf5ec5f3a?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
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
    transition: { duration: 0.6, ease: "easeOut" },
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

  return (
    <>
      <Helmet>
        <title>Our Works | MMG Building Maintenance & Management</title>
        <meta
          name="description"
          content="Explore MMG's portfolio of completed construction, roofing, painting, flooring, and maintenance projects across South Africa's commercial and industrial sectors."
        />
        <meta
          name="keywords"
          content="construction projects, building portfolio, roofing projects, commercial construction, South Africa"
        />
        <link rel="canonical" href="https://mmgbuilding.co.za/works" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#041f5e] overflow-hidden">
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
              Explore our portfolio of completed projects across commercial,
              industrial, and residential sectors throughout South Africa.
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
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-2xl font-bold text-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
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
              viewport={{ once: true }}
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
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
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
                className="h-[55vh] w-full object-cover sm:h-[60vh]"
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

            <div className="space-y-4 border-t border-white/10 bg-slate-950 px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/75">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {selectedProject.images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`overflow-hidden rounded-2xl border transition ${
                      index === currentImageIndex
                        ? "border-accent"
                        : "border-white/10"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} thumbnail ${index + 1}`}
                      className="h-20 w-full object-cover"
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-white/70 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join our growing list of satisfied clients. Contact us today for a
            free consultation and quote.
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
              Get Started Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
