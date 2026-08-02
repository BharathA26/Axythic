import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://axythic.com";
const SOCIAL_IMAGE = `${SITE_URL}/vite.png`;

type PageMetadata = {
  title: string;
  description: string;
  indexable: boolean;
};

const PUBLIC_PAGE_METADATA: Record<string, PageMetadata> = {
  "/": {
    title: "Axythic | Custom Software & Web App Development Agency — India",
    description:
      "Axythic builds custom software, web applications, and mobile apps tailored to accelerate business growth. Based in Erode, Tamil Nadu, India.",
    indexable: true,
  },
  "/privacy-policy": {
    title: "Privacy Policy | Axythic",
    description:
      "Read how Axythic describes the collection, use, and protection of information submitted through its website.",
    indexable: true,
  },
  "/terms": {
    title: "Terms and Conditions | Axythic",
    description:
      "Read the terms and conditions governing use of the Axythic website and its services.",
    indexable: true,
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
    prefix: "/portfolio",
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
