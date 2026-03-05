import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Copy } from "lucide-react";

export default function CodeDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const editorY = useTransform(scrollYProgress, [0, 0.8], [60, -20]);
  const editorOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [0.4, 1, 1],
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-8 pb-24 bg-transparent overflow-visible"
      id="code-demo"
    >
      {/* ── Background Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* 3D VS Code Editor Mockup */}
      <motion.div
        style={{ y: editorY, opacity: editorOpacity }}
        className="relative z-20 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ rotateX: 45, scale: 0.8 }}
            whileInView={{ rotateX: 15, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
            style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent rounded-3xl blur-3xl" />

            {/* Editor Container */}
            <div className="relative bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#323233] border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs text-white/50 ml-4 font-sans tracking-wide">
                    deploy.ts — Axythic
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-white/30 font-sans hidden sm:flex">
                  <span>Ln 12, Col 28</span>
                </div>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="w-16 bg-[#252526] border-r border-gray-800 py-4 hidden sm:flex flex-col items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-white/60 hover:bg-white/10 rounded transition-colors cursor-pointer">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center text-white/30 hover:bg-white/10 rounded transition-colors cursor-pointer">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center text-white/30 hover:bg-white/10 rounded transition-colors cursor-pointer">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Code Editor */}
                <div className="flex-1 overflow-hidden flex flex-col">
                  <div className="p-4 sm:p-6 font-mono text-[11px] sm:text-[13px] leading-relaxed flex-1">
                    <CodeLine
                      delay={0.1}
                      lineNumber={1}
                      content={
                        <span className="text-gray-500 italic">
                          // Axythic Deployment Pipeline
                        </span>
                      }
                    />
                    <CodeLine
                      delay={0.15}
                      lineNumber={2}
                      content={<span className="text-[#c586c0]">import</span>}
                    />
                    <CodeLine
                      delay={0.2}
                      lineNumber={3}
                      content={
                        <span className="text-[#dcdcaa] pl-4">buildApp,</span>
                      }
                    />
                    <CodeLine
                      delay={0.25}
                      lineNumber={4}
                      content={
                        <span className="text-[#dcdcaa] pl-4">
                          configureCloud,
                        </span>
                      }
                    />
                    <CodeLine
                      delay={0.3}
                      lineNumber={5}
                      content={
                        <span className="text-[#dcdcaa] pl-4">
                          optimizeInfrastructure
                        </span>
                      }
                    />
                    <CodeLine
                      delay={0.35}
                      lineNumber={6}
                      content={
                        <>
                          <span className="text-[#cccccc]">{"}"}</span>{" "}
                          <span className="text-[#c586c0]">from</span>{" "}
                          <span className="text-[#ce9178]">
                            '@axythic/devops'
                          </span>
                          ;
                        </>
                      }
                    />
                    <CodeLine delay={0.4} lineNumber={7} content={<></>} />
                    <CodeLine
                      delay={0.45}
                      lineNumber={8}
                      content={
                        <span className="text-gray-500 italic">
                          // Automated deployment with DevOps best practices
                        </span>
                      }
                    />
                    <CodeLine
                      delay={0.5}
                      lineNumber={9}
                      content={<span className="text-[#c586c0]">const</span>}
                    />
                    <CodeLine
                      delay={0.55}
                      lineNumber={10}
                      content={
                        <>
                          <span className="text-[#4fc1ff]">deploy</span>{" "}
                          <span className="text-[#d4d4d4]">=</span>{" "}
                          <span className="text-[#569cd6]">async</span>{" "}
                          <span className="text-[#d4d4d4]">()</span>{" "}
                          <span className="text-[#569cd6]">=&gt;</span>{" "}
                          <span className="text-[#cccccc]">{"{"}</span>
                        </>
                      }
                    />
                    <CodeLine
                      delay={0.6}
                      lineNumber={11}
                      content={
                        <>
                          <span className="text-[#c586c0] pl-4">await</span>{" "}
                          <span className="text-[#dcdcaa]">buildApp</span>
                          <span className="text-[#d4d4d4]">();</span>
                        </>
                      }
                    />
                    <CodeLine
                      delay={0.65}
                      lineNumber={12}
                      content={
                        <>
                          <span className="text-[#c586c0] pl-4">await</span>{" "}
                          <span className="text-[#dcdcaa]">configureCloud</span>
                          <span className="text-[#d4d4d4]">();</span>
                        </>
                      }
                    />
                    <CodeLine
                      delay={0.7}
                      lineNumber={13}
                      content={
                        <>
                          <span className="text-[#c586c0] pl-4">await</span>{" "}
                          <span className="text-[#dcdcaa]">
                            optimizeInfrastructure
                          </span>
                          <span className="text-[#d4d4d4]">();</span>
                        </>
                      }
                    />
                    <CodeLine
                      delay={0.75}
                      lineNumber={14}
                      content={
                        <>
                          <span className="text-[#c586c0] pl-4">return</span>{" "}
                          <span className="text-[#ce9178]">
                            '✅ Deployed Successfully'
                          </span>
                          <span className="text-[#d4d4d4]">;</span>
                        </>
                      }
                    />
                    <CodeLine
                      delay={0.8}
                      lineNumber={15}
                      content={<span className="text-[#cccccc]">{"}"};</span>}
                    />
                  </div>

                  {/* Terminal Panel */}
                  <div className="border-t border-gray-800 bg-[#1a1a1a] p-4 font-mono text-[11px] sm:text-[12px] leading-relaxed relative flex flex-col h-[180px]">
                    <div className="flex items-center gap-3 text-xs mb-3 text-gray-500 tracking-wider">
                      <span className="text-[#4fc1ff] font-semibold border-b border-[#4fc1ff] pb-1 uppercase text-[10px]">
                        Terminal
                      </span>
                      <span className="text-gray-600 border-l border-gray-700 pl-3">
                        bash
                      </span>
                    </div>
                    <div className="space-y-1.5 text-gray-300">
                      <TerminalLine
                        delay={1.2}
                        content={
                          <>
                            <span className="text-gray-400">$ </span>
                            <span className="text-[#dcdcaa]">axythic</span>{" "}
                            deploy --production
                          </>
                        }
                      />
                      <TerminalLine
                        delay={1.8}
                        content="🚀 Building application..."
                      />
                      <TerminalLine
                        delay={2.6}
                        content="☁️  Configuring cloud infrastructure..."
                      />
                      <TerminalLine
                        delay={3.4}
                        content="⚙️  Optimizing performance..."
                      />
                      <TerminalLine
                        delay={4.4}
                        content={
                          <>
                            <span className="text-[#27c93f]">
                              ✓ Deployment complete
                            </span>{" "}
                            <span className="text-gray-600 mx-2">|</span>{" "}
                            <span className="text-[#27c93f]">
                              kubernetes.io/cluster
                            </span>
                          </>
                        }
                      />
                      <TerminalLine
                        delay={4.6}
                        content={
                          <div className="w-2 h-3.5 bg-gray-400 mt-2 animate-pulse" />
                        }
                      />
                    </div>
                    {/* Copy button */}
                    <button className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function CodeLine({
  lineNumber,
  content,
  delay,
}: {
  lineNumber: number;
  content: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="flex"
    >
      <span className="text-gray-600 select-none w-6 sm:w-8 text-right pr-2 sm:pr-4">
        {lineNumber}
      </span>
      <span className="whitespace-pre">{content}</span>
    </motion.div>
  );
}

function TerminalLine({
  content,
  delay,
}: {
  content: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  );
}
