import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import OverviewCards from "./OverviewCards";
import MyWallet from "./MyWallet";
import CashFlowChart from "./CashFlowChart";
import RecentActivities from "./RecentActivities";
import Analytics from "./Analytics";
import Transactions from "./Transactions";
import Invoices from "./Invoices";
import Recurring from "./Recurring";
import Settings from "./Settings";
import HelpDesk from "./HelpDesk";

export type View =
  | "dashboard"
  | "analytics"
  | "transactions"
  | "invoices"
  | "recurring"
  | "settings"
  | "helpdesk";

const breadcrumbLabels: Record<View, string> = {
  dashboard: "Dashboard",
  analytics: "Analytics",
  transactions: "Transactions",
  invoices: "Invoices",
  recurring: "Recurring",
  settings: "Settings",
  helpdesk: "Help Desk",
};

export default function FinanceDashboard() {
  const [view, setView] = useState<View>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (v: View) => {
    setView(v);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#F3F4F6] overflow-hidden font-sans">
      <Sidebar
        activeView={view}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header
          breadcrumb={breadcrumbLabels[view]}
          onNavigate={setView}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {view === "analytics" && <Analytics />}
          {view === "transactions" && <Transactions />}
          {view === "invoices" && <Invoices />}
          {view === "recurring" && <Recurring />}
          {view === "settings" && <Settings />}
          {view === "helpdesk" && <HelpDesk />}
          {view === "dashboard" && (
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                  <p className="text-sm text-gray-500">
                    Here is the summary of overall data
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <select className="bg-white border hover:bg-gray-50 border-gray-200 text-gray-700 text-sm rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>This Year</option>
                  </select>
                  <button className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg px-4 py-2 hover:shadow-sm transition-all">
                    <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full transform rotate-45 border-r border-t border-current -ml-0.5 mt-0.5"></span>
                    </span>
                    Reset Data
                  </button>
                </div>
              </div>
              <OverviewCards />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <MyWallet />
                </div>
                <div className="lg:col-span-2">
                  <CashFlowChart />
                </div>
              </div>
              <RecentActivities />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
