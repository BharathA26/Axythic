import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CodeDemo from "../components/CodeDemo";
import OurStory from "../components/OurStory";
import VisionMission from "../components/VisionMission";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import PageCTA from "../components/PageCTA";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function Home() {
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
        <FAQ />
        <PageCTA
          eyebrow="Ready when you are"
          title="Have a software requirement you want to clarify?"
          description="Share the users, workflow, goals, and constraints you already know. Axythic can use that context to begin a focused project discussion."
          primary={{ label: "Discuss your project", to: "/contact" }}
          secondary={{ label: "View the portfolio", to: "/portfolio" }}
        />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Home;
