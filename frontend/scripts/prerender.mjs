import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const ssrDir = path.resolve(rootDir, "dist-ssr");

function escapeAttr(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getPriorityAndFreq(routePath) {
  if (routePath === "/") {
    return { priority: "1.0", changefreq: "monthly" };
  }
  if (routePath.startsWith("/services/")) {
    return { priority: "0.8", changefreq: "monthly" };
  }
  if (["/about", "/case-studies", "/portfolio"].includes(routePath)) {
    return { priority: "0.7", changefreq: "monthly" };
  }
  if (routePath === "/contact") {
    return { priority: "0.6", changefreq: "yearly" };
  }
  return { priority: "0.3", changefreq: "yearly" };
}

async function main() {
  console.log("🚀 Starting static prerender build...");

  // 1. Build SSR bundle with Vite
  console.log("📦 Compiling SSR bundle...");
  execSync("npx vite build --ssr src/prerender.tsx --outDir dist-ssr", {
    cwd: rootDir,
    stdio: "inherit",
  });

  // 2. Import the compiled SSR module
  const ssrModulePath = path.resolve(ssrDir, "prerender.js");
  const { render, PUBLIC_ROUTES, SITE_URL } = await import(
    pathToFileURL(ssrModulePath).href
  );

  const baseHtmlPath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(baseHtmlPath)) {
    throw new Error(`Base template not found at ${baseHtmlPath}. Ensure vite build runs first.`);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

  // Real build date formatted as YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  console.log(`📄 Prerendering ${PUBLIC_ROUTES.length} public routes...`);

  for (const route of PUBLIC_ROUTES) {
    console.log(`  -> Prerendering ${route.path}`);
    const appHtml = render(route.path);

    let html = baseHtml;

    // Inject prerendered React markup
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );

    // Update <title>
    html = html.replace(
      /<title>.*?<\/title>/s,
      `<title>${escapeHtml(route.title)}</title>`,
    );

    // Update <meta name="description">
    html = html.replace(
      /<meta name="description" content=".*?"\s*\/?>/s,
      `<meta name="description" content="${escapeAttr(route.description)}" />`,
    );

    // Inject or update canonical link
    const canonicalTag = `    <link rel="canonical" href="${route.canonical}" />`;
    if (/<link rel="canonical".*?>/s.test(html)) {
      html = html.replace(/<link rel="canonical".*?>/s, canonicalTag.trim());
    } else {
      html = html.replace("</head>", `${canonicalTag}\n  </head>`);
    }

    // Update Open Graph tags
    html = html.replace(
      /<meta property="og:title" content=".*?"\s*\/?>/s,
      `<meta property="og:title" content="${escapeAttr(route.ogTitle)}" />`,
    );
    html = html.replace(
      /<meta property="og:description" content=".*?"\s*\/?>/s,
      `<meta property="og:description" content="${escapeAttr(route.ogDescription)}" />`,
    );
    html = html.replace(
      /<meta property="og:url" content=".*?"\s*\/?>/s,
      `<meta property="og:url" content="${escapeAttr(route.ogUrl)}" />`,
    );
    html = html.replace(
      /<meta property="og:image" content=".*?"\s*\/?>/s,
      `<meta property="og:image" content="${escapeAttr(route.ogImage)}" />`,
    );

    // Update Twitter Card tags
    html = html.replace(
      /<meta name="twitter:title" content=".*?"\s*\/?>/s,
      `<meta name="twitter:title" content="${escapeAttr(route.ogTitle)}" />`,
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?"\s*\/?>/s,
      `<meta name="twitter:description" content="${escapeAttr(route.ogDescription)}" />`,
    );
    html = html.replace(
      /<meta name="twitter:url" content=".*?"\s*\/?>/s,
      `<meta name="twitter:url" content="${escapeAttr(route.ogUrl)}" />`,
    );
    html = html.replace(
      /<meta name="twitter:image" content=".*?"\s*\/?>/s,
      `<meta name="twitter:image" content="${escapeAttr(route.ogImage)}" />`,
    );

    // Robots meta
    const robotsContent = route.indexable
      ? "index, follow"
      : "noindex, nofollow, noarchive";
    html = html.replace(
      /<meta name="robots" content=".*?"\s*\/?>/s,
      `<meta name="robots" content="${robotsContent}" />`,
    );
    html = html.replace(
      /<meta name="googlebot" content=".*?"\s*\/?>/s,
      `<meta name="googlebot" content="${robotsContent}" />`,
    );

    // Additional structured data: Breadcrumbs and Service schema
    let extraSchemas = "";
    if (route.indexable && route.breadcrumbLabel && route.path !== "/") {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: route.breadcrumbLabel,
            item: route.canonical,
          },
        ],
      };
      extraSchemas += `\n    <script type="application/ld+json" id="route-breadcrumb-jsonld">\n    ${JSON.stringify(breadcrumbData, null, 2).replace(/\n/g, "\n    ")}\n    </script>`;
    }

    if (route.serviceSchema) {
      const serviceData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: route.serviceSchema.name,
        serviceType: route.serviceSchema.name,
        description: route.serviceSchema.description,
        provider: {
          "@type": "Organization",
          name: "Axythic",
          url: SITE_URL,
        },
        url: route.canonical,
      };
      extraSchemas += `\n    <script type="application/ld+json" id="route-service-jsonld">\n    ${JSON.stringify(serviceData, null, 2).replace(/\n/g, "\n    ")}\n    </script>`;
    }

    if (extraSchemas) {
      html = html.replace("</head>", `${extraSchemas}\n  </head>`);
    }

    // Write file to destination
    if (route.path === "/") {
      fs.writeFileSync(path.resolve(distDir, "index.html"), html, "utf-8");
    } else {
      const cleanPath = route.path.replace(/^\//, "");
      const routeDir = path.resolve(distDir, cleanPath);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.resolve(routeDir, "index.html"), html, "utf-8");

      // Also create <cleanPath>.html alongside for Apache server direct match
      const parentDir = path.dirname(path.resolve(distDir, cleanPath));
      fs.mkdirSync(parentDir, { recursive: true });
      fs.writeFileSync(path.resolve(distDir, `${cleanPath}.html`), html, "utf-8");
    }
  }

  // 3. Generate sitemap.xml with real build date
  console.log("🗺️  Generating sitemap.xml with build date:", today);
  const sitemapEntries = PUBLIC_ROUTES.filter((r) => r.indexable).map((r) => {
    const { priority, changefreq } = getPriorityAndFreq(r.path);
    return `  <url>
    <loc>${r.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>
`;

  fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemapContent, "utf-8");
  fs.writeFileSync(
    path.resolve(rootDir, "public/sitemap.xml"),
    sitemapContent,
    "utf-8",
  );

  // 4. Clean up temporary dist-ssr
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log("✅ Prerender build complete!");
}

main().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
