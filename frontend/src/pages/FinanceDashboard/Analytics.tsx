import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  DollarSign,
  Percent,
  CreditCard,
} from "lucide-react";

// ── Static data ──────────────────────────────────────────────────────────────

const kpis = [
  {
    label: "Total Revenue",
    value: "$128,450",
    change: "+15.2%",
    up: true,
    Icon: DollarSign,
    color: "blue",
  },
  {
    label: "Total Expenses",
    value: "$54,230",
    change: "+8.7%",
    up: false,
    Icon: CreditCard,
    color: "red",
  },
  {
    label: "Net Profit",
    value: "$74,220",
    change: "+12.1%",
    up: true,
    Icon: TrendingUp,
    color: "green",
  },
  {
    label: "Profit Margin",
    value: "57.8%",
    change: "+3.5%",
    up: true,
    Icon: Percent,
    color: "purple",
  },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Revenue & Expenses per month (in thousands)
const barData = [
  { rev: 128, exp: 72 },
  { rev: 105, exp: 68 },
  { rev: 160, exp: 82 },
  { rev: 95, exp: 60 },
  { rev: 140, exp: 75 },
  { rev: 110, exp: 65 },
  { rev: 130, exp: 78 },
  { rev: 150, exp: 88 },
  { rev: 145, exp: 70 },
  { rev: 165, exp: 85 },
  { rev: 155, exp: 80 },
  { rev: 175, exp: 90 },
];

const categories = [
  { label: "Housing", pct: 35, color: "#2563EB" },
  { label: "Food", pct: 20, color: "#7C3AED" },
  { label: "Transport", pct: 15, color: "#F59E0B" },
  { label: "Entertainment", pct: 12, color: "#10B981" },
  { label: "Others", pct: 18, color: "#F43F5E" },
];

const transactions = [
  {
    date: "Mar 01, 2025",
    desc: "Rent Payment",
    category: "Housing",
    amount: "$1,200.00",
    status: "Paid",
  },
  {
    date: "Mar 03, 2025",
    desc: "Grocery Store",
    category: "Food",
    amount: "$320.00",
    status: "Paid",
  },
  {
    date: "Mar 05, 2025",
    desc: "Uber Rides",
    category: "Transport",
    amount: "$85.00",
    status: "Paid",
  },
  {
    date: "Mar 07, 2025",
    desc: "Netflix Premium",
    category: "Entertainment",
    amount: "$18.00",
    status: "Paid",
  },
  {
    date: "Mar 10, 2025",
    desc: "Electricity Bill",
    category: "Housing",
    amount: "$210.00",
    status: "Pending",
  },
  {
    date: "Mar 12, 2025",
    desc: "Restaurant Dinner",
    category: "Food",
    amount: "$145.00",
    status: "Paid",
  },
  {
    date: "Mar 15, 2025",
    desc: "Fuel",
    category: "Transport",
    amount: "$60.00",
    status: "Paid",
  },
];

// Monthly growth values (normalised 0‒100 for SVG)
const growthData = [30, 42, 38, 55, 50, 65, 60, 72, 68, 80, 75, 90];

// ── Helpers ───────────────────────────────────────────────────────────────────

function colorBg(color: string) {
  const map: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100 text-blue-600",
    red: "bg-red-50 border-red-100 text-red-500",
    green: "bg-emerald-50 border-emerald-100 text-emerald-600",
    purple: "bg-violet-50 border-violet-100 text-violet-600",
  };
  return map[color] ?? "bg-gray-50 border-gray-100 text-gray-600";
}

function badgeColor(up: boolean) {
  return up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500";
}

function statusColor(status: string) {
  return status === "Paid"
    ? "bg-emerald-50 text-emerald-700"
    : "bg-amber-50 text-amber-700";
}

// ── Donut Chart (pure SVG) ────────────────────────────────────────────────────

function DonutChart() {
  const size = 160;
  const cx = size / 2;
  const cy = size / 2;
  const r = 58;
  const stroke = 24;

  let cumulativePct = 0;

  const segments = categories.map((cat) => {
    const startAngle = cumulativePct * 3.6 - 90; // degrees
    cumulativePct += cat.pct;
    const endAngle = cumulativePct * 3.6 - 90;

    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const largeArc = cat.pct > 50 ? 1 : 0;

    return {
      ...cat,
      d: `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`,
    };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {segments.map((seg, i) => (
        <path
          key={i}
          d={seg.d}
          fill="none"
          stroke={seg.color}
          strokeWidth={stroke}
          strokeLinecap="butt"
        />
      ))}
      {/* Centre hole label */}
      <circle cx={cx} cy={cy} r={r - stroke / 2} fill="white" />
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#111827"
      >
        $54,230
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="9" fill="#6B7280">
        Total Spend
      </text>
    </svg>
  );
}

// ── Line Chart (pure SVG) ─────────────────────────────────────────────────────

function LineChart() {
  const W = 340;
  const H = 110;
  const padX = 24;
  const padY = 12;
  const innerW = W - padX * 2;
  const innerH = H - padY * 2;

  const points = growthData.map((v, i) => {
    const x = padX + (i / (growthData.length - 1)) * innerW;
    const y = padY + innerH - (v / 100) * innerH;
    return `${x},${y}`;
  });

  const polyline = points.join(" ");

  // Area fill
  const first = points[0].split(",");
  const last = points[points.length - 1].split(",");
  const areaPath = `M ${first[0]} ${first[1]} L ${polyline.replace(/(\d+\.?\d*),(\d+\.?\d*)/g, "$1 $2")} L ${last[0]} ${padY + innerH} L ${first[0]} ${padY + innerH} Z`;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Area */}
      <path d={areaPath} fill="url(#lineGrad)" />
      {/* Line */}
      <polyline
        points={polyline}
        fill="none"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Dots */}
      {points.map((pt, i) => {
        const [x, y] = pt.split(",");
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="white"
            stroke="#2563EB"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
}

// ── Bar Chart (pure SVG) ──────────────────────────────────────────────────────

function BarChart() {
  const W = 580;
  const H = 200;
  const padX = 28;
  const padY = 16;
  const innerW = W - padX * 2;
  const innerH = H - padY * 2;
  const maxVal = 200;
  const groupW = innerW / barData.length;
  const barW = groupW * 0.28;
  const gap = barW * 0.4;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
      {/* Y gridlines */}
      {[0, 50, 100, 150, 200].map((v) => {
        const y = padY + innerH - (v / maxVal) * innerH;
        return (
          <g key={v}>
            <line
              x1={padX}
              y1={y}
              x2={W - padX}
              y2={y}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
            <text
              x={padX - 4}
              y={y + 3}
              textAnchor="end"
              fontSize="9"
              fill="#9CA3AF"
            >
              {v}
            </text>
          </g>
        );
      })}
      {/* Bars */}
      {barData.map((d, i) => {
        const centerX = padX + i * groupW + groupW / 2;
        const revH = (d.rev / maxVal) * innerH;
        const expH = (d.exp / maxVal) * innerH;
        return (
          <g key={i}>
            <rect
              x={centerX - gap / 2 - barW}
              y={padY + innerH - revH}
              width={barW}
              height={revH}
              rx="3"
              fill="#2563EB"
              opacity="0.85"
            />
            <rect
              x={centerX + gap / 2}
              y={padY + innerH - expH}
              width={barW}
              height={expH}
              rx="3"
              fill="#F87171"
              opacity="0.75"
            />
            <text
              x={centerX}
              y={H - 2}
              textAnchor="middle"
              fontSize="8.5"
              fill="#9CA3AF"
            >
              {months[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page title */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Track your financial performance
        </p>
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(({ label, value, change, up, Icon, color }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">{label}</span>
              <span
                className={`w-9 h-9 rounded-xl border flex items-center justify-center ${colorBg(color)}`}
              >
                <Icon className="w-4 h-4" />
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 tracking-tight">
                {value}
              </p>
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-semibold mt-1.5 px-2 py-0.5 rounded-full ${badgeColor(up)}`}
              >
                {up ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Charts Row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue vs Expenses */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-900">Revenue vs Expenses</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Full year comparison
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-3 h-3 rounded-sm bg-blue-600 inline-block" />
                Revenue
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-3 h-3 rounded-sm bg-red-400 inline-block" />
                Expenses
              </div>
              <div className="flex text-xs bg-gray-100 rounded-lg overflow-hidden">
                <button className="px-3 py-1.5 text-gray-500 hover:bg-gray-200 transition-colors">
                  Monthly
                </button>
                <button className="px-3 py-1.5 bg-blue-600 text-white font-medium">
                  Yearly
                </button>
              </div>
            </div>
          </div>
          <BarChart />
        </div>

        {/* Spending by Category */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col">
          <div className="mb-4">
            <h3 className="font-bold text-gray-900">Spending by Category</h3>
            <p className="text-xs text-gray-400 mt-0.5">
              This month's breakdown
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 flex-1">
            <DonutChart />
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full">
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-2 text-xs text-gray-600"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cat.color }}
                  />
                  {cat.label}
                  <span className="ml-auto font-semibold text-gray-800">
                    {cat.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Transactions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-900">Top Transactions</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Recent spending activity
              </p>
            </div>
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
              View all →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  <th className="px-5 py-3 text-left">Date</th>
                  <th className="px-5 py-3 text-left">Description</th>
                  <th className="px-5 py-3 text-left">Category</th>
                  <th className="px-5 py-3 text-right">Amount</th>
                  <th className="px-5 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-5 py-3 text-gray-400 text-xs whitespace-nowrap">
                      {t.date}
                    </td>
                    <td className="px-5 py-3 font-medium text-gray-800 whitespace-nowrap">
                      {t.desc}
                    </td>
                    <td className="px-5 py-3 text-gray-500 whitespace-nowrap">
                      {t.category}
                    </td>
                    <td className="px-5 py-3 text-right font-semibold text-gray-900 whitespace-nowrap">
                      {t.amount}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor(t.status)}`}
                      >
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly Growth */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="font-bold text-gray-900">Monthly Growth</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Revenue growth trend
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">+24.6%</p>
              <p className="text-xs text-emerald-500 font-medium">
                vs last year
              </p>
            </div>
          </div>

          {/* Months x-axis labels */}
          <div className="flex justify-between px-1 mb-1 mt-4">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((m) => (
              <span key={m} className="text-[9px] text-gray-400">
                {m}
              </span>
            ))}
          </div>

          <div className="flex-1 min-h-[110px]">
            <LineChart />
          </div>

          {/* Summary row */}
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
            {[
              { label: "Peak Month", value: "December" },
              { label: "Avg Growth", value: "8.3% /mo" },
              { label: "YoY Change", value: "+$28,450" },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-xs text-gray-400">{label}</p>
                <p className="text-sm font-bold text-gray-800 mt-0.5">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
