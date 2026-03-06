import {
  HelpCircle,
  ChevronRight,
  MessageSquare,
  BookOpen,
} from "lucide-react";

export default function HelpFaqs() {
  const faqs = [
    {
      q: "How do I download my certificates?",
      a: "Once you have completed 100% of a course, a download link will automatically appear on your 'My Courses' page under the completed section.",
    },
    {
      q: "Can I switch my mentor mid-course?",
      a: "Yes, you can request a mentor change by navigating to the Support tab in the specific course portal and selecting 'Request new mentor'.",
    },
    {
      q: "How does the billing cycle work?",
      a: "Premium subscriptions are billed monthly on the date you first subscribed. You can cancel at any time from the 'Your Plan' page.",
    },
    {
      q: "Are courses self-paced?",
      a: "Most courses are self-paced, but certain workshops or live lectures on your schedule have specific viewing windows.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#5E2ADA]" /> Help & FAQs
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Get answers and locate resources.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5 text-[#5E2ADA]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Contact Support</h3>
            <p className="text-xs text-gray-500 mb-2">
              Our team usually responds within 2 hours during business days.
            </p>
            <span className="text-sm font-semibold text-[#5E2ADA]">
              Open ticket &rarr;
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Documentation</h3>
            <p className="text-xs text-gray-500 mb-2">
              Read our comprehensive guides on how to use the LMS features.
            </p>
            <span className="text-sm font-semibold text-blue-500">
              Read docs &rarr;
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="p-4 hover:bg-gray-50 cursor-pointer transition-colors group"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#5E2ADA] transition-colors">
                {faq.q}
              </h4>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mt-2 hidden group-hover:block pl-2 border-l-2 border-gray-200">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
