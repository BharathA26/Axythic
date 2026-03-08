import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Rocket, Target, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function OurStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-400" />,
      title: "The Idea",
      description:
        "Born from a passion to build software that truly solves complex business problems.",
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-400" />,
      title: "The Mission",
      description:
        "To bridge the gap between imagination and digital reality with high-quality engineering.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: "The Evolution",
      description:
        "Grown into a full-scale agency delivering web, mobile, and custom tech solutions worldwide.",
    },
  ];

  return (
    <section
      id="our-story"
      ref={containerRef}
      className="py-32 bg-theme-page transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">
                Our Story
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-extrabold text-theme-primary mb-8 leading-[1.1] tracking-tight">
              Crafting Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Excellence.
              </span>
            </h3>

            <motion.p
              className="text-xl text-theme-muted mb-6 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We don’t just build platforms; we engineer digital legacies. Our
              journey is defined by a relentless pursuit of innovation, blending
              cutting-edge aesthetics with seamless functionality.
            </motion.p>

            <motion.p
              className="text-xl text-theme-muted leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              From the first line of code to the final interaction, we transform
              complex visions into intuitive digital realities.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-6"
            style={{ y }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", stiffness: 100, damping: 20 },
                  },
                }}
                whileHover={{ scale: 1.02, translateX: -10 }}
                className="group relative p-8 rounded-3xl bg-theme-card border border-theme hover:bg-theme-card transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex gap-6 items-start">
                  <div className="flex-shrink-0 mt-1 bg-theme-card p-4 rounded-2xl border border-theme group-hover:bg-theme-card transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-theme-primary mb-3 tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-theme-muted leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
