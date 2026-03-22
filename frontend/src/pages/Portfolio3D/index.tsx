import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Zap, Globe, Code2, Layers, Cpu, Sparkles } from "lucide-react";
import "./Portfolio3D.css";

/* ── Animated floating orb ── */
function Orb({ cx, cy, r, color, delay = 0 }: { cx: string; cy: string; r: number; color: string; delay?: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: cx,
        top: cy,
        width: r * 2,
        height: r * 2,
        background: `radial-gradient(circle at 35% 35%, ${color}60, ${color}10)`,
        boxShadow: `0 0 ${r}px ${color}30`,
        transform: "translate(-50%, -50%)",
      }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* ── Floating geometric ring ── */
function Ring({ size, color, top, left, delay = 0, rotate = 0 }: { size: number; color: string; top: string; left: string; delay?: number; rotate?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none rounded-full border-2"
      style={{ width: size, height: size, borderColor: color, top, left, opacity: 0.4 }}
      animate={{ y: [0, -18, 0], rotate: [rotate, rotate + 180, rotate + 360] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* ── Stat card ── */
function StatCard({ value, label, color, delay }: { value: string; label: string; color: string; delay: number }) {
  return (
    <motion.div
      className="flex flex-col gap-2 p-8 rounded-[32px] border border-white/8 relative overflow-hidden group"
      style={{ background: "rgba(255,255,255,0.03)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ borderColor: `${color}60`, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 50% 100%, ${color}12, transparent 70%)` }} />
      <p className="font-black text-6xl tracking-tighter text-white">{value}</p>
      <p className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{label}</p>
    </motion.div>
  );
}

/* ── Capability pill ── */
function Pill({ icon: Icon, label, color }: { icon: React.ElementType; label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `${color}20` }}>
        <Icon size={14} style={{ color }} />
      </div>
      <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">{label}</span>
    </div>
  );
}

/* ── Main Component ── */
const Portfolio3D: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const bentoItems = [
    {
      span: "md:col-span-8",
      aspect: "aspect-[16/9]",
      label: "Visual Identity",
      title: "CYBERNETIC_DREAM",
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    },
    {
      span: "md:col-span-4",
      aspect: "aspect-square",
      label: "Web Design",
      title: "NEON_VOID",
      src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
    },
    {
      span: "md:col-span-4",
      aspect: "aspect-square",
      label: "Motion",
      title: "MONOLITH_OS",
      src: "https://images.unsplash.com/photo-1633436374961-09b92742047b?auto=format&fit=crop&q=80&w=800",
    },
    {
      span: "md:col-span-8",
      aspect: "aspect-[16/7]",
      label: "Experience",
      title: "ANALOG_FUTURE",
      src: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <div className="portfolio-wrapper bg-[#0B0B0B] text-[#e5e2e1] font-sans selection:bg-[#FF2D2D] selection:text-white overflow-x-hidden min-h-screen">

      {/* ── Ambient background elements ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Orb cx="10%" cy="20%" r={250} color="#FF2D2D" delay={0} />
        <Orb cx="85%" cy="60%" r={200} color="#cfbdff" delay={2} />
        <Orb cx="50%" cy="90%" r={180} color="#FF544A" delay={4} />
        <Ring size={120} color="#FF2D2D" top="15%" left="75%" delay={0} rotate={30} />
        <Ring size={70}  color="#cfbdff" top="50%" left="5%"  delay={2} rotate={-15} />
        <Ring size={90}  color="#FF544A" top="80%" left="60%" delay={1} rotate={60} />
        {/* grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
      </div>

      {/* ── Navbar ── */}
      <motion.nav
        className="fixed top-0 w-full z-50"
        style={{ background: "rgba(11,11,11,0.5)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-10 py-5 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF544A] to-[#FF2D2D] flex items-center justify-center">
              <Sparkles size={14} className="text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">AXYTHIC</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {["WORK", "EXPERTISE", "STUDIO", "CONTACT"].map((n, i) => (
              <a key={n} href={`#${n.toLowerCase()}`}
                className={`text-xs tracking-widest uppercase font-bold transition-colors ${i === 0 ? "text-white" : "text-white/40 hover:text-white"}`}>
                {n}
              </a>
            ))}
          </div>
          <button className="px-6 py-2.5 rounded-full border border-[#FF2D2D]/60 text-[#FF2D2D] font-black tracking-tighter uppercase text-sm hover:bg-[#FF2D2D]/10 transition-all">
            CONTACT
          </button>
        </div>
      </motion.nav>

      <main className="relative z-10 pt-28 px-4 md:px-8 space-y-8 max-w-[1440px] mx-auto">

        {/* ── Hero ── */}
        <section ref={heroRef} id="work" className="relative">
          <motion.div
            className="w-full bg-[#111110] rounded-[48px] overflow-hidden relative min-h-[620px] flex flex-col justify-end border border-white/5"
            style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          >
            {/* glow */}
            <div className="absolute inset-0 hero-glow" />

            {/* animated 3D visual */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* large gradient sphere */}
              <motion.div
                className="absolute top-[-10%] right-[-5%] w-[55%] h-[115%] rounded-full"
                style={{ background: "radial-gradient(circle at 40% 40%, rgba(255,45,45,0.18) 0%, rgba(207,189,255,0.06) 50%, transparent 70%)" }}
                animate={{ scale: [1, 1.06, 1], rotate: [0, 8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* 3D image */}
              <img
                className="absolute top-0 right-0 w-full md:w-3/5 h-full object-cover object-left opacity-40 mix-blend-screen"
                alt="Futuristic 3D abstract"
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
              />
              {/* floating chips */}
              {[
                { label: "GPU Accelerated", top: "15%", left: "55%", delay: 0.3 },
                { label: "< 50ms Render",   top: "35%", left: "72%", delay: 0.8 },
                { label: "WebGL Ready",     top: "60%", left: "58%", delay: 1.2 },
              ].map((chip) => (
                <motion.div
                  key={chip.label}
                  className="absolute hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-white/70 uppercase tracking-widest"
                  style={{ top: chip.top, left: chip.left, background: "rgba(11,11,11,0.7)", backdropFilter: "blur(12px)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: chip.delay + 0.8, duration: 0.6 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]" />
                  {chip.label}
                </motion.div>
              ))}
            </div>

            {/* hero text */}
            <div className="relative z-10 max-w-3xl p-8 md:p-16 pb-12 md:pb-16">
              <motion.p
                className="text-xs font-bold tracking-widest uppercase text-[#FF2D2D] mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Premium Digital Studio
              </motion.p>
              <motion.h1
                className="font-black leading-[0.9] tracking-tighter text-white uppercase mb-10"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
              >
                SHAPING{" "}
                <span className="text-[#FF2D2D] text-glow">THE</span>
                <br />
                DIGITAL VOID
              </motion.h1>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
              >
                <button className="group flex items-center gap-2 bg-gradient-to-r from-[#FF544A] to-[#FF2D2D] text-white px-8 py-4 rounded-full font-black tracking-tighter uppercase shadow-[0_20px_40px_rgba(255,45,45,0.25)] hover:shadow-[0_20px_60px_rgba(255,45,45,0.4)] transition-all">
                  Explore Folio
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full font-black tracking-tighter uppercase border border-white/15 text-white/60 hover:border-white/30 hover:text-white transition-all">
                  View Process
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── Bento Grid ── */}
        <section className="space-y-6 pt-8" id="expertise">
          <div className="flex items-end justify-between px-2">
            <motion.h2
              className="font-black text-3xl tracking-tighter uppercase text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured Work
            </motion.h2>
            <motion.span
              className="text-white/30 uppercase tracking-widest text-xs font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              2023 — 2025
            </motion.span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {bentoItems.map((item, i) => (
              <motion.div
                key={item.title}
                className={`${item.span} ${item.aspect} glass-card rounded-[32px] flex flex-col justify-between group cursor-pointer overflow-hidden relative`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    alt={item.title}
                    src={item.src}
                  />
                </div>
                {/* hover arrow */}
                <div className="relative z-20 flex justify-end p-5">
                  <motion.div
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "rgba(255,45,45,0.15)" }}
                  >
                    <ArrowUpRight size={16} className="text-[#FF2D2D]" />
                  </motion.div>
                </div>
                <div className="relative z-20 p-6 pb-7">
                  <p className="text-[#FF2D2D] text-xs font-bold tracking-widest uppercase mb-2">{item.label}</p>
                  <h3 className="font-black text-2xl tracking-tighter text-white uppercase">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Studio / Stats Section (replaces person image) ── */}
        <section className="py-16" id="studio">
          <div className="rounded-[48px] border border-white/6 overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, rgba(255,45,45,0.06), rgba(207,189,255,0.04), rgba(11,11,11,0.9))" }}>

            {/* top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/50 to-transparent" />

            <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* left — text */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-xs font-bold tracking-widest uppercase text-[#FF2D2D] mb-5">The Studio</p>
                  <h2 className="font-black leading-[0.95] tracking-tighter uppercase text-white"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                    CRAFTED<br />
                    <span className="text-transparent"
                      style={{ WebkitTextStroke: "2px rgba(255,45,45,0.6)" }}>
                      FOR THE
                    </span>
                    <br />EXTRAORDINARY
                  </h2>
                </motion.div>
                <motion.p
                  className="text-white/40 text-lg leading-relaxed max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  A boutique digital studio engineering immersive interfaces that bridge human intuition with cinematic futurism — from concept to pixel-perfect delivery.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.28 }}
                >
                  <Pill icon={Zap}    label="Motion Design" color="#FF2D2D" />
                  <Pill icon={Globe}  label="WebGL / 3D"    color="#cfbdff" />
                  <Pill icon={Code2}  label="Dev Systems"   color="#4ade80" />
                  <Pill icon={Layers} label="UI / UX"       color="#60a5fa" />
                  <Pill icon={Cpu}    label="AI Interfaces" color="#fb923c" />
                </motion.div>
              </div>

              {/* right — stat cards grid */}
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="150+"  label="Projects Shipped"  color="#FF2D2D"  delay={0.1} />
                <StatCard value="12+"   label="Years of Craft"    color="#cfbdff" delay={0.2} />
                <StatCard value="40ms"  label="Avg. Load Time"    color="#4ade80" delay={0.3} />
                <StatCard value="99.9%" label="Uptime SLA"        color="#60a5fa" delay={0.4} />
              </div>
            </div>

            {/* bottom accent */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/30 to-transparent" />
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="pb-20" id="contact">
          <motion.div
            className="bg-[#0e0e0e] rounded-[48px] p-8 md:p-20 relative overflow-hidden border border-white/5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF2D2D] opacity-[0.05] blur-[120px] -mr-48 -mt-48 pointer-events-none" />
            <div className="max-w-xl mx-auto space-y-10 relative z-10">
              <div className="text-center">
                <h2 className="font-black tracking-tighter uppercase text-white mb-3"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  Start a Project
                </h2>
                <p className="text-white/30 uppercase tracking-widest text-xs font-bold">Let's build the future together</p>
              </div>
              <form className="space-y-5">
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white font-bold tracking-tight focus:ring-1 focus:ring-[#FF2D2D] focus:border-[#FF2D2D] outline-none transition-all placeholder:text-white/20"
                  placeholder="YOUR NAME"
                  type="text"
                />
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white font-bold tracking-tight focus:ring-1 focus:ring-[#FF2D2D] focus:border-[#FF2D2D] outline-none transition-all placeholder:text-white/20"
                  placeholder="EMAIL ADDRESS"
                  type="email"
                />
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-[28px] px-8 py-5 text-white font-bold tracking-tight focus:ring-1 focus:ring-[#FF2D2D] focus:border-[#FF2D2D] outline-none transition-all placeholder:text-white/20 resize-none"
                  placeholder="PROJECT VISION"
                  rows={4}
                />
                <button
                  className="w-full bg-gradient-to-r from-[#FF544A] to-[#FF2D2D] text-white py-5 rounded-full font-black text-lg tracking-tighter uppercase shadow-[0_20px_40px_rgba(255,45,45,0.2)] hover:shadow-[0_20px_60px_rgba(255,45,45,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  type="button"
                >
                  Initialize Transmission
                </button>
              </form>
            </div>
          </motion.div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-12 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-[#FF544A] to-[#FF2D2D]" />
            <span className="text-xl font-black text-white tracking-tighter">AXYTHIC</span>
          </div>
          <div className="flex gap-8">
            {["Twitter", "Dribbble", "LinkedIn"].map((s, i) => (
              <a key={s} href="#"
                className={`text-xs font-bold tracking-widest uppercase transition-colors ${i === 0 ? "text-white" : "text-white/30 hover:text-white"}`}>
                {s}
              </a>
            ))}
          </div>
          <p className="text-xs tracking-widest uppercase text-white/20 font-bold">© 2025 AXYTHIC STUDIO.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio3D;
