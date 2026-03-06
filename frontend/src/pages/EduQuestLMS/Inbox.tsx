import { useState } from "react";
import {
  Search,
  Mail,
  Star,
  Paperclip,
  Reply,
  Forward,
  Trash2,
  MoreVertical,
} from "lucide-react";

export default function Inbox() {
  const [activeMessageId, setActiveMessageId] = useState<number | null>(null);

  const messages = [
    {
      id: 1,
      sender: "Sofia Lindberg",
      email: "sofia.lindberg@eduquest.com",
      subject: "Assignment Feedback: UI Layouts",
      snippet: "Great work on the dashboard wireframes. Just a quick note...",
      body: "Hi Kate,\n\nGreat work on the dashboard wireframes. Just a quick note regarding the spacing around the action buttons in the top right pane. I think we need a bit more padding to clearly separate the primary 'Create' actions from the utilitarian icons like settings and notifications.\n\nTake a look at the attached file where I've highlighted the specific areas in red. Let’s review these adjustments during our 1:1 tomorrow morning.\n\nBest,\nSofia",
      time: "10:30 AM",
      unread: true,
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      sender: "EduQuest Team",
      email: "no-reply@eduquest.com",
      subject: "Your new certificate is ready!",
      snippet: "Congratulations Kate! You have successfully completed...",
      body: "Congratulations Kate!\n\nYou have successfully completed the Workflow Automation Masterclass. Your final grade was 98%, demonstrating a fantastic understanding of the material.\n\nYou can download your verified digital certificate from your dashboard or access the link below to share it securely on LinkedIn.\n\nKeep up the great work!\nThe EduQuest Team",
      time: "Yesterday",
      unread: true,
      avatar:
        "https://ui-avatars.com/api/?name=EduQuest+Team&background=5E2ADA&color=fff",
    },
    {
      id: 3,
      sender: "Daniel Scott",
      email: "daniel.scott@eduquest.com",
      subject: "Welcome to Project Management",
      snippet: "Hi everyone, I am excited to kick off this new cohort...",
      body: "Hi everyone, I am excited to kick off this new cohort for the Project Management Essentials course! Over the next 4 weeks, we will cover Agile methodologies, sprint planning, and risk mitigation strategies.\n\nPlease make sure to review the syllabus posted in the course materials before our first live session this Thursday at 11:30 AM EST.\n\nBest,\nDaniel",
      time: "Oct 12",
      unread: false,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 4,
      sender: "Billing Support",
      email: "billing@eduquest.com",
      subject: "Invoice #INV-29384",
      snippet: "Attached is the receipt for your recent premium plan...",
      body: "Hello Kate,\n\nAttached is the receipt for your recent premium plan renewal. Your account is fully active and you will not be billed again until Oct 12, 2026.\n\nIf you have any questions or require modifications to your billing information, please reach out to our team.\n\nThank you for choosing EduQuest LMS.\n\nEduQuest Billing",
      time: "Sep 28",
      unread: false,
      attachment: true,
      avatar:
        "https://ui-avatars.com/api/?name=Billing+Support&background=f3f4f6&color=4b5563",
    },
  ];

  const activeMessage = messages.find((m) => m.id === activeMessageId);

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
      {/* Top Toolbar */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#5E2ADA]" /> Inbox
            <span className="bg-[#5E2ADA]/10 text-[#5E2ADA] text-[10px] uppercase px-2 py-0.5 rounded-full font-bold">
              2 Unread
            </span>
          </h1>
        </div>
        <div className="relative w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search emails..."
            className="w-full pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#5E2ADA]"
          />
        </div>
      </div>

      {/* Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Message List */}
        <div className="w-1/3 border-r border-gray-100 bg-white overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setActiveMessageId(msg.id)}
              className={`p-4 border-b border-gray-50 cursor-pointer transition-colors ${activeMessageId === msg.id ? "bg-[#5E2ADA]/5 border-l-4 border-l-[#5E2ADA]" : "hover:bg-gray-50 border-l-4 border-l-transparent"} ${msg.unread && activeMessageId !== msg.id ? "bg-purple-50/30" : ""}`}
            >
              <div className="flex justify-between items-baseline mb-1">
                <h4
                  className={`text-sm ${msg.unread ? "font-bold text-gray-900" : "font-semibold text-gray-700"}`}
                >
                  {msg.sender}
                </h4>
                <span
                  className={`text-[10px] ${msg.unread ? "font-semibold text-[#5E2ADA]" : "text-gray-400"}`}
                >
                  {msg.time}
                </span>
              </div>
              <h5
                className={`text-xs mb-1 ${msg.unread ? "font-bold text-gray-800" : "font-medium text-gray-600"} line-clamp-1`}
              >
                {msg.subject}
              </h5>
              <p className="text-[11px] text-gray-500 line-clamp-1">
                {msg.snippet}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <Star
                  className={`w-3.5 h-3.5 ${msg.unread ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
                {msg.attachment && (
                  <Paperclip className="w-3.5 h-3.5 text-gray-400" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Reading Pane */}
        {activeMessage ? (
          <div className="flex-1 flex flex-col bg-white overflow-y-auto">
            {/* Reading Pane Header Options */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur z-10">
              <div className="flex gap-2">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                  <Reply className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                  <Forward className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            {/* Message Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {activeMessage.subject}
              </h2>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src={activeMessage.avatar}
                    className="w-10 h-10 rounded-full object-cover border border-gray-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {activeMessage.sender}
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      to me &lt;{activeMessage.email}&gt;
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {activeMessage.time}
                </span>
              </div>

              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line max-w-3xl">
                {activeMessage.body}
              </div>

              {activeMessage.attachment && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Attachments
                  </h5>
                  <div className="inline-flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-[10px] font-bold">PDF</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        invoice-receipt.pdf
                      </p>
                      <p className="text-[10px] text-gray-500">1.2 MB</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reply Box Placeholder */}
              <div className="mt-12">
                <div className="border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#5E2ADA]/20 focus-within:border-[#5E2ADA] transition-all">
                  <textarea
                    rows={4}
                    placeholder="Write a reply..."
                    className="w-full p-4 text-sm bg-gray-50/50 resize-none outline-none"
                  ></textarea>
                  <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-between items-center">
                    <div className="flex gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded">
                        <Paperclip className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="px-5 py-2 bg-[#5E2ADA] text-white text-sm font-semibold rounded-lg hover:bg-[#4d22b3] transition-colors shadow-sm">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 bg-gray-50/30 flex items-center justify-center flex-col text-gray-400">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-gray-300" />
            </div>
            <p className="font-medium">Select a message to read</p>
          </div>
        )}
      </div>
    </div>
  );
}
