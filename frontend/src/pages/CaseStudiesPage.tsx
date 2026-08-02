import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PublicPageHero from "../components/PublicPageHero";
import PublicPageLayout from "../components/PublicPageLayout";

const demonstrations = [
  {
    title: "Axythic Fin Suite",
    category: "Finance dashboard concept",
    description:
      "A responsive operations interface with summary cards, navigation, transaction-oriented tables, and finance workflow screens populated with sample data.",
    image: "/finance-dashboard-preview.png",
    to: "/axythicfin/dashboard",
  },
  {
    title: "EduQuest LMS",
    category: "Learning-management concept",
    description:
      "A multi-route education interface with student dashboard, courses, inbox, tasks, team, account, plan, help, and administration views.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    to: "/eduquest/student",
  },
  {
    title: "Shopcart",
    category: "E-commerce concept",
    description:
      "A product-shopping interface demonstrating discovery, filters, detail views, cart state, checkout flow, and order-summary presentation.",
    image: "/shopcart-preview.png",
    to: "/shopcart",
  },
  {
    title: "HRM Platform",
    category: "Human-resources concept",
    description:
      "An HR interface concept with workforce summaries, personnel lists, candidate details, applications, talent, events, and settings screens.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    to: "/hrm/dashboard",
  },
  {
    title: "3D Landing Page",
    category: "Interactive web concept",
    description:
      "A visual landing-page demonstration that explores motion, WebGL presentation, interactive sections, and modern browser-based storytelling.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    to: "/demos/3d-landing-page",
  },
  {
    title: "Fitness App Concept",
    category: "Mobile interface concept",
    description:
      "A mobile-focused fitness demonstration with dashboard, workout, activity, progress, and analytics-oriented interface states.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    to: "/fitness-app",
  },
];

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

export default function CaseStudiesPage() {
  return (
    <PublicPageLayout>
      <PublicPageHero
        eyebrow="Portfolio demonstrations"
        title="Interactive Product Concepts Built to Demonstrate the Work"
        description="Explore fictional and sample-data interfaces built by Axythic. These demonstrations show design and development capabilities; they are not client case studies or claims of measured outcomes."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Case Studies", to: "#" },
        ]}
        primaryCta={{ label: "Discuss a project", to: "/contact" }}
        secondaryCta={{ label: "View portfolio", to: "/portfolio" }}
      />

      <section className="py-24 border-y border-theme bg-theme-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-4">
              Scope note
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              Demonstrations, concepts, and prototypes—not client outcome claims
            </h2>
            <p className="mt-5 text-lg text-theme-muted leading-relaxed">
              Each example demonstrates interface structure and interaction
              patterns. Names, people, transactions, organisations, charts, and
              other content inside these experiences may be fictional or
              illustrative. They should not be interpreted as client work,
              commercial deployments, or measured results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {demonstrations.map((demo) => (
              <article
                key={demo.to}
                className="group rounded-2xl overflow-hidden border border-theme bg-theme-card flex flex-col hover:border-blue-500/30 transition-all hover:-translate-y-1"
              >
                <div className="h-52 overflow-hidden bg-black/10">
                  <img
                    src={demo.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                    {demo.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-theme-primary">
                    {demo.title}
                  </h2>
                  <p className="mt-4 text-theme-muted leading-relaxed flex-grow">
                    {demo.description}
                  </p>
                  <Link
                    to={demo.to}
                    className={`mt-6 inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 rounded-sm ${focusStyles}`}
                  >
                    Open portfolio demo
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-theme bg-theme-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
            Need to evaluate a project rather than a demonstration?
          </h2>
          <p className="mt-5 text-lg text-theme-muted max-w-2xl mx-auto">
            Share the actual users, workflow, existing systems, and constraints
            so the discussion can focus on your requirement.
          </p>
          <Link
            to="/contact"
            className={`mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all ${focusStyles}`}
          >
            Contact Axythic
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PublicPageLayout>
  );
}
