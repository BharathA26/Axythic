import {
  Sparkles,
  Play,
  ChevronLeft,
  ChevronRight,
  Video,
  Calendar,
  MoreVertical,
  ExternalLink,
} from "lucide-react";

export default function StudentDashboard() {
  const continueWatching = [
    {
      title: "Workflow Automation: Streamline repetitive tasks with...",
      mentor: "Sofia Lindberg",
      progress: 98,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      icon: "bg-orange-100 text-orange-500",
      iconColor: "#f97316",
    },
    {
      title: "Project Management: Run projects effectively",
      mentor: "Daniel Scott",
      progress: 67,
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400",
      icon: "bg-gray-800 text-white",
      iconColor: "#ffffff",
    },
    {
      title: "Design Handoff: Collaborate seamlessly with developers",
      mentor: "Amelia Torres",
      progress: 25,
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
      icon: "bg-pink-100 text-pink-500",
      iconColor: "#ec4899",
    },
    {
      title: "Public Speaking for Introverts: Captivate your audience",
      mentor: "Chris Evans",
      progress: 12,
      image:
        "https://images.unsplash.com/photo-1475721028070-2051152a4eb8?auto=format&fit=crop&q=80&w=400",
      icon: "bg-blue-100 text-blue-500",
      iconColor: "#3b82f6",
    },
    {
      title: "Cybersecurity Fundamentals: Protect your data",
      mentor: "Marcus Vance",
      progress: 5,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      icon: "bg-emerald-100 text-emerald-500",
      iconColor: "#10b981",
    },
    {
      title: "Data Visualization: Telling stories with numbers",
      mentor: "Alex Chang",
      progress: 42,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      icon: "bg-purple-100 text-purple-500",
      iconColor: "#a855f7",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6">
      {/* Left Main Content */}
      <div className="flex-1 space-y-6 min-w-0">
        {/* AI Banner Card */}
        <div className="bg-gradient-to-r from-[#9061F9] to-[#60A5FA] rounded-3xl p-8 text-white relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-y-1/2"></div>

          <div className="relative z-10 max-w-sm">
            <h2 className="text-3xl font-bold mb-3 leading-tight">
              Enhance your learning with AI
            </h2>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              Discover tools that enhance learning and help you stay focused.
            </p>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
              Try for free
            </button>
          </div>

          {/* Mock AI Conversation Graphic */}
          <div className="relative z-10 bg-white text-gray-800 rounded-2xl p-4 w-full md:w-80 shadow-lg transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-[#5E2ADA]" /> AI Assistant
              </div>
              <div className="flex gap-2 text-gray-400">
                <ExternalLink className="w-3.5 h-3.5 block" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2 justify-end">
                <div className="bg-gray-50 rounded-xl rounded-tr-sm px-3 py-2 text-[11px] text-gray-600 max-w-[80%] border border-gray-100">
                  Please summarize the key takeaways from the Design Handoff
                  module.
                </div>
                <img
                  src="https://i.pravatar.cc/150?img=5"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#5E2ADA] flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-3 h-3" />
                </div>
                <div className="bg-gray-50 rounded-xl rounded-tl-sm px-3 py-2 text-[11px] text-gray-600 max-w-[80%] border border-gray-100 font-medium">
                  Sure! Here is the main points from the "Design Handoff"
                  module:
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Watching */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Continue Watching
            </h3>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 bg-white shadow-sm hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {continueWatching.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="h-32 rounded-xl overflow-hidden relative mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                      <Play className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                  {/* Floating Icon Map */}
                  <div
                    className={`absolute top-2 right-2 w-6 h-6 rounded-lg ${item.icon} flex items-center justify-center shadow-lg border border-white/20`}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: item.iconColor }}
                    >
                      *
                    </span>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1 leading-tight line-clamp-2 min-h-[40px]">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mb-4">
                  Mentor: {item.mentor}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-600 font-medium">
                  {item.progress}% Complete
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-[#5E2ADA] h-full rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Split: Deadlines & Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  Upcoming deadlines
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +3 new
                  </span>
                  <span className="text-sm text-gray-500">
                    Best results so far!
                  </span>
                </div>
              </div>
              <button className="text-sm font-semibold text-gray-900 flex items-center hover:text-[#5E2ADA]">
                See all <ChevronRight className="w-4 h-4 ml-1 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4 mt-6">
              {/* Item 1 */}
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Data Analytics
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Deadline 03-17-2025
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 transform -rotate-90">
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="transparent"
                        stroke="#f3f4f6"
                        strokeWidth="4"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="transparent"
                        stroke="#5E2ADA"
                        strokeWidth="4"
                        strokeDasharray="100 100"
                        strokeDashoffset="10"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-[10px] font-bold text-gray-900">
                      90%
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Design Handoff
                  </h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Deadline 03-24-2025
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 transform -rotate-90">
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="transparent"
                        stroke="#f3f4f6"
                        strokeWidth="4"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="transparent"
                        stroke="#10b981"
                        strokeWidth="4"
                        strokeDasharray="100 100"
                        strokeDashoffset="40"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-[10px] font-bold text-gray-900">
                      60%
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Activity Chart Area */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Activity</h3>
              <button className="flex items-center gap-1 text-xs font-semibold text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg">
                <Calendar className="w-3.5 h-3.5" /> Last 7 days{" "}
                <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
              </button>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-gray-900 flex items-baseline gap-2">
                32,8{" "}
                <span className="text-sm font-medium text-gray-500 leading-tight">
                  hours
                  <br />
                  spent
                </span>
              </div>
            </div>

            {/* Mock Bar Chart */}
            <div className="h-40 flex items-end justify-between px-2 gap-2 mt-auto relative z-10 w-full pt-4">
              {/* Horizontal average line */}
              <div className="absolute w-full border-b-2 border-dashed border-gray-200 top-[60%] left-0 z-0">
                <span className="absolute -top-3 left-0 bg-gray-800 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                  4.6 hours
                </span>
              </div>

              {/* Bars */}
              <div className="w-1/7 flex flex-col items-center gap-2 z-10">
                <div className="w-6 md:w-8 h-12 bg-purple-100 rounded-t-lg mix-blend-multiply"></div>
                <span className="text-[10px] font-medium text-gray-400">
                  Mon
                </span>
              </div>
              <div className="w-1/7 flex flex-col items-center gap-2 z-10">
                <div className="w-6 md:w-8 h-8 bg-purple-100 rounded-t-lg mix-blend-multiply"></div>
                <span className="text-[10px] font-medium text-gray-400">
                  Tue
                </span>
              </div>
              <div className="w-1/7 flex flex-col items-center gap-2 z-10">
                <div className="w-6 md:w-8 h-16 bg-purple-100 rounded-t-lg mix-blend-multiply"></div>
                <span className="text-[10px] font-medium text-gray-400">
                  Wed
                </span>
              </div>
              <div className="w-1/7 flex flex-col items-center gap-2 z-10">
                <div className="w-6 md:w-8 h-14 bg-purple-100 rounded-t-lg mix-blend-multiply"></div>
                <span className="text-[10px] font-medium text-gray-400">
                  Thu
                </span>
              </div>
              {/* Active Highlighted Bar */}
              <div className="w-1/7 flex flex-col items-center gap-2 z-10">
                <div className="w-6 md:w-8 h-24 bg-[#5E2ADA] rounded-t-lg shadow-lg shadow-[#5E2ADA]/40"></div>
                <span className="text-[10px] font-bold text-gray-900">Fri</span>
              </div>
              <div className="w-1/7 flex flex-col items-center gap-2 z-10">
                <div className="w-6 md:w-8 h-10 bg-purple-100 rounded-t-lg mix-blend-multiply"></div>
                <span className="text-[10px] font-medium text-gray-400">
                  Sat
                </span>
              </div>
              <div className="w-1/7 flex flex-col items-center gap-2 z-10">
                <div className="w-6 md:w-8 h-6 bg-purple-100 rounded-t-lg mix-blend-multiply"></div>
                <span className="text-[10px] font-medium text-gray-400">
                  Sun
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Schedule */}
      <div className="w-full xl:w-80 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col h-fit shrink-0">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule</h3>

        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="Kate"
            className="w-14 h-14 rounded-full ring-4 ring-purple-50"
          />
          <div>
            <h4 className="font-bold text-gray-900">Good Morning Kate! 👋</h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Your focus today brings you one step closer to mastery.
            </p>
          </div>
        </div>

        {/* Calendar Strip */}
        <div className="mb-8">
          <div className="flex items-center gap-2 font-bold text-gray-900 mb-4 text-sm">
            <Calendar className="w-4 h-4 text-gray-400" /> January, 2025
          </div>

          <div className="flex justify-between items-center text-center">
            <div className="flex flex-col gap-1 items-center px-1">
              <span className="text-[10px] text-gray-400 font-medium">Mon</span>
              <span className="text-sm font-bold text-gray-900">03</span>
            </div>
            {/* Active Date */}
            <div className="flex flex-col gap-1 items-center px-2 py-1 bg-white rounded-lg shadow-sm border border-gray-100 relative">
              <span className="text-[10px] text-[#5E2ADA] font-bold">Tue</span>
              <span className="text-sm font-bold text-gray-900">04</span>
              <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#5E2ADA]"></div>
            </div>
            <div className="flex flex-col gap-1 items-center px-1">
              <span className="text-[10px] text-gray-400 font-medium">Wed</span>
              <span className="text-sm font-bold text-gray-500">05</span>
            </div>
            <div className="flex flex-col gap-1 items-center px-1">
              <span className="text-[10px] text-gray-400 font-medium">Thu</span>
              <span className="text-sm font-bold text-gray-500">06</span>
            </div>
            <div className="flex flex-col gap-1 items-center px-1">
              <span className="text-[10px] text-gray-400 font-medium">Fri</span>
              <span className="text-sm font-bold text-gray-900">07</span>
              <div className="w-1 h-1 rounded-full bg-red-400 mt-0.5 opacity-50"></div>
            </div>
            <div className="flex flex-col gap-1 items-center px-1">
              <span className="text-[10px] text-gray-400 font-medium">Sat</span>
              <span className="text-sm font-bold text-gray-900">08</span>
            </div>
            <div className="flex flex-col gap-1 items-center px-1">
              <span className="text-[10px] text-gray-400 font-medium">Sun</span>
              <span className="text-sm font-bold text-gray-900">09</span>
            </div>
          </div>
          <div className="mt-2 flex justify-center">
            <ChevronRight className="w-4 h-4 text-gray-300 rotate-90" />
          </div>
        </div>

        {/* Today Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-4">
            <h4 className="font-bold text-gray-900">Today</h4>
            <span className="text-xs text-gray-400">
              TIME &nbsp;&nbsp;&nbsp;&nbsp; COURSE
            </span>
            <MoreVertical className="w-4 h-4 text-gray-300" />
          </div>

          <div className="space-y-4">
            {/* Timeline Item 1 */}
            <div className="flex gap-4">
              <div className="text-[11px] font-bold text-gray-500 flex flex-col justify-start pt-1 shrink-0 w-10 text-right">
                11:35{" "}
                <span className="text-gray-300 text-[9px] mt-0.5 font-medium">
                  13:05
                </span>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 flex-1 border border-gray-100/50">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#5E2ADA] bg-purple-50 px-1.5 py-0.5 rounded">
                      <Video className="w-3 h-3" /> Lecture
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>{" "}
                      LIVE
                    </span>
                  </div>
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>
                <h5 className="font-bold text-gray-900 text-sm mb-1">
                  Project Management
                </h5>
                <p className="text-[10px] text-gray-500 mb-3">
                  Mentor: Daniel Scott
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-[#5E2ADA] text-white text-[10px] font-bold px-4 py-1.5 rounded-full hover:bg-[#4d22b3] transition-colors">
                    Join now
                  </button>
                  <div className="flex -space-x-1.5">
                    <img
                      src="https://i.pravatar.cc/150?img=11"
                      className="w-5 h-5 rounded-full ring-2 ring-white"
                    />
                    <img
                      src="https://i.pravatar.cc/150?img=12"
                      className="w-5 h-5 rounded-full ring-2 ring-white"
                    />
                    <div className="w-5 h-5 rounded-full ring-2 ring-white bg-gray-800 text-white flex items-center justify-center text-[8px] font-bold">
                      +2
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-4">
              <div className="text-[11px] font-bold text-gray-500 flex flex-col justify-start pt-1 shrink-0 w-10 text-right">
                14:30{" "}
                <span className="text-gray-300 text-[9px] mt-0.5 font-medium">
                  15:50
                </span>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 flex-1 border border-transparent hover:border-gray-100 hover:shadow-sm transition-all">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                      <Video className="w-3 h-3" /> Workshop
                    </span>
                  </div>
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>
                <h5 className="font-bold text-gray-900 text-sm mb-0.5">
                  Workflow Automation
                </h5>
                <p className="text-[10px] text-gray-500">
                  Mentor: Sofia Lindberg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tomorrow Section */}
        <div>
          <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2 mb-4">
            Tomorrow
          </h4>
          <div className="flex gap-4">
            <div className="text-[11px] font-bold text-gray-500 flex flex-col justify-start pt-1 shrink-0 w-10 text-right">
              10:20{" "}
              <span className="text-gray-300 text-[9px] mt-0.5 font-medium">
                12:00
              </span>
            </div>
            <div className="bg-white rounded-2xl p-4 flex-1 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    <Video className="w-3 h-3" /> Workshop
                  </span>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <h5 className="font-bold text-gray-900 text-sm mb-0.5">
                Project Management
              </h5>
              <p className="text-[10px] text-gray-500">Mentor: Daniel Scott</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
