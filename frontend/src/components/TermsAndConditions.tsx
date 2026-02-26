import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface TermsAndConditionsProps {
  onBack: () => void;
}

export default function TermsAndConditions({
  onBack,
}: TermsAndConditionsProps) {
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
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Rules and guidelines governing the use of Axythic services.
          </p>
        </div>

        <div className="max-w-none text-gray-700 space-y-8 text-base leading-relaxed bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p>
              These Terms and Conditions set out the rules and guidelines
              governing the use of the Axythic website and services. By
              accessing the website or engaging with services, agreement is
              considered to have been given to these terms.
            </p>
            <p className="mt-3">
              If these terms are not accepted, the website and services should
              not be used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Scope of Services
            </h2>
            <p>
              Software development, consulting, and related technical services
              may be provided. The scope, deliverables, timelines, and fees will
              be defined separately in proposals, statements of work, or
              agreements where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Use of Website
            </h2>
            <p>
              The website is to be used only for lawful purposes. Activities
              that may harm, disrupt, or interfere with the website or its users
              are prohibited.
            </p>
            <p className="mt-3 mb-2 font-medium">It is agreed that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                No attempt will be made to gain unauthorised access to systems
                or data
              </li>
              <li>
                The website will not be used for fraudulent or unlawful
                activities
              </li>
              <li>Content will not be copied or misused without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content, materials, designs, code, and trademarks associated
              with the website and services are owned by or licensed to Axythic
              unless otherwise stated. Use, reproduction, or distribution
              without prior written permission is not permitted.
            </p>
            <p className="mt-3">
              Ownership of project deliverables will be governed by separate
              agreements with clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Client Responsibilities
            </h2>
            <p className="mb-2">Clients are expected to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Provide accurate information and requirements</li>
              <li>Review deliverables within agreed timelines</li>
              <li>Provide feedback and approvals as required</li>
              <li>Ensure they have rights to any materials supplied</li>
            </ul>
            <p>
              Delays caused by incomplete information or lack of approvals may
              impact timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Fees and Payments
            </h2>
            <p>
              Fees, payment schedules, and billing terms will be defined in
              project agreements or invoices. Services may be suspended in the
              event of non payment where permitted by agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. Confidentiality
            </h2>
            <p>
              Information shared during projects will be treated as confidential
              and will not be disclosed except as required to deliver services
              or where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, liability for indirect,
              incidental, or consequential damages is excluded. Services are
              provided on an as is basis unless otherwise specified in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. Warranties Disclaimer
            </h2>
            <p>
              No guarantees are made regarding uninterrupted or error free
              operation of the website or services. Reasonable efforts are made
              to maintain reliability and performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              10. Third Party Tools and Services
            </h2>
            <p>
              Use of third party platforms, hosting providers, or integrations
              may be required. Responsibility is not assumed for the performance
              or policies of such third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              11. Termination
            </h2>
            <p>
              Access to services may be suspended or terminated where these
              terms are breached or where required for operational or legal
              reasons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              12. Changes to Terms
            </h2>
            <p>
              These Terms and Conditions may be updated periodically. Continued
              use of the website or services after changes indicates acceptance
              of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              13. Governing Law
            </h2>
            <p>
              These terms shall be governed by and interpreted in accordance
              with applicable laws. Jurisdiction will be determined based on
              applicable regulations.
            </p>
          </section>

          <div className="bg-gray-50/80 p-6 rounded-xl border border-gray-100 mt-8 text-gray-800">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              14. Contact
            </h2>
            <p className="mb-2">
              Questions regarding these Terms and Conditions may be directed to:
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
