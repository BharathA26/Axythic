import { useLocation, Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  Layers,
  Inbox,
  Users,
  Mail,
  ShoppingCart,
  Settings,
  HelpCircle,
  LogOut,
  Award,
  CheckSquare,
  BarChart,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which context we are in based on the route to render different sidebars
  const isStudentView = currentPath.includes("/eduquest/student");
  const isCourseManagerView = currentPath.includes("/eduquest/courses");
  const isAdminView = currentPath.includes("/eduquest/admin");

  return (
    <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col h-full flex-shrink-0">
      {/* Brand Header */}
      <div className="h-20 flex items-center px-6 border-b border-white">
        <div className="flex items-center gap-2 text-[#5E2ADA]">
          {isStudentView ? (
            <>
              <span className="w-8 h-8 rounded-full bg-[#5E2ADA] text-white flex items-center justify-center font-bold text-lg">
                A
              </span>
              <span className="text-xl font-bold text-gray-900 tracking-tight ml-1">
                Axythic Edu
              </span>
            </>
          ) : (
            <>
              <span className="w-8 h-8 rounded-lg bg-[#5E2ADA] flex items-center justify-center text-white">
                <Layers className="w-5 h-5 text-white transform -rotate-45" />
              </span>
              <span className="text-xl font-bold text-gray-900 ml-1">
                EduQuest
              </span>
            </>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
        {/* === STUDENT VIEW MENU === */}
        {isStudentView && (
          <>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Overview
            </div>
            <NavItem
              icon={<Home />}
              label="Dashboard"
              to="/eduquest/student"
              active={currentPath === "/eduquest/student"}
            />
            <NavItem
              icon={<BookOpen />}
              label="My courses"
              to="/eduquest/student/courses"
              active={currentPath === "/eduquest/student/courses"}
            />
            <NavItem
              icon={<Inbox />}
              label="Inbox"
              to="/eduquest/student/inbox"
              active={currentPath === "/eduquest/student/inbox"}
              badge="2"
            />
            <NavItem
              icon={<CheckSquare />}
              label="Tasks"
              to="/eduquest/student/tasks"
              active={currentPath === "/eduquest/student/tasks"}
            />

            <div className="mt-8 mb-3 flex items-center justify-between px-3">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-600 transition-colors cursor-pointer">
                <Link to="/eduquest/student/team">My Team</Link>
              </span>
              <button className="w-5 h-5 rounded hover:bg-gray-100 flex items-center justify-center text-gray-400">
                +
              </button>
            </div>

            {/* Team Members List */}
            <div className="space-y-4 px-3">
              <TeamMember
                name="Mark Johnson"
                role="Design Handoff Course"
                img="https://i.pravatar.cc/150?img=11"
              />
              <TeamMember
                name="Lisa Wong"
                role="Design Handoff Course"
                img="https://i.pravatar.cc/150?img=5"
              />
              <TeamMember
                name="Chloe Davis"
                role="Project Management"
                img="https://i.pravatar.cc/150?img=9"
              />
            </div>
          </>
        )}

        {/* === ADMIN / COURSE VIEW MENU === */}
        {(isAdminView || isCourseManagerView) && (
          <>
            <NavItem
              icon={<Home />}
              label="Dashboard"
              to="/eduquest/admin"
              active={currentPath === "/eduquest/admin"}
            />
            <NavItem
              icon={<Layers />}
              label="Courses & Programs"
              to="/eduquest/courses"
              active={currentPath === "/eduquest/courses"}
            />
            <NavItem icon={<Users />} label="Users" to="#" />
            <NavItem icon={<Mail />} label="Messages" to="#" />
            <NavItem icon={<ShoppingCart />} label="Sales" to="#" />
            <NavItem icon={<BarChart />} label="Analytics" to="#" />
            <NavItem icon={<Settings />} label="Settings" to="#" />

            {isCourseManagerView && (
              <>
                <div className="mt-8 mb-3 px-3">
                  <span className="text-xs font-semibold text-gray-800 tracking-wide flex items-center justify-between cursor-pointer">
                    Others{" "}
                    <span className="transform rotate-180 text-gray-400">
                      &#9662;
                    </span>
                  </span>
                </div>
                <NavItem icon={<Award />} label="Certificates" to="#" isSub />
                <NavItem
                  icon={<CheckSquare />}
                  label="Review Center"
                  to="#"
                  isSub
                />
                <NavItem
                  icon={<HelpCircle />}
                  label="Question Banks"
                  to="#"
                  isSub
                />
                <NavItem
                  icon={<BookOpen />}
                  label="Course Forms"
                  to="#"
                  isSub
                />

                <div className="mt-6 mb-3 px-3">
                  <span className="text-xs font-semibold text-gray-800 tracking-wide flex items-center justify-between cursor-pointer">
                    Top Courses{" "}
                    <span className="transform rotate-180 text-gray-400">
                      &#9662;
                    </span>
                  </span>
                </div>
                <div className="space-y-2 px-3 pb-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    UIUX Design
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Brand Design
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    Digital Marketing
                  </div>
                </div>

                {/* Upgrade Ad */}
                <div className="mx-3 mt-4 p-4 rounded-xl border border-gray-100 bg-gray-50 shadow-sm relative overflow-hidden">
                  <div className="text-[#5E2ADA] mb-2">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    AI-powered LMS ✨
                  </h4>
                  <p className="text-xs text-gray-500 mb-4 leading-tight">
                    Create your course and Share it this platform
                  </p>
                  <button className="w-full bg-gray-900 text-white rounded-lg py-2 text-xs font-semibold hover:bg-gray-800 transition-colors">
                    Upgrade Now
                  </button>
                  <button className="w-full mt-2 text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors">
                    Remind me later
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Bottom Profile / Settings */}
      {isStudentView && (
        <div className="p-4 border-t border-gray-50 flex-shrink-0 space-y-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
            Settings
          </div>
          <NavItem
            icon={<Settings className="w-4 h-4" />}
            label="Account Settings"
            to="/eduquest/student/settings"
            active={currentPath === "/eduquest/student/settings"}
          />
          <NavItem
            icon={<BarChart className="w-4 h-4" />}
            label="Your Plan"
            to="/eduquest/student/plan"
            active={currentPath === "/eduquest/student/plan"}
          />
          <NavItem
            icon={<HelpCircle className="w-4 h-4" />}
            label="Help & FAQs"
            to="/eduquest/student/help"
            active={currentPath === "/eduquest/student/help"}
          />

          <div className="mt-6 flex items-center gap-3 px-3 py-2">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="User"
              className="w-8 h-8 rounded-full ring-2 ring-white"
            />
            <div>
              <p className="text-sm font-bold text-gray-900">Kate Ashy</p>
              <p className="text-xs text-gray-500">Premium plan</p>
            </div>
          </div>

          <div className="px-3 mt-4">
            <button className="flex items-center gap-2 text-red-500 text-sm font-semibold hover:text-red-600 transition-colors">
              <LogOut className="w-4 h-4 transform rotate-180" /> Logout
            </button>
          </div>
        </div>
      )}

      {!isStudentView && (
        <div className="p-4 border-t border-gray-50 flex items-center justify-between text-gray-400">
          <button className="p-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      )}
    </aside>
  );
}

function NavItem({
  icon,
  label,
  to,
  active = false,
  badge,
  isSub = false,
}: any) {
  return (
    <Link
      to={to}
      className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group ${
        active
          ? "bg-[#5E2ADA]/5 text-[#5E2ADA]"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <div
        className={`flex items-center gap-3 ${active ? "font-semibold" : "font-medium"}`}
      >
        <div
          className={`${isSub ? "w-4 h-4 text-blue-500" : "w-5 h-5"} ${active ? "text-[#5E2ADA]" : "text-gray-400 group-hover:text-gray-600"} transition-colors`}
        >
          {icon}
        </div>
        <span
          className={`${isSub ? "text-[13px] text-gray-500 font-normal group-hover:text-gray-800" : "text-sm"}`}
        >
          {label}
        </span>
      </div>

      {active && !isSub && (
        <div className="w-1.5 h-6 bg-[#5E2ADA] rounded-full absolute -ml-4" />
      )}

      {badge && (
        <span className="bg-[#5E2ADA]/10 text-[#5E2ADA] text-[10px] font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
}

function TeamMember({
  name,
  role,
  img,
}: {
  name: string;
  role: string;
  img: string;
}) {
  return (
    <div className="flex items-center gap-3 hover:bg-gray-50 p-2 -mx-2 rounded-lg cursor-pointer transition-colors">
      <img src={img} alt={name} className="w-8 h-8 rounded-full bg-gray-200" />
      <div className="flex-1 min-w-0">
        <h5 className="text-[13px] font-semibold text-gray-900 truncate">
          {name}
        </h5>
        <p className="text-[11px] text-gray-500 truncate">{role}</p>
      </div>
    </div>
  );
}
