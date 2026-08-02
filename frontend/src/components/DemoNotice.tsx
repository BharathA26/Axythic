import { Link } from "react-router-dom";

export default function DemoNotice() {
  return (
    <aside
      aria-label="Portfolio demonstration notice"
      className="fixed bottom-4 left-1/2 z-[1000] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-2xl border border-amber-300/60 bg-slate-950/95 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-md sm:flex sm:items-center sm:justify-between sm:gap-5"
    >
      <p className="leading-relaxed">
        <strong className="text-amber-300">Interactive portfolio demo.</strong>{" "}
        All people, accounts, orders, and transactions shown here are fictional
        sample data. Do not enter real personal, password, or payment
        information.
      </p>
      <Link
        to="/portfolio"
        className="mt-2 inline-flex shrink-0 font-semibold text-sky-300 underline decoration-sky-300/50 underline-offset-4 hover:text-sky-200 sm:mt-0"
      >
        Return to Portfolio
      </Link>
    </aside>
  );
}
