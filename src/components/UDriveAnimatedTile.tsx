"use client";

export default function UDriveAnimatedTile() {
  return (
    <div className="w-full h-full bg-[#0a0a0f] relative overflow-hidden">
      {/* Floor grid + path SVG */}
      <svg width="100%" height="100%" viewBox="0 0 560 300" preserveAspectRatio="xMidYMid slice">
        {/* Floor grid */}
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 30} x2="560" y2={i * 30} stroke="#1a1f1a" strokeWidth="1" />
        ))}
        {Array.from({ length: 19 }, (_, i) => (
          <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" stroke="#1a1f1a" strokeWidth="1" />
        ))}
        {/* Planned path */}
        <path
          className="nav-trail"
          d="M 80,240 L 80,160 L 200,160 L 200,80 L 360,80 L 360,180 L 480,180 L 480,240"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        {/* Waypoint dots */}
        {[[80,240],[80,160],[200,160],[200,80],[360,80],[360,180],[480,180],[480,240]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="none" stroke="#4ade80" strokeWidth="1" opacity="0.4" />
        ))}
      </svg>

      {/* Animated robot dot */}
      <div className="robot-dot" />

      {/* Label */}
      <div className="absolute bottom-4 left-4">
        <span className="text-xs font-mono text-[#444] uppercase tracking-widest">Indoor Nav · ROS2</span>
      </div>
    </div>
  );
}
