import { Zap, Shield, BarChart3, Clock } from "lucide-react";

const features = [
  {
    title: "Automated Workflows",
    description:
      "Connect all your tools and let Axythic automate the repetitive tasks.",
    icon: Zap,
  },
  {
    title: "Robust Security",
    description: "Enterprise-grade encryption keeps your code and data secure.",
    icon: Shield,
  },
  {
    title: "Real-time Analytics",
    description:
      "Get insights into your productivity and bottlenecks in real-time.",
    icon: BarChart3,
  },
  {
    title: "Time Saver",
    description:
      "Reclaim hours of your day by offloading boilerplate generation.",
    icon: Clock,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="solutions" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-dark font-semibold tracking-wide uppercase text-sm bg-brand/10 px-3 py-1 rounded-full">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Built for Speed, Designed <br className="hidden md:block" /> for
            Intelligence
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Axythic seamlessly integrates into your environment, working
            proactively to streamline development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(163,230,53,0.2)] transition-shadow group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand-dark mb-6 relative">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 relative">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
