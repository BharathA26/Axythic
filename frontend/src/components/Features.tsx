import { ArrowRight, Code2, Globe2, Layers3, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Layers3,
    eyebrow: "Purpose-built systems",
    title: "Custom Software",
    description:
      "Applications, dashboards, internal tools, and workflows shaped around a specific operational requirement.",
    to: "/services/custom-software-development",
    accent: "from-blue-500/20 to-cyan-500/5",
    iconClass: "text-cyan-400",
  },
  {
    icon: Globe2,
    eyebrow: "Browser experiences",
    title: "Web Development",
    description:
      "Public websites and web applications with clear navigation, reusable components, and responsive layouts.",
    to: "/services/web-development",
    accent: "from-indigo-500/20 to-blue-500/5",
    iconClass: "text-blue-400",
  },
  {
    icon: Smartphone,
    eyebrow: "Mobile-first products",
    title: "Mobile App Development",
    description:
      "Mobile product flows, interface prototypes, and implementation decisions based on real device and release needs.",
    to: "/services/mobile-app-development",
    accent: "from-purple-500/20 to-indigo-500/5",
    iconClass: "text-purple-400",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "Define the users, tasks, constraints, and success criteria.",
  },
  {
    number: "02",
    title: "Design",
    description: "Map the experience, interface states, and technical boundaries.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Implement in focused increments with regular review points.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Check functionality, responsiveness, quality, and release needs.",
  },
];

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

export default function Features() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-theme-page border-y border-theme overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(var(--dot-color)_1px,transparent_1px)] [background-size:28px_28px] opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Code2 className="w-4 h-4 text-blue-400" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">
              What we build
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-theme-primary leading-[1.08] tracking-tight">
            The right format for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              requirement.
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-theme-muted leading-relaxed max-w-2xl">
            Start with the problem and the people using the product. The
            technology and delivery model should follow from that context.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative rounded-3xl border border-theme bg-theme-card p-7 sm:p-8 overflow-hidden hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl border border-theme bg-theme-page flex items-center justify-center">
                    <Icon
                      className={`w-6 h-6 ${service.iconClass}`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-theme-primary">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-theme-muted leading-relaxed min-h-24">
                    {service.description}
                  </p>
                  <Link
                    to={service.to}
                    className={`mt-7 inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 rounded-sm ${focusStyles}`}
                  >
                    Explore service
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-theme bg-theme-card p-7 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                A focused process
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
                From context to release-ready work
              </h2>
            </div>
            <Link
              to="/about"
              className={`inline-flex items-center gap-2 text-theme-primary font-semibold hover:text-blue-400 rounded-sm transition-colors ${focusStyles}`}
            >
              How Axythic works
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-theme bg-[var(--border-color)]">
            {process.map((step) => (
              <li key={step.number} className="bg-theme-page p-6">
                <span className="font-mono text-sm text-blue-400">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-theme-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-theme-muted leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
