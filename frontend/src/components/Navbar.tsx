import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const navLinks = ["Our Story", "Vision & Mission", "Portfolio"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300"
        style={{
          backgroundColor: "var(--navbar-bg)",
          borderColor: "var(--navbar-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2.5 select-none"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/axythic-logo.svg"
                alt="Axythic logo mark"
                width={34}
                height={38}
                className="drop-shadow-sm"
                draggable={false}
              />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Axythic
              </span>
            </motion.a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="text-sm font-semibold transition-colors duration-200 hover:text-blue-500"
                  style={{ color: "var(--text-muted)" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#3b82f6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Right Side: Theme Toggle + CTA */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative flex items-center w-14 h-7 rounded-full p-0.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                style={{
                  backgroundColor: isDark
                    ? "rgba(59,130,246,0.15)"
                    : "rgba(0,0,0,0.08)",
                  border: `1px solid ${isDark ? "rgba(59,130,246,0.3)" : "rgba(0,0,0,0.12)"}`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Sliding indicator */}
                <motion.div
                  className="absolute w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                  animate={{ x: isDark ? 1 : 29 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{
                    backgroundColor: isDark ? "#1d4ed8" : "#f59e0b",
                    boxShadow: isDark
                      ? "0 0 8px rgba(59,130,246,0.6)"
                      : "0 0 8px rgba(245,158,11,0.6)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {isDark ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -30, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 30, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="w-3 h-3 text-white" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 30, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -30, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Background icons */}
                <Moon
                  className="absolute left-1.5 w-3 h-3"
                  style={{
                    color: isDark ? "transparent" : "var(--text-faint)",
                  }}
                />
                <Sun
                  className="absolute right-1.5 w-3 h-3"
                  style={{
                    color: isDark ? "var(--text-faint)" : "transparent",
                  }}
                />
              </motion.button>

              {/* Get Started CTA */}
              <a
                href="#contact-us"
                className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 transform duration-200"
              >
                Get Started
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: "var(--text-muted)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t overflow-hidden"
              style={{
                backgroundColor: "var(--navbar-bg)",
                borderColor: "var(--navbar-border)",
              }}
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/ /g, "-")}`}
                    className="block text-sm font-semibold py-2 transition-colors hover:text-blue-500"
                    style={{ color: "var(--text-muted)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact-us"
                  className="block w-full text-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
