import { useState } from "react";
import {
  Settings,
  User,
  Bell,
  Shield,
  Wallet,
  CheckCircle2,
} from "lucide-react";

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "notifications":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Email Notifications
                  </h4>
                  <p className="text-xs text-gray-500">
                    Receive updates about new courses and features.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5E2ADA]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Push Notifications
                  </h4>
                  <p className="text-xs text-gray-500">
                    Receive alerts on your browser for new messages.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5E2ADA]"></div>
                </label>
              </div>
            </div>
          </div>
        );
      case "security":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Account Security
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full max-w-sm px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full max-w-sm px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full max-w-sm px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20"
                />
              </div>
              <button className="px-5 py-2 mt-4 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Update Password
              </button>
            </div>

            <div className="mt-8 pt-6 flex items-center justify-between border-t border-gray-100">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Two-Factor Authentication
                </h4>
                <p className="text-xs text-gray-500">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Enable 2FA
              </button>
            </div>
          </div>
        );
      case "billing":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Billing & Payment
            </h2>

            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 flex items-center justify-between mb-8">
              <div>
                <div className="text-xs font-bold text-[#5E2ADA] uppercase tracking-wide mb-1">
                  Current Plan
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Premium Student
                </h3>
                <p className="text-sm text-gray-600">
                  Billed $14.99 monthly. Next charge Oct 24, 2025.
                </p>
              </div>
              <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                Manage Plan
              </button>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Billing History</h3>
            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Standard Subscription
                      </p>
                      <p className="text-xs text-gray-500">
                        Sep {24 - item}, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-900">$14.99</span>
                    <button className="text-xs font-semibold text-[#5E2ADA] hover:underline">
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default: // profile
        return (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Public Profile
            </h2>

            <div className="flex items-center gap-6 mb-8 mt-6">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Kate Ashy"
                className="w-24 h-24 rounded-full object-cover ring-4 ring-gray-50"
              />
              <div>
                <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors mr-3">
                  Change Avatar
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Remove
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  JPG, GIF or PNG. 1MB max.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Kate"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Ashy"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="kate.ashy@example.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA]"
                  defaultValue="UX Designer passionate about building accessible learning platforms."
                ></textarea>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <button className="px-6 py-2 bg-[#5E2ADA] text-white font-semibold rounded-lg hover:bg-[#4d22b3] transition-colors shadow-sm">
                Save Changes
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 flex flex-col xl:flex-row gap-8">
      {/* Settings Navigation */}
      <div className="w-full xl:w-64 shrink-0 space-y-1">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
          <Settings className="w-6 h-6 text-[#5E2ADA]" /> Settings
        </h1>

        <nav className="space-y-1">
          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-colors ${activeTab === "profile" ? "bg-[#5E2ADA]/5 text-[#5E2ADA] font-semibold border border-[#5E2ADA]/10" : "text-gray-600 hover:bg-gray-50 border border-transparent"}`}
          >
            <User
              className={`w-5 h-5 ${activeTab === "profile" ? "" : "text-gray-400"}`}
            />{" "}
            Public Profile
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-colors ${activeTab === "notifications" ? "bg-[#5E2ADA]/5 text-[#5E2ADA] font-semibold border border-[#5E2ADA]/10" : "text-gray-600 hover:bg-gray-50 border border-transparent"}`}
          >
            <Bell
              className={`w-5 h-5 ${activeTab === "notifications" ? "" : "text-gray-400"}`}
            />{" "}
            Notifications
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-colors ${activeTab === "security" ? "bg-[#5E2ADA]/5 text-[#5E2ADA] font-semibold border border-[#5E2ADA]/10" : "text-gray-600 hover:bg-gray-50 border border-transparent"}`}
          >
            <Shield
              className={`w-5 h-5 ${activeTab === "security" ? "" : "text-gray-400"}`}
            />{" "}
            Account Security
          </button>
          <button
            onClick={() => setActiveTab("billing")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-colors ${activeTab === "billing" ? "bg-[#5E2ADA]/5 text-[#5E2ADA] font-semibold border border-[#5E2ADA]/10" : "text-gray-600 hover:bg-gray-50 border border-transparent"}`}
          >
            <Wallet
              className={`w-5 h-5 ${activeTab === "billing" ? "" : "text-gray-400"}`}
            />{" "}
            Billing & Payment
          </button>
        </nav>
      </div>

      {/* Settings Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm animate-in fade-in duration-300">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
