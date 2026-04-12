import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

// Keep this script dependency-free.
// It reads the same service slugs used by the app.

const projectRoot = process.cwd();
const siteUrl = "https://mmgbuilding.co.za";

const servicesPath = path.join(projectRoot, "src", "data", "services.js");
const servicesModule = await import(pathToFileURL(servicesPath).href);
const services = servicesModule.SERVICES || [];

const staticRoutes = ["/", "/about", "/services", "/works", "/contact"];
const serviceRoutes = services.map((s) => `/services/${s.id}`);

const urls = [...staticRoutes, ...serviceRoutes]
  .map((p) => `  <url>\n    <loc>${siteUrl}${p}</loc>\n  </url>`)
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = path.join(projectRoot, "public", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`sitemap.xml generated: ${outPath}`);
