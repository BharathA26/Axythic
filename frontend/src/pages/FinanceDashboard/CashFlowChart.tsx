import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function CashFlowChart() {
  const data = [
    { name: "Jan", value: 24000 },
    { name: "Feb", value: 26000 },
    { name: "Mar", value: 47000 }, // High peak
    { name: "Apr", value: 35000 },
    { name: "May", value: 28000 },
    { name: "Jun", value: 20000 },
    { name: "Jul", value: 29000 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 text-white p-3 rounded-xl shadow-lg shadow-gray-900/20 text-xs">
          <p className="font-bold text-sm mb-2 opacity-90">{`July 23, 2026`}</p>
          <div className="flex justify-between gap-6 mb-1">
            <span className="opacity-70">Cashflow</span>
            <span className="font-medium">{`$${payload[0].value.toLocaleString()}`}</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="opacity-70">Inflow</span>
            <span className="font-medium">-$7,456.00</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-sm text-gray-500 mb-1">Cash Flow</h3>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            $342,323.44
          </h2>
        </div>
        <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
          <button className="px-4 py-1.5 text-sm font-medium text-gray-500 rounded-lg hover:text-gray-900 transition-colors">
            Monthly
          </button>
          <button className="px-4 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-lg shadow-sm">
            Yearly
          </button>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              tickFormatter={(value) => `${value / 1000}k`}
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={40}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.name === "Mar" ? "#2563EB" : "#DBEAFE"}
                  className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
