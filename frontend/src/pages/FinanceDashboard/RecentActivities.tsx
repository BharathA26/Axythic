import { Search, Filter, MoreHorizontal } from "lucide-react";

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      activity: "Software License",
      icon: "A", // Placeholder for actual icon/logo
      iconBg: "bg-red-100 text-red-600",
      orderId: "INV_000076",
      date: "17 Apr, 2026",
      time: "03:45 PM",
      price: "$25,500",
      status: "Completed",
      statusColor: "bg-blue-500",
    },
    {
      id: 2,
      activity: "Flight Ticket",
      icon: "✈️", // Placeholder
      iconBg: "bg-blue-100 text-blue-600",
      orderId: "INV_000075",
      date: "15 Apr, 2026",
      time: "11:20 AM",
      price: "$22,750",
      status: "Pending",
      statusColor: "bg-red-500",
    },
    {
      id: 3,
      activity: "Workspace Rent",
      icon: "🏢",
      iconBg: "bg-purple-100 text-purple-600",
      orderId: "INV_000074",
      date: "12 Apr, 2026",
      time: "09:00 AM",
      price: "$10,200",
      status: "Completed",
      statusColor: "bg-blue-500",
    },
    {
      id: 4,
      activity: "Server Hosting",
      icon: "☁️",
      iconBg: "bg-gray-100 text-gray-600",
      orderId: "INV_000073",
      date: "10 Apr, 2026",
      time: "02:15 PM",
      price: "$4,500",
      status: "Completed",
      statusColor: "bg-blue-500",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-xl font-bold text-gray-900">Recent Activities</h3>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-50 text-sm border border-gray-200 rounded-lg pl-9 pr-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
            Filter <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          <thead>
            <tr className="border-b border-gray-100 text-sm text-gray-500">
              <th className="py-4 pl-4 pr-2 font-medium w-12">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="py-4 px-4 font-medium">Activity</th>
              <th className="py-4 px-4 font-medium">Order ID</th>
              <th className="py-4 px-4 font-medium">Date</th>
              <th className="py-4 px-4 font-medium">Time</th>
              <th className="py-4 px-4 font-medium">Price</th>
              <th className="py-4 px-4 font-medium">Status</th>
              <th className="py-4 px-4 font-medium text-right w-16"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {activities.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50/50 transition-colors group"
              >
                <td className="py-4 pl-4 pr-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-semibold text-gray-900">
                      {item.activity}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-500">{item.orderId}</td>
                <td className="py-4 px-4 text-gray-500">{item.date}</td>
                <td className="py-4 px-4 text-gray-500">{item.time}</td>
                <td className="py-4 px-4 font-medium text-gray-900">
                  {item.price}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${item.statusColor}`}
                    ></span>
                    <span className="text-gray-700">{item.status}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
