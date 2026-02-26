import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="pt-32 pb-20 px-4 relative overflow-hidden flex flex-col items-center min-h-[90vh] bg-white">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 blur-[120px] rounded-full -z-10" />

      <motion.div
        className="max-w-4xl mx-auto w-full z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="mb-12 border-b border-gray-100 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-4">
            Legal Information
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Learn about how we collect, use, and protect your data.
          </p>
        </div>

        <div className="max-w-none text-gray-700 space-y-8 text-base leading-relaxed bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy is provided to explain how information is
              collected, used, stored, and protected when the website and
              services of Axythic are accessed or used. The protection of
              personal information is considered important, and reasonable steps
              are taken to ensure that data is handled securely and
              transparently.
            </p>
            <p className="mt-3">
              By accessing the website or engaging with services, consent is
              considered to have been given to the practices described in this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Scope of Policy
            </h2>
            <p>This policy applies to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Visitors to the website</li>
              <li>Prospective clients making enquiries</li>
              <li>
                Clients receiving software development or related services
              </li>
              <li>
                Individuals communicating via forms, email, or other channels
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Information That May Be Collected
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              3.1 Information Provided Directly
            </h3>
            <p>
              The following information may be collected when it is voluntarily
              provided:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organisation name</li>
              <li>Project requirements or business details</li>
              <li>
                Any other information submitted through contact forms or
                communication channels
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
              3.2 Information Collected Automatically
            </h3>
            <p>
              When the website is visited, certain technical information may be
              collected automatically, including:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages viewed and navigation paths</li>
              <li>Date and time of visits</li>
              <li>Referring URLs</li>
              <li>Usage statistics</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
              3.3 Cookies and Similar Technologies
            </h3>
            <p>
              Cookies and similar technologies may be used to enhance
              functionality, analyse traffic, and improve user experience.
              Browser settings may be adjusted to refuse cookies; however, some
              features of the website may not function properly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Purpose of Data Collection
            </h2>
            <p>Information collected may be used for the following purposes:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>
                Enquiries are responded to and communications are maintained
              </li>
              <li>Project discussions and proposals are prepared</li>
              <li>Services are delivered and managed</li>
              <li>Website performance is monitored and improved</li>
              <li>Security and fraud prevention measures are implemented</li>
              <li>Legal and regulatory obligations are complied with</li>
              <li>
                Internal analysis and service improvements are carried out
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Legal Basis for Processing (Where Applicable)
            </h2>
            <p>
              Where required by applicable laws, processing of personal data is
              carried out on one or more of the following bases:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Consent has been provided by the individual</li>
              <li>Processing is necessary for contractual obligations</li>
              <li>Processing is required to comply with legal requirements</li>
              <li>
                Legitimate business interests are pursued in a manner that does
                not override individual rights
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Data Sharing and Disclosure
            </h2>
            <p>
              Personal information is not sold or traded. Information may be
              shared only under the following circumstances:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>
                With trusted service providers who support website hosting,
                analytics, communication tools, or project delivery, under
                confidentiality obligations
              </li>
              <li>With professional advisors where necessary</li>
              <li>
                When disclosure is required by law, regulation, or legal process
              </li>
              <li>
                In connection with business transfers or restructuring, where
                applicable
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. Data Security Measures
            </h2>
            <p>
              Appropriate technical and organisational safeguards are
              implemented to protect information against unauthorised access,
              alteration, disclosure, or destruction. These measures may include
              secure servers, access controls, encryption practices, and
              internal policies. While reasonable efforts are made, absolute
              security cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Data Retention
            </h2>
            <p>
              Personal information is retained only for as long as it is
              necessary for the purposes described in this policy, including
              fulfilling contractual obligations, resolving disputes,
              maintaining records, and complying with legal requirements. Data
              that is no longer required is securely deleted or anonymised where
              feasible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. International Data Transfers
            </h2>
            <p>
              Where services involve clients or systems located in different
              jurisdictions, information may be transferred and processed in
              locations where data protection laws may differ. Appropriate
              safeguards are applied where required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              10. Third Party Services and Links
            </h2>
            <p>
              The website may include links to third party websites or
              integrations with external services. Responsibility is not assumed
              for the privacy practices of those third parties, and their
              policies should be reviewed separately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              11. User Rights
            </h2>
            <p>
              Subject to applicable laws, individuals may have the right to:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1 mb-3">
              <li>Request access to personal information held</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of data where appropriate</li>
              <li>
                Request restriction or objection to certain processing
                activities
              </li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              Requests may be submitted using the contact details below and will
              be handled within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              12. Children’s Data
            </h2>
            <p>
              The services and website are not intended to be used by
              individuals under the age of 13, and personal information from
              children is not knowingly collected. If such information is
              identified, steps will be taken to remove it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              13. Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated periodically to reflect changes
              in legal requirements, business practices, or service offerings.
              The updated version will be posted on this page with a revised
              effective date.
            </p>
          </section>

          <div className="bg-gray-50/80 p-6 rounded-xl border border-gray-100 mt-8 text-gray-800">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              14. Contact Information
            </h2>
            <p className="mb-2">
              Questions, requests, or concerns regarding this Privacy Policy or
              data handling practices may be directed to:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@axythic.com"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                info@axythic.com
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Effective Date:</strong> February 2026
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
