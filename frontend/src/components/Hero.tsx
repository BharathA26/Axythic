import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Smartphone, Monitor } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section
      className="pt-32 pb-8 px-4 relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
      id="hero"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Background Gradient Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-[100px] -z-10 rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 blur-[120px] rounded-full -z-10"
      />

      <div className="max-w-5xl mx-auto text-center mt-12 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 border transition-colors duration-300"
          style={{
            backgroundColor: isDark
              ? "rgba(59,130,246,0.1)"
              : "rgba(239,246,255,1)",
            borderColor: isDark
              ? "rgba(59,130,246,0.2)"
              : "rgba(219,234,254,1)",
            color: isDark ? "#93c5fd" : "#1d4ed8",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen Software Development
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight transition-colors duration-300"
          style={{ color: "var(--text-primary)" }}
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
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto transition-colors duration-300"
          style={{ color: "var(--text-muted)" }}
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
          <MagneticButton
            href="#contact-us"
            as="a"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </MagneticButton>
          <MagneticButton
            href="#portfolio"
            as="a"
            className="px-8 py-4 rounded-full font-semibold text-lg border transition-all text-center hover:-translate-y-0.5 transform duration-200"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            View Our Work
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating Animated Icons */}
      <div className="absolute top-1/2 left-10 md:left-20 xl:left-40 hidden lg:block opacity-60">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="p-4 rounded-2xl border transition-colors duration-300"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "0 8px 32px rgba(0,0,0,0.06)",
          }}
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
          className="p-4 rounded-2xl border transition-colors duration-300"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "0 8px 32px rgba(0,0,0,0.06)",
          }}
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
          className="p-4 rounded-2xl border transition-colors duration-300"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "0 8px 32px rgba(0,0,0,0.06)",
          }}
        >
          <Code className="w-8 h-8 text-purple-500" />
        </motion.div>
      </div>
    </section>
  );
}
