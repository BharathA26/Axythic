import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CodeDemo from "../components/CodeDemo";
import OurStory from "../components/OurStory";
import VisionMission from "../components/VisionMission";
import Features from "../components/Features";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-900 flex flex-col overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CodeDemo />
        <OurStory />
        <VisionMission />
        <Features />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <ContactUs />
      </main>
      <Footer
        onShowPrivacyPolicy={() => navigate("/privacy-policy")}
        onShowTerms={() => navigate("/terms")}
      />
      <BackToTop />
    </div>
  );
}

export default Home;
