import {
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Filter,
  Download,
} from "lucide-react";

const transactions = [
  {
    id: "TXN-001",
    date: "Mar 01, 2025",
    desc: "Rent Payment",
    category: "Housing",
    type: "expense",
    amount: -1200.0,
    status: "Completed",
  },
  {
    id: "TXN-002",
    date: "Mar 03, 2025",
    desc: "Salary Credit",
    category: "Income",
    type: "income",
    amount: 8500.0,
    status: "Completed",
  },
  {
    id: "TXN-003",
    date: "Mar 05, 2025",
    desc: "Uber Rides",
    category: "Transport",
    type: "expense",
    amount: -85.0,
    status: "Completed",
  },
  {
    id: "TXN-004",
    date: "Mar 07, 2025",
    desc: "Netflix Premium",
    category: "Entertainment",
    type: "expense",
    amount: -18.0,
    status: "Completed",
  },
  {
    id: "TXN-005",
    date: "Mar 10, 2025",
    desc: "Electricity Bill",
    category: "Housing",
    type: "expense",
    amount: -210.0,
    status: "Pending",
  },
  {
    id: "TXN-006",
    date: "Mar 12, 2025",
    desc: "Restaurant Dinner",
    category: "Food",
    type: "expense",
    amount: -145.0,
    status: "Completed",
  },
  {
    id: "TXN-007",
    date: "Mar 14, 2025",
    desc: "Freelance Payment",
    category: "Income",
    type: "income",
    amount: 2400.0,
    status: "Completed",
  },
  {
    id: "TXN-008",
    date: "Mar 15, 2025",
    desc: "Fuel",
    category: "Transport",
    type: "expense",
    amount: -60.0,
    status: "Completed",
  },
  {
    id: "TXN-009",
    date: "Mar 17, 2025",
    desc: "Grocery Store",
    category: "Food",
    type: "expense",
    amount: -320.0,
    status: "Completed",
  },
  {
    id: "TXN-010",
    date: "Mar 19, 2025",
    desc: "Dividends",
    category: "Income",
    type: "income",
    amount: 1200.0,
    status: "Completed",
  },
  {
    id: "TXN-011",
    date: "Mar 21, 2025",
    desc: "Gym Membership",
    category: "Health",
    type: "expense",
    amount: -45.0,
    status: "Completed",
  },
  {
    id: "TXN-012",
    date: "Mar 24, 2025",
    desc: "Internet Bill",
    category: "Utilities",
    type: "expense",
    amount: -70.0,
    status: "Pending",
  },
];

const summaryCards = [
  {
    label: "Total Income",
    value: "$12,100.00",
    sub: "+12.4% this month",
    up: true,
    color: "blue",
  },
  {
    label: "Total Expenses",
    value: "$2,153.00",
    sub: "+5.1% this month",
    up: false,
    color: "red",
  },
  {
    label: "Net Balance",
    value: "$9,947.00",
    sub: "+18.2% this month",
    up: true,
    color: "green",
  },
  {
    label: "Transactions",
    value: "12",
    sub: "3 pending",
    up: true,
    color: "purple",
  },
];

function statusBadge(s: string) {
  return s === "Completed"
    ? "bg-emerald-50 text-emerald-700"
    : "bg-amber-50 text-amber-700";
}

export default function Transactions() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Transactions</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            All your financial activity in one place
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg px-4 py-2 hover:bg-gray-50 transition-all">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg px-4 py-2 hover:bg-gray-50 transition-all">
            <Download className="w-4 h-4" /> Export
          </button>
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-4 py-2 outline-none">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map(({ label, value, sub, up, color }) => {
          const iconBg: Record<string, string> = {
            blue: "bg-blue-50 text-blue-600",
            red: "bg-red-50 text-red-500",
            green: "bg-emerald-50 text-emerald-600",
            purple: "bg-violet-50 text-violet-600",
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
              <div
                className={`inline-flex items-center gap-0.5 text-xs font-semibold mt-2 px-2 py-0.5 rounded-full ${iconBg[color]}`}
              >
                {up ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3">
          <h3 className="font-bold text-gray-900">Transaction History</h3>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions…"
              className="bg-gray-50 border border-gray-200 text-sm rounded-lg pl-9 pr-4 py-2 w-56 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                <th className="px-5 py-3 text-left">ID</th>
                <th className="px-5 py-3 text-left">Date</th>
                <th className="px-5 py-3 text-left">Description</th>
                <th className="px-5 py-3 text-left">Category</th>
                <th className="px-5 py-3 text-right">Amount</th>
                <th className="px-5 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactions.map((t) => (
                <tr
                  key={t.id}
                  className="hover:bg-gray-50/60 transition-colors"
                >
                  <td className="px-5 py-3.5 text-xs text-gray-400 font-mono">
                    {t.id}
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs whitespace-nowrap">
                    {t.date}
                  </td>
                  <td className="px-5 py-3.5 font-medium text-gray-800 whitespace-nowrap">
                    {t.desc}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      {t.category}
                    </span>
                  </td>
                  <td
                    className={`px-5 py-3.5 text-right font-bold whitespace-nowrap ${t.type === "income" ? "text-emerald-600" : "text-gray-900"}`}
                  >
                    {t.type === "income" ? "+" : ""}$
                    {Math.abs(t.amount).toFixed(2)}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusBadge(t.status)}`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
          <span>Showing 12 of 12 transactions</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600">
              ← Prev
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium">
              1
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
