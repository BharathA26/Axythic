import { motion } from "framer-motion";
import {
  MonitorPlay,
  Video,
  TerminalSquare,
  Github,
  GitPullRequest,
  CheckCircle2,
  AlertCircle,
  Command,
  LayoutDashboard,
  MessageSquare,
  Sparkles,
  MousePointer2,
} from "lucide-react";

export default function Features() {
  return (
    <section className="relative py-32 bg-theme-page transition-colors duration-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto opacity-40 dark:opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(var(--dot-color) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Fade mask */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, var(--bg-page) 100%)",
          }}
        />
      </div>
      {/* Background orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="text-sm font-medium text-emerald-400 tracking-wide uppercase">
              Powerful Integrations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-theme-primary tracking-tight leading-tight">
            Connect everything. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Build anything.
            </span>
          </h2>
          <p className="mt-6 text-lg text-theme-muted max-w-2xl mx-auto font-light">
            Bring your favorite tools together in one beautiful, collaborative
            workspace. Monitor deployments, assign issues, and debug together in
            real-time.
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Slash Commands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-1 bg-theme-card rounded-3xl border border-theme p-6 hover:bg-theme-card transition-all duration-300 relative overflow-hidden flex flex-col backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-theme-card flex items-center justify-center border border-theme">
                <Command className="w-5 h-5 text-theme-muted" />
              </div>
              <h4 className="font-bold text-theme-primary">Slash commands</h4>
            </div>
            <p className="text-sm text-theme-muted mb-8 font-light">
              Create meetings, issues and more in just seconds without leaving
              your flow.
            </p>

            <div className="mt-auto bg-theme-card rounded-2xl border border-theme p-2 overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-2 bg-theme-card rounded-xl border border-theme mb-2">
                <span className="text-theme-muted font-mono">/</span>
                <span className="text-gray-300 text-sm font-medium">
                  meet |
                </span>
                <span className="w-px h-4 bg-blue-400 animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 bg-blue-500/10 rounded-xl cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-theme-card border border-theme flex items-center justify-center">
                    <MonitorPlay className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-theme-primary">Meet</p>
                    <p className="text-[10px] text-theme-muted">
                      Start a Google Meet
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-default opacity-50">
                  <div className="w-8 h-8 rounded-lg bg-theme-card border border-theme flex items-center justify-center">
                    <Video className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-300">Zoom</p>
                    <p className="text-[10px] text-theme-muted">
                      Start a Zoom meeting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Embeds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 lg:col-span-1 bg-theme-card rounded-3xl border border-theme p-6 hover:bg-theme-card transition-all duration-300 relative overflow-hidden flex flex-col backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-theme-card flex items-center justify-center border border-theme">
                <LayoutDashboard className="w-5 h-5 text-theme-muted" />
              </div>
              <h4 className="font-bold text-theme-primary">Embeds</h4>
            </div>
            <p className="text-sm text-theme-muted mb-8 font-light">
              Rich integrations that bring your project management and
              deployments into view.
            </p>

            <div className="mt-auto space-y-3">
              <div className="bg-theme-card rounded-2xl border border-theme p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded bg-[#5e6ad2] flex items-center justify-center text-theme-primary text-[10px] font-bold">
                    L
                  </div>
                  <span className="text-xs font-bold text-theme-muted">
                    Linear
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-200 mb-1">
                  Update authentication flow
                </p>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 bg-theme-card text-theme-muted rounded-md">
                    <CheckCircle2 className="w-3 h-3" /> Done
                  </span>
                  <span className="text-[10px] text-theme-muted">AXY-128</span>
                </div>
              </div>

              <div className="bg-theme-card rounded-2xl border border-theme p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded bg-white/90 flex items-center justify-center text-black text-[10px] font-bold">
                    ▲
                  </div>
                  <span className="text-xs font-bold text-theme-muted">
                    Vercel
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-200">
                    landing-page-v2
                  </p>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />{" "}
                    Ready
                  </span>
                </div>
                <p className="text-[10px] text-theme-muted mt-1">
                  production • 2m ago
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Activity Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 lg:col-span-1 bg-theme-card rounded-3xl border border-theme p-6 hover:bg-theme-card transition-all duration-300 relative overflow-hidden flex flex-col backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-theme-card flex items-center justify-center border border-theme">
                <GitPullRequest className="w-5 h-5 text-theme-muted" />
              </div>
              <h4 className="font-bold text-theme-primary">
                Activity channels
              </h4>
            </div>
            <p className="text-sm text-theme-muted mb-8 font-light">
              Stay in the loop with real-time streaming updates from GitHub and
              more.
            </p>

            <div className="mt-auto bg-theme-card rounded-2xl border border-theme p-4 space-y-4">
              {[
                {
                  repo: "Axythic/frontend",
                  hash: "b47571",
                  desc: "Update sidebar nav",
                  time: "20s",
                },
                {
                  repo: "Axythic/backend",
                  hash: "a58221",
                  desc: "Fix auth resolver",
                  time: "1m",
                  alert: true,
                },
                {
                  repo: "Axythic/docs",
                  hash: "f91727",
                  desc: "Add setup guide",
                  time: "1h",
                  dim: true,
                },
              ].map((push, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${push.dim ? "opacity-40" : ""}`}
                >
                  <Github className="w-4 h-4 text-theme-muted mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-xs font-semibold text-gray-300 truncate pr-2">
                        {push.repo}
                      </p>
                      <span className="text-[10px] text-theme-muted flex-shrink-0">
                        {push.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {push.alert && (
                        <AlertCircle className="w-3 h-3 text-red-400 flex-shrink-0" />
                      )}
                      <span className="text-[10px] font-mono text-theme-muted border border-theme bg-theme-card px-1 rounded">
                        {push.hash}
                      </span>
                      <span className="text-xs justify-self-start text-theme-muted truncate">
                        {push.desc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Collaborative Debugging (Wide spanning 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2 bg-theme-card rounded-3xl border border-theme p-6 hover:bg-theme-card transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-theme-card flex items-center justify-center border border-theme">
                <TerminalSquare className="w-5 h-5 text-theme-muted" />
              </div>
              <h4 className="font-bold text-theme-primary">
                Collaborative debugging
              </h4>
            </div>
            <p className="text-sm text-theme-muted mb-6 font-light">
              Share your screen and collaboratively debug code together with
              multi-player live cursors.
            </p>

            <div className="relative bg-[#0d1117] rounded-2xl border border-gray-800 p-5 overflow-hidden font-mono text-xs leading-relaxed">
              <div className="absolute top-3 left-4 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>

              <pre className="text-gray-300 mt-4 overflow-x-auto">
                <code>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">stage</span>{" "}
                  <span className="text-pink-400">=</span> document.
                  <span className="text-green-300">querySelector</span>(
                  <span className="text-yellow-300">'svg'</span>);
                  <br />
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">hit</span>{" "}
                  <span className="text-pink-400">=</span> document.
                  <span className="text-green-300">querySelector</span>(
                  <span className="text-yellow-300">'#target'</span>);
                  <br />
                  <span className="text-pink-400">let</span> mPos{" "}
                  <span className="text-pink-400">=</span> {"{"} x:{" "}
                  <span className="text-purple-300">50</span>, y:{" "}
                  <span className="text-purple-300">-50</span> {"}"};<br />
                  <br />
                  <span className="text-pink-400">for</span> (
                  <span className="text-pink-400">let</span> i
                  <span className="text-pink-400">=</span>
                  <span className="text-purple-300">1</span>; i
                  <span className="text-pink-400">&lt;</span>
                  <span className="text-purple-300">10</span>; i
                  <span className="text-pink-400">++</span>) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;makePt(i
                  <span className="text-pink-400">*</span>
                  <span className="text-purple-300">10</span>, i
                  <span className="text-pink-400">*</span>
                  <span className="text-purple-300">10</span>);
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <span className="text-pink-400">function</span>{" "}
                  <span className="text-blue-300">makePt</span>(x, y) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">g</span>{" "}
                  <span className="text-pink-400">=</span> document.
                  <span className="text-green-300">createElement</span>(
                  <span className="text-yellow-300">'g'</span>);
                  <br />
                  {"}"}
                </code>
              </pre>

              {/* Animated cursors */}
              <motion.div
                animate={{ x: [0, 80, -20, 0], y: [0, -30, 20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 left-32 flex flex-col items-start pointer-events-none"
              >
                <MousePointer2 className="w-4 h-4 text-blue-400 fill-blue-400 drop-shadow-md origin-top-left -rotate-12" />
                <div className="bg-blue-400 text-theme-primary text-[9px] font-bold px-1.5 py-0.5 rounded-md mt-1 shadow-sm whitespace-nowrap">
                  Sarah J.
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [60, -40, 40, 60], y: [20, 40, -10, 20] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-24 left-64 flex flex-col items-start pointer-events-none"
              >
                <MousePointer2 className="w-4 h-4 text-emerald-400 fill-emerald-400 drop-shadow-md origin-top-left -rotate-12" />
                <div className="bg-emerald-400 text-theme-primary text-[9px] font-bold px-1.5 py-0.5 rounded-md mt-1 shadow-sm whitespace-nowrap">
                  Mike T.
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 5: AI Summarize */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-1 bg-theme-card rounded-3xl border border-theme p-6 hover:bg-theme-card transition-all duration-300 relative overflow-hidden flex flex-col backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-theme-card flex items-center justify-center border border-theme">
                <MessageSquare className="w-5 h-5 text-theme-muted" />
              </div>
              <h4 className="font-bold text-theme-primary">AI summarize</h4>
            </div>
            <p className="text-sm text-theme-muted mb-6 font-light">
              Get the gist, without the fluff. Let AI catch you up on missed
              discussions instantly.
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center text-blue-400 text-[10px] font-bold">
                  R
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-gray-300">
                      Robert Fox
                    </span>
                    <span className="text-[9px] text-theme-muted">9:51 PM</span>
                  </div>
                  <div className="bg-theme-card rounded-xl rounded-tl-none p-2 border border-theme">
                    <p className="text-xs text-theme-muted line-clamp-2">
                      Hey, do you think we should implement the caching layer
                      before launching?
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex-shrink-0 flex items-center justify-center text-purple-400 text-[10px] font-bold">
                  T
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-gray-300">
                      Tejas R.
                    </span>
                    <span className="text-[9px] text-theme-muted">9:52 PM</span>
                  </div>
                  <div className="bg-theme-card rounded-xl rounded-tl-none p-2 border border-theme">
                    <p className="text-xs text-theme-muted line-clamp-2">
                      Yep! We definitely should — I think Redis is best.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI absolute button floating over chats */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-blue-500/20 pointer-events-auto hover:from-blue-500 hover:to-indigo-500 transition-all">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> Auto
                  Summarize
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
