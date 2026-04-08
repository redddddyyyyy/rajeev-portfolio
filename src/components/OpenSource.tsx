"use client";

import { motion } from "framer-motion";

const contributions = [
  {
    repo: "ros-navigation/navigation2",
    repoUrl: "https://github.com/ros-navigation/navigation2",
    title: "nav2_costmap_2d: add TypeAdapter for Costmap2DStamped",
    impact: "Enables zero-copy costmap passing between Nav2 nodes — reduces CPU overhead for high-frequency costmap updates.",
    prUrl: "https://github.com/ros-navigation/navigation2/pull/5969",
    prNumber: 5969,
    status: "open" as const,
  },
  {
    repo: "ros-navigation/navigation2",
    repoUrl: "https://github.com/ros-navigation/navigation2",
    title: "Fix flake8 lint in nav2_simple_commander",
    impact: "Unblocked CI for nav2_simple_commander; merged into the main Nav2 production branch.",
    prUrl: "https://github.com/ros-navigation/navigation2/pull/5885",
    prNumber: 5885,
    status: "merged" as const,
  },
  {
    repo: "tensorflow/tensorflow",
    repoUrl: "https://github.com/tensorflow/tensorflow",
    title: "Fix idct() documentation: n parameter is already supported",
    impact: "Corrected misleading API docs read by thousands of TF users implementing signal processing pipelines.",
    prUrl: "https://github.com/tensorflow/tensorflow/pull/112975",
    prNumber: 112975,
    status: "open" as const,
  },
  {
    repo: "tensorflow/tensorflow",
    repoUrl: "https://github.com/tensorflow/tensorflow",
    title: "Fix broken padding documentation links in nn_ops and nn_impl",
    impact: "Restored dead reference links in core neural-network op docs used across the TF documentation site.",
    prUrl: "https://github.com/tensorflow/tensorflow/pull/112688",
    prNumber: 112688,
    status: "open" as const,
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-[#555] mb-12">Open Source</p>
        <div className="divide-y divide-[#1a1a1a]">
          {contributions.map((c, i) => (
            <motion.a
              key={c.prNumber}
              href={c.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex items-center justify-between py-5 hover:bg-white/[0.02] transition-colors -mx-4 px-4"
            >
              <div className="flex items-center gap-6 min-w-0">
                <span className="text-xs font-mono text-[#444] flex-shrink-0 w-16 hidden sm:block">
                  {c.repo.split("/")[0]}
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-[#ccc] group-hover:text-white transition-colors truncate">{c.title}</p>
                  <p className="text-xs text-[#555] mt-1 leading-relaxed hidden sm:block">{c.impact}</p>
                  <p className="text-xs font-mono text-[#444] mt-0.5">#{c.prNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                <span className={`text-xs font-mono px-2 py-0.5 rounded ${c.status === "merged" ? "text-green-400 bg-green-400/10" : "text-yellow-400 bg-yellow-400/10"}`}>
                  {c.status}
                </span>
                <span className="text-[#444] group-hover:text-[#C14B5A] transition-colors">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
