import React from "react";
import { HRMLayout } from "./components/HRMLayout";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "UX Designer Interview",
    time: "10:00 AM",
    location: "Room 302 / Zoom",
    attendees: "Esther Howard, John Doe",
    type: "Interview",
    color: "blue",
  },
  {
    id: 2,
    title: "Weekly Team Sync",
    time: "02:00 PM",
    location: "Main Hall",
    attendees: "Design Team",
    type: "Meeting",
    color: "purple",
  },
  {
    id: 3,
    title: "Backend Code Review",
    time: "04:30 PM",
    location: "Slack Huddle",
    attendees: "Dev Team",
    type: "Review",
    color: "orange",
  },
];

export default function Events() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <HRMLayout title="Events & Calendar">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-theme-card border border-theme rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h3 className="font-bold text-lg">March 2026</h3>
              <div className="flex gap-2">
                <button className="p-1.5 rounded-lg border border-theme hover:bg-theme-page text-theme-muted">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg border border-theme hover:bg-theme-page text-theme-muted">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold transition-all hover:shadow-lg hover:shadow-blue-600/20">
              <Plus className="w-4 h-4" />
              Add Event
            </button>
          </div>

          <div className="grid grid-cols-7 gap-px bg-theme-border/20 rounded-xl overflow-hidden">
            {days.map((day) => (
              <div
                key={day}
                className="bg-theme-page p-4 text-[10px] font-bold text-theme-muted uppercase text-center tracking-widest"
              >
                {day}
              </div>
            ))}
            {/* Simple calendar grid representation */}
            {dates.slice(0, 31).map((date) => (
              <div
                key={date}
                className={`bg-theme-card p-4 h-24 border border-theme/30 transition-colors hover:bg-theme-page/50 cursor-pointer relative group
                ${date === 8 ? "ring-2 ring-blue-500 ring-inset" : ""}
              `}
              >
                <span
                  className={`text-xs font-bold ${date === 8 ? "text-blue-500" : "text-theme-muted"}`}
                >
                  {date}
                </span>
                {date === 8 && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="h-1 bg-blue-500 rounded-full mb-1" />
                    <div className="h-1 bg-purple-500 rounded-full" />
                  </div>
                )}
                {date === 12 && (
                  <div className="absolute bottom-4 left-2 right-2 h-1 bg-orange-500 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-theme-card border border-theme rounded-3xl p-6">
            <h3 className="font-bold text-sm mb-6 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-blue-500" />
              Upcoming Today
            </h3>
            <div className="space-y-6">
              {events.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-6 last:pb-0 pb-6 border-l-2 border-theme"
                >
                  <div
                    className={`absolute top-0 -left-[1.5px] w-[3px] h-4 rounded-full bg-${event.color}-500`}
                  />
                  <p className="text-xs font-bold text-theme-primary">
                    {event.title}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-[10px] text-theme-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-blue-500">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-[10px] text-theme-muted">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-[10px] text-theme-muted">
                    <Users className="w-3 h-3" />
                    {event.attendees}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 text-white text-center">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-lg mb-2">Schedule Interview</h4>
            <p className="text-xs opacity-80 mb-6 font-light">
              Find time with candidates and hiring managers easily.
            </p>
            <button className="w-full py-3 bg-white text-blue-600 rounded-xl text-sm font-bold shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Launch Scheduler
            </button>
          </div>
        </div>
      </div>
    </HRMLayout>
  );
}
