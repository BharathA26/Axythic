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
    <section className="relative py-24 bg-white overflow-hidden">
      {/* ── Background Pattern ── */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto opacity-40 mix-blend-multiply pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Soft radial mask so dots fade out at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-[#1a3c34] uppercase mb-3">
            Powerful Integrations
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Connect everything. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a3c34] to-emerald-500">
              Build anything.
            </span>
          </h3>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
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
            className="col-span-1 lg:col-span-1 bg-white rounded-3xl border border-gray-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <Command className="w-5 h-5 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900">Slash commands</h4>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              Create meetings, issues and more in just seconds without leaving
              your flow.
            </p>

            <div className="mt-auto bg-gray-50/50 rounded-2xl border border-gray-100 p-2 overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-100 shadow-sm mb-2">
                <span className="text-gray-400 font-mono">/</span>
                <span className="text-gray-800 text-sm font-medium">
                  meet |
                </span>
                <span className="w-px h-4 bg-blue-500 animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 bg-blue-50/50 rounded-xl cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <MonitorPlay className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Meet</p>
                    <p className="text-[10px] text-gray-500">
                      Start a Google Meet
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-default opacity-60">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <Video className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Zoom</p>
                    <p className="text-[10px] text-gray-500">
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
            className="col-span-1 lg:col-span-1 bg-white rounded-3xl border border-gray-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <LayoutDashboard className="w-5 h-5 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900">Embeds</h4>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              Rich integrations that bring your project management and
              deployments into view.
            </p>

            <div className="mt-auto space-y-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded bg-[#5e6ad2] flex items-center justify-center text-white text-[10px] font-bold">
                    L
                  </div>
                  <span className="text-xs font-bold text-gray-500">
                    Linear
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-900 mb-1">
                  Update authentication flow
                </p>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md">
                    <CheckCircle2 className="w-3 h-3" /> Done
                  </span>
                  <span className="text-[10px] text-gray-400">AXY-128</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded bg-black flex items-center justify-center text-white text-[10px] font-bold">
                    ▲
                  </div>
                  <span className="text-xs font-bold text-gray-500">
                    Vercel
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900">
                    landing-page-v2
                  </p>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                    Ready
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
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
            className="col-span-1 lg:col-span-1 bg-white rounded-3xl border border-gray-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <GitPullRequest className="w-5 h-5 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900">Activity channels</h4>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              Stay in the loop with real-time streaming updates from GitHub and
              more.
            </p>

            <div className="mt-auto bg-gray-50/50 rounded-2xl border border-gray-100 p-4 space-y-4">
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
                  className={`flex items-start gap-3 ${push.dim ? "opacity-50" : ""}`}
                >
                  <Github className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-xs font-semibold text-gray-900 truncate pr-2">
                        {push.repo}
                      </p>
                      <span className="text-[10px] text-gray-400 flex-shrink-0">
                        {push.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {push.alert && (
                        <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
                      )}
                      <span className="text-[10px] font-mono text-gray-500 border border-gray-200 bg-white px-1 rounded">
                        {push.hash}
                      </span>
                      <span className="text-xs justify-self-start text-gray-600 truncate">
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
            className="col-span-1 md:col-span-2 bg-white rounded-3xl border border-gray-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <TerminalSquare className="w-5 h-5 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900">
                Collaborative debugging
              </h4>
            </div>
            <p className="text-sm text-gray-500 mb-6">
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
                <div className="bg-blue-400 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md mt-1 shadow-sm whitespace-nowrap">
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
                <div className="bg-emerald-400 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md mt-1 shadow-sm whitespace-nowrap">
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
            className="col-span-1 md:col-span-1 bg-white rounded-3xl border border-gray-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900">AI summarize</h4>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Get the gist, without the fluff. Let AI catch you up on missed
              discussions instantly.
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-[10px] font-bold">
                  R
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-gray-900">
                      Robert Fox
                    </span>
                    <span className="text-[9px] text-gray-400">9:51 PM</span>
                  </div>
                  <div className="bg-gray-50 rounded-xl rounded-tl-none p-2 border border-gray-100">
                    <p className="text-xs text-gray-600 line-clamp-2">
                      Hey, do you think we should implement the caching layer
                      before launching?
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 text-[10px] font-bold">
                  T
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-gray-900">
                      Tejas R.
                    </span>
                    <span className="text-[9px] text-gray-400">9:52 PM</span>
                  </div>
                  <div className="bg-gray-50 rounded-xl rounded-tl-none p-2 border border-gray-100">
                    <p className="text-xs text-gray-600 line-clamp-2">
                      Yep! We definitely should — I think Redis is best.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI absolute button floating over chats */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                <button className="flex items-center gap-2 bg-[#1a3c34] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg pointer-events-auto hover:bg-[#112a24] transition-colors">
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
