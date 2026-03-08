import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  UserPlus,
  Calendar,
  Settings,
  LogOut,
  Search,
} from "lucide-react";

export const HRMSidebar: React.FC = () => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/hrm/dashboard" },
    { icon: Users, label: "Personnel", path: "/hrm/personnel" },
    { icon: Briefcase, label: "Applications", path: "/hrm/applications" },
    { icon: UserPlus, label: "Talent Pool", path: "/hrm/talent" },
    { icon: Calendar, label: "Events", path: "/hrm/events" },
  ];

  return (
    <div className="hidden md:flex w-64 h-screen bg-theme-card border-r border-theme flex-col sticky top-0 flex-shrink-0 transition-colors duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
          A
        </div>
        <span className="text-xl font-bold text-theme-primary">
          Axythic HRM
        </span>
      </div>

      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-2 bg-theme-page border border-theme rounded-xl text-sm text-theme-primary focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
        </div>
      </div>

      <nav className="flex-grow px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-theme-muted hover:bg-theme-page hover:text-theme-primary"
              }
            `}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-theme space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-theme-muted hover:bg-theme-page hover:text-theme-primary transition-all">
          <Settings className="w-5 h-5" />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      <div className="p-4">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl text-white">
          <p className="text-xs opacity-80 mb-1">Current Plan</p>
          <p className="text-sm font-bold mb-3">Enterprise Pro</p>
          <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-semibold transition-all">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
};
