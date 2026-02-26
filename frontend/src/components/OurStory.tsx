import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target } from "lucide-react";

export default function OurStory() {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
      title: "The Idea",
      description:
        "Born from a passion to build software that truly solves complex business problems.",
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-500" />,
      title: "The Mission",
      description:
        "To bridge the gap between imagination and digital reality with high-quality engineering.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      title: "The Evolution",
      description:
        "Grown into a full-scale agency delivering web, mobile, and custom tech solutions worldwide.",
    },
  ];

  return (
    <section
      id="our-story"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
              Our Story
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Excellence.
              </span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Axythic, we didn't just want to build apps; we wanted to build
              experiences. What started as a small team of passionate developers
              has evolved into a powerhouse of digital innovation. We believe
              that every line of code should serve a purpose, and every design
              should tell a story.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We partner with visionaries to transform their boldest ideas into
              robust, scalable software solutions that stand out in today's
              fast-paced digital world.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mt-1 bg-gray-50 p-3 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
