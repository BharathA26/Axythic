import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "William Ashford",
    role: "Product Manager",
    content:
      "The analytics tools have transformed how we approach financial planning and forecasting. We now make data-driven decisions that positively impact our business.",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    id: 2,
    name: "Scarlett Palmer",
    role: "Marketing Director",
    content:
      "The security features offered give us peace of mind knowing that our customer data is protected.",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    id: 3,
    name: "Ruby Hayes",
    role: "IT Director",
    content:
      "The integration process was seamless, and we were up and running in no time.",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 4,
  },
  {
    id: 4,
    name: "Laila Smith",
    role: "Account Executive",
    content:
      "The customer support has been outstanding. Whenever we have questions or need assistance, their team is quick to respond and incredibly helpful.",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
  {
    id: 5,
    name: "Marlon Wright",
    role: "Product Manager",
    content:
      "We've seen a significant improvement in our compliance management since the switch.",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: 6,
    name: "Samuel Kingsley",
    role: "Financial Analyst",
    content:
      "I can't recommend them enough! Their lending solutions have made it easier for us to manage customer applications and approvals, resulting in faster turnaround times and happier clients.",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 5,
  },
];

const row1 = [...testimonials];
const row2 = [...testimonials].reverse();

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="w-[320px] md:w-[380px] bg-theme-card rounded-2xl p-6 border border-theme hover:bg-theme-card hover:border-white/20 transition-all duration-300 flex flex-col gap-4 font-sans flex-shrink-0 relative group backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10 flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-11 h-11 rounded-full object-cover border border-white/20"
        />
        <div className="flex flex-col">
          <h4 className="text-theme-primary font-semibold text-sm leading-tight">
            {item.name}
          </h4>
          <p className="text-theme-muted text-xs mt-0.5">{item.role}</p>
        </div>
      </div>

      <p className="relative z-10 text-theme-muted text-[15px] leading-relaxed whitespace-normal flex-1 font-light">
        "{item.content}"
      </p>

      <div className="relative z-10 flex items-center gap-1 pt-3 mt-1 border-t border-theme">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < item.rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-white/10 text-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialTrack = ({
  items,
  reverse = false,
  speed = 40,
}: {
  items: Testimonial[];
  reverse?: boolean;
  speed?: number;
}) => {
  return (
    <div className="flex w-max relative">
      <div
        className={`flex w-max hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex gap-4 pr-4">
          {items.map((item, idx) => (
            <TestimonialCard key={`a-${item.id}-${idx}`} item={item} />
          ))}
        </div>
        <div className="flex gap-4 pr-4">
          {items.map((item, idx) => (
            <TestimonialCard key={`b-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 bg-theme-page transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400 tracking-wide uppercase">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-theme-primary mb-6 tracking-tight leading-[1.1]"
          >
            What Our Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Are Saying
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-theme-muted max-w-2xl mx-auto font-light"
          >
            We take pride in delivering exceptional solutions...{" "}
            <br className="hidden sm:block" />
            But don't just take our word for it.
          </motion.p>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 mask-horizontal-fade group overflow-hidden">
        <TestimonialTrack items={row1} speed={48} />
        <TestimonialTrack items={row2} reverse speed={55} />
      </div>
    </section>
  );
}
