import { useState } from "react";
import { HRMLayout } from "./components/HRMLayout";
import {
  Shield,
  Users,
  Bell,
  Globe,
  CreditCard,
  ChevronRight,
  Mail,
  Smartphone,
  CheckCircle2,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const subTabs = [
  { id: "general", label: "General", icon: Globe },
  { id: "security", label: "Security", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "billing", label: "Billing", icon: CreditCard },
];

export default function Settings() {
  const [activeSubTab, setActiveSubTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 3000);
    }, 1500);
  };

  const renderContent = () => {
    switch (activeSubTab) {
      case "general":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-theme-muted uppercase tracking-wider pl-1">
                  Company Name
                </label>
                <input
                  type="text"
                  defaultValue="Axythic Solutions"
                  className="w-full bg-theme-page border border-theme rounded-2xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-theme-muted uppercase tracking-wider pl-1">
                  Company Website
                </label>
                <input
                  type="text"
                  defaultValue="https://axythic.com"
                  className="w-full bg-theme-page border border-theme rounded-2xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-theme-muted uppercase tracking-wider pl-1">
                  Industry
                </label>
                <select className="w-full bg-theme-page border border-theme rounded-2xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none appearance-none">
                  <option>Technology & SaaS</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Education</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-theme-muted uppercase tracking-wider pl-1">
                  Language
                </label>
                <select className="w-full bg-theme-page border border-theme rounded-2xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none appearance-none">
                  <option>English (United States)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-theme-muted uppercase tracking-wider pl-1">
                Company Description
              </label>
              <textarea
                rows={4}
                defaultValue="Building the future of recruitment and human resource management with AI-powered insights and seamless collaboration tools."
                className="w-full bg-theme-page border border-theme rounded-2xl p-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
              />
            </div>
          </div>
        );
      case "security":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">
                    Two-Factor Authentication
                  </h4>
                  <p className="text-xs text-theme-muted">
                    Add an extra layer of security to your account.
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors">
                Enable
              </button>
            </div>

            <div className="divide-y divide-theme">
              <div className="py-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm">Session Timeout</h4>
                  <p className="text-xs text-theme-muted">
                    Automatically log out after inactivity.
                  </p>
                </div>
                <select className="bg-theme-page border border-theme rounded-lg px-3 py-1.5 text-xs outline-none">
                  <option>30 Minutes</option>
                  <option>1 Hour</option>
                  <option>4 Hours</option>
                </select>
              </div>
              <div className="py-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm">Login Alerts</h4>
                  <p className="text-xs text-theme-muted">
                    Get notified of new login attempts.
                  </p>
                </div>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        );
      case "notifications":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "New Application", icon: Mail },
                { label: "Interview Reminders", icon: Bell },
                { label: "system Updates", icon: Smartphone },
                { label: "Team Activity", icon: Users },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 border border-theme rounded-2xl flex items-center justify-between hover:bg-theme-page/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-theme-page border border-theme flex items-center justify-center text-theme-muted">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "billing":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                  Active Plan
                </span>
                <h3 className="text-3xl font-bold mt-4">Enterprise Pro</h3>
                <p className="text-white/70 text-sm mt-2">
                  Billed annually • Next payment March 2027
                </p>
                <div className="flex items-center gap-6 mt-8">
                  <button className="px-6 py-2.5 bg-white text-blue-600 rounded-xl text-sm font-bold hover:bg-white/90 transition-colors">
                    Manage Subscription
                  </button>
                  <button className="text-sm font-bold text-white/80 hover:text-white transition-colors">
                    View Invoices
                  </button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            </div>

            <div className="border border-theme rounded-2xl divide-y divide-theme overflow-hidden">
              <div className="p-4 flex items-center justify-between bg-theme-page/20">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-theme-muted" />
                  <span className="text-sm font-medium">
                    Visa ending in 4242
                  </span>
                </div>
                <button className="text-xs font-bold text-blue-500 hover:underline">
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <HRMLayout title="Platform Settings">
      <div className="max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sub Navigation */}
          <div className="w-full lg:w-64 space-y-2">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                  activeSubTab === tab.id
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20"
                    : "bg-theme-card border border-theme text-theme-muted hover:text-theme-primary hover:border-blue-500/50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-bold text-sm">{tab.label}</span>
                {activeSubTab === tab.id && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-grow">
            <div className="bg-theme-card border border-theme rounded-3xl p-8 min-h-[500px] flex flex-col">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">
                    {subTabs.find((t) => t.id === activeSubTab)?.label} Settings
                  </h3>
                  <p className="text-sm text-theme-muted mt-1">
                    Configure your {activeSubTab} preferences and defaults.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <AnimatePresence>
                    {showSaved && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center gap-2 text-green-500"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs font-bold">
                          Preferences Saved
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    disabled={isSaving}
                    onClick={handleSave}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-all ${
                      isSaving
                        ? "bg-theme-page text-theme-muted animate-pulse"
                        : "bg-blue-600 text-white hover:scale-[1.02] active:scale-[0.98] shadow-blue-600/20"
                    }`}
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>

              <div className="flex-grow">{renderContent()}</div>

              {activeSubTab === "general" && (
                <div className="mt-12 pt-8 border-t border-theme">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-red-500">Danger Zone</h4>
                      <p className="text-xs text-theme-muted mt-1">
                        Irreversible actions for your workspace.
                      </p>
                    </div>
                    <button className="px-5 py-2.5 border border-red-500/30 text-red-500 rounded-xl text-xs font-bold hover:bg-red-500/5 transition-all flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Delete Workspace
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </HRMLayout>
  );
}
