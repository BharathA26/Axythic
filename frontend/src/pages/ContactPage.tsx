import ContactUs from "../components/ContactUs";
import PublicPageHero from "../components/PublicPageHero";
import PublicPageLayout from "../components/PublicPageLayout";

export default function ContactPage() {
  return (
    <PublicPageLayout>
      <PublicPageHero
        eyebrow="Contact Axythic"
        title="Share the Software or Web Project You Want to Discuss"
        description="Send the project context, users, goals, current constraints, and any known technical requirements. Axythic can then review the enquiry and respond through the contact details you provide."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Contact", to: "#" },
        ]}
      />
      <div className="border-t border-theme">
        <ContactUs />
      </div>
    </PublicPageLayout>
  );
}
