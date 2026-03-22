import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";

// Lazy-load all demo/sub-application pages to keep the initial bundle small
const FinanceDashboard = lazy(() => import("./pages/FinanceDashboard"));
const Shopcart = lazy(() => import("./pages/Shopcart"));
const Portfolio3D = lazy(() => import("./pages/Portfolio3D"));
const FitnessApp = lazy(() => import("./pages/FitnessApp"));

const EduQuestLayout = lazy(() => import("./pages/EduQuestLMS/Layout"));
const StudentDashboard = lazy(() => import("./pages/EduQuestLMS/StudentDashboard"));
const CourseManager = lazy(() => import("./pages/EduQuestLMS/CourseManager"));
const AdminDashboard = lazy(() => import("./pages/EduQuestLMS/AdminDashboard"));
const MyCourses = lazy(() => import("./pages/EduQuestLMS/MyCourses"));
const Inbox = lazy(() => import("./pages/EduQuestLMS/Inbox"));
const Tasks = lazy(() => import("./pages/EduQuestLMS/Tasks"));
const MyTeam = lazy(() => import("./pages/EduQuestLMS/MyTeam"));
const AccountSettings = lazy(() => import("./pages/EduQuestLMS/AccountSettings"));
const YourPlan = lazy(() => import("./pages/EduQuestLMS/YourPlan"));
const HelpFaqs = lazy(() => import("./pages/EduQuestLMS/HelpFaqs"));

const HRMDashboard = lazy(() => import("./pages/HRMPlatform/Dashboard"));
const PersonnelList = lazy(() => import("./pages/HRMPlatform/PersonnelList"));
const CandidateProfile = lazy(() => import("./pages/HRMPlatform/CandidateProfile"));
const Applications = lazy(() => import("./pages/HRMPlatform/Applications"));
const TalentPool = lazy(() => import("./pages/HRMPlatform/TalentPool"));
const Events = lazy(() => import("./pages/HRMPlatform/Events"));
const Settings = lazy(() => import("./pages/HRMPlatform/Settings"));

// Legal pages
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider } from "./context/ThemeContext";

const PageLoader = () => (
  <div className="min-h-screen bg-theme-page flex items-center justify-center text-blue-500">
    Loading...
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Legal */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />

              {/* Axythic Fin Suite */}
              <Route
                path="/axythicfin/dashboard"
                element={<FinanceDashboard />}
              />

              {/* Shopcart */}
              <Route path="/shopcart" element={<Shopcart />} />

              {/* Portfolio 3D */}
              <Route path="/portfolio" element={<Portfolio3D />} />

              {/* Fitness App */}
              <Route path="/fitness-app" element={<FitnessApp />} />

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
              <Route path="/hrm/*">
                <Route path="dashboard" element={<HRMDashboard />} />
                <Route path="personnel" element={<PersonnelList />} />
                <Route path="profile" element={<CandidateProfile />} />
                <Route path="applications" element={<Applications />} />
                <Route path="talent" element={<TalentPool />} />
                <Route path="events" element={<Events />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;
