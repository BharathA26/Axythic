import { useState, useRef, useEffect } from "react";
import {
  Bell,
  Mail,
  Share2,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Settings,
  LogOut,
  User,
  Check,
  X,
  Link as LinkIcon,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { View } from "./index";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Notification {
  id: number;
  title: string;
  desc: string;
  time: string;
  read: boolean;
  color: string;
}

interface Message {
  id: number;
  sender: string;
  preview: string;
  time: string;
  avatar: string;
  unread: boolean;
}

// ── Static data ───────────────────────────────────────────────────────────────

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Payment Received",
    desc: "Invoice INV-2025-001 has been paid by Stark Industries.",
    time: "2m ago",
    read: false,
    color: "bg-emerald-500",
  },
  {
    id: 2,
    title: "Invoice Overdue",
    desc: "INV-2025-004 from Oscorp is now overdue by 3 days.",
    time: "1h ago",
    read: false,
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "Recurring Payment",
    desc: "AWS Cloud $320 will be charged on Apr 1, 2025.",
    time: "3h ago",
    read: true,
    color: "bg-blue-500",
  },
  {
    id: 4,
    title: "Budget Alert",
    desc: "Entertainment category is at 90% of your monthly limit.",
    time: "5h ago",
    read: true,
    color: "bg-amber-500",
  },
  {
    id: 5,
    title: "New Login Detected",
    desc: "A login from iPhone 15 was detected in Delhi, IN.",
    time: "1d ago",
    read: true,
    color: "bg-violet-500",
  },
];

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "Stark Industries",
    preview: "Hi, can you resend the invoice for March?",
    time: "5m ago",
    avatar: "S",
    unread: true,
  },
  {
    id: 2,
    sender: "Wayne Enterprises",
    preview: "Payment will be processed by end of week.",
    time: "40m ago",
    avatar: "W",
    unread: true,
  },
  {
    id: 3,
    sender: "Axythic Support",
    preview: "Your plan has been upgraded successfully.",
    time: "2h ago",
    avatar: "A",
    unread: false,
  },
  {
    id: 4,
    sender: "Umbrella Corp",
    preview: "Thank you for the prompt service!",
    time: "1d ago",
    avatar: "U",
    unread: false,
  },
];

// ── Hook: close on outside click ─────────────────────────────────────────────

function useClickOutside(
  ref: React.RefObject<HTMLDivElement | null>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function NotificationsPanel({ onClose }: { onClose: () => void }) {
  const [notifs, setNotifs] = useState(initialNotifications);
  const unread = notifs.filter((n) => !n.read).length;

  const markAll = () =>
    setNotifs((ns) => ns.map((n) => ({ ...n, read: true })));
  const remove = (id: number) =>
    setNotifs((ns) => ns.filter((n) => n.id !== id));
  const markOne = (id: number) =>
    setNotifs((ns) => ns.map((n) => (n.id === id ? { ...n, read: true } : n)));

  return (
    <div className="absolute right-0 top-12 w-80 sm:w-96 max-w-[calc(100vw-1rem)] bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h3 className="font-bold text-gray-900">Notifications</h3>
          {unread > 0 && (
            <p className="text-xs text-blue-600 font-medium mt-0.5">
              {unread} unread
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {unread > 0 && (
            <button
              onClick={markAll}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              <Check className="w-3 h-3" /> Mark all read
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
        {notifs.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-3 px-5 py-3.5 cursor-pointer transition-colors ${n.read ? "hover:bg-gray-50" : "bg-blue-50/40 hover:bg-blue-50"}`}
            onClick={() => markOne(n.id)}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${n.color}`}
            />
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-semibold ${n.read ? "text-gray-700" : "text-gray-900"}`}
              >
                {n.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                {n.desc}
              </p>
              <p className="text-xs text-gray-300 mt-1">{n.time}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                remove(n.id);
              }}
              className="text-gray-300 hover:text-gray-500 flex-shrink-0 mt-0.5 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
        {notifs.length === 0 && (
          <div className="py-10 text-center text-gray-400 text-sm">
            No notifications
          </div>
        )}
      </div>
      <div className="px-5 py-3 border-t border-gray-100 text-center">
        <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
          View all notifications →
        </button>
      </div>
    </div>
  );
}

function MessagesPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState(initialMessages);
  const unread = messages.filter((m) => m.unread).length;
  const markRead = (id: number) =>
    setMessages((ms) =>
      ms.map((m) => (m.id === id ? { ...m, unread: false } : m)),
    );

  return (
    <div className="absolute right-0 top-12 w-72 sm:w-80 max-w-[calc(100vw-1rem)] bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h3 className="font-bold text-gray-900">Messages</h3>
          {unread > 0 && (
            <p className="text-xs text-blue-600 font-medium mt-0.5">
              {unread} new
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
        {messages.map((m) => (
          <div
            key={m.id}
            onClick={() => markRead(m.id)}
            className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors ${m.unread ? "bg-blue-50/40 hover:bg-blue-50" : "hover:bg-gray-50"}`}
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {m.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p
                  className={`text-sm font-semibold truncate ${m.unread ? "text-gray-900" : "text-gray-600"}`}
                >
                  {m.sender}
                </p>
                <span className="text-xs text-gray-300 flex-shrink-0">
                  {m.time}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 truncate">
                {m.preview}
              </p>
            </div>
            {m.unread && (
              <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
      <div className="px-5 py-3 border-t border-gray-100 text-center">
        <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
          Open inbox →
        </button>
      </div>
    </div>
  );
}

function ProfileMenu({
  onClose,
  onSettings,
}: {
  onClose: () => void;
  onSettings?: () => void;
}) {
  return (
    <div className="absolute right-0 top-12 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
      <div className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Alex Johnson</p>
            <p className="text-xs text-gray-400">admin@axythicfin.com</p>
          </div>
        </div>
      </div>
      <nav className="py-2">
        <button
          onClick={() => {
            onSettings?.();
            onClose();
          }}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <User className="w-4 h-4 text-gray-400" /> My Profile
        </button>
        <button
          onClick={() => {
            onSettings?.();
            onClose();
          }}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Settings className="w-4 h-4 text-gray-400" /> Settings
        </button>
        <div className="mx-4 my-1 h-[1px] bg-gray-100" />
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
          <LogOut className="w-4 h-4" /> Log out
        </button>
      </nav>
    </div>
  );
}

function ShareModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const copy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-gray-900 text-lg">Share Dashboard</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-2 mb-5">
          <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
            <LinkIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="text-sm text-gray-500 truncate">{url}</span>
          </div>
          <button
            onClick={copy}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${copied ? "bg-emerald-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> Copied!
              </>
            ) : (
              "Copy"
            )}
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center">
          Only users with dashboard access can view this link.
        </p>
      </div>
    </div>
  );
}

// ── Main Header ───────────────────────────────────────────────────────────────

interface HeaderProps {
  breadcrumb?: string;
  onNavigate?: (view: View) => void;
  onMenuClick?: () => void;
}

export default function Header({
  breadcrumb = "Dashboard",
  onNavigate,
  onMenuClick,
}: HeaderProps) {
  const [openPanel, setOpenPanel] = useState<
    "notifs" | "messages" | "profile" | null
  >(null);
  const [shareOpen, setShareOpen] = useState(false);

  const notifsRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    notifsRef,
    () => openPanel === "notifs" && setOpenPanel(null),
  );
  useClickOutside(
    messagesRef,
    () => openPanel === "messages" && setOpenPanel(null),
  );
  useClickOutside(
    profileRef,
    () => openPanel === "profile" && setOpenPanel(null),
  );

  const toggle = (panel: "notifs" | "messages" | "profile") =>
    setOpenPanel((prev) => (prev === panel ? null : panel));

  const unreadNotifs = initialNotifications.filter((n) => !n.read).length;
  const unreadMessages = initialMessages.filter((m) => m.unread).length;

  return (
    <>
      <header className="h-16 md:h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 z-40">
        {/* Left: hamburger (mobile) + breadcrumbs */}
        <div className="flex items-center gap-3">
          {/* Hamburger — only on mobile */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1 text-gray-400">
            <Link
              to="/"
              className="p-1.5 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <button className="p-1.5 border border-gray-200 bg-gray-50 rounded-md opacity-50 cursor-not-allowed">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="h-4 w-[1px] bg-gray-200 mx-1" />
          <div className="flex items-center font-medium text-sm">
            <span className="text-gray-500">Axythic Fin</span>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900">{breadcrumb}</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Notifications */}
          <div ref={notifsRef} className="relative">
            <button
              onClick={() => toggle("notifs")}
              title="Notifications"
              className={`p-2 rounded-full border transition-colors relative ${openPanel === "notifs" ? "bg-blue-50 border-blue-200 text-blue-600" : "text-gray-600 hover:bg-gray-50 border-gray-200"}`}
            >
              <Bell className="w-5 h-5" />
              {unreadNotifs > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {unreadNotifs}
                </span>
              )}
            </button>
            {openPanel === "notifs" && (
              <NotificationsPanel onClose={() => setOpenPanel(null)} />
            )}
          </div>

          {/* Messages */}
          <div ref={messagesRef} className="relative">
            <button
              onClick={() => toggle("messages")}
              title="Messages"
              className={`p-2 rounded-full border transition-colors relative ${openPanel === "messages" ? "bg-blue-50 border-blue-200 text-blue-600" : "text-gray-600 hover:bg-gray-50 border-gray-200"}`}
            >
              <Mail className="w-5 h-5" />
              {unreadMessages > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {unreadMessages}
                </span>
              )}
            </button>
            {openPanel === "messages" && (
              <MessagesPanel onClose={() => setOpenPanel(null)} />
            )}
          </div>

          <div className="h-6 w-[1px] bg-gray-200 mx-1" />

          {/* Profile */}
          <div ref={profileRef} className="relative">
            <button
              onClick={() => toggle("profile")}
              title="Profile"
              className="flex items-center gap-2 hover:bg-gray-50 py-1 px-2 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm select-none">
                A
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform ${openPanel === "profile" ? "rotate-180" : ""}`}
              />
            </button>
            {openPanel === "profile" && (
              <ProfileMenu
                onClose={() => setOpenPanel(null)}
                onSettings={() => onNavigate?.("settings")}
              />
            )}
          </div>

          {/* Share */}
          <button
            onClick={() => setShareOpen(true)}
            title="Share"
            className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm shadow-blue-600/20"
          >
            Share <Share2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Share Modal */}
      {shareOpen && <ShareModal onClose={() => setShareOpen(false)} />}
    </>
  );
}
