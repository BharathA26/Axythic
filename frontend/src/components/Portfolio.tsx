import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web Application",
      description:
        "A comprehensive analytics tool for financial institutions with real-time tracking.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "HealthConnect",
      category: "Mobile App",
      description:
        "Telemedicine application connecting patients with healthcare professionals seamlessly.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "E-Commerce Suite",
      category: "Platform",
      description:
        "Robust B2B e-commerce platform with inventory management and AI-driven insights.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      gradient: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition-colors">
              View All Projects <ExternalLink className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
