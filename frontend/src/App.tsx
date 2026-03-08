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

import { ReactLenis } from "@studio-freight/react-lenis";

function App() {
  return (
    <ReactLenis root>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Axythic Fin Suite */}
          <Route path="/axythicfin/dashboard" element={<FinanceDashboard />} />

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
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;
