import { useNavigate } from "react-router-dom";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen font-sans flex flex-col overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <Navbar />
      <main className="flex-grow">
        <PrivacyPolicy onBack={() => navigate("/")} />
      </main>
      <Footer
        onShowPrivacyPolicy={() => {}}
        onShowTerms={() => navigate("/terms")}
      />
    </div>
  );
}
