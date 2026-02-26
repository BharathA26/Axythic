import { motion } from "framer-motion";
import { Eye, Goal } from "lucide-react";

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Purpose Driven
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Vision &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Mission
            </span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            className="group relative bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-3xl p-10 overflow-hidden border border-blue-100/50 hover:border-blue-200 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <Eye className="w-48 h-48 text-blue-900" />
            </div>

            <div className="relative z-10">
              <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
                <Eye className="w-7 h-7" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
                To be the leading global catalyst for digital transformation,
                empowering businesses to thrive in a technology-first world
                through flawless and intuitive software.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="group relative bg-gradient-to-bl from-indigo-50 to-purple-50/30 rounded-3xl p-10 overflow-hidden border border-indigo-100/50 hover:border-indigo-200 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <Goal className="w-48 h-48 text-indigo-900" />
            </div>

            <div className="relative z-10">
              <div className="bg-indigo-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-600/20">
                <Goal className="w-7 h-7" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
                To engineer scalable, secure, and user-centric web and mobile
                applications that solve real-world problems while delivering an
                aesthetic and frictionless user experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
