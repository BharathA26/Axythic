import {
  Wallet,
  PieChart,
  ArrowUpRight,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react";

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Balance Card (Primary) */}
      <div className="bg-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-600/20 relative overflow-hidden flex flex-col justify-between h-[180px]">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 right-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl transform translate-y-10"></div>

        <div className="flex justify-between items-start z-10 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-white/90">My balance</h4>
              <p className="text-xs text-white/70">
                Wallet Overview & Spending
              </p>
            </div>
          </div>
          <button className="text-white/70 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="z-10 relative">
          <div className="flex items-end gap-3 mb-4">
            <h2 className="text-4xl font-bold tracking-tight">$20,520.32</h2>
            <div className="flex items-center bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-0.5 rounded-full mb-1">
              +1.5% <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </div>
          </div>
          <div className="h-[1px] w-full bg-white/20 mb-3"></div>
          <div className="flex items-center justify-between group cursor-pointer">
            <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
              See details
            </span>
            <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>

      {/* Savings Card */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between h-[180px]">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center border border-purple-100">
              <Wallet className="w-5 h-5 text-purple-600" />{" "}
              {/* Placeholder for piggy bank */}
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Savings account</h4>
              <p className="text-xs text-gray-500">Steady Growth Savings</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div>
          <div className="flex items-end gap-3 mb-4">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              $15,800.45
            </h2>
            <div className="flex items-center bg-blue-50 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full mb-1">
              +3.2% <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-100 mb-3"></div>
          <div className="flex items-center justify-between group cursor-pointer">
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
              View summary
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>

      {/* Investment Card */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between h-[180px]">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
              <PieChart className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Investment portfolio</h4>
              <p className="text-xs text-gray-500">Track Your Wealth Growth</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div>
          <div className="flex items-end gap-3 mb-4">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              $50,120.78
            </h2>
            <div className="flex items-center bg-blue-50 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full mb-1">
              +4.7% <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-100 mb-3"></div>
          <div className="flex items-center justify-between group cursor-pointer">
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
              Analyze performance
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}
