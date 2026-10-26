import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.895 6.994c-.003 5.45-4.437 9.884-9.892 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/axythic_dev/",
    icon: Instagram,
    className:
      "hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-400",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919488943920",
    icon: WhatsAppIcon,
    className:
      "hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400",
  },
];

const contactLinks = [
  {
    label: "info@axythic.com",
    href: "mailto:info@axythic.com",
    icon: Mail,
  },
  {
    label: "+91 94889 43920",
    href: "tel:+919488943920",
    icon: Phone,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-gray-400 pt-20 pb-12 relative overflow-hidden border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-[1fr_1.6fr] gap-12 mb-16">
        <div className="flex flex-col gap-6 max-w-sm">
          <Link
            to="/"
            className={`flex items-center gap-2.5 text-white rounded-sm w-fit ${focusStyles}`}
            aria-label="Axythic home"
          >
            <img
              src="/axythic-logo.svg"
              alt="Axythic logo"
              width={28}
              height={32}
              draggable={false}
            />
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Axythic
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            Custom software, web applications, and mobile-focused digital
            experiences built around defined users and requirements.
          </p>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Connect with us
            </p>
            <ul className="flex flex-wrap gap-2.5" aria-label="Social media">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} — opens in a new tab`}
                      className={`inline-flex items-center gap-2 rounded-full border border-gray-800 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-gray-400 transition-all duration-200 ${social.className} ${focusStyles}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <address className="mt-5 not-italic">
              <ul className="space-y-2.5" aria-label="Contact details">
                {contactLinks.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <li key={contact.href}>
                      <a
                        href={contact.href}
                        className={`group inline-flex items-center gap-2.5 rounded-md text-sm text-gray-400 transition-colors hover:text-white ${focusStyles}`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-800 bg-white/[0.03] text-gray-500 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-400">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {contact.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </address>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          <div>
            <h2 className="text-white font-semibold mb-4 text-base">Services</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/services/custom-software-development"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile-app-development"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4 text-base">Company</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4 text-base">Explore</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/#our-story"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/#vision-mission"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="https://axythic.com/blog/"
                  className={`hover:text-blue-400 transition-colors rounded-sm ${focusStyles}`}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Axythic. All rights reserved.</p>
        <div className="flex gap-6">
          <Link
            to="/privacy-policy"
            className={`hover:text-gray-300 transition-colors underline-offset-2 hover:underline rounded-sm ${focusStyles}`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`hover:text-gray-300 transition-colors underline-offset-2 hover:underline rounded-sm ${focusStyles}`}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
