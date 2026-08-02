import ServicePage, {
  type ServicePageContent,
} from "../../components/ServicePage";

const content: ServicePageContent = {
  eyebrow: "Web development",
  title: "Web Development for Clear, Responsive Digital Experiences",
  shortTitle: "Web Development",
  description:
    "Build public websites and browser-based applications with purposeful navigation, reusable components, responsive layouts, and a maintainable technical foundation.",
  overviewTitle: "Web experiences that balance clarity and functionality",
  overview: [
    "A web project can be a focused public website, an interactive product interface, or a browser-based operational application. The right structure depends on who needs to find it, what they need to accomplish, and whether content discovery or application behaviour is the primary concern.",
    "The Axythic website uses React, TypeScript, Vite, Tailwind CSS, React Router, and an Express contact service. Its public work includes themed marketing sections, forms, metadata management, responsive navigation, and several interactive portfolio demonstrations.",
  ],
  suitableNeeds: [
    "Creating a public website with clear service, company, portfolio, legal, and contact information.",
    "Building a browser-based product, dashboard, portal, or multi-step interface.",
    "Improving responsive navigation and page structure across desktop and mobile.",
    "Connecting website forms or application screens to an approved backend service.",
    "Adding route-level search metadata, canonical URLs, structured navigation, and crawl controls.",
  ],
  capabilitiesTitle: "The building blocks of a dependable web experience",
  capabilities: [
    {
      title: "React and TypeScript",
      description:
        "Reusable components and typed application code for interactive interfaces and predictable maintenance.",
    },
    {
      title: "Vite production builds",
      description:
        "A fast development workflow with compiled production assets suitable for static hosting when the route model supports it.",
    },
    {
      title: "Responsive design",
      description:
        "Layouts, menus, content grids, forms, and controls adapted for desktop, tablet, and mobile use.",
    },
    {
      title: "Application routing",
      description:
        "Public pages and interactive application sections organised with React Router and host-aware fallback rules.",
    },
    {
      title: "SEO foundations",
      description:
        "Unique page metadata, canonical URLs, internal links, sitemap entries, robots directives, and factual structured data.",
    },
    {
      title: "API-connected forms",
      description:
        "Validated browser forms connected to an agreed server endpoint, with loading, success, and failure states.",
    },
  ],
  approachTitle: "A structured path from content to production",
  approach: [
    {
      title: "Content map",
      description:
        "Define audiences, routes, page goals, required content, and the actions visitors should be able to take.",
    },
    {
      title: "Interface system",
      description:
        "Establish reusable layout, typography, navigation, component, and responsive patterns.",
    },
    {
      title: "Implementation",
      description:
        "Build pages and behaviours in reviewable increments while keeping content and route intent explicit.",
    },
    {
      title: "Quality checks",
      description:
        "Review functionality, keyboard use, responsive layouts, metadata, crawl rules, and production output.",
    },
  ],
  relatedDemos: [
    {
      title: "3D Landing Page",
      description:
        "A presentation concept combining an animated hero, interactive sections, and a visual web experience.",
      to: "/demos/3d-landing-page",
    },
    {
      title: "Shopcart",
      description:
        "An e-commerce interface concept showing product discovery, product details, cart, and checkout states.",
      to: "/shopcart",
    },
    {
      title: "Axythic Fin Suite",
      description:
        "A responsive web-dashboard concept for financial summaries and operations-oriented screens.",
      to: "/axythicfin/dashboard",
    },
  ],
  faqs: [
    {
      question: "Is a public website the same as a web application?",
      answer:
        "Not always. Public websites often prioritise clear content and search discovery, while web applications usually prioritise authenticated tasks and interactive state. A project may contain both, but each part needs an appropriate routing and delivery strategy.",
    },
    {
      question: "Can a React website be search-engine friendly?",
      answer:
        "It can have strong crawlable navigation, metadata, canonical URLs, sitemap and robots controls. For high-priority search pages, serving route-specific HTML through static prerendering or server rendering can also improve how metadata and content are available before JavaScript runs.",
    },
    {
      question: "Will the website work on mobile screens?",
      answer:
        "Responsive behaviour can be included and tested across agreed viewport sizes. Specific browser and device support should be documented in the project scope.",
    },
  ],
};

export default function WebDevelopmentPage() {
  return <ServicePage content={content} />;
}
