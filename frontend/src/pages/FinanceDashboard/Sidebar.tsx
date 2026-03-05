import {
  Search,
  Grid,
  BarChart2,
  Repeat,
  CreditCard,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import type { View } from "./index";

interface SidebarProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

type NavItem = {
  id: View;
  label: string;
  Icon: React.ElementType;
  badge?: string;
};

const mainNav: NavItem[] = [
  { id: "dashboard", label: "Dashboard", Icon: Grid },
  { id: "analytics", label: "Analytics", Icon: BarChart2, badge: "20" },
  { id: "transactions", label: "Transactions", Icon: CreditCard },
  { id: "invoices", label: "Invoices", Icon: FileText },
];

const featuresNav: NavItem[] = [
  { id: "recurring", label: "Recurring", Icon: Repeat, badge: "16" },
];

const generalNav: NavItem[] = [
  { id: "settings", label: "Settings", Icon: Settings },
  { id: "helpdesk", label: "Help Desk", Icon: HelpCircle },
];

function NavButton({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium transition-colors text-left ${
        active
          ? "bg-gray-900 text-white shadow-md shadow-gray-900/20"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <item.Icon className="w-4 h-4" />
        <span>{item.label}</span>
      </div>
      {item.badge && (
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded-full ${active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}`}
        >
          {item.badge}
        </span>
      )}
    </button>
  );
}

export default function Sidebar({ activeView, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
          A
        </div>
        <span className="font-bold text-xl text-gray-900">Axythic Fin</span>
      </div>

      {/* Search */}
      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 text-sm border-none rounded-lg pl-9 pr-12 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 opacity-50">
            <kbd className="text-xs font-sans selection:bg-transparent">⌘</kbd>
            <kbd className="text-xs font-sans selection:bg-transparent">K</kbd>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 px-4 space-y-8 pb-6">
        {/* MAIN MENU */}
        <div>
          <h3 className="px-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Main Menu
          </h3>
          <nav className="space-y-1">
            {mainNav.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                active={activeView === item.id}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </nav>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="px-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Features
          </h3>
          <nav className="space-y-1">
            {featuresNav.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                active={activeView === item.id}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </nav>
        </div>

        {/* GENERAL */}
        <div>
          <h3 className="px-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            General
          </h3>
          <nav className="space-y-1">
            {generalNav.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                active={activeView === item.id}
                onClick={() => onNavigate(item.id)}
              />
            ))}
            {/* Logout — not a view, just a styled button */}
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors text-left text-red-500 hover:bg-red-50 hover:text-red-600">
              <LogOut className="w-4 h-4" />
              <span>Log out</span>
            </button>
          </nav>
        </div>
      </div>
    </aside>
  );
}
