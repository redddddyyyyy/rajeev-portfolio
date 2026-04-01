"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intern",
    company: "Defense Research & Development Organization (DRDO)",
    location: "Hyderabad",
    period: "Dec 2023 – Apr 2024",
    bullets: [
      "Analyzed hydraulic actuator design for fluid metering and air-brake subsystems using data mining techniques to identify performance constraints.",
      "Created documentation and data visualizations of process flows, tolerances, and manufacturability constraints for engineering reviews.",
    ],
  },
  {
    role: "Industrial Trainee",
    company: "Bharat Heavy Electricals Limited (BHEL)",
    location: "Hyderabad",
    period: "Jul 2023 – Aug 2023",
    bullets: [
      "Monitored CNC-based manufacturing and assembly workflows for steam turbines (20 kW – 500 MW).",
      "Documented DFM notes across machining and assembly operations using relational databases.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-[#888] mb-12">Experience</p>
        <div className="space-y-0 border-l border-black/10 ml-4 sm:ml-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 pb-12"
            >
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#8B1A2B]" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 mb-3">
                <p className="text-xs font-mono text-[#888] sm:w-36 flex-shrink-0">{exp.period}</p>
                <div>
                  <h3 className="text-base font-semibold text-[#111]">{exp.role}</h3>
                  <p className="text-sm text-[#555]">{exp.company} · {exp.location}</p>
                </div>
              </div>
              <ul className="sm:ml-[9.5rem] space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-[#555] leading-relaxed flex gap-2">
                    <span className="text-[#8B1A2B] flex-shrink-0 mt-1">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
