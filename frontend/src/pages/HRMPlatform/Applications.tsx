import { HRMLayout } from "./components/HRMLayout";
import {
  Briefcase,
  Users,
  Clock,
  MoreVertical,
  Plus,
  Search,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    type: "Full-time",
    applicants: 24,
    status: "Active",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Designer",
    dept: "Design",
    type: "Full-time",
    applicants: 18,
    status: "Active",
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "HR Manager",
    dept: "Human Resources",
    type: "Permanent",
    applicants: 42,
    status: "Urgent",
    posted: "1 day ago",
  },
  {
    id: 4,
    title: "Backend Developer (Go)",
    dept: "Engineering",
    type: "Remote",
    applicants: 31,
    status: "Active",
    posted: "5 days ago",
  },
];

export default function Applications() {
  return (
    <HRMLayout title="Job Applications">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-theme-card border border-theme p-4 rounded-2xl">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-muted" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-9 pr-4 py-2 bg-theme-page border border-theme rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 px-3 py-2 bg-theme-page border border-theme rounded-xl text-sm text-theme-muted italic">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all ml-auto md:ml-0">
              <Plus className="w-4 h-4" />
              Post New Job
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-theme-card border border-theme p-6 rounded-2xl hover:border-blue-500/30 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-theme-primary">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-xs text-theme-muted">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {job.applicants} Applicants
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Posted {job.posted}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-theme-page border border-theme text-[10px] uppercase font-bold tracking-wider">
                      {job.dept}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right hidden sm:block">
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border ${job.status === "Urgent" ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-green-500/10 text-green-500 border-green-500/20"}`}
                  >
                    {job.status}
                  </span>
                </div>
                <button className="p-2 rounded-lg text-theme-muted hover:bg-theme-page hover:text-theme-primary transition-all">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </HRMLayout>
  );
}
