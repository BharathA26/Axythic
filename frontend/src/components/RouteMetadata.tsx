import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SITE_URL,
  getRouteSeo,
  type RouteSeoConfig,
} from "../seo/routes";

function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setCanonical(href: string) {
  let element =
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
}

function setStructuredData(id: string, data: object | null) {
  const existingElement = document.getElementById(id) as HTMLScriptElement | null;

  if (!data) {
    existingElement?.remove();
    return;
  }

  const element = existingElement ?? document.createElement("script");
  element.id = id;
  element.type = "application/ld+json";
  element.textContent = JSON.stringify(data);

  if (!existingElement) {
    document.head.appendChild(element);
  }
}

function updateJsonLd(config: RouteSeoConfig) {
  // 1. Breadcrumbs
  if (config.indexable && config.breadcrumbLabel && config.path !== "/") {
    setStructuredData("route-breadcrumb-jsonld", {
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
          name: config.breadcrumbLabel,
          item: config.canonical,
        },
      ],
    });
  } else {
    setStructuredData("route-breadcrumb-jsonld", null);
  }

  // 2. Service Schema
  if (config.serviceSchema) {
    setStructuredData("route-service-jsonld", {
      "@context": "https://schema.org",
      "@type": "Service",
      name: config.serviceSchema.name,
      serviceType: config.serviceSchema.name,
      description: config.serviceSchema.description,
      provider: {
        "@type": "Organization",
        name: "Axythic",
        url: SITE_URL,
      },
      url: config.canonical,
    });
  } else {
    setStructuredData("route-service-jsonld", null);
  }
}

export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = getRouteSeo(pathname);
    const robots = config.indexable
      ? "index, follow"
      : "noindex, nofollow, noarchive";

    document.title = config.title;
    setCanonical(config.canonical);
    setMeta("name", "description", config.description);
    setMeta("name", "robots", robots);
    setMeta("name", "googlebot", robots);

    // Open Graph
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Axythic");
    setMeta("property", "og:url", config.ogUrl);
    setMeta("property", "og:title", config.ogTitle);
    setMeta("property", "og:description", config.ogDescription);
    setMeta("property", "og:image", config.ogImage);

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", config.ogUrl);
    setMeta("name", "twitter:title", config.ogTitle);
    setMeta("name", "twitter:description", config.ogDescription);
    setMeta("name", "twitter:image", config.ogImage);

    // Structured Data
    updateJsonLd(config);
  }, [pathname]);

  return null;
}
