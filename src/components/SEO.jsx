import { Helmet } from "react-helmet-async";

const toArray = (v) => (Array.isArray(v) ? v : v ? [v] : []);

export default function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  jsonLd,
  noindex = false,
  preloadImages = [],
}) {
  const siteName = "MMG Building Maintenance & Management";

  const metaKeywords = toArray(keywords).filter(Boolean).join(", ").trim();

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {metaKeywords ? <meta name="keywords" content={metaKeywords} /> : null}

      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}

      {/* Preload critical images */}
      {toArray(preloadImages).map((imageSrc, index) => (
        <link
          key={`preload-${index}`}
          rel="preload"
          href={imageSrc}
          as="image"
          type={imageSrc.includes('.webp') ? 'image/webp' : 'image/jpeg'}
        />
      ))}

      {/* Open Graph */}
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}

      {/* JSON-LD */}
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
