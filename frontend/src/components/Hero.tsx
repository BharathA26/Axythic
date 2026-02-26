import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Monitor } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="pt-32 pb-20 px-4 relative overflow-hidden flex flex-col items-center min-h-[90vh] justify-center"
      id="hero"
    >
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center mt-12 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen Software Development
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Bring Your Ideas to
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Digital Reality.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We build custom software, web applications, and mobile apps tailored
          to accelerate your business growth and dominate the digital landscape.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#contact-us"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg border border-gray-200 hover:bg-gray-50 transition-all inline-block"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Floating Animated Icons representing Web, Mobile, Software */}
      <div className="absolute top-1/2 left-10 md:left-20 xl:left-40 hidden lg:block opacity-60">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white p-4 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100"
        >
          <Monitor className="w-8 h-8 text-blue-500" />
        </motion.div>
      </div>
      <div className="absolute top-1/3 right-10 md:right-20 xl:right-40 hidden lg:block opacity-60">
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="bg-white p-4 rounded-2xl shadow-xl shadow-indigo-900/5 border border-gray-100"
        >
          <Smartphone className="w-8 h-8 text-indigo-500" />
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 hidden lg:block opacity-60">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="bg-white p-4 rounded-2xl shadow-xl shadow-purple-900/5 border border-gray-100"
        >
          <Code className="w-8 h-8 text-purple-500" />
        </motion.div>
      </div>
    </section>
  );
}
