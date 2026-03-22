import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you build both web and mobile applications?",
    answer:
      "Yes, our team specializes in full-stack development. We build responsive web applications as well as native and cross-platform mobile apps for iOS and Android.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary greatly depending on scope and complexity. A simple MVP might take 6-8 weeks, while a comprehensive enterprise platform could take several months. We provide detailed timelines during our initial discovery phase.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Absolutely. We offer various SLA and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally long after the initial launch.",
  },
  {
    question: "Who owns the code after the project is complete?",
    answer:
      "Once the project is paid in full, you own 100% of the intellectual property and source code. We provide all repositories and necessary documentation during handover.",
  },
  {
    question: "What is your technology stack?",
    answer:
      "We are technology-agnostic but strongly prefer modern, scalable stacks. Our core expertise includes React, Next.js, Node.js, Python, Flutter, React Native, and cloud platforms like AWS and GCP.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-theme-page transition-colors duration-300 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">
              FAQ
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-theme-primary leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Questions
            </span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                openIndex === idx
                  ? "bg-theme-card border-blue-500/30 shadow-lg shadow-blue-500/5"
                  : "bg-theme-card border-theme hover:bg-theme-card hover:border-white/20"
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span
                  className={`font-semibold text-lg transition-colors ${
                    openIndex === idx ? "text-theme-primary" : "text-theme-muted"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-theme-muted transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === idx ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 overflow-hidden"
                  >
                    <p className="text-theme-muted leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
