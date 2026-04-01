"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6", label: "Projects" },
  { value: "4", label: "OSS PRs" },
  { value: "2", label: "Internships" },
  { value: "Nav2 · TF", label: "Contributor" },
];

export default function Hero() {
  return (
    <section
      id="hero-zone"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase text-[#666]">
            Available for Summer 2026 Internships
          </span>
        </motion.div>

        {/* Full-width name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-bold leading-none tracking-tighter text-[#111] mb-10"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(3.5rem, 9.5vw, 9rem)",
          }}
        >
          RAJEEV<span className="mx-[0.15em] text-[#8B1A2B]">——</span>REDDY
        </motion.h1>

        {/* Two-column: role + bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div>
            <p className="text-sm font-mono tracking-widest uppercase text-[#444] mb-4">
              Robotics Engineer · ML Researcher
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="text-sm font-mono text-[#111] underline underline-offset-4 decoration-[#8B1A2B] hover:text-[#8B1A2B] transition-colors"
              >
                View Projects ↓
              </a>
              <a
                href="/Rajeev_Reddy_Resume.pdf"
                download
                className="text-sm font-mono text-[#666] underline underline-offset-4 hover:text-[#111] transition-colors"
              >
                Resume ↗
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm text-[#555] leading-relaxed max-w-md">
              M.S. Robotics @ University of Delaware. I build perception pipelines,
              autonomous navigation systems, and LiDAR-camera fusion architectures.
              Actively seeking Summer 2026 internships in robotics and AI/ML.
            </p>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-0 border-t border-black/10"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col py-4 pr-8 border-r border-black/10 mr-8 last:border-0"
            >
              <span className="text-xl font-bold text-[#111]" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                {s.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#888] mt-0.5">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
