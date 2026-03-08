import React, { useState } from "react";
import { HRMSidebar } from "./HRMSidebar";
import {
  Bell,
  MessageSquare,
  ChevronDown,
  Menu,
  Users,
  Globe,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HRMLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const HRMLayout: React.FC<HRMLayoutProps> = ({ children, title }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const tabs = ["Overview", "Reports", "Settings"];

  React.useEffect(() => {
    if (title === "Platform Settings") {
      setActiveTab("Settings");
    } else if (title === "Reports") {
      setActiveTab("Reports");
    } else {
      setActiveTab("Overview");
    }
  }, [title]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-theme-page text-theme-primary font-inter transition-colors duration-300">
      <HRMSidebar />

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-72 z-50 md:hidden"
            >
              <HRMSidebar />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-[-50px] w-10 h-10 bg-theme-card border border-theme rounded-xl flex items-center justify-center text-theme-muted hover:text-red-500 transition-all shadow-xl"
              >
                <ChevronDown className="w-5 h-5 rotate-90" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-theme bg-theme-card sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
            A
          </div>
          <span className="font-bold">Axythic HRM</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-theme-muted hover:text-blue-500 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <main className="flex-grow p-4 md:p-8 overflow-x-hidden">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex gap-6 mt-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium transition-all pb-1 border-b-2 ${
                    activeTab === tab
                      ? "text-blue-500 border-blue-500"
                      : "text-theme-muted border-transparent hover:text-theme-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 relative">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("notifications")}
                  className={`p-2.5 rounded-xl border transition-all relative group ${
                    activeDropdown === "notifications"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-theme-card border-theme text-theme-muted hover:text-blue-500"
                  }`}
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-theme-card group-hover:scale-110 transition-transform"></span>
                </button>

                <AnimatePresence>
                  {activeDropdown === "notifications" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-80 bg-theme-card border border-theme rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="p-4 border-b border-theme flex items-center justify-between">
                        <h4 className="font-bold">Notifications</h4>
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">
                          3 New
                        </span>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="p-4 border-b border-theme last:border-0 hover:bg-theme-page/50 transition-colors cursor-pointer"
                          >
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                <Bell className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-xs font-bold">
                                  New application received
                                </p>
                                <p className="text-[10px] text-theme-muted mt-1">
                                  Esther Howard applied for UX Designer
                                </p>
                                <p className="text-[8px] text-theme-muted mt-2 uppercase">
                                  2 hours ago
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 text-center bg-theme-page/30">
                        <button className="text-[10px] font-bold text-blue-500 hover:text-blue-400">
                          View All Notifications
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className="p-2.5 rounded-xl bg-theme-card border border-theme text-theme-muted hover:text-blue-500 transition-all">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>

            <div className="h-10 w-px bg-theme-border/50 mx-2 hidden md:block" />

            <div className="relative">
              <div
                onClick={() => toggleDropdown("profile")}
                className="flex items-center gap-4 pl-2 cursor-pointer group"
              >
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold group-hover:text-blue-500 transition-colors">
                    Philipp Davidson
                  </p>
                  <p className="text-[10px] text-theme-muted font-bold uppercase tracking-wider">
                    HR Manager
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                    alt="Avatar"
                    className="w-10 h-10 rounded-xl border-2 border-theme group-hover:border-blue-500 transition-all object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-theme-card" />
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-theme-muted group-hover:text-blue-500 transition-all ${activeDropdown === "profile" ? "rotate-180 text-blue-500" : ""}`}
                />
              </div>

              <AnimatePresence>
                {activeDropdown === "profile" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-56 bg-theme-card border border-theme rounded-2xl shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-theme md:hidden">
                      <p className="text-xs font-bold">Philipp Davidson</p>
                      <p className="text-[10px] text-theme-muted">HR Manager</p>
                    </div>
                    <div className="p-2">
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-theme-muted hover:bg-theme-page hover:text-theme-primary transition-all">
                        <Users className="w-4 h-4" />
                        My Profile
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-theme-muted hover:bg-theme-page hover:text-theme-primary transition-all">
                        <Globe className="w-4 h-4" />
                        Company Info
                      </button>
                      <div className="h-px bg-theme-border/50 my-2" />
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-red-500 hover:bg-red-500/10 transition-all">
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
