import { HRMLayout } from "./components/HRMLayout";
import { hrmStats, upcomingInterviews, recentHirings } from "./hrmData";
import { TrendingUp, MoreVertical, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  const isPositive = stat.trend.includes("+");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-theme-card border border-theme p-6 rounded-2xl hover:border-blue-500/30 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-blue-500/10 text-blue-500`}>
          <TrendingUp className="w-5 h-5" />
        </div>
        <button className="text-theme-muted hover:text-theme-primary">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      <div>
        <p className="text-sm text-theme-muted mb-1">{stat.label}</p>
        <div className="flex items-end gap-2">
          <h3 className="text-2xl font-bold">{stat.value}</h3>
          <span
            className={`text-xs font-medium pb-1 ${isPositive ? "text-green-500" : "text-theme-muted"}`}
          >
            {stat.trend}
          </span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-theme flex items-center justify-between text-xs text-theme-muted group-hover:text-theme-primary transition-colors">
        <span>View detailed report</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
};

export default function HRMDashboard() {
  const pipeline = [
    { label: "Applied", count: 42, color: "blue" },
    { label: "Screened", count: 28, color: "indigo" },
    { label: "Interview", count: 12, color: "purple" },
    { label: "Offered", count: 4, color: "fuchsia" },
    { label: "Hired", count: 2, color: "emerald" },
  ];

  return (
    <HRMLayout title="Dashboard Overview">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hrmStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-theme-card border border-theme rounded-2xl p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold">Recruitment Pipeline</h3>
              </div>
              <div className="flex items-end h-48 gap-4 px-4">
                {pipeline.map((stage) => (
                  <div
                    key={stage.label}
                    className="flex-grow flex flex-col items-center gap-3 h-full justify-end"
                  >
                    <div className="text-xs font-bold text-theme-muted">
                      {stage.count}
                    </div>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(stage.count / 42) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="w-full max-w-[60px] bg-blue-500/30 border-t-2 border-blue-500 rounded-t-lg relative group"
                    />
                    <span className="text-[10px] font-medium text-theme-muted uppercase tracking-wider">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-theme-card border border-theme rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-theme flex items-center justify-between">
                <h3 className="font-bold">Recent Hirings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-[10px] text-theme-muted uppercase tracking-wider bg-theme-page/50">
                      <th className="px-6 py-3 font-semibold">Employee</th>
                      <th className="px-6 py-3 font-semibold">Role</th>
                      <th className="px-6 py-3 font-semibold">Department</th>
                      <th className="px-6 py-3 font-semibold">Date</th>
                      <th className="px-6 py-3 font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-theme">
                    {recentHirings.map((hire) => (
                      <tr
                        key={hire.name}
                        className="hover:bg-theme-page/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium">
                          {hire.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-theme-muted">
                          {hire.role}
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-blue-500">
                          {hire.dept}
                        </td>
                        <td className="px-6 py-4 text-sm text-theme-muted">
                          {hire.date}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-theme-muted hover:text-theme-primary">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-theme-card border border-theme rounded-2xl p-6">
              <h3 className="font-bold mb-6">Upcoming Interviews</h3>
              <div className="space-y-6">
                {upcomingInterviews.map((interview) => (
                  <div
                    key={interview.name}
                    className="flex gap-4 relative pl-4 border-l-2 border-blue-500/20"
                  >
                    <div className="flex-grow space-y-1">
                      <p className="text-sm font-bold">{interview.name}</p>
                      <p className="text-xs text-theme-muted">
                        {interview.role}
                      </p>
                      <div className="flex items-center gap-3 pt-2">
                        <div className="flex items-center gap-1 text-[10px] text-theme-muted font-semibold">
                          <Clock className="w-3 h-3" />
                          <span>{interview.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-white group">
              <h3 className="font-bold mb-2">Need a new hire?</h3>
              <p className="text-sm opacity-80 mb-6 font-light">
                Launch a new recruitment campaign in minutes.
              </p>
              <button className="w-full py-3 bg-white text-blue-600 rounded-xl text-sm font-bold shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Create Job Posting
              </button>
            </section>
          </div>
        </div>
      </div>
    </HRMLayout>
  );
}
