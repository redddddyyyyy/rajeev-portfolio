"use client";

import { motion } from "framer-motion";
import CarlaAnimatedTile from "./CarlaAnimatedTile";
import UDriveAnimatedTile from "./UDriveAnimatedTile";

type Project = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  image?: string;
  animated?: "carla" | "udrive";
};

const projects: Project[] = [
  {
    num: "01",
    title: "LiDAR-Camera Fusion with YOLO",
    description: "Calibrated LiDAR and RGB camera extrinsics; projected point clouds onto image frames to label 3D bounding boxes using YOLO detections.",
    tags: ["Sensor Fusion", "LiDAR", "Python"],
    github: "https://github.com/redddddyyyyy/lidar-camera-fusion",
    image: "https://raw.githubusercontent.com/redddddyyyyy/lidar-camera-fusion/master/assets/fusion_results.png",
  },
  {
    num: "02",
    title: "Multispectral Habitat Segmentation",
    description: "Trained U-Net on 4-band drone imagery to classify wetland habitat types — segmentation pipeline runs end-to-end from raw GeoTIFF to labeled mask.",
    tags: ["PyTorch", "U-Net", "Computer Vision"],
    github: "https://github.com/redddddyyyyy/multispectral-habitat-segmentation",
    image: "https://raw.githubusercontent.com/redddddyyyyy/multispectral-habitat-segmentation/main/assets/habitat_mosaic.png",
  },
  {
    num: "03",
    title: "Hybrid A* Path Planner",
    description: "Implemented Hybrid A* with Reeds-Shepp curve primitives for non-holonomic vehicles; visualized planned paths in a custom grid environment.",
    tags: ["Path Planning", "Python", "Autonomous Vehicles"],
    github: "https://github.com/redddddyyyyy/hybrid-astar-planner",
    image: "https://raw.githubusercontent.com/redddddyyyyy/hybrid-astar-planner/master/assets/planning_demo.gif",
  },
  {
    num: "04",
    title: "KUKA iiwa Trajectory Planning",
    description: "MATLAB-based planner for a 7-DOF arm using smooth joint interpolation; compared raw waypoint vs. optimized trajectory to reduce jerk.",
    tags: ["Robotics", "MATLAB", "Motion Planning"],
    github: "https://github.com/redddddyyyyy/iiwa-trajectory-planning",
    image: "https://raw.githubusercontent.com/redddddyyyyy/iiwa-trajectory-planning/main/assets/demo_preview_raw_vs_smooth.png",
  },
  {
    num: "05",
    title: "ROS 2 Nav2 Troubleshooting Kit",
    description: "Practical diagnostic scripts for TF, QoS, AMCL, initial pose, and RViz failure modes on ROS2 Humble — built from real debugging sessions.",
    tags: ["ROS2", "Nav2", "Diagnostics", "Tooling"],
    github: "https://github.com/redddddyyyyy/ros2-nav2-troubleshooting",
    animated: "carla",
  },
  {
    num: "06",
    title: "UDrive — Indoor Food Delivery",
    description: "Autonomous delivery robot using DBSCAN-based obstacle detection, ROS2 Nav2 for navigation, and 2D LiDAR for real-time mapping.",
    tags: ["LiDAR", "ROS2", "DBSCAN"],
    github: "https://github.com/redddddyyyyy/indoor-food-delivery-ros2",
    animated: "udrive",
  },
];

function ProjectTile({ project, className }: { project: Project; className?: string }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden bg-[#111] block ${className}`}
      style={{ minHeight: "380px" }}
    >
      <div className="absolute inset-0">
        {project.animated === "carla" && <CarlaAnimatedTile />}
        {project.animated === "udrive" && <UDriveAnimatedTile />}
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-mono text-white/40 mb-2">{project.num}</p>
            <h3 className="text-lg font-semibold text-white leading-tight mb-2">{project.title}</h3>
            <p className="text-xs text-white/50 leading-relaxed mb-3 max-w-xs">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-white/50 bg-white/10 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="text-white/40 group-hover:text-white transition-colors text-lg ml-4 flex-shrink-0">↗</span>
        </div>
        <div className="overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
          <p className="text-xs font-mono text-[#C14B5A] pt-2">View on GitHub →</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#555]">Selected Work</span>
          <span className="text-xs font-mono text-[#444]">06 Projects</span>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-6 sm:col-span-4"><ProjectTile project={projects[0]} /></div>
          <div className="col-span-6 sm:col-span-2"><ProjectTile project={projects[1]} /></div>
          <div className="col-span-6 sm:col-span-2"><ProjectTile project={projects[2]} /></div>
          <div className="col-span-6 sm:col-span-4"><ProjectTile project={projects[3]} /></div>
          <div className="col-span-6 sm:col-span-3"><ProjectTile project={projects[4]} /></div>
          <div className="col-span-6 sm:col-span-3"><ProjectTile project={projects[5]} /></div>
        </div>
        <div className="mt-6 text-right">
          <a href="https://github.com/redddddyyyyy" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#555] hover:text-[#C14B5A] transition-colors">
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
