import { Bot, Network, ScanText, Lock, LineChart } from "lucide-react";

export default function SmartFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-dark font-semibold tracking-wide uppercase text-sm bg-brand/10 px-3 py-1 rounded-full">
            Features
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            What Makes Our AI Agent
            <br />
            Smarter
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience next-generation capabilities designed to elevate your
            productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="lg:col-span-2 bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:border-brand/30 transition-colors">
            <Network className="text-brand-dark mb-4" size={32} />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Automated Workflows
            </h3>
            <p className="text-gray-600 mb-8">
              Seamlessly automate repetitive tasks across your toolchain.
            </p>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col gap-3 max-w-md">
              <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 shadow-sm">
                <span className="w-5 h-5 rounded-md bg-brand mr-4 flex-shrink-0"></span>{" "}
                Input Source
              </div>
              <div className="h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center px-4 shadow-sm">
                <span className="w-5 h-5 rounded-md bg-gray-300 mr-4 flex-shrink-0"></span>{" "}
                Data Processing
              </div>
              <div className="h-12 border border-brand/30 bg-brand/5 rounded-xl flex items-center px-4 shadow-inner">
                <span className="w-5 h-5 rounded-md bg-brand mr-4 flex-shrink-0"></span>{" "}
                Final Output
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:border-brand/30 transition-colors flex flex-col">
            <Bot className="text-brand-dark mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Adaptive Learning
            </h3>
            <p className="text-gray-600 mb-6 text-sm flex-grow">
              Our AI learns from your coding patterns to provide personalized
              architectural suggestions.
            </p>
            <div className="aspect-square bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-brand/20 to-transparent flex items-center justify-center relative overflow-hidden">
                <Bot
                  className="text-brand opacity-60 relative z-10"
                  size={80}
                />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/30 blur-3xl rounded-full" />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#eefadc] border border-brand/20 rounded-3xl p-8 hover:border-brand/40 transition-colors shadow-sm">
            <ScanText className="text-brand-dark mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Smart Text Extraction
            </h3>
            <p className="text-gray-700 text-sm">
              Instantly parse and understand complex API documents and
              codebases.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#eefadc] border border-brand/20 rounded-3xl p-8 hover:border-brand/40 transition-colors shadow-sm">
            <Lock className="text-brand-dark mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Robust Access Control
            </h3>
            <p className="text-gray-700 text-sm">
              Granular permissions keep your enterprise infrastructure secure
              and compliant.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:border-brand/30 transition-colors overflow-hidden relative">
            <LineChart className="text-brand-dark mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 leading-tight">
              Data Analytics <br />& Insights
            </h3>
            <p className="text-gray-600 text-sm mb-6 relative z-10 mt-2">
              Real-time metrics to help you optimize delivery pipelines.
            </p>
            <div className="absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-brand/10 to-transparent" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand opacity-20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
