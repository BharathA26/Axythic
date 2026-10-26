export interface RouteSeoConfig {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  indexable: boolean;
  breadcrumbLabel?: string;
  serviceSchema?: {
    name: string;
    description: string;
  };
}

export const SITE_URL = "https://axythic.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const PUBLIC_ROUTES: RouteSeoConfig[] = [
  {
    path: "/",
    title: "Axythic | Custom Software, Web & Mobile Development", // 52 chars
    description:
      "Axythic plans and builds custom software, web applications, and mobile-focused digital products for defined users and business requirements.", // 140 chars
    canonical: `${SITE_URL}/`,
    ogTitle: "Axythic | Custom Software, Web & Mobile Development",
    ogDescription:
      "Axythic plans and builds custom software, web applications, and mobile-focused digital products for defined users and business requirements.",
    ogUrl: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
  },
  {
    path: "/services/custom-software-development",
    title: "Custom Software Development Services | Axythic Studio", // 53 chars
    description:
      "Explore Axythic custom software development for focused applications, dashboards, scalable workflows, modern React interfaces, and Express APIs.", // 144 chars
    canonical: `${SITE_URL}/services/custom-software-development`,
    ogTitle: "Custom Software Development Services | Axythic Studio",
    ogDescription:
      "Explore Axythic custom software development for focused applications, dashboards, scalable workflows, modern React interfaces, and Express APIs.",
    ogUrl: `${SITE_URL}/services/custom-software-development`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "Custom Software Development",
    serviceSchema: {
      name: "Custom Software Development",
      description:
        "Focused applications, internal tools, dashboards, and workflow interfaces shaped around defined requirements.",
    },
  },
  {
    path: "/services/web-development",
    title: "Web Application & Website Development Services | Axythic", // 56 chars
    description:
      "Explore Axythic web development for responsive public websites and browser applications using React, TypeScript, Vite, and practical SEO foundations.", // 149 chars
    canonical: `${SITE_URL}/services/web-development`,
    ogTitle: "Web Application & Website Development Services | Axythic",
    ogDescription:
      "Explore Axythic web development for responsive public websites and browser applications using React, TypeScript, Vite, and practical SEO foundations.",
    ogUrl: `${SITE_URL}/services/web-development`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "Web Development",
    serviceSchema: {
      name: "Web Development Services",
      description:
        "Public websites and browser-based applications built with responsive, reusable interface patterns.",
    },
  },
  {
    path: "/services/mobile-app-development",
    title: "Mobile App Development Services & Design | Axythic", // 50 chars
    description:
      "Explore Axythic mobile app development planning, responsive mobile-first interfaces, interactive prototypes, and scoped digital delivery decisions.", // 148 chars
    canonical: `${SITE_URL}/services/mobile-app-development`,
    ogTitle: "Mobile App Development Services & Design | Axythic",
    ogDescription:
      "Explore Axythic mobile app development planning, responsive mobile-first interfaces, interactive prototypes, and scoped digital delivery decisions.",
    ogUrl: `${SITE_URL}/services/mobile-app-development`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "Mobile App Development",
    serviceSchema: {
      name: "Mobile App Development Services",
      description:
        "Mobile-focused product planning, interface prototypes, and scoped implementation decisions.",
    },
  },
  {
    path: "/about",
    title: "About Axythic | Software Development Company in Erode", // 53 chars
    description:
      "Learn about Axythic, a software development company in Erode, Tamil Nadu, building custom software, web applications, and mobile digital experiences.", // 150 chars
    canonical: `${SITE_URL}/about`,
    ogTitle: "About Axythic | Software Development Company in Erode",
    ogDescription:
      "Learn about Axythic, a software development company in Erode, Tamil Nadu, building custom software, web applications, and mobile digital experiences.",
    ogUrl: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "About",
  },
  {
    path: "/case-studies",
    title: "Portfolio Demonstrations & Case Studies | Axythic Tech", // 54 chars
    description:
      "Explore Axythic's fictional, sample-data portfolio demonstrations for finance, education, e-commerce, HR, interactive web, and mobile interfaces.", // 145 chars
    canonical: `${SITE_URL}/case-studies`,
    ogTitle: "Portfolio Demonstrations & Case Studies | Axythic Tech",
    ogDescription:
      "Explore Axythic's fictional, sample-data portfolio demonstrations for finance, education, e-commerce, HR, interactive web, and mobile interfaces.",
    ogUrl: `${SITE_URL}/case-studies`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "Case Studies",
  },
  {
    path: "/portfolio",
    title: "Software & Digital Interface Portfolio | Axythic Studio", // 55 chars
    description:
      "Explore Axythic portfolio demonstrations for finance, education, e-commerce, HR, interactive web, and modern responsive mobile-focused interfaces.", // 147 chars
    canonical: `${SITE_URL}/portfolio`,
    ogTitle: "Software & Digital Interface Portfolio | Axythic Studio",
    ogDescription:
      "Explore Axythic portfolio demonstrations for finance, education, e-commerce, HR, interactive web, and modern responsive mobile-focused interfaces.",
    ogUrl: `${SITE_URL}/portfolio`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "Portfolio",
  },
  {
    path: "/contact",
    title: "Contact Axythic | Discuss a Custom Software Project", // 51 chars
    description:
      "Contact Axythic in Erode, Tamil Nadu, to discuss your custom software, web development, or mobile application development project requirements.", // 143 chars
    canonical: `${SITE_URL}/contact`,
    ogTitle: "Contact Axythic | Discuss a Custom Software Project",
    ogDescription:
      "Contact Axythic in Erode, Tamil Nadu, to discuss your custom software, web development, or mobile application development project requirements.",
    ogUrl: `${SITE_URL}/contact`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "Contact",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy & Data Protection Practices | Axythic", // 52 chars
    description:
      "Read how Axythic handles the collection, use, and protection of information submitted through its website and digital development service channels.", // 147 chars
    canonical: `${SITE_URL}/privacy-policy`,
    ogTitle: "Privacy Policy & Data Protection Practices | Axythic",
    ogDescription:
      "Read how Axythic handles the collection, use, and protection of information submitted through its website and digital development service channels.",
    ogUrl: `${SITE_URL}/privacy-policy`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "Privacy Policy",
  },
  {
    path: "/terms",
    title: "Website Terms and Conditions of Service | Axythic Tech", // 54 chars
    description:
      "Read the terms and conditions governing the use of the Axythic website, digital portfolio demonstrations, and custom software development services.", // 148 chars
    canonical: `${SITE_URL}/terms`,
    ogTitle: "Website Terms and Conditions of Service | Axythic Tech",
    ogDescription:
      "Read the terms and conditions governing the use of the Axythic website, digital portfolio demonstrations, and custom software development services.",
    ogUrl: `${SITE_URL}/terms`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: true,
    breadcrumbLabel: "Terms and Conditions",
  },
];

export const DEMO_ROUTE_PREFIXES = [
  "/axythicfin",
  "/shopcart",
  "/eduquest",
  "/hrm",
  "/demos/3d-landing-page",
  "/fitness-app",
];

export function isDemoRoute(pathname: string): boolean {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return DEMO_ROUTE_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
}

export function getRouteSeo(pathname: string): RouteSeoConfig {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const found = PUBLIC_ROUTES.find((r) => r.path === normalized);

  if (found) {
    return found;
  }

  const isDemo = DEMO_ROUTE_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );

  if (isDemo) {
    const cleanName =
      normalized.split("/")[1]?.replace(/-/g, " ") ?? "Demo Screen";
    return {
      path: normalized,
      title: `${cleanName.toUpperCase()} Demo Screen | Axythic`,
      description:
        "An interactive portfolio demonstration screen by Axythic using fictional or sample data.",
      canonical: `${SITE_URL}${normalized}`,
      ogTitle: `${cleanName.toUpperCase()} Demo Screen | Axythic`,
      ogDescription:
        "An interactive portfolio demonstration screen by Axythic using fictional or sample data.",
      ogUrl: `${SITE_URL}${normalized}`,
      ogImage: DEFAULT_OG_IMAGE,
      indexable: false,
    };
  }

  return {
    path: normalized,
    title: "Page Not Found | Axythic",
    description: "The requested page could not be found on Axythic.",
    canonical: `${SITE_URL}${normalized}`,
    ogTitle: "Page Not Found | Axythic",
    ogDescription: "The requested page could not be found on Axythic.",
    ogUrl: `${SITE_URL}${normalized}`,
    ogImage: DEFAULT_OG_IMAGE,
    indexable: false,
  };
}
