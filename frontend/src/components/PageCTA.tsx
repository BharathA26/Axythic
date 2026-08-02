import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type CTAAction = {
  label: string;
  to: string;
};

interface PageCTAProps {
  eyebrow?: string;
  title: string;
  description: string;
  primary: CTAAction;
  secondary?: CTAAction;
}

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]";

export default function PageCTA({
  eyebrow = "Next step",
  title,
  description,
  primary,
  secondary,
}: PageCTAProps) {
  return (
    <section className="border-y border-theme bg-theme-card py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-theme-primary sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-theme-muted">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to={primary.to}
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-500 hover:to-indigo-500 ${focusStyles}`}
          >
            {primary.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {secondary && (
            <Link
              to={secondary.to}
              className={`inline-flex items-center justify-center rounded-full border border-theme bg-theme-page px-6 py-3 font-semibold text-theme-primary transition-colors hover:border-blue-500/40 ${focusStyles}`}
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
