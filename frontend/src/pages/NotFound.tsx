import { Link } from "react-router-dom";
import { ArrowRight, Home, Compass } from "lucide-react";
import { motion } from "framer-motion";
import PublicPageLayout from "../components/PublicPageLayout";

export default function NotFound() {
  return (
    <PublicPageLayout>
      <section
        className="relative isolate flex min-h-[82vh] items-center overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        {/* Theme-aware ambient background orbs */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          aria-hidden="true"
        >
          <div
            className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-40 -left-20 h-[440px] w-[440px] rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Subtle grid dots */}
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--dot-color) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-2xl text-center">
          {/* Animated compass icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center justify-center"
          >
            <div
              className="relative flex h-24 w-24 items-center justify-center rounded-3xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 0 40px rgba(79, 70, 229, 0.15)",
              }}
            >
              <motion.div
                animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                transition={{
                  duration: 2.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Compass
                  className="h-10 w-10"
                  style={{ color: "rgb(99, 102, 241)" }}
                />
              </motion.div>

              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  boxShadow: "0 0 28px 4px rgba(99, 102, 241, 0.2)",
                }}
              />
            </div>
          </motion.div>

          {/* Error badge */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500"
          >
            Error 404
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            Page not found.
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mx-auto mt-6 h-px w-20 origin-center"
            style={{
              background:
                "linear-gradient(to right, transparent, rgb(99 102 241 / 0.5), transparent)",
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="mx-auto mt-6 max-w-md text-base leading-7"
            style={{ color: "var(--text-muted)" }}
          >
            The address may be incorrect, or the page may have moved. Return to
            the homepage or contact Axythic if you need help finding something.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/25 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              style={{
                boxShadow: "0 8px 32px rgba(79, 70, 229, 0.3)",
              }}
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Return home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(99, 102, 241, 0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--border-color)";
              }}
            >
              Contact Axythic
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>

        </div>
      </section>
    </PublicPageLayout>
  );
}
