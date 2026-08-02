import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Axythic Fin Suite",
    category: "Finance Dashboard Concept",
    description:
      "A finance interface demonstration with dashboard summaries, tables, and operations-oriented screens using sample data.",
    image: "/finance-dashboard-preview.png",
    gradient: "from-emerald-600 to-teal-500",
    url: "/axythicfin/dashboard",
    modules: ["Dashboard", "Quotations", "Invoices", "Transactions"],
  },
  {
    title: "EduQuest LMS",
    category: "Learning Platform Concept",
    description:
      "A learning-management interface concept with student, course, inbox, task, team, and administration views.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    gradient: "from-indigo-600 to-purple-600",
    url: "/eduquest/student",
    modules: ["Student dashboard", "Courses", "Tasks", "Administration"],
  },
  {
    title: "Shopcart",
    category: "E-commerce Concept",
    description:
      "A sample shopping experience that demonstrates product discovery, product details, cart, checkout, and order-summary states.",
    image: "/shopcart-preview.png",
    gradient: "from-emerald-700 to-green-500",
    url: "/shopcart",
    modules: ["Products", "Product detail", "Cart", "Checkout"],
  },
  {
    title: "HRM Platform",
    category: "HR Interface Concept",
    description:
      "A human-resources interface concept with personnel, candidate, dashboard, and workflow-oriented views.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    gradient: "from-blue-600 to-indigo-600",
    url: "/hrm/dashboard",
    modules: ["Dashboard", "Personnel", "Candidates", "Applications"],
  },
  {
    title: "3D Landing Page",
    category: "Interactive Web Concept",
    description:
      "A visual landing-page concept that explores animated presentation, interactive sections, and modern web motion.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    gradient: "from-fuchsia-600 to-pink-500",
    url: "/demos/3d-landing-page",
    modules: ["Hero motion", "3D presentation", "Interactive sections"],
  },
  {
    title: "Fitness App Concept",
    category: "Mobile Interface Concept",
    description:
      "A mobile-focused fitness interface demonstration with dashboard, workout, and progress-oriented screens.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    gradient: "from-orange-500 to-rose-500",
    url: "/fitness-app",
    modules: ["Dashboard", "Workouts", "Activity", "Progress"],
  },
];

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

export default function Portfolio() {
  return (
    <section
      aria-labelledby="portfolio-grid-title"
      className="relative overflow-hidden bg-theme-page py-20 transition-colors duration-300 sm:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-500/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-500/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Explore the demonstrations
            </p>
            <h2
              id="portfolio-grid-title"
              className="mt-3 text-3xl font-bold tracking-tight text-theme-primary sm:text-4xl"
            >
              Six interface concepts, each with a focused product flow
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-theme-muted">
            Each demonstration opens separately and uses fictional or sample
            content. Avoid entering real personal, password, or payment data.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.url}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-theme bg-theme-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
            >
              <div className="relative h-56 overflow-hidden bg-black/10">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a]/75 via-transparent to-transparent" />
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-4 top-4 z-20 rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-xs font-bold text-white shadow-md`}
                >
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold text-theme-primary">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-theme-muted">
                  {project.description}
                </p>
                <ul
                  aria-label={`${project.title} demonstrated areas`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.modules.map((module) => (
                    <li
                      key={module}
                      className="rounded-full border border-theme bg-theme-page px-3 py-1 text-xs font-medium text-theme-muted"
                    >
                      {module}
                    </li>
                  ))}
                </ul>
                <Link
                  to={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} demonstration in a new tab`}
                  className={`mt-6 inline-flex w-fit items-center gap-2 rounded-sm font-semibold text-blue-500 transition-colors hover:text-blue-400 ${focusStyles}`}
                >
                  Open demonstration
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
