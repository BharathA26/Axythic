import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";

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

// Pre-define duplicated/shuffled rows to avoid hydration issues
const row1 = [...testimonials];
const row2 = [...testimonials].reverse();

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="w-[320px] md:w-[380px] bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col gap-4 font-sans hover:border-[#a3e635] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex-shrink-0 relative group">
      {/* Plus icon on top right indicating focusable action */}
      <div className="absolute top-4 right-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <Plus className="w-5 h-5 hover:text-gray-600 transition-colors cursor-pointer" />
      </div>

      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-11 h-11 rounded-full object-cover bg-gray-100 border border-gray-100"
        />
        <div className="flex flex-col">
          <h4 className="text-gray-900 font-semibold text-sm leading-tight">
            {item.name}
          </h4>
          <p className="text-gray-500 text-xs mt-0.5">{item.role}</p>
        </div>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed whitespace-normal flex-1">
        "{item.content}"
      </p>

      <div className="flex items-center gap-1 pt-3 mt-1 border-t border-gray-100">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < item.rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
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
        {/* Duplicate the items for seamless looping */}
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
      className="py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 mb-6 shadow-sm"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            What Our Clients Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
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
