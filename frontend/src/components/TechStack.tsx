import { motion } from "framer-motion";

export default function TechStack() {
  const technologies = [
    { name: "React", category: "Frontend", icon: "react/61DAFB" },
    { name: "Next.js", category: "Frontend", icon: "nextdotjs/000000" },
    { name: "Tailwind CSS", category: "Styling", icon: "tailwindcss/06B6D4" },
    { name: "Node.js", category: "Backend", icon: "nodedotjs/339933" },
    { name: "Express", category: "Backend", icon: "express/000000" },
    { name: "MongoDB", category: "Database", icon: "mongodb/47A248" },
    { name: "PostgreSQL", category: "Database", icon: "postgresql/4169E1" },
    { name: "React Native", category: "Mobile", icon: "react/61DAFB" },
    { name: "Flutter", category: "Mobile", icon: "flutter/02569B" },
    { name: "TypeScript", category: "Language", icon: "typescript/3178C6" },
    { name: "GraphQL", category: "API", icon: "graphql/E10098" },
    { name: "AWS", category: "Cloud", icon: "amazonaws/232F3E" },
  ];

  return (
    <section
      id="tech-stack"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powered By
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Modern Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Stack
            </span>
          </motion.h3>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We leverage the latest and greatest in the industry to build
            lightning-fast web and robust mobile applications for your business.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow hover:border-blue-100 cursor-default"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.icon}`}
                alt={tech.name}
                className="w-5 h-5 object-contain"
              />
              <span className="font-semibold text-gray-800">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
