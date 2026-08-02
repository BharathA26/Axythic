import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PublicPageHero from "../components/PublicPageHero";
import PublicPageLayout from "../components/PublicPageLayout";

const services = [
  {
    title: "Custom software development",
    description:
      "Focused applications, internal tools, dashboards, and workflow interfaces shaped around defined requirements.",
    to: "/services/custom-software-development",
  },
  {
    title: "Web development",
    description:
      "Public websites and browser-based applications built with responsive, reusable interface patterns.",
    to: "/services/web-development",
  },
  {
    title: "Mobile app development",
    description:
      "Mobile-focused product planning, interface prototypes, and scoped implementation decisions.",
    to: "/services/mobile-app-development",
  },
];

const principles = [
  "Start with the user, task, and constraint before choosing a technical solution.",
  "Keep scope, assumptions, and the difference between prototypes and production software explicit.",
  "Build reusable interface patterns and validate them across agreed screen sizes.",
  "Use linting, type checking, and production builds as baseline engineering checks.",
];

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

export default function AboutPage() {
  return (
    <PublicPageLayout>
      <PublicPageHero
        eyebrow="About Axythic"
        title="Software Development with a Clear, Practical Foundation"
        description="Axythic is a software development company based in Erode, Tamil Nadu, India, working on custom software, web applications, and mobile-focused digital experiences."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About", to: "#" },
        ]}
        primaryCta={{ label: "View services", to: "/services/web-development" }}
        secondaryCta={{ label: "Contact Axythic", to: "/contact" }}
      />

      <section className="py-24 border-y border-theme bg-theme-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4">
              What Axythic does
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              Digital products and interfaces for defined requirements
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-theme-muted">
            <p>
              Axythic&apos;s current portfolio includes a public company
              website, React and TypeScript applications, an Express contact
              service, dashboard interfaces, learning and human-resources
              concepts, an e-commerce flow, and mobile-focused demonstrations.
            </p>
            <p>
              Portfolio demonstrations are clearly separated from client case
              studies. They use fictional or sample content to show interface
              and implementation ideas; they are not presented as proof of a
              client relationship, commercial result, or product certification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              Three ways to begin a project conversation
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.to}
                className="rounded-2xl border border-theme bg-theme-card p-7 flex flex-col"
              >
                <h3 className="text-xl font-bold text-theme-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-theme-muted leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link
                  to={service.to}
                  className={`mt-6 inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 rounded-sm ${focusStyles}`}
                >
                  Read about this service
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-theme bg-theme-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4">
              Working principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              Clarity before unnecessary complexity
            </h2>
            <p className="mt-5 text-theme-muted leading-relaxed">
              Project-specific deliverables, timelines, technologies, and
              responsibilities should be agreed from the actual requirement.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-5">
            {principles.map((principle) => (
              <li
                key={principle}
                className="rounded-2xl border border-theme bg-theme-page p-6 flex items-start gap-3"
              >
                <CheckCircle2
                  className="w-5 h-5 text-blue-500 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-theme-muted leading-relaxed">
                  {principle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
            See the work as demonstrations, then discuss your own requirement
          </h2>
          <p className="mt-5 text-lg text-theme-muted max-w-2xl mx-auto">
            Browse the interactive portfolio concepts or share the project
            context you want Axythic to review.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/portfolio"
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-theme-primary bg-theme-card border border-theme hover:border-blue-500/40 transition-colors ${focusStyles}`}
            >
              View portfolio demonstrations
            </Link>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all ${focusStyles}`}
            >
              Contact Axythic
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
