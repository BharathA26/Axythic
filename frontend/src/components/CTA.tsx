import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* decorative elements */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white opacity-5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-black opacity-10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to transform your ideas into reality?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
              Join leading brands that trust Axythic to build and scale their
              most critical software operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact-us"
                className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg shadow-white/10 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 duration-200"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
