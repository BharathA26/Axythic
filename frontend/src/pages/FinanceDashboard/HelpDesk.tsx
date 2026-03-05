import {
  Search,
  BookOpen,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How do I export my transaction history?",
    a: "Go to Transactions → click 'Export' button on the top-right. You can export as CSV or PDF for any date range.",
  },
  {
    q: "How do I add a new payment method?",
    a: "Navigate to Settings → Billing → click '+ Add payment method'. We support Visa, Mastercard, and bank transfers.",
  },
  {
    q: "Can I set budget limits per category?",
    a: "Yes! In Analytics → Spending by Category, click on any category and use the 'Set Budget' option.",
  },
  {
    q: "How do recurring payments work?",
    a: "Recurring payments are charged automatically on the scheduled date. You can pause or cancel anytime from the Recurring page.",
  },
  {
    q: "How do I generate and send an invoice?",
    a: "Go to Invoices → click 'New Invoice'. Fill in client details, line items, and click Send. The client receives an email link.",
  },
  {
    q: "Is my financial data encrypted?",
    a: "Absolutely. We use AES-256 encryption at rest and TLS 1.3 in transit. Your data is never shared with third parties.",
  },
  {
    q: "How do I enable two-factor authentication?",
    a: "Go to Settings → Security → enable 2FA. We support TOTP authenticator apps and SMS verification.",
  },
];

const articles = [
  {
    title: "Getting Started with Axythic Fin",
    category: "Basics",
    time: "4 min read",
  },
  {
    title: "Understanding the Dashboard",
    category: "Basics",
    time: "3 min read",
  },
  {
    title: "Setting Up Recurring Payments",
    category: "Recurring",
    time: "5 min read",
  },
  { title: "How Analytics Works", category: "Analytics", time: "6 min read" },
  { title: "Invoice Best Practices", category: "Invoices", time: "4 min read" },
  { title: "Account Security Guide", category: "Security", time: "7 min read" },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-gray-800 pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="text-sm text-gray-500 pb-4 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function HelpDesk() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Help Desk</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Find answers, contact support, or browse articles
        </p>
      </div>

      {/* Search hero */}
      <div className="bg-blue-600 rounded-2xl p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl translate-y-8 -translate-x-8" />
        <h3 className="text-xl font-bold text-white mb-1 relative z-10">
          How can we help you?
        </h3>
        <p className="text-blue-100 text-sm mb-5 relative z-10">
          Search our knowledge base or browse articles below
        </p>
        <div className="relative max-w-md mx-auto z-10">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help…"
            className="w-full bg-white rounded-xl pl-10 pr-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-white/40 shadow-lg"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: "💬",
            title: "Live Chat",
            sub: "Chat with support",
            action: "Start Chat",
            clr: "blue",
          },
          {
            icon: "📧",
            title: "Email Support",
            sub: "support@axythicfin.com",
            action: "Send Email",
            clr: "green",
          },
          {
            icon: "📞",
            title: "Phone Support",
            sub: "+1 (800) 555-AXY-THIN",
            action: "Call Now",
            clr: "purple",
          },
        ].map(({ icon, title, sub, action, clr }) => {
          const bg: Record<string, string> = {
            blue: "bg-blue-50 border-blue-100 text-blue-600",
            green: "bg-emerald-50 border-emerald-100 text-emerald-600",
            purple: "bg-violet-50 border-violet-100 text-violet-600",
          };
          return (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center gap-3"
            >
              <span className="text-3xl">{icon}</span>
              <div>
                <p className="font-bold text-gray-900">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </div>
              <button
                className={`mt-auto text-xs font-bold px-4 py-2 rounded-xl border ${bg[clr]} transition-colors hover:opacity-80`}
              >
                {action}
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="px-5">
            {faqs.map((f) => (
              <FAQ key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-gray-900">Knowledge Base</h3>
            </div>
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Browse all <ExternalLink className="w-3 h-3" />
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {articles.map((a) => (
              <div
                key={a.title}
                className="px-5 py-3.5 flex items-center justify-between hover:bg-gray-50/60 transition-colors cursor-pointer group"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {a.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-medium">
                      {a.category}
                    </span>
                    <span className="text-xs text-gray-400">{a.time}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-400 flex-shrink-0 ml-3 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
