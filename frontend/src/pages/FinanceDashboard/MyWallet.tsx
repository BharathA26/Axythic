import { Plus, MoreVertical } from "lucide-react";

export default function MyWallet() {
  const wallets = [
    {
      currency: "USD",
      flag: "🇺🇸",
      amount: "$22,678.00",
      limit: "Limit is $10k a month",
      status: "Active",
      statusColor: "text-blue-500",
      bgBase: "bg-gray-50",
    },
    {
      currency: "EUR",
      flag: "🇪🇺",
      amount: "€18,345.00",
      limit: "Limit is €8k a month",
      status: "Active",
      statusColor: "text-emerald-500",
      bgBase: "bg-gray-50",
    },
    {
      currency: "BDT",
      flag: "🇧🇩",
      amount: "৳1,22,678.00",
      limit: "Limit is ৳10k a month",
      status: "Active",
      statusColor: "text-blue-500",
      bgBase: "bg-blue-50 border border-blue-100/50", // Highlighted
    },
    {
      currency: "GBP",
      flag: "🇬🇧",
      amount: "£15,000.00",
      limit: "Limit is £7.5k a month",
      status: "Inactive",
      statusColor: "text-red-500",
      bgBase: "bg-gray-50",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm h-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">My Wallet</h3>
          <p className="text-sm text-gray-500 mt-1">Today 1 USD = 122.20 BDT</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <Plus className="w-4 h-4" />
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {wallets.map((wallet, idx) => (
          <div key={idx} className={`p-4 rounded-xl relative ${wallet.bgBase}`}>
            <button className="absolute top-4 right-3 text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{wallet.flag}</span>
              <span className="font-semibold text-gray-900">
                {wallet.currency}
              </span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              {wallet.amount}
            </h4>
            <p className="text-xs text-gray-500 mb-3">{wallet.limit}</p>
            <span className={`text-xs font-medium ${wallet.statusColor}`}>
              {wallet.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
