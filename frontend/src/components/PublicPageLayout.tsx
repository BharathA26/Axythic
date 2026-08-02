import type { ReactNode } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PublicPageLayoutProps {
  children: ReactNode;
}

export default function PublicPageLayout({
  children,
}: PublicPageLayoutProps) {
  return (
    <div
      className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-900 flex flex-col overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
