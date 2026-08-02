import { ArrowRight, ChevronRight, House, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PublicPageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Array<{
    label: string;
    to: string;
  }>;
  primaryCta?: {
    label: string;
    to: string;
  };
  secondaryCta?: {
    label: string;
    to: string;
  };
}

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

export default function PublicPageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
}: PublicPageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[var(--orb-opacity)] pointer-events-none [background-image:radial-gradient(var(--text-primary)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-9 flex justify-center"
        >
          <ol className="inline-flex max-w-full items-center rounded-full border border-theme bg-theme-card p-1.5 text-sm shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            {breadcrumbs.map((breadcrumb, index) => {
              const isCurrentPage = index === breadcrumbs.length - 1;

              return (
                <li
                  key={`${breadcrumb.to}-${breadcrumb.label}`}
                  className={`flex items-center ${isCurrentPage ? "min-w-0" : "shrink-0"}`}
                >
                  {index > 0 && (
                    <ChevronRight
                      className="mx-1 h-3.5 w-3.5 shrink-0 text-[var(--text-faint)]"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  )}
                  {isCurrentPage ? (
                    <span
                      aria-current="page"
                      className="truncate rounded-full border border-blue-500/15 bg-blue-500/10 px-3 py-1.5 font-semibold text-theme-primary"
                      title={breadcrumb.label}
                    >
                      {breadcrumb.label}
                    </span>
                  ) : (
                    <Link
                      to={breadcrumb.to}
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-medium text-theme-muted transition-colors hover:bg-blue-500/10 hover:text-blue-500 ${focusStyles}`}
                    >
                      {index === 0 && (
                        <House
                          className="h-3.5 w-3.5"
                          strokeWidth={1.9}
                          aria-hidden="true"
                        />
                      )}
                      {breadcrumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-blue-400" aria-hidden="true" />
          <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-theme-primary leading-[1.08] tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-7 text-lg sm:text-xl text-theme-muted max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 ${focusStyles}`}
              >
                {primaryCta.label}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-theme-primary bg-theme-card border border-theme hover:border-blue-500/40 transition-colors ${focusStyles}`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
