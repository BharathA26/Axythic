import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://axythic.com";
const SOCIAL_IMAGE = `${SITE_URL}/vite.png`;

type PageMetadata = {
  title: string;
  description: string;
  indexable: boolean;
  breadcrumbLabel?: string;
};

const PUBLIC_PAGE_METADATA: Record<string, PageMetadata> = {
  "/": {
    title: "Axythic | Custom Software, Web & Mobile Development",
    description:
      "Axythic plans and builds custom software, web applications, and mobile-focused digital products for defined users and business requirements.",
    indexable: true,
  },
  "/privacy-policy": {
    title: "Privacy Policy | Axythic",
    description:
      "Read how Axythic describes the collection, use, and protection of information submitted through its website.",
    indexable: true,
    breadcrumbLabel: "Privacy Policy",
  },
  "/terms": {
    title: "Terms and Conditions | Axythic",
    description:
      "Read the terms and conditions governing use of the Axythic website and its services.",
    indexable: true,
    breadcrumbLabel: "Terms and Conditions",
  },
  "/services/custom-software-development": {
    title: "Custom Software Development Services | Axythic",
    description:
      "Explore Axythic custom software development for focused applications, dashboards, workflows, React interfaces, and Express API services.",
    indexable: true,
    breadcrumbLabel: "Custom Software Development",
  },
  "/services/web-development": {
    title: "Web Development Services | Axythic",
    description:
      "Explore Axythic web development for responsive public websites and browser applications using React, TypeScript, Vite, and practical SEO foundations.",
    indexable: true,
    breadcrumbLabel: "Web Development",
  },
  "/services/mobile-app-development": {
    title: "Mobile App Development Services | Axythic",
    description:
      "Explore Axythic mobile app development planning, mobile-first interfaces, interactive prototypes, and scoped delivery decisions.",
    indexable: true,
    breadcrumbLabel: "Mobile App Development",
  },
  "/about": {
    title: "About Axythic | Software Development Company in Erode",
    description:
      "Learn about Axythic, a software development company in Erode, Tamil Nadu, working on custom software, web applications, and mobile-focused experiences.",
    indexable: true,
    breadcrumbLabel: "About",
  },
  "/case-studies": {
    title: "Portfolio Demonstrations and Case Studies | Axythic",
    description:
      "Explore Axythic's fictional, sample-data portfolio demonstrations for finance, education, e-commerce, HR, interactive web, and mobile interfaces.",
    indexable: true,
    breadcrumbLabel: "Case Studies",
  },
  "/portfolio": {
    title: "Software and Interface Portfolio | Axythic",
    description:
      "Explore Axythic portfolio demonstrations for finance, education, e-commerce, HR, interactive web, and mobile-focused interfaces.",
    indexable: true,
    breadcrumbLabel: "Portfolio",
  },
  "/contact": {
    title: "Contact Axythic | Discuss a Software Project",
    description:
      "Contact Axythic in Erode, Tamil Nadu, to discuss a custom software, web development, or mobile app development requirement.",
    indexable: true,
    breadcrumbLabel: "Contact",
  },
};

const DEMO_PAGE_METADATA: Array<{
  prefix: string;
  title: string;
  description: string;
}> = [
  {
    prefix: "/axythicfin",
    title: "Finance Dashboard Portfolio Demo | Axythic",
    description:
      "An interactive, fictional finance dashboard shown as an Axythic portfolio demonstration.",
  },
  {
    prefix: "/shopcart",
    title: "E-commerce Portfolio Demo | Axythic",
    description:
      "An interactive, fictional e-commerce experience shown as an Axythic portfolio demonstration.",
  },
  {
    prefix: "/eduquest",
    title: "EduQuest LMS Portfolio Demo | Axythic",
    description:
      "An interactive, fictional learning-management interface shown as an Axythic portfolio demonstration.",
  },
  {
    prefix: "/hrm",
    title: "HRM Platform Portfolio Demo | Axythic",
    description:
      "An interactive, fictional human-resources interface shown as an Axythic portfolio demonstration.",
  },
  {
    prefix: "/demos/3d-landing-page",
    title: "3D Landing Page Portfolio Demo | Axythic",
    description:
      "An interactive landing-page concept shown as an Axythic portfolio demonstration.",
  },
  {
    prefix: "/fitness-app",
    title: "Fitness App Portfolio Demo | Axythic",
    description:
      "An interactive, fictional fitness-app concept shown as an Axythic portfolio demonstration.",
  },
];

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

// This pure route helper is colocated with the metadata table it evaluates.
// eslint-disable-next-line react-refresh/only-export-components
export function isDemoRoute(pathname: string) {
  const normalizedPath = normalizePathname(pathname);
  return DEMO_PAGE_METADATA.some(
    ({ prefix }) =>
      normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
  );
}

function getPageMetadata(pathname: string): PageMetadata {
  const normalizedPath = normalizePathname(pathname);
  const publicMetadata = PUBLIC_PAGE_METADATA[normalizedPath];

  if (publicMetadata) return publicMetadata;

  const demoMetadata = DEMO_PAGE_METADATA.find(
    ({ prefix }) =>
      normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
  );

  if (demoMetadata) {
    return {
      title: demoMetadata.title,
      description: demoMetadata.description,
      indexable: false,
    };
  }

  return {
    title: "Page Not Found | Axythic",
    description: "The requested page could not be found.",
    indexable: false,
  };
}

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

function setBreadcrumbStructuredData(
  metadata: PageMetadata,
  canonicalUrl: string,
) {
  const existingElement = document.getElementById(
    "route-breadcrumb-jsonld",
  ) as HTMLScriptElement | null;

  if (!metadata.indexable || !metadata.breadcrumbLabel) {
    existingElement?.remove();
    return;
  }

  const element = existingElement ?? document.createElement("script");
  element.id = "route-breadcrumb-jsonld";
  element.type = "application/ld+json";
  element.textContent = JSON.stringify({
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
        name: metadata.breadcrumbLabel,
        item: canonicalUrl,
      },
    ],
  });

  if (!existingElement) {
    document.head.appendChild(element);
  }
}

export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = normalizePathname(pathname);
    const metadata = getPageMetadata(normalizedPath);
    const canonicalUrl =
      normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
    const robots = metadata.indexable
      ? "index, follow"
      : "noindex, nofollow, noarchive";

    document.title = metadata.title;
    setCanonical(canonicalUrl);
    setBreadcrumbStructuredData(metadata, canonicalUrl);
    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", robots);
    setMeta("name", "googlebot", robots);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Axythic");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:image", SOCIAL_IMAGE);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", canonicalUrl);
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta("name", "twitter:image", SOCIAL_IMAGE);
  }, [pathname]);

  return null;
}
