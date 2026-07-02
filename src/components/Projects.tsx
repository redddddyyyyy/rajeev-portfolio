"use client";

import { motion } from "framer-motion";
import NL2PlanAnimatedTile from "./NL2PlanAnimatedTile";

type Project = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  image?: string;
  animated?: "nl2plan";
};

const projects: Project[] = [
  {
    num: "01",
    title: "LiDAR-Camera Fusion with YOLOv8",
    description: "Frustum-based 3D object detection pipeline — calibrated LiDAR + RGB extrinsics, projected point clouds onto image frames, KITTI support and temporal tracking as a ROS 2 node.",
    tags: ["Sensor Fusion", "LiDAR", "ROS 2", "YOLOv8"],
    github: "https://github.com/redddddyyyyy/lidar-camera-fusion",
    image: "https://raw.githubusercontent.com/redddddyyyyy/lidar-camera-fusion/master/assets/fusion_results.png",
  },
  {
    num: "02",
    title: "Multispectral Habitat Segmentation",
    description: "U-Net trained on 4-band drone imagery to classify wetland habitat types — end-to-end pipeline from raw GeoTIFF to labeled mask.",
    tags: ["PyTorch", "U-Net", "Remote Sensing"],
    github: "https://github.com/redddddyyyyy/multispectral-habitat-segmentation",
    image: "https://raw.githubusercontent.com/redddddyyyyy/multispectral-habitat-segmentation/main/assets/habitat_mosaic.png",
  },
  {
    num: "03",
    title: "NL2Plan — LLM Robotics Agent",
    description: "LLM agent that decomposes natural-language commands into tool calls against a Hybrid A* planner, GroundingDINO perception, and MoveIt2 manipulation in Gazebo — SayCan / PaLM-E lineage with a failure-recovery loop.",
    tags: ["LLM Agent", "MoveIt2", "GroundingDINO", "ROS 2"],
    github: "https://github.com/redddddyyyyy/nl2plan-agent",
    animated: "nl2plan",
  },
  {
    num: "04",
    title: "Campus Risk CV",
    description: "Detects pedestrian-vehicle proximity events from a campus crosswalk camera using YOLO12n detection, ByteTrack multi-object tracking, and homography for ground-plane distance estimation.",
    tags: ["YOLO12", "ByteTrack", "Computer Vision", "AV Safety"],
    github: "https://github.com/redddddyyyyy/campus-risk-cv",
    image: "https://raw.githubusercontent.com/redddddyyyyy/campus-risk-cv/main/assets/sample_caution.png",
  },
  {
    num: "05",
    title: "Hybrid A* Path Planner",
    description: "Hybrid A* with Reeds-Shepp curve primitives for non-holonomic vehicles — kinematic constraints, obstacle avoidance, ROS 2 integration.",
    tags: ["Path Planning", "AV", "ROS 2"],
    github: "https://github.com/redddddyyyyy/hybrid-astar-planner",
    image: "https://raw.githubusercontent.com/redddddyyyyy/hybrid-astar-planner/master/assets/planning_demo.gif",
  },
  {
    num: "06",
    title: "Mobile Manipulator Sim",
    description: "ROS 2 Gazebo stack for a mobile base + 6-DoF arm — SLAM Toolbox mapping, Nav2 autonomous navigation, and MoveIt2 pick-and-place with a URDF/Xacro-authored platform.",
    tags: ["ROS 2", "Gazebo", "SLAM", "MoveIt2"],
    github: "https://github.com/redddddyyyyy/mobile-arm-sim",
    image: "https://raw.githubusercontent.com/redddddyyyyy/mobile-arm-sim/main/docs/images/mapping_complete.png",
  },
  {
    num: "07",
    title: "BST Sync Schemes · HPC",
    description: "Benchmarking synchronized BST search under sequential, coarse-grain, and hand-over-hand fine-grain locking — throughput + strong-scaling analysis on multicore.",
    tags: ["C/C++", "Concurrency", "HPC", "PAPI"],
    github: "https://github.com/redddddyyyyy/bst-sync-schemes-hpc",
    image: "https://raw.githubusercontent.com/redddddyyyyy/bst-sync-schemes-hpc/main/plots/throughput_bal_all_modes.png",
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
        {project.animated === "nl2plan" && <NL2PlanAnimatedTile />}
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
          <span className="text-xs font-mono text-[#444]">07 Projects</span>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-6 sm:col-span-4"><ProjectTile project={projects[0]} /></div>
          <div className="col-span-6 sm:col-span-2"><ProjectTile project={projects[1]} /></div>
          <div className="col-span-6 sm:col-span-3"><ProjectTile project={projects[2]} /></div>
          <div className="col-span-6 sm:col-span-3"><ProjectTile project={projects[3]} /></div>
          <div className="col-span-6 sm:col-span-2"><ProjectTile project={projects[4]} /></div>
          <div className="col-span-6 sm:col-span-2"><ProjectTile project={projects[5]} /></div>
          <div className="col-span-6 sm:col-span-2"><ProjectTile project={projects[6]} /></div>
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
