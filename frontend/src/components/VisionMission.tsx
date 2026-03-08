import { motion } from "framer-motion";
import { Eye, Goal, Sparkles } from "lucide-react";

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="py-32 bg-theme-page transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-400 tracking-wide uppercase">
              Purpose Driven
            </span>
          </motion.div>
          <motion.h3
            className="text-4xl md:text-6xl font-extrabold text-theme-primary leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Vision &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Mission
            </span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            className="group relative bg-theme-card border border-theme rounded-3xl p-10 overflow-hidden hover:bg-theme-card transition-all duration-500 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <Eye className="w-48 h-48 text-blue-400" />
            </div>

            <div className="relative z-10">
              <div className="bg-blue-500/20 border border-blue-500/30 text-blue-400 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-7 h-7" />
              </div>
              <h4 className="text-3xl font-bold text-theme-primary mb-4">Our Vision</h4>
              <p className="text-lg text-theme-muted leading-relaxed max-w-sm font-light">
                To be the leading global catalyst for digital transformation,
                empowering businesses to thrive in a technology-first world
                through flawless and intuitive software.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="group relative bg-theme-card border border-theme rounded-3xl p-10 overflow-hidden hover:bg-theme-card transition-all duration-500 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <Goal className="w-48 h-48 text-purple-400" />
            </div>

            <div className="relative z-10">
              <div className="bg-purple-500/20 border border-purple-500/30 text-purple-400 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Goal className="w-7 h-7" />
              </div>
              <h4 className="text-3xl font-bold text-theme-primary mb-4">
                Our Mission
              </h4>
              <p className="text-lg text-theme-muted leading-relaxed max-w-sm font-light">
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
