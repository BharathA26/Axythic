import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Axythic
            </span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Our Story", "Vision & Mission", "Portfolio", "Contact Us"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ),
            )}
          </div>

          {/* CTA */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#contact-us"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
