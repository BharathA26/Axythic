import { Suspense, lazy, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import DemoNotice from "./components/DemoNotice";
import RouteMetadata from "./components/RouteMetadata";
import { isDemoRoute } from "./seo/routes";
import { ReactLenis, useLenis } from "lenis/react";

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
const CustomSoftwareDevelopmentPage = lazy(
  () => import("./pages/services/CustomSoftwareDevelopmentPage"),
);
const WebDevelopmentPage = lazy(
  () => import("./pages/services/WebDevelopmentPage"),
);
const MobileAppDevelopmentPage = lazy(
  () => import("./pages/services/MobileAppDevelopmentPage"),
);
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { ThemeProvider } from "./context/ThemeContext";

const PageLoader = () => (
  <div className="min-h-screen bg-theme-page flex items-center justify-center text-blue-500">
    Loading...
  </div>
);

function RouteChrome() {
  const { pathname, hash, key } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    if (!hash) {
      // Keep the browser and Lenis in sync so a new route cannot inherit the
      // previous page's scroll position.
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      lenis?.scrollTo(0, { immediate: true, force: true });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));

      if (!target) return;

      const fixedHeaderOffset = 96;
      const targetTop =
        target.getBoundingClientRect().top +
        window.scrollY -
        fixedHeaderOffset;

      const scrollTop = Math.max(targetTop, 0);

      if (lenis) {
        lenis.scrollTo(scrollTop, { force: true });
      } else {
        window.scrollTo({ top: scrollTop, left: 0, behavior: "smooth" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, key, lenis]);

  return (
    <>
      <RouteMetadata />
      {isDemoRoute(pathname) && <DemoNotice />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <Router>
          <RouteChrome />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Public company and service pages */}
              <Route
                path="/services/custom-software-development"
                element={<CustomSoftwareDevelopmentPage />}
              />
              <Route
                path="/services/web-development"
                element={<WebDevelopmentPage />}
              />
              <Route
                path="/services/mobile-app-development"
                element={<MobileAppDevelopmentPage />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />

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
              <Route
                path="/demos/3d-landing-page"
                element={<Portfolio3D />}
              />

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

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;
