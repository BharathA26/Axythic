import { useState } from "react";
import { HRMLayout } from "./components/HRMLayout";
import { employees, type Employee } from "./hrmData";
import {
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  MapPin,
  Plus,
  ArrowUpDown,
  Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PersonnelList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || emp.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: Employee["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "On Leave":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Remote":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-theme-muted/10 text-theme-muted border-theme";
    }
  };

  return (
    <HRMLayout title="Personnel Directory">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-theme-card border border-theme p-4 rounded-2xl">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-muted" />
            <input
              type="text"
              placeholder="Search by name, role, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-theme-page border border-theme rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 px-3 py-2 bg-theme-page border border-theme rounded-xl text-sm text-theme-muted">
              <Filter className="w-4 h-4" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent outline-none cursor-pointer"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <button className="p-2.5 rounded-xl bg-theme-page border border-theme text-theme-muted hover:text-blue-500 hover:border-blue-500/30 transition-all">
              <Download className="w-4 h-4" />
            </button>

            <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all ml-auto md:ml-0">
              <Plus className="w-4 h-4" />
              Add Employee
            </button>
          </div>
        </div>

        <div className="bg-theme-card border border-theme rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-theme bg-theme-page/50">
                  <th className="px-6 py-4 text-[11px] font-bold text-theme-muted uppercase tracking-wider">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-theme-primary transition-colors">
                      Employee
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-theme-muted uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-theme-muted uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-theme-muted uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-theme-muted uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-theme">
                <AnimatePresence>
                  {filteredEmployees.map((emp) => (
                    <motion.tr
                      key={emp.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="hover:bg-theme-page/30 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={emp.avatar}
                            alt={emp.name}
                            className="w-10 h-10 rounded-xl object-cover border border-theme"
                          />
                          <div>
                            <p className="text-sm font-bold text-theme-primary">
                              {emp.name}
                            </p>
                            <p className="text-xs text-theme-muted">
                              {emp.role}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs px-2 py-1 rounded-md bg-theme-page border border-theme text-theme-muted">
                          {emp.department}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-xs text-theme-muted">
                          <MapPin className="w-3.5 h-3.5" />
                          {emp.location}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border ${getStatusColor(emp.status)}`}
                        >
                          {emp.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="flex items-center gap-2 text-xs text-blue-500 hover:text-blue-600 transition-colors font-medium">
                          <Mail className="w-3.5 h-3.5" />
                          Message
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 rounded-lg text-theme-muted hover:bg-theme-page hover:text-theme-primary transition-all">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-theme-muted">
            <p>Showing 1-10 of 254 employees</p>
          </div>
        </div>
      </div>
    </HRMLayout>
  );
}
