import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">Page not found</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-300">
          The address may be incorrect, or the page may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
        >
          Return to Axythic
        </Link>
      </div>
    </main>
  );
}
