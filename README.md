# Rajeev Reddy Portfolio

Personal portfolio site for robotics software, AI infrastructure, computer vision, planning, and open-source contribution work.

The site is built with Next.js and TypeScript. It is meant to give recruiters a fast project-level view of the work behind my resume: what each project does, what stack it uses, what tradeoffs mattered, and where the code lives.

## Featured Project Areas

- AI-agentic data pipeline with n8n, JavaScript, Gemini, and Google Workspace APIs
- NL2Plan LLM agent for typed tool calls against ROS 2 planning/perception/manipulation components
- C/Pthreads BST synchronization benchmark with throughput and contention analysis
- Hybrid A* path planner with ROS 2 integration and benchmark demos
- Campus pedestrian-vehicle risk analyzer with homography, tracking, and event logs
- Open-source PRs to LeRobot, TensorFlow, and CARLA ROS Bridge

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Project Notes

- Resume PDF lives in `public/Rajeev_Reddy_Resume.pdf`.
- Main page composition starts in `src/app/page.tsx`.
- Project cards and portfolio content live under `src/components/`.
- Keep public project descriptions aligned with GitHub READMEs and avoid unsupported metrics.

## Priority Content To Keep Current

- GitHub links for the active resume projects
- Open-source PR statuses: open / merged / closed
- Metrics only when backed by a reproducible run, CSV, or screenshot
- Screenshots/GIFs that show the actual project output
