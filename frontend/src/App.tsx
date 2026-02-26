import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import VisionMission from "./components/VisionMission";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import CTA from "./components/CTA";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      // If there is any hash navigation (like clicking 'Our Story'), close the privacy policy
      if (window.location.hash) {
        setIsPrivacyPolicyOpen(false);
        setIsTermsOpen(false);
        // Add a slight delay to allow React to render the main page before scrolling
        setTimeout(() => {
          const elementId = window.location.hash.substring(1);
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-900 bg-white flex flex-col">
      <Navbar />
      {isPrivacyPolicyOpen ? (
        <main className="flex-grow">
          <PrivacyPolicy
            onBack={() => {
              setIsPrivacyPolicyOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </main>
      ) : isTermsOpen ? (
        <main className="flex-grow">
          <TermsAndConditions
            onBack={() => {
              setIsTermsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </main>
      ) : (
        <main className="flex-grow">
          <Hero />
          <OurStory />
          <VisionMission />
          <TechStack />
          <Portfolio />
          <FAQ />
          <ContactUs />
          <CTA />
        </main>
      )}
      <Footer
        onShowPrivacyPolicy={() => {
          setIsTermsOpen(false);
          setIsPrivacyPolicyOpen(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onShowTerms={() => {
          setIsPrivacyPolicyOpen(false);
          setIsTermsOpen(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}

export default App;
