import { useNavigate } from "react-router-dom";
import TermsAndConditions from "../components/TermsAndConditions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen font-sans flex flex-col overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <Navbar />
      <main className="flex-grow">
        <TermsAndConditions onBack={() => navigate("/")} />
      </main>
      <Footer
        onShowPrivacyPolicy={() => navigate("/privacy-policy")}
        onShowTerms={() => {}}
      />
    </div>
  );
}
