import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const serviceLinks = [
  {
    label: "Custom Software",
    to: "/services/custom-software-development",
  },
  {
    label: "Web Development",
    to: "/services/web-development",
  },
  {
    label: "Mobile App Development",
    to: "/services/mobile-app-development",
  },
];

const mainLinks = [
  { label: "About", to: "/about" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", href: "https://axythic.com/blog/" },
  { label: "Contact", to: "/contact" },
];

const homepageLinks = [
  { label: "Our Story", to: "/#our-story" },
  { label: "Vision & Mission", to: "/#vision-mission" },
];

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navbar-bg)]";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === "dark";
  const servicesActive = pathname.startsWith("/services/");

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderColor: "var(--navbar-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              aria-label="Axythic home"
              className={`flex items-center gap-2.5 select-none rounded-sm ${focusStyles}`}
            >
              <img
                src="/axythic-logo.svg"
                alt="Axythic logo"
                width={34}
                height={38}
                className="drop-shadow-sm"
                draggable={false}
              />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Axythic
              </span>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-7">
            <details className="relative group">
              <summary
                className={`list-none cursor-pointer inline-flex items-center gap-1 text-sm font-semibold transition-colors rounded-sm ${servicesActive ? "text-blue-500" : "text-theme-muted hover:text-blue-500"} ${focusStyles}`}
              >
                Services
                <ChevronDown
                  className="w-4 h-4 group-open:rotate-180 transition-transform"
                  aria-hidden="true"
                />
              </summary>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl border border-theme bg-theme-page shadow-2xl p-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    aria-current={pathname === link.to ? "page" : undefined}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold hover:text-blue-500 hover:bg-theme-card transition-colors ${pathname === link.to ? "text-blue-500 bg-theme-card" : "text-theme-muted"} ${focusStyles}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            {mainLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold hover:text-blue-500 transition-colors rounded-sm text-theme-muted ${focusStyles}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  aria-current={pathname === link.to ? "page" : undefined}
                  className={`text-sm font-semibold hover:text-blue-500 transition-colors rounded-sm ${pathname === link.to ? "text-blue-500" : "text-theme-muted"} ${focusStyles}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              className={`relative flex items-center w-14 h-7 rounded-full p-0.5 transition-colors duration-300 ${focusStyles}`}
              style={{
                backgroundColor: isDark
                  ? "rgba(59,130,246,0.15)"
                  : "rgba(0,0,0,0.08)",
                border: `1px solid ${isDark ? "rgba(59,130,246,0.3)" : "rgba(0,0,0,0.12)"}`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
                    <motion.span
                      key="moon"
                      initial={{ rotate: -30, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 30, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-3 h-3 text-white" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{ rotate: 30, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -30, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-3 h-3 text-white" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
              <Moon
                className="absolute left-1.5 w-3 h-3"
                style={{
                  color: isDark ? "transparent" : "var(--text-faint)",
                }}
                aria-hidden="true"
              />
              <Sun
                className="absolute right-1.5 w-3 h-3"
                style={{
                  color: isDark ? "var(--text-faint)" : "transparent",
                }}
                aria-hidden="true"
              />
            </motion.button>

            <Link
              to="/contact"
              className={`hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 ${focusStyles}`}
            >
              Get Started
            </Link>

            <button
              type="button"
              className={`lg:hidden p-2 rounded-lg text-theme-muted hover:text-blue-500 transition-colors ${focusStyles}`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            style={{
              backgroundColor: "var(--navbar-bg)",
              borderColor: "var(--navbar-border)",
            }}
          >
            <div className="px-4 py-5">
              <p className="px-2 text-xs font-semibold uppercase tracking-widest text-blue-500">
                Services
              </p>
              <div className="mt-2 space-y-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === link.to ? "page" : undefined}
                    className={`block px-2 py-2.5 rounded-lg text-sm font-semibold hover:text-blue-500 hover:bg-theme-card transition-colors ${pathname === link.to ? "text-blue-500 bg-theme-card" : "text-theme-muted"} ${focusStyles}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="my-4 border-t border-theme" />
              <div className="space-y-1">
                {mainLinks.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-2 py-2.5 rounded-lg text-sm font-semibold text-theme-muted hover:text-blue-500 hover:bg-theme-card transition-colors ${focusStyles}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to!}
                      onClick={() => setMobileOpen(false)}
                      aria-current={pathname === link.to ? "page" : undefined}
                      className={`block px-2 py-2.5 rounded-lg text-sm font-semibold hover:text-blue-500 hover:bg-theme-card transition-colors ${pathname === link.to ? "text-blue-500 bg-theme-card" : "text-theme-muted"} ${focusStyles}`}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>

              <p className="mt-5 px-2 text-xs font-semibold uppercase tracking-widest text-blue-500">
                Home sections
              </p>
              <div className="mt-2 space-y-1">
                {homepageLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-2 py-2.5 rounded-lg text-sm font-semibold text-theme-muted hover:text-blue-500 hover:bg-theme-card transition-colors ${focusStyles}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className={`mt-5 block w-full text-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white ${focusStyles}`}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
