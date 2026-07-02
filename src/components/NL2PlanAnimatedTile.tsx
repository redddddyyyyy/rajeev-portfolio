"use client";

export default function NL2PlanAnimatedTile() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] relative overflow-hidden">
      {/* Faint grid backdrop */}
      <svg width="100%" height="100%" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {[0, 60, 120, 180, 240, 300].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} stroke="#1a1a1a" strokeWidth="1" />
        ))}
        {[0, 100, 200, 300, 400, 500, 600].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#1a1a1a" strokeWidth="1" />
        ))}
      </svg>

      {/* Prompt terminal */}
      <div className="absolute top-6 left-6 right-6 font-mono text-xs">
        <div className="text-[#C14B5A] mb-1">$ nl2plan</div>
        <div className="text-[#888]">
          <span className="text-[#666]">&gt; </span>
          <span className="nl2plan-typing">place the red mug on the top shelf</span>
        </div>
      </div>

      {/* Pipeline diagram */}
      <svg width="100%" height="100%" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* LLM node */}
        <g>
          <rect x="40" y="150" width="90" height="34" rx="4" fill="none" stroke="#333" strokeWidth="1" />
          <text x="85" y="171" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#888">LLM</text>
        </g>

        {/* Arrow LLM -> tools */}
        <path d="M 130 167 L 200 167" stroke="#333" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />

        {/* Tool nodes */}
        <g className="nl2plan-node nl2plan-node-1">
          <rect x="210" y="112" width="150" height="30" rx="4" fill="none" stroke="#333" strokeWidth="1" />
          <text x="285" y="131" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#888">GroundingDINO · vision</text>
        </g>
        <g className="nl2plan-node nl2plan-node-2">
          <rect x="210" y="152" width="150" height="30" rx="4" fill="none" stroke="#333" strokeWidth="1" />
          <text x="285" y="171" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#888">Hybrid A* · planner</text>
        </g>
        <g className="nl2plan-node nl2plan-node-3">
          <rect x="210" y="192" width="150" height="30" rx="4" fill="none" stroke="#333" strokeWidth="1" />
          <text x="285" y="211" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#888">MoveIt2 · manipulator</text>
        </g>

        {/* Arrows tools -> exec */}
        <path d="M 360 127 L 440 167" stroke="#333" strokeWidth="1" fill="none" />
        <path d="M 360 167 L 440 167" stroke="#333" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
        <path d="M 360 207 L 440 167" stroke="#333" strokeWidth="1" fill="none" />

        {/* Exec node */}
        <g>
          <rect x="440" y="150" width="110" height="34" rx="4" fill="none" stroke="#C14B5A" strokeWidth="1" />
          <text x="495" y="171" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#C14B5A">execute()</text>
        </g>

        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#555" />
          </marker>
        </defs>
      </svg>

      {/* Label */}
      <div className="absolute bottom-4 left-4">
        <span className="text-xs font-mono text-[#555] uppercase tracking-widest">SayCan · Gazebo</span>
      </div>
    </div>
  );
}
