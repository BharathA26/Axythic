import {
  Users,
  MessageSquare,
  TrendingUp,
  Clock,
  BookOpen,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      label: "All User",
      value: "200",
      icon: <Users className="w-4 h-4" />,
      bg: "bg-purple-100/50",
      text: "text-purple-600",
    },
    {
      label: "Conversations",
      value: "30.10k",
      icon: <MessageSquare className="w-4 h-4" />,
      bg: "bg-orange-100/50",
      text: "text-orange-500",
    },
    {
      label: "30 days sales",
      value: "80",
      icon: <TrendingUp className="w-4 h-4" />,
      bg: "bg-green-100/50",
      text: "text-green-500",
    },
    {
      label: "Avg time",
      value: "50m",
      icon: <Clock className="w-4 h-4" />,
      bg: "bg-red-100/50",
      text: "text-red-400",
    },
    {
      label: "Courses",
      value: "12",
      icon: <BookOpen className="w-4 h-4" />,
      bg: "bg-blue-100/50",
      text: "text-blue-500",
    },
    {
      label: "Categories",
      value: "05",
      icon: <Layers className="w-4 h-4" />,
      bg: "bg-yellow-100/50",
      text: "text-yellow-500",
    },
  ];

  const recentUsers = [
    {
      name: "James Brown",
      time: "2 days",
      img: "https://i.pravatar.cc/150?img=11",
      status: "offline",
    },
    {
      name: "Tony Stark",
      time: "2 days",
      img: "https://i.pravatar.cc/150?img=14",
      status: "offline",
      initials: "TS",
    },
    {
      name: "James Brown",
      time: "2 days",
      img: "https://i.pravatar.cc/150?img=13",
      status: "offline",
    },
    {
      name: "Mike Banner",
      time: "2 days",
      img: "https://i.pravatar.cc/150?img=12",
      status: "online",
      initials: "MB",
    },
  ];

  const onlineUsers = [
    {
      name: "Sophia Williams",
      time: "Join 3 months ago",
      img: "https://i.pravatar.cc/150?img=33",
      status: "online",
      initials: "SW",
    },
    {
      name: "Arthur Taylor",
      time: "Join 4 months ago",
      img: "https://i.pravatar.cc/150?img=52",
      status: "online",
    },
    {
      name: "David Smith",
      time: "Join 4 months ago",
      img: "https://i.pravatar.cc/150?img=54",
      status: "online",
      initials: "DS",
    },
    {
      name: "Harry Potter",
      time: "Join 4 months ago",
      img: "https://i.pravatar.cc/150?img=60",
      status: "online",
    },
    {
      name: "Frank Gary",
      time: "Join 4 months ago",
      img: "https://i.pravatar.cc/150?img=61",
      status: "online",
      initials: "FG",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6">
      {/* Left Main Content */}
      <div className="flex-1 space-y-6 min-w-0">
        {/* Header Title */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              Dashboard{" "}
              <span className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 text-xs mt-0.5 leading-none">
                ?
              </span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Gain real-time insights into your school's analytics and
              activities.
            </p>
          </div>
          <button className="px-5 py-2.5 bg-[#5E2ADA] text-white text-sm font-semibold rounded-lg hover:bg-[#4d22b3] transition-colors shadow-sm whitespace-nowrap hidden sm:block">
            Create Course
          </button>
        </div>

        {/* 6 Stats Cards Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.text}`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-0.5">
                  {stat.label}
                </p>
                <h4 className="text-2xl font-bold text-gray-900 leading-none">
                  {stat.value}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Main Chart Area */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          {/* Chart Tabs */}
          <div className="flex flex-wrap items-center gap-6 border-b border-gray-100 pb-4 mb-8">
            <button className="flex items-center gap-2 text-sm font-bold text-gray-900 relative">
              <CheckSquareIcon /> New signups
              <div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-gray-900"></div>
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              <LayoutIcon /> Revenue
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              <ShoppingBagIcon /> Product sales
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              <Users className="w-4 h-4" /> Active learners
            </button>

            <div className="ml-auto flex items-center gap-2 text-sm text-gray-500 font-medium cursor-pointer">
              Latest Activity{" "}
              <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] leading-none">
                ?
              </span>
            </div>
          </div>

          {/* Chart Bars */}
          <div className="relative h-64 flex items-end w-full px-4 gap-4 md:gap-8 lg:gap-12">
            {/* Y Axis Labels & Grid */}
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400 pb-8 pointer-events-none">
              <div className="flex items-center gap-4 w-full border-b border-dashed border-gray-200 pb-1">
                <span>004</span>
              </div>
              <div className="flex items-center gap-4 w-full border-b border-dashed border-gray-200 pb-1">
                <span>003</span>
              </div>
              <div className="flex items-center gap-4 w-full border-b border-dashed border-gray-200 pb-1">
                <span>002</span>
              </div>
              <div className="flex items-center gap-4 w-full border-b border-dashed border-gray-200 pb-1">
                <span>001</span>
              </div>
              <div className="flex items-center gap-4 w-full border-b border-dashed border-gray-200 pb-1">
                <span>0</span>
              </div>
            </div>

            {/* X Axis & Bars */}
            <div className="h-full w-full flex items-end justify-between pl-12 pb-8 relative z-10">
              {/* Bar 1 with Tooltip */}
              <div className="flex flex-col items-center gap-2 relative w-1/6">
                <div className="absolute -top-[52px] bg-gray-900 text-white rounded-lg p-2 text-xs font-semibold whitespace-nowrap shadow-xl z-20 tooltip-triangle">
                  11 Nov 2025
                  <div className="text-[10px] font-normal text-gray-300 mt-0.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded bg-purple-400 block"></span>{" "}
                    New Signups: 03
                  </div>
                </div>
                <div className="w-full max-w-[60px] h-[75%] bg-gradient-to-t from-[#8B5CF6] to-[#A78BFA] rounded-t-lg shadow-lg"></div>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-500 whitespace-nowrap">
                  10 Nov
                </span>
              </div>

              {/* Bar 2 */}
              <div className="flex flex-col items-center gap-2 relative w-1/6">
                <div className="w-full max-w-[60px] h-[55%] bg-purple-100 rounded-t-lg"></div>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-500 whitespace-nowrap">
                  11 Nov
                </span>
              </div>

              {/* Bar 3 */}
              <div className="flex flex-col items-center gap-2 relative w-1/6">
                <div className="w-full max-w-[60px] h-[50%] bg-purple-100 rounded-t-lg"></div>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-500 whitespace-nowrap">
                  12 Nov
                </span>
              </div>

              {/* Bar 4 */}
              <div className="flex flex-col items-center gap-2 relative w-1/6">
                <div className="w-full max-w-[60px] h-[30%] bg-purple-100 rounded-t-lg"></div>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-500 whitespace-nowrap">
                  13 Nov
                </span>
              </div>

              {/* Bar 5 */}
              <div className="flex flex-col items-center gap-2 relative w-1/6">
                <div className="w-full max-w-[60px] h-[25%] bg-purple-100 rounded-t-lg"></div>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-500 whitespace-nowrap">
                  14 Nov
                </span>
              </div>

              {/* Bar 6 */}
              <div className="flex flex-col items-center gap-2 relative w-1/6">
                <div className="w-full max-w-[60px] h-[15%] bg-purple-100 rounded-t-lg"></div>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-500 whitespace-nowrap">
                  15 Nov
                </span>
              </div>

              {/* Bar 7 */}
              <div className="flex flex-col items-center gap-2 relative w-1/6">
                <div className="w-full max-w-[60px] h-[10%] bg-purple-100 rounded-t-lg"></div>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-500 whitespace-nowrap">
                  16 Nov
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Split (Blog & Events) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          {/* Blog Block */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                How to sell Courses blog
              </h3>
              <button className="text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                See All
              </button>
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-start justify-between pb-4 border-b border-gray-50">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 leading-snug mb-1 hover:text-blue-600 cursor-pointer">
                    How To Sell Online Course On Your Shopify Store
                  </h4>
                  <p className="text-[11px] text-gray-400">2 days ago</p>
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded ml-4 whitespace-nowrap">
                  New
                </span>
              </div>
              <div className="flex items-start justify-between pb-4 border-b border-gray-50">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 leading-snug mb-1 hover:text-blue-600 cursor-pointer">
                    16 Canva Black Friday templates for online course creators
                  </h4>
                  <p className="text-[11px] text-gray-400">2 days ago</p>
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded ml-4 whitespace-nowrap">
                  New
                </span>
              </div>
              <div className="flex items-start justify-between pb-4 border-b border-gray-50">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 leading-snug mb-1 hover:text-blue-600 cursor-pointer">
                    The 14-Step Checklist To Prepare Your Online School For
                    Black Friday
                  </h4>
                  <p className="text-[11px] text-gray-400">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 leading-snug mb-1 hover:text-blue-600 cursor-pointer">
                    From Emergency Remote Training To Long Team Effective &
                    Profitable Online Learning
                  </h4>
                  <p className="text-[11px] text-gray-400">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Events Log */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Events Log</h3>
              <button className="text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                See All
              </button>
            </div>

            <div className="space-y-3 flex-1">
              {/* Event 1 */}
              <div className="flex items-center justify-between border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/150?img=68"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-gray-900">
                        Mike Banner
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                        Logged In
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> 2 hours ago
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
              </div>

              {/* Event 2 */}
              <div className="flex items-center justify-between border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-sm">
                    NS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-gray-900">
                        Nina Smith
                      </h4>
                      <span className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                        Logged Out
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> 10 hours ago
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
              </div>

              {/* Event 3 */}
              <div className="flex items-center justify-between border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/150?img=59"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-gray-900">
                        Alex Simitsis
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                        Logged In
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> 12 hours ago
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
              </div>

              {/* Event 4 */}
              <div className="flex items-center justify-between border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600 text-sm">
                    TS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-gray-900">
                        Tony Stark
                      </h4>
                      <span className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                        Logged Out
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> 15 hours ago
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Users List */}
      <div className="w-full xl:w-[300px] bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex flex-col shrink-0 h-fit">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Users</h3>
          <button className="text-xs font-semibold text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors">
            See All
          </button>
        </div>

        {/* New Users */}
        <div className="mb-6">
          <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">
            New User
          </h4>
          <div className="space-y-3">
            {recentUsers.map((user, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {user.initials ? (
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-sm">
                        {user.initials}
                      </div>
                    ) : (
                      <img
                        src={user.img}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <span
                      className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${user.status === "online" ? "bg-emerald-500" : "bg-gray-300"}`}
                    ></span>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-0.5">
                      {user.name}
                    </h5>
                    <p className="text-[11px] text-gray-400">{user.time}</p>
                  </div>
                </div>
                <button className="text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                  Contact
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Online Users */}
        <div>
          <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2 flex items-center justify-between">
            Online Users{" "}
            <span className="text-[11px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full lowercase">
              12 active
            </span>
          </h4>
          <div className="space-y-4">
            {onlineUsers.map((user, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {user.initials ? (
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center font-bold text-indigo-600 text-sm">
                        {user.initials}
                      </div>
                    ) : (
                      <img
                        src={user.img}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <span
                      className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white bg-emerald-500`}
                    ></span>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-0.5">
                      {user.name}
                    </h5>
                    <p className="text-[11px] text-gray-400">{user.time}</p>
                  </div>
                </div>
                <button className="text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                  Contact
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon Helpers
function CheckSquareIcon() {
  return (
    <svg
      className="w-4 h-4 text-gray-900"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  );
}

function ShoppingBagIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}
