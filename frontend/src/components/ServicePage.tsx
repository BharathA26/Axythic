import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PublicPageHero from "./PublicPageHero";
import PublicPageLayout from "./PublicPageLayout";

type ContentCard = {
  title: string;
  description: string;
};

type RelatedDemo = ContentCard & {
  to: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  overviewTitle: string;
  overview: string[];
  suitableNeeds: string[];
  capabilitiesTitle: string;
  capabilities: ContentCard[];
  approachTitle: string;
  approach: ContentCard[];
  relatedDemos: RelatedDemo[];
  faqs: Faq[];
};

interface ServicePageProps {
  content: ServicePageContent;
}

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

export default function ServicePage({ content }: ServicePageProps) {
  return (
    <PublicPageLayout>
      <PublicPageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: content.shortTitle, to: "#" },
        ]}
        primaryCta={{ label: "Discuss your project", to: "/contact" }}
        secondaryCta={{ label: "Explore portfolio demos", to: "/portfolio" }}
      />

      <section className="py-20 border-y border-theme bg-theme-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4">
              Service overview
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              {content.overviewTitle}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-theme-muted">
              {content.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-theme bg-theme-page p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-theme-primary">
              When this service may fit
            </h2>
            <ul className="mt-6 space-y-4">
              {content.suitableNeeds.map((need) => (
                <li key={need} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-blue-500 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-theme-muted leading-relaxed">
                    {need}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4">
              Supported capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              {content.capabilitiesTitle}
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-theme bg-theme-card p-7 hover:border-blue-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-theme-primary">
                  {capability.title}
                </h3>
                <p className="mt-3 text-theme-muted leading-relaxed">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-theme bg-theme-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4">
              Development approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              {content.approachTitle}
            </h2>
          </div>
          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.approach.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-theme bg-theme-page p-7"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/10 text-blue-500 font-bold">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-theme-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-theme-muted leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4">
              Related work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              Explore relevant product demonstrations
            </h2>
            <p className="mt-5 text-theme-muted leading-relaxed">
              These interactive examples use fictional or sample content to
              demonstrate interface structure, workflows, and product
              thinking. They are not presented as client engagements or
              evidence of measured business outcomes.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {content.relatedDemos.map((demo) => (
              <article
                key={demo.title}
                className="rounded-2xl border border-theme bg-theme-card p-7 flex flex-col"
              >
                <h3 className="text-xl font-bold text-theme-primary">
                  {demo.title}
                </h3>
                <p className="mt-3 text-theme-muted leading-relaxed flex-grow">
                  {demo.description}
                </p>
                <Link
                  to={demo.to}
                  className={`mt-6 inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 rounded-sm ${focusStyles}`}
                >
                  Open demonstration
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-theme bg-theme-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4 text-center">
            Frequently asked questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight text-center">
            Questions to clarify before a project begins
          </h2>
          <div className="mt-12 space-y-4">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-theme bg-theme-page p-6"
              >
                <summary
                  className={`cursor-pointer list-none font-semibold text-theme-primary rounded-sm ${focusStyles}`}
                >
                  {faq.question}
                </summary>
                <p className="mt-4 text-theme-muted leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
              Have a project requirement to review?
            </h2>
            <p className="mt-4 text-lg text-theme-muted max-w-2xl mx-auto">
              Share the problem, users, and constraints you already know. The
              contact form is the starting point for a project discussion, not
              a commitment to a predefined scope.
            </p>
            <Link
              to="/contact"
              className={`mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all ${focusStyles}`}
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
