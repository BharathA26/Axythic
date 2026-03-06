import { Users, Mail, MessageSquare } from "lucide-react";

export default function MyTeam() {
  const team = [
    {
      name: "Mark Johnson",
      role: "Design Handoff Course",
      status: "online",
      img: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Lisa Wong",
      role: "Design Handoff Course",
      status: "offline",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Chloe Davis",
      role: "Project Management",
      status: "online",
      img: "https://i.pravatar.cc/150?img=9",
    },
    {
      name: "Daniel Scott",
      role: "Mentor: Project Management",
      status: "offline",
      img: "https://i.pravatar.cc/150?img=12",
      isMentor: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-6 h-6 text-[#5E2ADA]" /> My Team & Cohort
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Connect with your peers and mentors.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-5 border shadow-sm flex flex-col items-center text-center relative ${member.isMentor ? "border-purple-200 bg-purple-50/10" : "border-gray-100"}`}
          >
            {member.isMentor && (
              <span className="absolute top-3 left-3 text-[10px] font-bold text-[#5E2ADA] bg-purple-100 px-2 py-0.5 rounded-full uppercase">
                Mentor
              </span>
            )}
            <div className="relative mb-3">
              <img
                src={member.img}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-50"
              />
              <span
                className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${member.status === "online" ? "bg-emerald-500" : "bg-gray-300"}`}
              ></span>
            </div>

            <h3 className="font-bold text-gray-900">{member.name}</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-[150px]">
              {member.role}
            </p>

            <div className="flex items-center gap-2 mt-5 w-full">
              <button className="flex-1 flex items-center justify-center gap-2 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100">
                <MessageSquare className="w-4 h-4" /> Message
              </button>
              <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
