type Mode = "hero" | "step1" | "step2" | "step3";

function MetalDefs() {
  return (
    <defs>
      {/* Brushed-metal cylinder shading for each arm segment */}
      <linearGradient id="m1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#666b73" />
      <stop offset="22%" stopColor="#e1e3e6" />
      <stop offset="48%" stopColor="#9aa0a8" />
      <stop offset="100%" stopColor="#454950" />
      </linearGradient>
      <linearGradient id="m2" x1="0" y1="0" x2="0.45" y2="1">
        <stop offset="0%" stopColor="oklch(0.42 0.012 258)" />
        <stop offset="25%" stopColor="oklch(0.86 0.006 250)" />
        <stop offset="50%" stopColor="oklch(0.58 0.01 253)" />
        <stop offset="100%" stopColor="oklch(0.28 0.012 258)" />
      </linearGradient>
      <linearGradient id="m3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="oklch(0.44 0.012 258)" />
        <stop offset="25%" stopColor="oklch(0.84 0.006 250)" />
        <stop offset="55%" stopColor="oklch(0.56 0.01 253)" />
        <stop offset="100%" stopColor="oklch(0.3 0.012 258)" />
      </linearGradient>
      {/* Polished joint caps */}
      <radialGradient id="mJoint" cx="0.35" cy="0.35" r="0.85">
        <stop offset="0%" stopColor="oklch(0.93 0.005 250)" />
        <stop offset="45%" stopColor="oklch(0.68 0.008 252)" />
        <stop offset="100%" stopColor="oklch(0.32 0.01 258)" />
      </radialGradient>
      {/* Machined tool + module faces */}
      <linearGradient id="mTool" x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="oklch(0.9 0.005 250)" />
        <stop offset="45%" stopColor="oklch(0.64 0.01 253)" />
        <stop offset="100%" stopColor="oklch(0.36 0.012 258)" />
      </linearGradient>
      <linearGradient id="mToolDark" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="oklch(0.58 0.01 255)" />
        <stop offset="100%" stopColor="oklch(0.3 0.012 258)" />
      </linearGradient>
      {/* Base plate */}
      <linearGradient id="mBase" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="oklch(0.72 0.008 252)" />
        <stop offset="55%" stopColor="oklch(0.46 0.01 255)" />
        <stop offset="100%" stopColor="oklch(0.32 0.012 258)" />
      </linearGradient>
    </defs>
  );
}

function Gripper({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="262" y="104" width="16" height="30" rx="5" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.28)" strokeWidth="1" />
      <rect className="jaw-l" x="262" y="130" width="6" height="26" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
      <rect className="jaw-r" x="272" y="130" width="6" height="26" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
    </g>
  );
}

function Module({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="258" y="104" width="24" height="24" rx="5" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
      <rect x="262" y="108" width="16" height="3" rx="1.5" fill="oklch(1 0 0 / 0.35)" />
      <circle cx="270" cy="116" r="4" fill="url(#mJoint)" />
      <rect x="252" y="128" width="36" height="8" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="0.8" />
      <rect x="252" y="136" width="6" height="16" rx="2" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
      <rect x="282" y="136" width="6" height="16" rx="2" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
    </g>
  );
}

export function RobotArm({ mode = "hero", className = "" }: { mode?: Mode; className?: string }) {
  const animate = mode === "hero" || mode === "step1";
  return (
    <svg
      viewBox="0 0 320 300"
      className={`${animate ? "arm-anim" : ""} ${mode === "step3" ? "arm-work" : ""} ${mode === "hero" ? "arm-look" : ""} ${className}`}
      role="img"
      aria-label="რობოტი ხელის ილუსტრაცია"
    >
      <MetalDefs />
      <rect x="70" y="262" width="100" height="22" rx="8" fill="url(#mBase)" stroke="oklch(1 0 0 / 0.25)" strokeWidth="1" />
      <rect x="95" y="245" width="50" height="22" rx="6" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
      <g className="arm-s1">
        <line x1="120" y1="250" x2="120" y2="160" strokeWidth="24" strokeLinecap="round" stroke="url(#m2)" />
        <circle cx="120" cy="250" r="14" fill="url(#mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
        <g className="arm-s2">
          <line x1="120" y1="160" x2="210" y2="110" strokeWidth="22" strokeLinecap="round" stroke="url(#m2)" />
          <circle cx="120" cy="160" r="13" fill="url(#mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
          <g className="arm-s3">
            <line x1="210" y1="110" x2="265" y2="118" strokeWidth="18" strokeLinecap="round" stroke="url(#m3)" />
            <circle cx="210" cy="110" r="11" fill="url(#mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
            {(mode === "hero" || mode === "step1") && <Gripper />}
            {mode === "step2" && (
              <>
                <Gripper className="tool-out" />
                <Module className="tool-in" />
              </>
            )}
            {mode === "step3" && (
              <>
                <rect x="236" y="150" width="68" height="9" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="1" />
                <rect x="258" y="146" width="24" height="5" rx="2" fill="url(#mJoint)" />
                <Module />
                <circle className="work-light" fill="oklch(0.9 0.005 250)" cx="270" cy="116" r="5" />
                <circle className="work-spark" fill="oklch(0.95 0.004 250)" cx="270" cy="162" r="5" />
              </>
            )}
          </g>
        </g>
      </g>
    </svg>
  );
}
