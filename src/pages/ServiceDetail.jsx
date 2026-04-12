import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import { getServiceBySlug } from "../data/services";
import {
  SITE,
  LIMPOPO_TOWNS,
  GAUTENG_TOWNS,
  EASTERN_CAPE_TOWNS,
  serviceMeta,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "../lib/seo";

const buildFaqs = (serviceTitle) => [
  {
    q: `Do you offer ${serviceTitle.toLowerCase()} in South Africa?`,
    a: `Yes. ${SITE.name} provides ${serviceTitle.toLowerCase()} across Limpopo, Gauteng, and Eastern Cape, South Africa, including ${LIMPOPO_TOWNS.slice(
      0,
      2,
    ).join(
      ", ",
    )}, ${GAUTENG_TOWNS.slice(0, 2).join(", ")}, ${EASTERN_CAPE_TOWNS.slice(0, 2).join(", ")}.`,
  },
  {
    q: `How do I get a quote for ${serviceTitle.toLowerCase()}?`,
    a: `Use the contact form or call/WhatsApp us with your location in South Africa, photos (if available), and a short description of the work. We’ll respond with next steps and a quote.`,
  },
  {
    q: `Do you handle commercial and residential ${serviceTitle.toLowerCase()}?`,
    a: `Yes. We work on residential, commercial, and industrial properties depending on project requirements.`,
  },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <p className="text-muted-foreground mt-3">
          The service you’re looking for doesn’t exist.
        </p>
        <Link
          className="text-accent font-medium hover:underline mt-6 inline-block"
          to="/services"
        >
          View all services
        </Link>
      </div>
    );
  }

  const meta = serviceMeta(service);
  const faqs = buildFaqs(service.title);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      serviceJsonLd(service),
      faqJsonLd(faqs),
      breadcrumbJsonLd(breadcrumbs),
    ],
  };

  const breadcrumbs = [
    { label: "Services", url: "/services" },
    { label: service.title, url: null },
  ];

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="pb-14 bg-[#041f5e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium mb-3 tracking-wider uppercase text-sm">
            Service in South Africa
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-5 text-balance">
            {service.title}
          </h1>
          <p className="text-white/80 max-w-3xl leading-relaxed">
            {service.shortDescription} Serving Limpopo, Gauteng, and Eastern
            Cape, South Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/15 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {service.title} services across Limpopo
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {SITE.name} delivers {service.title.toLowerCase()} for
              residential, commercial, and industrial properties. We focus on
              quality workmanship, clear communication, and practical timelines.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              What’s included
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.features.map((f) => (
                <li key={f} className="bg-secondary rounded-lg p-4">
                  <span className="text-foreground font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              Benefits
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Improves property value and long-term durability.</li>
              <li>Reduces reactive repairs through better workmanship.</li>
              <li>Professional finish suitable for commercial standards.</li>
              <li>Local Limpopo support and faster response times.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
              FAQs
            </h3>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="border rounded-xl p-5">
                  <p className="font-semibold text-foreground">{f.q}</p>
                  <p className="text-muted-foreground mt-2">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="border rounded-2xl p-6 sticky top-28">
              <h2 className="text-lg font-semibold">Service areas</h2>
              <p className="text-muted-foreground text-sm mt-2">
                Limpopo, Gauteng & Eastern Cape, South Africa — including:
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {[
                  ...LIMPOPO_TOWNS,
                  ...GAUTENG_TOWNS,
                  ...EASTERN_CAPE_TOWNS,
                ].map((t) => (
                  <li key={t} className="bg-secondary rounded-md px-3 py-2">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-5 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>

              <div className="mt-3">
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center px-5 py-3 bg-secondary text-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  View all services
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Related services
          </h2>
          <p className="text-muted-foreground mb-6">
            Explore other local services offered by {SITE.name}.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            Browse all services
          </Link>
        </div>
      </section>
    </>
  );
}
