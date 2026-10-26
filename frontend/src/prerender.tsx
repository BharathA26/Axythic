/* eslint-disable react-refresh/only-export-components */
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import CustomSoftwareDevelopmentPage from "./pages/services/CustomSoftwareDevelopmentPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import MobileAppDevelopmentPage from "./pages/services/MobileAppDevelopmentPage";
import AboutPage from "./pages/AboutPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";

const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  "/": Home,
  "/services/custom-software-development": CustomSoftwareDevelopmentPage,
  "/services/web-development": WebDevelopmentPage,
  "/services/mobile-app-development": MobileAppDevelopmentPage,
  "/about": AboutPage,
  "/case-studies": CaseStudiesPage,
  "/portfolio": PortfolioPage,
  "/contact": ContactPage,
  "/privacy-policy": PrivacyPolicyPage,
  "/terms": TermsPage,
};

export function render(url: string): string {
  const Component = ROUTE_COMPONENTS[url] || Home;
  return renderToString(
    <ThemeProvider>
      <MemoryRouter initialEntries={[url]}>
        <Component />
      </MemoryRouter>
    </ThemeProvider>,
  );
}

export { PUBLIC_ROUTES, SITE_URL, getRouteSeo } from "./seo/routes";

