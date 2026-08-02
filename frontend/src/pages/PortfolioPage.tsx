import PageCTA from "../components/PageCTA";
import Portfolio from "../components/Portfolio";
import PublicPageHero from "../components/PublicPageHero";
import PublicPageLayout from "../components/PublicPageLayout";

export default function PortfolioPage() {
  return (
    <PublicPageLayout>
      <PublicPageHero
        eyebrow="Axythic portfolio"
        title="Explore Interactive Product and Interface Demonstrations"
        description="Browse finance, learning, e-commerce, HR, interactive web, and mobile-focused concepts built with fictional or sample content."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Portfolio", to: "#" },
        ]}
        primaryCta={{ label: "Discuss your project", to: "/contact" }}
        secondaryCta={{ label: "Explore services", to: "/services/web-development" }}
      />
      <Portfolio />
      <PageCTA
        eyebrow="Your requirement"
        title="Need an experience designed around your own users and workflow?"
        description="Share the problem, audience, and constraints you already know. Axythic can use that context to begin a focused project discussion."
        primary={{ label: "Discuss your project", to: "/contact" }}
        secondary={{ label: "Learn about Axythic", to: "/about" }}
      />
    </PublicPageLayout>
  );
}
