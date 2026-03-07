import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        { label: "Quotation", endpoint: "/axythicfin/quotation" },
        { label: "Invoice", endpoint: "/axythicfin/invoice" },
        { label: "Orders", endpoint: "/axythicfin/orders" },
        { label: "Transactions", endpoint: "/axythicfin/transactions" },
        { label: "Profile", endpoint: "/axythicfin/profile" },
        { label: "Login", endpoint: "/axythicfin/login" },
        { label: "Logout", endpoint: "/axythicfin/logout" },
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
        "A streamlined human resource management system to handle employee records, onboarding workflows, leave tracking, and payroll integrations.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      gradient: "from-blue-600 to-cyan-500",
      url: "#",
      modules: [
        { label: "Overview", endpoint: "#" },
        { label: "Employees", endpoint: "#" },
        { label: "Leave System", endpoint: "#" },
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
      url: "#",
      modules: [
        { label: "Hero Animation", endpoint: "#" },
        { label: "3D Models", endpoint: "#" },
        { label: "Interactive Flow", endpoint: "#" },
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
      url: "#",
      modules: [
        { label: "iOS App", endpoint: "#" },
        { label: "Android App", endpoint: "#" },
        { label: "UI Kit", endpoint: "#" },
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-6">
          <div className="max-w-2xl flex flex-col items-center">
            <motion.h2
              className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Work
            </motion.h2>
            <motion.h3
              className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Projects
              </span>
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isExternalUrl = project.url.startsWith("http");

            const cardContent = (
              <>
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.gradient} shadow-md`}
                  >
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {/* Modules */}
                    {project.modules.map((module, moduleIndex) => {
                      const isExternalModule =
                        module.endpoint.startsWith("http") ||
                        module.endpoint === "#";
                      return (
                        <div key={`${project.title}-${moduleIndex}`}>
                          {isExternalModule ? (
                            <a
                              href={module.endpoint}
                              onClick={(event) => event.stopPropagation()}
                              className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors inline-block"
                            >
                              {module.label}
                            </a>
                          ) : (
                            <Link
                              to={module.endpoint}
                              onClick={(event) => event.stopPropagation()}
                              className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors inline-block"
                            >
                              {module.label}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block relative"
              >
                {isExternalUrl ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full cursor-pointer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link
                    to={project.url}
                    className="block h-full cursor-pointer"
                  >
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
