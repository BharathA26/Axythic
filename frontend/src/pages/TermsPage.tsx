import PageCTA from "../components/PageCTA";
import TermsAndConditions from "../components/TermsAndConditions";
import PublicPageLayout from "../components/PublicPageLayout";

export default function TermsPage() {
  return (
    <PublicPageLayout>
      <TermsAndConditions />
      <PageCTA
        eyebrow="Terms questions"
        title="Need clarification before discussing a project?"
        description="Send the relevant context through the contact page so the question can be reviewed alongside your project requirement."
        primary={{ label: "Contact Axythic", to: "/contact" }}
        secondary={{ label: "View services", to: "/services/custom-software-development" }}
      />
    </PublicPageLayout>
  );
}
