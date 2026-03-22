import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Axythic Fin Suite",
      category: "Finance Dashboard",
      description:
        "A complete finance product showcase with polished static screens for dashboard and operations workflows.",
      image: "/finance-dashboard-preview.png",
      gradient: "from-emerald-600 to-teal-500",
      url: "/axythicfin/dashboard",
      modules: [
        { label: "Dashboard", endpoint: "/axythicfin/dashboard" },
        { label: "Quotation", endpoint: "/axythicfin/dashboard" },
        { label: "Invoice", endpoint: "/axythicfin/dashboard" },
        { label: "Orders", endpoint: "/axythicfin/dashboard" },
        { label: "Transactions", endpoint: "/axythicfin/dashboard" },
        { label: "Profile", endpoint: "/axythicfin/dashboard" },
        { label: "Login", endpoint: "/axythicfin/dashboard" },
        { label: "Logout", endpoint: "/axythicfin/dashboard" },
      ],
    },
    {
      title: "EduQuest LMS",
      category: "EdTech Platform",
      description:
        "A comprehensive learning management system featuring role-based access for instructors to manage classes, attendance tracking, and student notifications.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      gradient: "from-indigo-600 to-purple-600",
      url: "/eduquest/student",
      modules: [
        { label: "Dashboard", endpoint: "/eduquest/student" },
        { label: "Class Management", endpoint: "/eduquest/courses" },
        { label: "Attendance", endpoint: "/eduquest/admin" },
        { label: "Notifications", endpoint: "/eduquest/admin" },
      ],
    },
    {
      title: "Shopcart",
      category: "E-Commerce Website",
      description:
        "A fully-featured headphone & electronics store with product listings, filtering, cart, checkout flow, and an order summary page.",
      image: "/shopcart-preview.png",
      gradient: "from-emerald-700 to-green-500",
      url: "/shopcart",
      modules: [
        { label: "Home", endpoint: "/shopcart" },
        { label: "Products", endpoint: "/shopcart" },
        { label: "Product Detail", endpoint: "/shopcart" },
        { label: "Cart", endpoint: "/shopcart" },
        { label: "Checkout", endpoint: "/shopcart" },
        { label: "Order Summary", endpoint: "/shopcart" },
        { label: "Categories", endpoint: "/shopcart" },
      ],
    },
    {
      title: "HRM Platform",
      category: "Human Resources",
      description:
        "A premium recruitment and human resource management system featuring candidate tracking, personnel directories, and workforce analytics.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      gradient: "from-blue-600 to-indigo-600",
      url: "/hrm/dashboard",
      modules: [
        { label: "Dashboard", endpoint: "/hrm/dashboard" },
        { label: "Personnel", endpoint: "/hrm/personnel" },
        { label: "Candidate Profile", endpoint: "/hrm/profile" },
      ],
    },
    {
      title: "3D Landing Page",
      category: "Web Presentation",
      description:
        "An immersive WebGL-powered 3D landing page experience designed to engage visitors with interactive elements and modern web animations.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      gradient: "from-fuchsia-600 to-pink-500",
      url: "/portfolio",
      modules: [
        { label: "Hero Animation", endpoint: "/portfolio" },
        { label: "3D Models", endpoint: "/portfolio" },
        { label: "Interactive Flow", endpoint: "/portfolio" },
      ],
    },
    {
      title: "Mobile Applications",
      category: "Native Apps",
      description:
        "Showcase of cross-platform mobile applications built in React Native with sleek UI components, optimized performance, and native integrations.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      gradient: "from-orange-500 to-rose-500",
      url: "/fitness-app",
      modules: [
        { label: "Dashboard", endpoint: "/fitness-app" },
        { label: "Workout",   endpoint: "/fitness-app#screens" },
        { label: "Analytics", endpoint: "/fitness-app#screens" },
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-32 bg-theme-page transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-6">
          <div className="max-w-2xl flex flex-col items-center">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-400 tracking-wide uppercase">
                Our Work
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold text-theme-primary leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Projects
              </span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project, index) => {
            const cardContent = (
              <>
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} shadow-md`}
                    style={{ color: "white" }}
                  >
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-theme-primary mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-theme-muted leading-relaxed text-sm font-light">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.modules.map((module, moduleIndex) => (
                      <div key={`${project.title}-${moduleIndex}`}>
                        <a
                          href={module.endpoint}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-theme-card text-theme-muted border border-theme hover:bg-theme-card hover:text-theme-primary transition-all inline-block"
                        >
                          {module.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="group rounded-2xl overflow-hidden bg-theme-card border border-theme hover:bg-theme-card hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 block relative backdrop-blur-sm"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full cursor-pointer"
                >
                  {cardContent}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
