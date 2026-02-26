import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand font-semibold tracking-wide uppercase text-sm bg-brand/10 px-3 py-1 rounded-full">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Choose your plan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="bg-[#121214] p-8 md:p-10 rounded-3xl border border-gray-800 hover:border-brand/40 transition-colors flex flex-col">
            <h3 className="text-2xl font-medium mb-2 text-gray-300">Starter</h3>
            <div className="text-5xl font-bold mb-6">Free</div>
            <ul className="space-y-4 mb-10 text-gray-400 flex-grow">
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> Base features
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> 1 Project limit
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> Community Support
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-[#18181b] p-8 md:p-10 rounded-3xl border border-brand relative transform md:-translate-y-4 shadow-2xl shadow-brand/10 flex flex-col">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
              Popular
            </div>
            <h3 className="text-2xl font-medium text-brand mb-2">Pro</h3>
            <div className="text-5xl font-bold mb-6">
              $19.99
              <span className="text-xl text-gray-400 font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 text-gray-300 flex-grow">
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> Everything in Starter
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> Unlimited Projects
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> Priority Support
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> AI Code Generation
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> Advanced Analytics
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-brand text-gray-900 font-bold hover:bg-brand-light transition-colors text-lg shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]">
              Choose Pro
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-[#121214] p-8 md:p-10 rounded-3xl border border-gray-800 hover:border-brand/40 transition-colors flex flex-col">
            <h3 className="text-2xl font-medium mb-2 text-gray-300">
              Enterprise
            </h3>
            <div className="text-5xl font-bold mb-6">Custom</div>
            <ul className="space-y-4 mb-10 text-gray-400 flex-grow">
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> Dedicated Agent
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> Custom Integrations
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> 24/7 SLA Support
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-brand" size={20} /> SSO & Advanced
                Security
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
