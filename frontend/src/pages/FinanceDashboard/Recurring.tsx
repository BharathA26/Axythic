import {
  Repeat,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

type Status = "Active" | "Paused" | "Cancelled";

const plans = [
  {
    name: "AWS Cloud",
    category: "Infrastructure",
    amount: 320.0,
    freq: "Monthly",
    next: "Apr 01, 2025",
    status: "Active" as Status,
    icon: "☁️",
  },
  {
    name: "Adobe CC",
    category: "Software",
    amount: 54.99,
    freq: "Monthly",
    next: "Apr 05, 2025",
    status: "Active" as Status,
    icon: "🎨",
  },
  {
    name: "GitHub Teams",
    category: "Dev Tools",
    amount: 48.0,
    freq: "Monthly",
    next: "Apr 08, 2025",
    status: "Active" as Status,
    icon: "🐙",
  },
  {
    name: "Figma",
    category: "Design",
    amount: 45.0,
    freq: "Monthly",
    next: "Apr 10, 2025",
    status: "Active" as Status,
    icon: "✏️",
  },
  {
    name: "Notion Teams",
    category: "Productivity",
    amount: 16.0,
    freq: "Monthly",
    next: "Apr 12, 2025",
    status: "Active" as Status,
    icon: "📝",
  },
  {
    name: "Zoom Pro",
    category: "Communication",
    amount: 14.99,
    freq: "Monthly",
    next: "Apr 14, 2025",
    status: "Paused" as Status,
    icon: "📹",
  },
  {
    name: "Slack Pro",
    category: "Communication",
    amount: 12.5,
    freq: "Monthly",
    next: "—",
    status: "Cancelled" as Status,
    icon: "💬",
  },
  {
    name: "Annual Domain",
    category: "Infrastructure",
    amount: 120.0,
    freq: "Yearly",
    next: "Jan 01, 2026",
    status: "Active" as Status,
    icon: "🌐",
  },
];

function badge(s: Status) {
  const m: Record<Status, string> = {
    Active: "bg-emerald-50 text-emerald-700",
    Paused: "bg-amber-50 text-amber-700",
    Cancelled: "bg-gray-100 text-gray-500",
  };
  return m[s];
}

export default function Recurring() {
  const active = plans.filter((p) => p.status === "Active");
  const monthly = active
    .filter((p) => p.freq === "Monthly")
    .reduce((s, p) => s + p.amount, 0);
  const yearly = active
    .filter((p) => p.freq === "Yearly")
    .reduce((s, p) => s + p.amount, 0);
  const totalAnnual = monthly * 12 + yearly;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Recurring</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Manage all your recurring payments
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl px-5 py-2.5 transition-colors shadow-lg shadow-blue-600/20">
          <Plus className="w-4 h-4" /> Add Recurring
        </button>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Active Plans",
            value: `${active.length}`,
            sub: "+2 this month",
            up: true,
            clr: "blue",
          },
          {
            label: "Monthly Spend",
            value: `$${monthly.toFixed(2)}`,
            sub: "+$34 vs last month",
            up: false,
            clr: "red",
          },
          {
            label: "Annual Spend",
            value: `$${totalAnnual.toFixed(2)}`,
            sub: "Projected this year",
            up: false,
            clr: "purple",
          },
          {
            label: "Avg per Service",
            value: `$${(monthly / active.filter((p) => p.freq === "Monthly").length).toFixed(2)}`,
            sub: "Per active service",
            up: true,
            clr: "green",
          },
        ].map(({ label, value, sub, up, clr }) => {
          const ic: Record<string, string> = {
            blue: "bg-blue-50 text-blue-600",
            red: "bg-red-50 text-red-500",
            purple: "bg-violet-50 text-violet-600",
            green: "bg-emerald-50 text-emerald-600",
          };
          return (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
            >
              <p className="text-xs font-medium text-gray-500 mb-3">{label}</p>
              <p className="text-2xl font-bold text-gray-900 tracking-tight">
                {value}
              </p>
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-semibold mt-2 px-2 py-0.5 rounded-full ${ic[clr]}`}
              >
                {up ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {sub}
              </span>
            </div>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <p className="font-bold text-gray-900">{p.name}</p>
                  <p className="text-xs text-gray-400">{p.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${badge(p.status)}`}
                >
                  {p.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="h-[1px] bg-gray-100 mb-4" />
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Amount</p>
                <p className="text-xl font-bold text-gray-900">
                  ${p.amount.toFixed(2)}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                  <Repeat className="w-3 h-3" /> {p.freq}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-0.5">Next payment</p>
                <p
                  className={`text-sm font-semibold ${p.status === "Cancelled" ? "text-gray-400" : "text-gray-700"}`}
                >
                  {p.next}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
