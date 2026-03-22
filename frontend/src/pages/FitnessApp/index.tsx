import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Activity, Flame, Timer, Dumbbell, Heart, Trophy,
  TrendingUp, Zap, Play, ChevronRight, ArrowLeft, Target,
  BarChart2, Users, Apple,
} from "lucide-react";

/* ─── Phone Mockup Shell ─── */
function PhoneMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 260, height: 530 }}>
      {/* outer shell */}
      <div className="absolute inset-0 rounded-[44px] border-[6px] border-[#1f1f1f] bg-[#111] shadow-[0_40px_80px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
      {/* notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1f1f1f] rounded-full z-30" />
      {/* screen */}
      <div className="absolute inset-[6px] rounded-[38px] overflow-hidden bg-[#0d0d0d] z-10">
        {children}
      </div>
      {/* side button */}
      <div className="absolute right-[-8px] top-24 w-1.5 h-12 bg-[#2a2a2a] rounded-r-full" />
      <div className="absolute left-[-8px] top-20 w-1.5 h-8 bg-[#2a2a2a] rounded-l-full" />
      <div className="absolute left-[-8px] top-32 w-1.5 h-8 bg-[#2a2a2a] rounded-l-full" />
    </div>
  );
}

/* ─── Screen: Dashboard ─── */
function DashboardScreen() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] text-white flex flex-col overflow-hidden pt-7">
      {/* header */}
      <div className="px-5 pb-3">
        <p className="text-xs text-white/40">Good Morning 👋</p>
        <p className="text-base font-black tracking-tight">Alex Johnson</p>
      </div>
      {/* streak card */}
      <div className="mx-4 rounded-2xl p-4 mb-3"
        style={{ background: "linear-gradient(135deg, #a3e635, #4ade80)" }}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#0d0d0d] font-black text-xs uppercase tracking-wider">Weekly Streak</p>
          <Flame size={16} className="text-[#0d0d0d]" />
        </div>
        <p className="text-[#0d0d0d] font-black text-3xl leading-none">14 🔥</p>
        <p className="text-[#0d0d0d]/60 text-xs mt-1">Days in a row</p>
        <div className="flex gap-1 mt-3">
          {["M","T","W","T","F","S","S"].map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className={`w-full h-1 rounded-full ${i < 5 ? "bg-[#0d0d0d]/50" : "bg-[#0d0d0d]/20"}`} />
              <span className="text-[8px] text-[#0d0d0d]/60 font-bold">{d}</span>
            </div>
          ))}
        </div>
      </div>
      {/* stat row */}
      <div className="flex gap-2 px-4 mb-3">
        {[
          { icon: Flame, val: "420", unit: "kcal", color: "#f97316" },
          { icon: Timer, val: "47", unit: "min",  color: "#a3e635" },
          { icon: Heart, val: "138", unit: "bpm",  color: "#f43f5e" },
        ].map(({ icon: Icon, val, unit, color }, i) => (
          <div key={i} className="flex-1 rounded-xl p-2.5 bg-white/5 border border-white/8">
            <Icon size={12} style={{ color }} />
            <p className="text-white font-black text-lg leading-none mt-1">{val}</p>
            <p className="text-white/30 text-[9px] uppercase tracking-wider">{unit}</p>
          </div>
        ))}
      </div>
      {/* today's workout */}
      <div className="px-4">
        <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Today's Plan</p>
        <div className="flex items-center gap-3 rounded-xl p-3 bg-white/5 border border-white/8">
          <div className="w-9 h-9 rounded-xl bg-[#a3e635]/20 flex items-center justify-center">
            <Dumbbell size={14} className="text-[#a3e635]" />
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-xs">Upper Body Blast</p>
            <p className="text-white/30 text-[9px]">8 exercises · 45 min</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#a3e635] flex items-center justify-center">
            <Play size={10} fill="black" className="text-black ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen: Workout ─── */
function WorkoutScreen() {
  const exercises = [
    { name: "Bench Press", sets: "4×12", done: true },
    { name: "Incline Dumbbell", sets: "3×10", done: true },
    { name: "Cable Fly", sets: "3×15", done: false },
    { name: "Tricep Pushdown", sets: "4×12", done: false },
  ];
  return (
    <div className="w-full h-full bg-[#0d0d0d] text-white flex flex-col pt-7">
      <div className="px-5 flex items-center gap-2 mb-4">
        <ArrowLeft size={14} className="text-white/40" />
        <p className="text-sm font-black">Upper Body Blast</p>
      </div>
      {/* timer */}
      <div className="mx-4 rounded-2xl p-4 mb-4 text-center"
        style={{ background: "linear-gradient(135deg, #111, #1a1a1a)", border: "1px solid rgba(163,230,53,0.2)" }}>
        <p className="text-[#a3e635] text-[10px] uppercase tracking-widest mb-1">Active Time</p>
        <p className="text-white font-black text-4xl leading-none tracking-tight">24:37</p>
        <div className="flex justify-center gap-4 mt-3">
          <div className="text-center">
            <p className="text-white font-bold text-sm">316</p>
            <p className="text-white/30 text-[9px] uppercase">kcal</p>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <p className="text-white font-bold text-sm">2/4</p>
            <p className="text-white/30 text-[9px] uppercase">done</p>
          </div>
        </div>
      </div>
      {/* exercise list */}
      <div className="px-4 space-y-2">
        {exercises.map((ex, i) => (
          <div key={i} className={`flex items-center gap-3 rounded-xl p-2.5 border ${ex.done ? "bg-[#a3e635]/8 border-[#a3e635]/20" : "bg-white/3 border-white/8"}`}>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${ex.done ? "bg-[#a3e635] border-[#a3e635]" : "border-white/20"}`}>
              {ex.done && <div className="w-2 h-2 rounded-full bg-black" />}
            </div>
            <p className={`flex-1 text-xs font-bold ${ex.done ? "text-white/40 line-through" : "text-white"}`}>{ex.name}</p>
            <p className="text-white/30 text-[9px]">{ex.sets}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Screen: Stats ─── */
function StatsScreen() {
  const bars = [65, 80, 45, 90, 70, 55, 85];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="w-full h-full bg-[#0d0d0d] text-white flex flex-col pt-7">
      <div className="px-5 mb-4">
        <p className="text-xs text-white/40">Progress</p>
        <p className="text-base font-black">Analytics</p>
      </div>
      {/* ring */}
      <div className="flex justify-center mb-4">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#a3e635" strokeWidth="10"
              strokeDasharray="251" strokeDashoffset="65" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white font-black text-xl leading-none">74%</p>
            <p className="text-white/30 text-[9px] uppercase">Goal</p>
          </div>
        </div>
      </div>
      {/* weekly bar chart */}
      <div className="px-4 mb-4">
        <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Weekly Volume</p>
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div className="w-full rounded-t-md"
                style={{ background: i === 3 ? "#a3e635" : "rgba(163,230,53,0.25)", height: `${h}%` }}
                initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              />
              <span className="text-[8px] text-white/30 font-bold">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
      {/* mini stats */}
      <div className="flex gap-2 px-4">
        {[
          { label: "Workouts", val: "18", color: "#a3e635" },
          { label: "Calories", val: "9.2k", color: "#f97316" },
          { label: "PR Set", val: "3", color: "#a78bfa" },
        ].map((s, i) => (
          <div key={i} className="flex-1 rounded-xl p-2 bg-white/5 text-center">
            <p className="font-black text-sm text-white">{s.val}</p>
            <p className="text-[8px] uppercase tracking-wider" style={{ color: s.color }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({ icon: Icon, title, desc, color, delay }: {
  icon: React.ElementType; title: string; desc: string; color: string; delay: number;
}) {
  return (
    <motion.div
      className="p-6 rounded-2xl border border-white/8 bg-white/3 group hover:border-white/15 transition-colors relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 0% 0%, ${color}10, transparent 60%)` }} />
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
        <Icon size={20} style={{ color }} />
      </div>
      <h4 className="text-white font-bold text-base mb-2">{title}</h4>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ─── Main Page ─── */
const SCREENS = [
  { label: "Dashboard", component: <DashboardScreen /> },
  { label: "Workout",   component: <WorkoutScreen />   },
  { label: "Analytics", component: <StatsScreen />     },
];

export default function FitnessApp() {
  const [activeScreen, setActiveScreen] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const features = [
    { icon: Activity,   title: "Smart Tracking",      desc: "Real-time heart rate, calories, reps and sets tracked automatically via wearables and vision AI.",          color: "#a3e635" },
    { icon: Trophy,     title: "Personal Records",    desc: "Set new PRs and get notified instantly. Every milestone logged and celebrated in your fitness journey.",    color: "#f59e0b" },
    { icon: TrendingUp, title: "Progress Analytics",  desc: "Weekly and monthly breakdowns of volume, intensity, and recovery, visualised in beautiful charts.",         color: "#06b6d4" },
    { icon: Target,     title: "Goal Planning",       desc: "AI-powered program builder adapts your plan dynamically based on performance, fatigue and availability.",   color: "#a78bfa" },
    { icon: BarChart2,  title: "Nutrition Sync",      desc: "Log meals, track macros and sync with Apple Health or Google Fit for a complete picture of your health.",   color: "#f97316" },
    { icon: Users,      title: "Community Challenges",desc: "Join weekly challenges, compete on leaderboards, and train together with friends from anywhere.",            color: "#f43f5e" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* ── ambient background ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-5%] left-[35%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)" }} />
        {/* subtle grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }} />
      </div>

      {/* ── Navbar ── */}
      <motion.header
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: "rgba(8,8,8,0.7)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-[#a3e635]">
            <Zap size={16} fill="black" className="text-black" />
          </div>
          <span className="font-black text-lg tracking-tight">FitPulse</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#a3e635]/15 text-[#a3e635] border border-[#a3e635]/30 font-bold">PRO</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/40">
          {["Features", "Screens", "Plans", "Reviews"].map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-white transition-colors">{n}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <Apple size={14} />
            <span className="hidden md:inline">App Store</span>
          </div>
          <button className="px-5 py-2.5 rounded-full text-sm font-bold bg-[#a3e635] text-black hover:bg-[#bef264] transition-colors">
            Download Free
          </button>
        </div>
      </motion.header>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 overflow-hidden">
        <motion.div style={{ y: heroY }} className="relative z-10 max-w-4xl mx-auto">
          {/* badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a3e635]/25 bg-[#a3e635]/8 mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
            <span className="text-xs text-[#a3e635] font-bold uppercase tracking-widest">Fitness App · iOS & Android</span>
          </motion.div>

          {/* headline */}
          <motion.h1
            className="font-black leading-[1] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="block text-white">Train Smarter.</span>
            <span className="block"
              style={{
                background: "linear-gradient(135deg, #a3e635, #4ade80, #a3e635)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 4s ease infinite",
              }}>
              Hit Every Goal.
            </span>
          </motion.h1>

          <motion.p
            className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            The most intelligent fitness companion — adaptive workouts, real-time analytics, and community-powered motivation in one beautiful app.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold bg-[#a3e635] text-black hover:bg-[#bef264] hover:shadow-[0_0_40px_rgba(163,230,53,0.4)] transition-all">
              Get Started Free
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold border border-white/12 text-white/60 hover:text-white hover:border-white/25 transition-all">
              <Play size={14} fill="currentColor" />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* phone mockups */}
        <motion.div
          className="relative flex justify-center items-end gap-6 z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* left phone - tilted */}
          <motion.div
            className="hidden md:block"
            style={{ rotate: -8, y: 30, opacity: 0.6 }}
            whileHover={{ opacity: 0.9, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <PhoneMockup>
              <StatsScreen />
            </PhoneMockup>
          </motion.div>

          {/* center phone - main */}
          <div className="relative">
            {/* glow under center phone */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(163,230,53,0.3), transparent 70%)", filter: "blur(16px)" }} />
            <PhoneMockup>
              <DashboardScreen />
            </PhoneMockup>
          </div>

          {/* right phone - tilted */}
          <motion.div
            className="hidden md:block"
            style={{ rotate: 8, y: 30, opacity: 0.6 }}
            whileHover={{ opacity: 0.9, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <PhoneMockup>
              <WorkoutScreen />
            </PhoneMockup>
          </motion.div>
        </motion.div>

        {/* floating stat pills */}
        {[
          { text: "🔥 2,400 kcal burned", x: "-left-4 md:left-20", y: "top-[42%]", delay: 1.0 },
          { text: "💪 New PR: 120kg",     x: "right-4 md:right-16",y: "top-[38%]", delay: 1.3 },
          { text: "⚡ 14-day streak",     x: "left-4 md:left-24",  y: "top-[58%]", delay: 1.6 },
        ].map((pill, i) => (
          <motion.div
            key={i}
            className={`absolute ${pill.x} ${pill.y} hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white`}
            style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: pill.delay, duration: 0.5 }}
          >
            {pill.text}
          </motion.div>
        ))}
      </section>

      {/* ── Screen Tabs ── */}
      <section id="screens" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-widest text-[#a3e635] mb-3 font-bold">App Screens</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-[#4ade80]">
                every moment
              </span>
            </h2>
          </motion.div>

          {/* tab bar */}
          <div className="flex justify-center gap-2 mb-12">
            {SCREENS.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActiveScreen(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeScreen === i
                    ? "bg-[#a3e635] text-black"
                    : "border border-white/10 text-white/40 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* phone + description */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative">
                  <div className="absolute -inset-6 rounded-full"
                    style={{ background: "radial-gradient(ellipse, rgba(163,230,53,0.1), transparent 70%)", filter: "blur(20px)" }} />
                  <PhoneMockup>
                    {SCREENS[activeScreen].component}
                  </PhoneMockup>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="max-w-sm text-left">
              {[
                {
                  title: "Your fitness command centre",
                  desc: "The dashboard surfaces everything that matters — streak, calories, active time, and today's workout — the moment you open the app. No digging required.",
                  bullets: ["Live activity ring", "Streak tracker", "Smart workout suggestion"],
                },
                {
                  title: "Built for intense sessions",
                  desc: "Follow guided workouts with rest timers, set-by-set tracking, and one-tap exercise substitutions. The app stays out of your way while you lift.",
                  bullets: ["Rest timer", "Video form guides", "Progressive overload tracking"],
                },
                {
                  title: "Data that drives results",
                  desc: "Visual progress reports break down weekly volume, personal records, and recovery scores — so you always know if you're heading in the right direction.",
                  bullets: ["Weekly volume chart", "PR history", "Recovery score"],
                },
              ][activeScreen] && (() => {
                const info = [
                  {
                    title: "Your fitness command centre",
                    desc: "The dashboard surfaces everything that matters — streak, calories, active time, and today's workout — the moment you open the app.",
                    bullets: ["Live activity ring", "Streak tracker", "Smart workout suggestion"],
                  },
                  {
                    title: "Built for intense sessions",
                    desc: "Follow guided workouts with rest timers, set-by-set tracking, and one-tap exercise substitutions. The app stays out of your way while you lift.",
                    bullets: ["Rest timer", "Video form guides", "Progressive overload tracking"],
                  },
                  {
                    title: "Data that drives results",
                    desc: "Visual progress reports break down weekly volume, personal records, and recovery scores so you always know if you're improving.",
                    bullets: ["Weekly volume chart", "PR history", "Recovery score"],
                  },
                ][activeScreen];
                return (
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                  >
                    <p className="text-xs uppercase tracking-widest text-[#a3e635] mb-3 font-bold">
                      {SCREENS[activeScreen].label}
                    </p>
                    <h3 className="text-2xl font-black text-white mb-3">{info.title}</h3>
                    <p className="text-white/40 leading-relaxed mb-6">{info.desc}</p>
                    <ul className="space-y-2">
                      {info.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-white/70">
                          <span className="w-4 h-4 rounded-full bg-[#a3e635]/20 border border-[#a3e635]/40 flex items-center justify-center flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-widest text-[#a3e635] mb-3 font-bold">Everything You Need</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Packed with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-[#4ade80]">
                pro features
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats banner ── */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-5xl mx-auto rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(163,230,53,0.08), rgba(74,222,128,0.04))", border: "1px solid rgba(163,230,53,0.15)" }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { val: "500K+",  label: "Active Users"     },
            { val: "12M+",   label: "Workouts Logged"  },
            { val: "4.9★",   label: "App Store Rating" },
            { val: "98%",    label: "Goal Hit Rate"    },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-black text-[#a3e635] mb-1">{s.val}</p>
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#a3e635] flex items-center justify-center mx-auto mb-8">
            <Zap size={30} fill="black" className="text-black" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Start your fitness journey{" "}
            <span className="text-[#a3e635]">today.</span>
          </h2>
          <p className="text-white/40 text-lg mb-10">
            Free forever for the basics. Upgrade when you're ready to go all in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 rounded-full font-black bg-[#a3e635] text-black hover:bg-[#bef264] hover:shadow-[0_0_50px_rgba(163,230,53,0.4)] transition-all text-sm uppercase tracking-wider">
              Download on iOS
            </button>
            <button className="px-10 py-4 rounded-full font-black border border-white/12 text-white/60 hover:text-white hover:border-white/25 transition-all text-sm uppercase tracking-wider">
              Get on Android
            </button>
          </div>
          <p className="mt-6 text-xs text-white/20">No credit card required · Cancel anytime</p>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/6 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#a3e635] flex items-center justify-center">
              <Zap size={12} fill="black" className="text-black" />
            </div>
            <span className="font-black tracking-tight">FitPulse</span>
          </div>
          <p className="text-xs text-white/20">© 2025 Axythic Studio. All rights reserved.</p>
          <a href="/" className="text-xs text-white/30 hover:text-white transition-colors">← Back to Portfolio</a>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
