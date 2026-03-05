import { FileText, Plus, Download, Search, ArrowUpRight } from "lucide-react";

const invoices = [
  {
    id: "INV-2025-001",
    client: "Stark Industries",
    issue: "Mar 01, 2025",
    due: "Mar 15, 2025",
    amount: 4800.0,
    status: "Paid",
  },
  {
    id: "INV-2025-002",
    client: "Wayne Enterprises",
    issue: "Mar 03, 2025",
    due: "Mar 17, 2025",
    amount: 12500.0,
    status: "Pending",
  },
  {
    id: "INV-2025-003",
    client: "Umbrella Corp",
    issue: "Mar 05, 2025",
    due: "Mar 19, 2025",
    amount: 3200.0,
    status: "Paid",
  },
  {
    id: "INV-2025-004",
    client: "Oscorp",
    issue: "Mar 07, 2025",
    due: "Mar 21, 2025",
    amount: 6750.0,
    status: "Overdue",
  },
  {
    id: "INV-2025-005",
    client: "Acme Corporation",
    issue: "Mar 10, 2025",
    due: "Mar 24, 2025",
    amount: 9200.0,
    status: "Pending",
  },
  {
    id: "INV-2025-006",
    client: "Initech",
    issue: "Mar 12, 2025",
    due: "Mar 26, 2025",
    amount: 2100.0,
    status: "Paid",
  },
  {
    id: "INV-2025-007",
    client: "Globex Corporation",
    issue: "Mar 14, 2025",
    due: "Mar 28, 2025",
    amount: 5500.0,
    status: "Draft",
  },
  {
    id: "INV-2025-008",
    client: "Vandelay Industries",
    issue: "Mar 17, 2025",
    due: "Mar 31, 2025",
    amount: 3800.0,
    status: "Pending",
  },
];

type StatusKey = "Paid" | "Pending" | "Overdue" | "Draft";

function statusStyle(s: StatusKey) {
  const m: Record<StatusKey, string> = {
    Paid: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    Overdue: "bg-red-50 text-red-600",
    Draft: "bg-gray-100 text-gray-600",
  };
  return m[s] ?? "bg-gray-100 text-gray-600";
}

export default function Invoices() {
  const total = invoices.reduce((s, i) => s + i.amount, 0);
  const paid = invoices
    .filter((i) => i.status === "Paid")
    .reduce((s, i) => s + i.amount, 0);
  const pending = invoices
    .filter((i) => i.status === "Pending")
    .reduce((s, i) => s + i.amount, 0);
  const overdue = invoices
    .filter((i) => i.status === "Overdue")
    .reduce((s, i) => s + i.amount, 0);

  const stats = [
    {
      label: "Total Invoiced",
      value: `$${total.toLocaleString()}`,
      sub: `${invoices.length} invoices`,
      color: "blue",
    },
    {
      label: "Paid",
      value: `$${paid.toLocaleString()}`,
      sub: `${invoices.filter((i) => i.status === "Paid").length} invoices`,
      color: "green",
    },
    {
      label: "Pending",
      value: `$${pending.toLocaleString()}`,
      sub: `${invoices.filter((i) => i.status === "Pending").length} invoices`,
      color: "amber",
    },
    {
      label: "Overdue",
      value: `$${overdue.toLocaleString()}`,
      sub: `${invoices.filter((i) => i.status === "Overdue").length} invoices`,
      color: "red",
    },
  ];

  const iconBg: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    red: "bg-red-50 text-red-500",
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Invoices</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Manage and track all your invoices
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl px-5 py-2.5 transition-colors shadow-lg shadow-blue-600/20">
          <Plus className="w-4 h-4" /> New Invoice
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, sub, color }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500">{label}</span>
              <span
                className={`w-8 h-8 rounded-xl flex items-center justify-center ${iconBg[color]}`}
              >
                <FileText className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">
              {value}
            </p>
            <span
              className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${iconBg[color]}`}
            >
              <ArrowUpRight className="w-3 h-3" />
              {sub}
            </span>
          </div>
        ))}
      </div>

      {/* Invoice Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3">
          <h3 className="font-bold text-gray-900">All Invoices</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search invoices…"
                className="bg-gray-50 border border-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 w-52 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                <th className="px-5 py-3 text-left">Invoice ID</th>
                <th className="px-5 py-3 text-left">Client</th>
                <th className="px-5 py-3 text-left">Issue Date</th>
                <th className="px-5 py-3 text-left">Due Date</th>
                <th className="px-5 py-3 text-right">Amount</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {invoices.map((inv) => (
                <tr
                  key={inv.id}
                  className="hover:bg-gray-50/60 transition-colors"
                >
                  <td className="px-5 py-3.5 font-mono text-xs text-gray-500">
                    {inv.id}
                  </td>
                  <td className="px-5 py-3.5 font-medium text-gray-800 whitespace-nowrap">
                    {inv.client}
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs whitespace-nowrap">
                    {inv.issue}
                  </td>
                  <td
                    className={`px-5 py-3.5 text-xs whitespace-nowrap font-medium ${inv.status === "Overdue" ? "text-red-500" : "text-gray-500"}`}
                  >
                    {inv.due}
                  </td>
                  <td className="px-5 py-3.5 text-right font-bold text-gray-900 whitespace-nowrap">
                    ${inv.amount.toLocaleString()}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle(inv.status as StatusKey)}`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      View →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
