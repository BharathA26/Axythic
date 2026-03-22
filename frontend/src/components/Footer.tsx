interface FooterProps {
  onShowPrivacyPolicy?: () => void;
  onShowTerms?: () => void;
}

export default function Footer({
  onShowPrivacyPolicy,
  onShowTerms,
}: FooterProps) {
  return (
    <footer className="bg-[#09090b] text-gray-400 pt-20 pb-12 relative overflow-hidden border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-2.5 text-white">
            <img
              src="/axythic-logo.svg"
              alt="Axythic logo mark"
              width={28}
              height={32}
              draggable={false}
            />
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Axythic
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Engineering digital excellence. We build robust, scalable, and
            intuitive software solutions that empower modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:gap-24">
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#our-story"
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#vision-mission"
                  className="hover:text-blue-400 transition-colors"
                >
                  Vision & Mission
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-blue-400 transition-colors">
                  Custom Software
                </a>
              </li>
            </ul>
          </div>
          {/* Connect section removed */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Axythic. All rights reserved.</p>
        <div className="flex gap-6">
          <button
            onClick={onShowPrivacyPolicy}
            className="hover:text-gray-300 transition-colors cursor-pointer underline-offset-2 hover:underline"
          >
            Privacy Policy
          </button>
          <button
            onClick={onShowTerms}
            className="hover:text-gray-300 transition-colors cursor-pointer underline-offset-2 hover:underline"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
}
