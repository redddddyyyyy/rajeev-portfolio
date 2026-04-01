"use client";

export default function CarlaAnimatedTile() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] relative overflow-hidden">
      <style>{`
        @keyframes carDrive {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .car-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #C14B5A;
          border-radius: 50%;
          offset-path: path('M 60,200 C 150,200 150,100 250,100 C 350,100 350,200 450,200 C 500,200 520,160 540,140');
          animation: carDrive 3s linear infinite;
          box-shadow: 0 0 12px #C14B5A, 0 0 24px rgba(193,75,90,0.4);
        }
        @keyframes dashPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .road-dash {
          animation: dashPulse 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Road SVG */}
      <svg width="100%" height="100%" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">
        {/* Road */}
        <path
          d="M 60,200 C 150,200 150,100 250,100 C 350,100 350,200 450,200 C 500,200 520,160 540,140"
          fill="none"
          stroke="#333"
          strokeWidth="40"
          strokeLinecap="round"
        />
        {/* Center dashes */}
        <path
          className="road-dash"
          d="M 60,200 C 150,200 150,100 250,100 C 350,100 350,200 450,200 C 500,200 520,160 540,140"
          fill="none"
          stroke="#555"
          strokeWidth="2"
          strokeDasharray="12 10"
          strokeLinecap="round"
        />
        {/* Grid lines */}
        {[0, 60, 120, 180, 240, 300].map((y) => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#1a1a1a" strokeWidth="1" />
        ))}
        {[0, 100, 200, 300, 400, 500, 600].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="#1a1a1a" strokeWidth="1" />
        ))}
      </svg>

      {/* Animated car dot */}
      <div className="car-dot" />

      {/* Label */}
      <div className="absolute bottom-4 left-4">
        <span className="text-xs font-mono text-[#555] uppercase tracking-widest">CARLA Sim · ROS2</span>
      </div>
    </div>
  );
}
