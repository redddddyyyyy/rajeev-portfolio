"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Robotics", items: ["ROS2", "Nav2", "SLAM", "MoveIt2"] },
  { category: "Perception", items: ["LiDAR Fusion", "YOLO", "PointNet", "OpenCV"] },
  { category: "ML / DL", items: ["PyTorch", "TensorFlow", "U-Net", "CNNs"] },
  { category: "Languages", items: ["Python", "C++", "MATLAB", "TypeScript"] },
  { category: "Simulation", items: ["Gazebo", "CARLA", "RViz", "Webots"] },
  { category: "Tools", items: ["Git", "Docker", "Linux", "CMake"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-[#888] mb-6">About</p>
          <p className="text-[#333] leading-relaxed text-base mb-6">
            I build perception and autonomy systems — from raw sensor data to decisions.
            My work spans LiDAR point-cloud pipelines, deep learning for segmentation,
            and ROS2-based autonomous navigation.
          </p>
          <p className="text-[#555] leading-relaxed text-sm mb-8">
            I contribute to production-grade open-source projects like Nav2 and TensorFlow,
            and I&apos;m actively looking for Summer 2026 internships in robotics and AI/ML.
          </p>
          <div className="space-y-5 border-t border-black/10 pt-6">
            <div>
              <p className="text-sm font-semibold text-[#111]">M.S. Robotics</p>
              <p className="text-xs text-[#555] font-mono">University of Delaware · 2024–Nov 2026</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111]">B.Tech Mechatronics</p>
              <p className="text-xs text-[#555] font-mono">Manipal Institute of Technology · 2020–2024</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-x-8 gap-y-6"
        >
          {skills.map((s) => (
            <div key={s.category}>
              <p className="text-xs font-mono uppercase tracking-widest text-[#888] mb-2">{s.category}</p>
              <ul className="space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-[#444] font-mono">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
