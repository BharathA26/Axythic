import { ChevronDown } from "lucide-react";
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
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Questions
            </span>
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? "bg-blue-50/50 border-blue-200 shadow-sm" : "bg-white border-gray-200 hover:border-blue-300"}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span
                  className={`font-semibold text-lg transition-colors ${openIndex === idx ? "text-blue-900" : "text-gray-900"}`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-blue-600" : ""}`}
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
                    <p className="text-gray-600 leading-relaxed">
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
