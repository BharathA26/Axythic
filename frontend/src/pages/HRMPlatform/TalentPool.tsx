import { HRMLayout } from "./components/HRMLayout";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Mail,
  Phone,
  MoreHorizontal,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const candidates = [
  {
    id: 1,
    name: "Esther Howard",
    role: "UX Designer",
    experience: "5 years",
    rating: 4.8,
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    role: "DevOps Engineer",
    experience: "8 years",
    rating: 4.9,
    location: "San Francisco, USA",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Kristin Watson",
    role: "Backend Developer",
    experience: "3 years",
    rating: 4.5,
    location: "Berlin, Germany",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    name: "Jacob Jones",
    role: "Product Manager",
    experience: "6 years",
    rating: 4.7,
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TalentPool() {
  return (
    <HRMLayout title="Talent Pool">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-theme-card border border-theme p-4 rounded-2xl">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-muted" />
            <input
              type="text"
              placeholder="Search talent..."
              className="w-full pl-9 pr-4 py-2 bg-theme-page border border-theme rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-theme-page border border-theme rounded-xl text-sm text-theme-muted">
              <Filter className="w-4 h-4" />
              Skills
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-theme-page border border-theme rounded-xl text-sm text-theme-muted">
              Rating
              <Star className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {candidates.map((candidate, i) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-theme-card border border-theme p-6 rounded-3xl hover:border-blue-500/30 transition-all group relative overflow-hidden text-center"
            >
              <div className="absolute top-4 right-4 text-theme-muted hover:text-theme-primary cursor-pointer">
                <MoreHorizontal className="w-5 h-5" />
              </div>
              <div className="relative inline-block mb-4">
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-theme"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1 rounded-lg text-[10px] font-bold shadow-lg">
                  {candidate.rating}
                </div>
              </div>
              <h3 className="font-bold text-theme-primary">{candidate.name}</h3>
              <p className="text-xs text-blue-500 font-medium">
                {candidate.role}
              </p>

              <div className="mt-4 space-y-2 text-xs text-theme-muted">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {candidate.location}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  {candidate.experience} Exp.
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <button className="p-2.5 rounded-xl bg-theme-page border border-theme text-theme-muted hover:text-blue-500 transition-all">
                  <Mail className="w-4 h-4 mx-auto" />
                </button>
                <button className="p-2.5 rounded-xl bg-theme-page border border-theme text-theme-muted hover:text-blue-500 transition-all">
                  <Phone className="w-4 h-4 mx-auto" />
                </button>
              </div>
              <button className="w-full mt-4 py-2.5 bg-blue-600/10 text-blue-500 text-xs font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </HRMLayout>
  );
}
