import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Search,
  Bell,
  ChevronLeft,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isStudentView = currentPath.includes("/eduquest/student");

  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (msgRef.current && !msgRef.current.contains(event.target as Node)) {
        setShowMessages(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-white/50 backdrop-blur-sm sticky top-0 z-30 flex items-center justify-between px-6 md:px-8 shrink-0">
      {/* Left side: Breadcrumb or Search based on view */}
      <div className="flex-1 flex items-center">
        {isStudentView ? (
          <div className="relative w-full max-w-md hidden md:block">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses, lessons..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA] shadow-sm transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="font-bold text-lg text-gray-900 hidden md:block">
              {currentPath.includes("courses") ? "Courses & Programs" : "Home"}
            </div>

            {/* Divider for Admin breadcrumb style */}
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center -ml-2 mr-2">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </span>
              <Link to="#" className="hover:text-gray-900">
                {currentPath.includes("courses")
                  ? "Courses & Programs"
                  : "Home"}
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">
                {currentPath.includes("courses") ? "Courses" : "Dashboard"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Right side Actions */}
      <div className="flex items-center gap-3">
        {!isStudentView && (
          <button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors shadow-sm">
            <Search className="w-5 h-5" />
          </button>
        )}

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowMessages(false);
            }}
            className={`w-10 h-10 rounded-full bg-white border flex items-center justify-center transition-colors shadow-sm relative ${showNotifications ? "border-[#5E2ADA] text-[#5E2ADA] bg-[#5E2ADA]/5" : "border-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}
          >
            <Bell className="w-5 h-5" />
            <span className="w-2 h-2 rounded-full bg-red-500 absolute top-2.5 right-2.5 ring-2 ring-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
              <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Notifications</h3>
                <button className="text-xs text-[#5E2ADA] font-semibold hover:underline">
                  Mark all read
                </button>
              </div>
              <div className="divide-y divide-gray-50 max-h-96 overflow-y-auto">
                <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors bg-blue-50/30">
                  <p className="text-sm text-gray-900 font-medium mb-1">
                    New Assignment Posted
                  </p>
                  <p className="text-xs text-gray-500">
                    Project Management has a new assignment due next week.
                  </p>
                  <p className="text-[10px] text-gray-400 mt-2">2 hours ago</p>
                </div>
                <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                  <p className="text-sm text-gray-900 font-medium mb-1">
                    System Update
                  </p>
                  <p className="text-xs text-gray-500">
                    EduQuest will be undergoing maintenance on Sunday 2AM EST.
                  </p>
                  <p className="text-[10px] text-gray-400 mt-2">Yesterday</p>
                </div>
              </div>
              <div className="p-3 border-t border-gray-50 bg-gray-50 text-center">
                <button className="text-xs font-semibold text-gray-600 hover:text-gray-900">
                  View All Updates
                </button>
              </div>
            </div>
          )}
        </div>

        {isStudentView ? (
          <div className="relative" ref={msgRef}>
            <button
              onClick={() => {
                setShowMessages(!showMessages);
                setShowNotifications(false);
              }}
              className={`w-10 h-10 rounded-full bg-white border flex items-center justify-center transition-colors shadow-sm relative ${showMessages ? "border-[#5E2ADA] text-[#5E2ADA] bg-[#5E2ADA]/5" : "border-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}
            >
              <MessageSquare className="w-5 h-5" />
            </button>

            {showMessages && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">Messages</h3>
                  <Link
                    to="/eduquest/student/inbox"
                    onClick={() => setShowMessages(false)}
                    className="text-xs text-[#5E2ADA] font-semibold hover:underline"
                  >
                    Go to Inbox
                  </Link>
                </div>
                <div className="divide-y divide-gray-50 max-h-96 overflow-y-auto">
                  <Link
                    to="/eduquest/student/inbox"
                    onClick={() => setShowMessages(false)}
                    className="flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <img
                      src="https://i.pravatar.cc/150?img=5"
                      className="w-10 h-10 rounded-full bg-gray-100 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900 font-semibold truncate">
                        Sofia Lindberg
                      </p>
                      <p className="text-xs text-gray-500 truncate mt-0.5">
                        Please review the latest wireframes...
                      </p>
                    </div>
                  </Link>
                  <div className="flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer transition-colors opacity-60">
                    <img
                      src="https://i.pravatar.cc/150?img=11"
                      className="w-10 h-10 rounded-full bg-gray-100 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900 font-semibold truncate">
                        Mark Johnson
                      </p>
                      <p className="text-xs text-gray-500 truncate mt-0.5">
                        Sounds good, thanks!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button className="hidden md:flex items-center gap-2 bg-white border border-gray-100 py-1.5 pl-2 pr-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm text-gray-700">
            <span className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs uppercase">
              FA
            </span>
            Filllo Academy
            <ChevronDown className="w-4 h-4 text-gray-400 ml-1" />
          </button>
        )}
      </div>
    </header>
  );
}
