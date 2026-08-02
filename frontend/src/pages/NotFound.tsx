import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import PublicPageLayout from "../components/PublicPageLayout";

export default function NotFound() {
  return (
    <PublicPageLayout>
      <section className="relative isolate flex min-h-[72vh] items-center overflow-hidden px-4 pb-24 pt-40 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.16),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_34%)]" />
        <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-500">
            Error 404
          </p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-theme-primary sm:text-7xl">
            This page could not be found.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-theme-muted">
            The address may be incorrect, or the page may have moved. Use the
            navigation above or return to the Axythic homepage.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-500 hover:to-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Return home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-theme bg-theme-card px-6 py-3 font-semibold text-theme-primary transition-colors hover:border-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Contact Axythic
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PublicPageLayout>
  );
}
