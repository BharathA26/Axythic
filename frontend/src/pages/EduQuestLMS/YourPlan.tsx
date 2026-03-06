import { BarChart, CreditCard, ShieldCheck } from "lucide-react";

export default function YourPlan() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart className="w-6 h-6 text-[#5E2ADA]" /> Your Plan
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your premium subscription.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Plan Card */}
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 border border-purple-100 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 opacity-20 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Premium Plan</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 mt-2 inline-block">
                Active
              </span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-[#5E2ADA]">$14.99</p>
              <p className="text-[10px] text-gray-500 font-medium">per month</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <ShieldCheck className="w-4 h-4 text-[#5E2ADA]" /> Unlimited
              courses
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <ShieldCheck className="w-4 h-4 text-[#5E2ADA]" /> 1-on-1 Mentor
              sessions
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <ShieldCheck className="w-4 h-4 text-[#5E2ADA]" /> Verified
              Certificates
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg py-2 hover:bg-gray-50 transition-colors">
              Cancel Plan
            </button>
            <button className="flex-1 bg-[#5E2ADA] text-white text-sm font-semibold rounded-lg py-2 hover:bg-[#4d22b3] transition-colors shadow-sm">
              Upgrade
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-6">
            Payment Method
          </h3>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl mb-4 bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center text-white text-[10px] font-black italic">
                VISA
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Visa ending in 4242
                </p>
                <p className="text-xs text-gray-500">Expires 12/26</p>
              </div>
            </div>
            <button className="text-sm font-semibold text-[#5E2ADA] hover:underline">
              Edit
            </button>
          </div>

          <button className="flex items-center justify-center w-full gap-2 border border-dashed border-gray-300 rounded-xl p-4 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors">
            <CreditCard className="w-4 h-4 text-gray-400" /> Add new payment
            method
          </button>
        </div>
      </div>
    </div>
  );
}
