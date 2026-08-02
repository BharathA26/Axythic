import PageCTA from "../components/PageCTA";
import PrivacyPolicy from "../components/PrivacyPolicy";
import PublicPageLayout from "../components/PublicPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <PublicPageLayout>
      <PrivacyPolicy />
      <PageCTA
        eyebrow="Privacy questions"
        title="Need clarification about information submitted through this website?"
        description="Use the contact page to send a privacy-related question or request using the published Axythic contact details."
        primary={{ label: "Contact Axythic", to: "/contact" }}
        secondary={{ label: "Return home", to: "/" }}
      />
    </PublicPageLayout>
  );
}
