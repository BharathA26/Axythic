import { useState } from "react";
import { CheckSquare, Circle, AlertCircle, Clock, X, Plus } from "lucide-react";

export default function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initial State Data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Review Module 4 Readings",
      course: "Project Management",
      due: "Today, 5:00 PM",
      priority: "high",
      status: "pending",
    },
    {
      id: 2,
      title: "Submit Final Wireframes",
      course: "UI/UX Design",
      due: "Tomorrow, 11:59 PM",
      priority: "medium",
      status: "pending",
    },
    {
      id: 3,
      title: "Prepare Slide Deck for Presentation",
      course: "Public Speaking",
      due: "Oct 12, 2025",
      priority: "high",
      status: "pending",
    },
    {
      id: 4,
      title: "Peer Review: User Research",
      course: "UI/UX Design",
      due: "Oct 15, 2025",
      priority: "low",
      status: "completed",
    },
    {
      id: 5,
      title: "Watch Recorded Lecture",
      course: "Workflow Automation",
      due: "Oct 18, 2025",
      priority: "medium",
      status: "pending",
    },
    {
      id: 6,
      title: "Complete Quiz 2",
      course: "Data Visualization",
      due: "Oct 20, 2025",
      priority: "high",
      status: "pending",
    },
    {
      id: 7,
      title: "Draft Essay on Agile Ethics",
      course: "Project Management",
      due: "Oct 22, 2025",
      priority: "low",
      status: "pending",
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "completed" ? "pending" : "completed" }
          : t,
      ),
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <CheckSquare className="w-6 h-6 text-[#5E2ADA]" /> My Tasks
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your assignments and deadlines.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-[#5E2ADA] text-white text-sm font-semibold rounded-lg hover:bg-[#4d22b3] transition-colors shadow-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Personal Task
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors ${task.status === "completed" ? "opacity-60 bg-gray-50/50" : ""}`}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className="flex-shrink-0 mt-0.5"
              >
                {task.status === "completed" ? (
                  <CheckSquare className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300 hover:text-[#5E2ADA] transition-colors" />
                )}
              </button>

              <div className="flex-1">
                <h3
                  className={`font-semibold ${task.status === "completed" ? "text-gray-500 line-through" : "text-gray-900"}`}
                >
                  {task.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{task.course}</p>

                <div className="flex items-center gap-4 mt-3">
                  <span
                    className={`text-[11px] font-medium flex items-center gap-1.5 ${task.due.includes("Today") && task.status !== "completed" ? "text-red-500" : "text-gray-500"}`}
                  >
                    <Clock className="w-3.5 h-3.5" /> Due {task.due}
                  </span>
                  {task.priority === "high" && task.status !== "completed" && (
                    <span className="text-[10px] uppercase font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> High Priority
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Task Modal overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                Add Personal Task
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Task Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Read Chapter 5"
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priority
                  </label>
                  <select className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA]">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Related Course (Optional)
                </label>
                <select className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E2ADA]/20 focus:border-[#5E2ADA]">
                  <option value="">None</option>
                  <option value="project-management">Project Management</option>
                  <option value="ui-ux">UI/UX Design</option>
                </select>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-[#5E2ADA] text-white text-sm font-semibold rounded-lg hover:bg-[#4d22b3] transition-colors shadow-sm"
              >
                Save Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
