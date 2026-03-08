import { HRMLayout } from "./components/HRMLayout";
import { emiliaMitchell } from "./hrmData";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Star,
  FileText,
  Search,
  LayoutGrid,
  Upload,
  CheckCircle2,
  Circle,
  Printer,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CandidateProfile() {
  const candidate = emiliaMitchell;

  return (
    <HRMLayout title="Candidate Profile">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 transition-colors duration-300">
        {/* Left Column - Candidate Info */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-theme-card border border-theme rounded-3xl p-6 text-center">
            <div className="relative inline-block mb-4">
              <img
                src={candidate.avatar}
                alt={candidate.name}
                className="w-24 h-24 rounded-full border-4 border-blue-500/10 object-cover mx-auto"
              />
              <div className="absolute -bottom-1 right-2 bg-green-500 text-white p-1 rounded-full border-2 border-theme-card">
                <CheckCircle2 className="w-3 h-3" />
              </div>
            </div>
            <h2 className="text-xl font-bold">{candidate.name}</h2>
            <div className="mt-2 inline-flex px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
              {candidate.status}
            </div>
            <p className="mt-4 text-sm text-theme-muted font-medium">
              {candidate.role}
            </p>

            <div className="mt-6 space-y-3 text-left">
              <div className="flex items-center gap-3 text-xs text-theme-muted">
                <MapPin className="w-4 h-4 text-theme-muted" />
                {candidate.location}
              </div>
              <div className="flex items-center gap-3 text-xs text-theme-muted">
                <Phone className="w-4 h-4 text-theme-muted" />
                {candidate.phone}
              </div>
              <div className="flex items-center gap-3 text-xs text-theme-muted">
                <Mail className="w-4 h-4 text-theme-muted" />
                <span className="truncate">{candidate.email}</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <button className="py-2.5 border border-theme rounded-xl text-xs font-bold hover:bg-theme-page transition-all">
                Edit
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Actions
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="bg-theme-card border border-theme rounded-3xl p-6">
            <h3 className="font-bold text-sm mb-6">Feedback</h3>
            <div className="space-y-6">
              {candidate.feedback.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-theme-muted font-medium">
                      {item.category}
                    </p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3 h-3 ${star <= item.rating ? "text-orange-400 fill-orange-400" : "text-theme-muted/30"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column - Documents */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-theme-card border border-theme rounded-3xl p-8 min-h-[600px]">
            <div className="flex items-center gap-6 mb-8 border-b border-theme pb-4">
              {["Documents", "Communication", "Questions"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 text-xs font-bold transition-all
                    ${tab === "Documents" ? "text-blue-500 border-b-2 border-blue-500" : "text-theme-muted hover:text-theme-primary"}
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-muted" />
                <input
                  type="text"
                  placeholder="Find document..."
                  className="w-full pl-9 pr-4 py-2 bg-theme-page border border-theme rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-theme-page border border-theme text-theme-muted">
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold transition-all hover:shadow-lg hover:shadow-blue-600/20">
                  <Upload className="w-4 h-4" />
                  Upload
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {candidate.documents.map((doc) => (
                <div key={doc.name} className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-2xl bg-theme-page border border-theme overflow-hidden p-3 group-hover:border-blue-500 transition-all flex items-center justify-center">
                    <FileText className="w-10 h-10 text-theme-muted opacity-20" />
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-bold truncate group-hover:text-blue-500 transition-colors uppercase tracking-tight">
                      {doc.name}
                    </p>
                    <p className="text-[10px] text-theme-muted mt-1">
                      {doc.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Skills & Checklist */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-theme-card border border-theme rounded-3xl p-6">
            <h3 className="font-bold text-sm mb-6">Skills</h3>
            <div className="space-y-6">
              {candidate.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold">{skill.name}</p>
                    <p className="text-[10px] text-theme-muted font-bold">
                      {skill.progress}.0
                    </p>
                  </div>
                  <div className="h-1.5 bg-theme-page border border-theme rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-green-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-theme-card border border-theme rounded-3xl p-6">
            <h3 className="font-bold text-sm mb-6">To do</h3>
            <div className="space-y-4">
              {[
                { label: "Overall impression", done: true },
                { label: "Confirm the response", done: true },
                { label: "Request documents", done: false, link: "this link" },
                { label: "Send your passport", done: false },
                { label: "Confirm your income", done: false },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  {item.done ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-theme-muted/50 flex-shrink-0" />
                  )}
                  <p className="text-xs font-bold text-theme-muted">
                    {item.label}
                    {item.link && (
                      <span className="text-blue-500 ml-1 cursor-pointer">
                        {item.link}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-theme-card border border-theme rounded-3xl p-6 flex items-center justify-between group cursor-pointer hover:border-blue-500 transition-all shadow-sm">
            <div>
              <p className="text-xs font-bold text-blue-500">
                Application Folder
              </p>
              <p className="text-[10px] text-theme-muted mt-1 italic">
                Ready for Print (4 MB)
              </p>
            </div>
            <Printer className="w-4 h-4 text-theme-muted group-hover:text-blue-500 transition-colors" />
          </div>
        </div>
      </div>
    </HRMLayout>
  );
}
