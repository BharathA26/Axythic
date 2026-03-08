import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import FinanceDashboard from "./pages/FinanceDashboard";
import Shopcart from "./pages/Shopcart";

import EduQuestLayout from "./pages/EduQuestLMS/Layout";
import StudentDashboard from "./pages/EduQuestLMS/StudentDashboard";
import CourseManager from "./pages/EduQuestLMS/CourseManager";
import AdminDashboard from "./pages/EduQuestLMS/AdminDashboard";
import MyCourses from "./pages/EduQuestLMS/MyCourses";
import Inbox from "./pages/EduQuestLMS/Inbox";
import Tasks from "./pages/EduQuestLMS/Tasks";
import MyTeam from "./pages/EduQuestLMS/MyTeam";
import AccountSettings from "./pages/EduQuestLMS/AccountSettings";
import YourPlan from "./pages/EduQuestLMS/YourPlan";
import HelpFaqs from "./pages/EduQuestLMS/HelpFaqs";

import HRMDashboard from "./pages/HRMPlatform/Dashboard";
const PersonnelList = lazy(() => import("./pages/HRMPlatform/PersonnelList"));
const CandidateProfile = lazy(
  () => import("./pages/HRMPlatform/CandidateProfile"),
);
const Applications = lazy(() => import("./pages/HRMPlatform/Applications"));
const TalentPool = lazy(() => import("./pages/HRMPlatform/TalentPool"));
const Events = lazy(() => import("./pages/HRMPlatform/Events"));
const Settings = lazy(() => import("./pages/HRMPlatform/Settings"));

import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Axythic Fin Suite */}
            <Route
              path="/axythicfin/dashboard"
              element={<FinanceDashboard />}
            />

            {/* Shopcart */}
            <Route path="/shopcart" element={<Shopcart />} />

            {/* EduQuest LMS */}
            <Route path="/eduquest" element={<EduQuestLayout />}>
              <Route
                index
                element={<Navigate to="/eduquest/student" replace />}
              />
              <Route path="student" element={<StudentDashboard />} />
              <Route path="student/courses" element={<MyCourses />} />
              <Route path="student/inbox" element={<Inbox />} />
              <Route path="student/tasks" element={<Tasks />} />
              <Route path="student/team" element={<MyTeam />} />
              <Route path="student/settings" element={<AccountSettings />} />
              <Route path="student/plan" element={<YourPlan />} />
              <Route path="student/help" element={<HelpFaqs />} />

              <Route path="courses" element={<CourseManager />} />
              <Route path="admin" element={<AdminDashboard />} />
            </Route>

            {/* HRM Platform */}
            <Route
              path="/hrm/*"
              element={
                <Suspense
                  fallback={
                    <div className="min-h-screen bg-theme-page flex items-center justify-center text-blue-500">
                      Loading...
                    </div>
                  }
                >
                  <Routes>
                    <Route path="dashboard" element={<HRMDashboard />} />
                    <Route path="personnel" element={<PersonnelList />} />
                    <Route path="profile" element={<CandidateProfile />} />
                    <Route path="applications" element={<Applications />} />
                    <Route path="talent" element={<TalentPool />} />
                    <Route path="events" element={<Events />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;
