import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { products } from "./data";

const sampleOrders = [
  {
    id: "SC-001234",
    date: "Feb 28, 2025",
    status: "Delivered",
    items: [products[0], products[1]],
    total: 648,
    address: "123 Main St, New York, NY",
  },
  {
    id: "SC-001189",
    date: "Feb 20, 2025",
    status: "Out for Delivery",
    items: [products[2]],
    total: 289,
    address: "123 Main St, New York, NY",
  },
  {
    id: "SC-001102",
    date: "Feb 10, 2025",
    status: "Processing",
    items: [products[4], products[5]],
    total: 168,
    address: "123 Main St, New York, NY",
  },
  {
    id: "SC-000987",
    date: "Jan 25, 2025",
    status: "Delivered",
    items: [products[17]],
    total: 1299,
    address: "123 Main St, New York, NY",
  },
  {
    id: "SC-000872",
    date: "Jan 14, 2025",
    status: "Cancelled",
    items: [products[11]],
    total: 119,
    address: "123 Main St, New York, NY",
  },
];

const statusConfig: Record<
  string,
  { Icon: React.ElementType; color: string; bg: string }
> = {
  Delivered: {
    Icon: CheckCircle,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  "Out for Delivery": { Icon: Truck, color: "text-blue-600", bg: "bg-blue-50" },
  Processing: { Icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  Cancelled: { Icon: XCircle, color: "text-red-500", bg: "bg-red-50" },
};

export default function Orders() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filters = [
    "All",
    "Delivered",
    "Out for Delivery",
    "Processing",
    "Cancelled",
  ];
  const filtered =
    filter === "All"
      ? sampleOrders
      : sampleOrders.filter((o) => o.status === filter);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-gray-900">My Orders</h1>
          <span className="text-sm text-gray-400">
            {sampleOrders.length} total orders
          </span>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              label: "Total",
              value: sampleOrders.length,
              color: "text-gray-900",
            },
            {
              label: "Delivered",
              value: sampleOrders.filter((o) => o.status === "Delivered")
                .length,
              color: "text-emerald-600",
            },
            {
              label: "Active",
              value: sampleOrders.filter(
                (o) => o.status !== "Delivered" && o.status !== "Cancelled",
              ).length,
              color: "text-blue-600",
            },
            {
              label: "Cancelled",
              value: sampleOrders.filter((o) => o.status === "Cancelled")
                .length,
              color: "text-red-500",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center"
            >
              <p className={`text-2xl font-extrabold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm font-bold px-4 py-2 rounded-xl transition-colors ${filter === f ? "bg-[#1a3c34] text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Order List */}
        <div className="space-y-4">
          {filtered.map((order) => {
            const cfg = statusConfig[order.status];
            const isOpen = expanded === order.id;
            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div
                  className="flex items-center gap-4 p-5 cursor-pointer"
                  onClick={() => setExpanded(isOpen ? null : order.id)}
                >
                  <Package className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-extrabold text-gray-900">
                      Order #{order.id}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {order.date} · {order.items.length} item
                      {order.items.length > 1 ? "s" : ""}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-full ${cfg.bg} ${cfg.color} flex items-center gap-1.5 flex-shrink-0`}
                  >
                    <cfg.Icon className="w-3.5 h-3.5" /> {order.status}
                  </span>
                  <span className="font-extrabold text-gray-900 flex-shrink-0">
                    ${order.total}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {isOpen && (
                  <div className="border-t border-gray-100 px-5 pb-5">
                    <div className="pt-4 space-y-3 mb-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain p-1 rounded-xl"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-800 line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {item.brand}
                            </p>
                          </div>
                          <span className="font-bold text-gray-900">
                            ${item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-400">
                        Delivered to: {order.address}
                      </p>
                      <div className="flex gap-2">
                        {order.status === "Delivered" && (
                          <button className="text-xs font-bold border border-[#1a3c34] text-[#1a3c34] px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors">
                            Reorder
                          </button>
                        )}
                        <button className="text-xs font-bold border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                          Track
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
