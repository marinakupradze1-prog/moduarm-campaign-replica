type Mode = "hero" | "step1" | "step2" | "step3";
type Tool = "grip" | "camera" | "sorter" | "hold" | "brush" | "pen" | "suction" | "led";

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
      {/* Camera lens glass */}
      <radialGradient id="mLens" cx="0.4" cy="0.4" r="0.7">
        <stop offset="0%" stopColor="oklch(0.4 0.04 250)" />
        <stop offset="60%" stopColor="oklch(0.2 0.05 255)" />
        <stop offset="100%" stopColor="oklch(0.1 0.02 260)" />
      </radialGradient>
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

/* Brush module head — a rotary brush for cleaning/polishing */
function BrushHead({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="258" y="104" width="24" height="20" rx="5" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
      <circle cx="270" cy="114" r="5" fill="url(#mJoint)" />
      <rect x="252" y="124" width="36" height="6" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="0.8" />
      <g className="brush-spin">
        <rect x="260" y="130" width="20" height="6" rx="3" fill="oklch(0.55 0.02 70)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.6" />
        <rect x="263" y="136" width="14" height="5" rx="2.5" fill="oklch(0.6 0.02 80)" />
        <rect x="266" y="141" width="8" height="4" rx="2" fill="oklch(0.65 0.02 90)" />
      </g>
    </g>
  );
}

/* Pen module head — a marker/pen holder */
function PenHead({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="258" y="104" width="24" height="22" rx="5" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
      <rect x="262" y="108" width="16" height="4" rx="2" fill="oklch(1 0 0 / 0.35)" />
      <rect x="265" y="126" width="10" height="20" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="0.8" />
      <path d="M265 146 L275 146 L270 154 Z" fill="oklch(0.5 0.02 258)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.6" />
      <circle cx="270" cy="152" r="1.5" fill="oklch(0.8 0.15 25)" />
    </g>
  );
}

/* Suction module head — a vacuum suction cup */
function SuctionHead({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="258" y="104" width="24" height="20" rx="5" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
      <rect x="252" y="124" width="36" height="6" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="0.8" />
      <ellipse cx="270" cy="138" rx="16" ry="8" fill="oklch(0.4 0.02 255)" stroke="oklch(0.6 0.01 250)" strokeWidth="1" />
      <ellipse cx="270" cy="136" rx="12" ry="5" fill="oklch(0.25 0.02 258)" />
      <circle className="suction-glow" cx="270" cy="136" r="4" fill="oklch(0.85 0.05 250 / 0.4)" />
    </g>
  );
}

/* LED module head — an inspection light */
function LedHead({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="258" y="104" width="24" height="20" rx="5" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
      <rect x="252" y="124" width="36" height="8" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="0.8" />
      <circle cx="270" cy="140" r="9" fill="oklch(0.2 0.02 258)" stroke="oklch(0.5 0.01 255)" strokeWidth="1" />
      <circle className="led-glow" cx="270" cy="140" r="6" fill="oklch(0.9 0.12 90)" />
      <circle className="led-core" cx="270" cy="140" r="3" fill="oklch(0.95 0.08 90)" />
    </g>
  );
}

/* Camera module head — a small camera body with a lens */
function CameraHead({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="250" y="100" width="40" height="30" rx="6" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
      <rect x="254" y="104" width="32" height="6" rx="2" fill="oklch(0.2 0.01 258)" />
      <circle cx="270" cy="122" r="9" fill="url(#mLens)" stroke="oklch(0.5 0.01 255)" strokeWidth="1.5" />
      <circle cx="266" cy="118" r="3" fill="oklch(0.85 0.05 250 / 0.7)" />
      <rect x="248" y="128" width="44" height="8" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="0.8" />
      <circle className="cam-rec" cx="270" cy="100" r="2.5" fill="oklch(0.65 0.2 25)" />
    </g>
  );
}

/* Sorter module head — a scoop/tray with a divider */
function SorterHead({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="258" y="104" width="24" height="20" rx="5" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
      <path d="M250 122 L290 122 L286 140 L254 140 Z" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="0.8" />
      <line x1="270" y1="122" x2="270" y2="140" stroke="oklch(0.5 0.01 255)" strokeWidth="1.5" />
      <circle cx="262" cy="132" r="2.5" fill="oklch(0.7 0.15 70)" />
      <circle cx="278" cy="132" r="2.5" fill="oklch(0.65 0.18 200)" />
      <rect x="252" y="140" width="6" height="14" rx="2" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
      <rect x="282" y="140" width="6" height="14" rx="2" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
    </g>
  );
}

/* Hold module head — a flat clamp pad that holds material at a right angle */
function HoldHead({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="258" y="104" width="24" height="22" rx="5" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
      <rect x="244" y="124" width="52" height="7" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="0.8" />
      <rect x="244" y="131" width="52" height="10" rx="2" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
      <rect x="246" y="133" width="48" height="2" rx="1" fill="oklch(0.5 0.01 255)" />
      <rect x="250" y="141" width="6" height="14" rx="2" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
      <rect x="284" y="141" width="6" height="14" rx="2" fill="url(#mTool)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
    </g>
  );
}

function ToolHead({ tool, className = "" }: { tool: Tool; className?: string }) {
  switch (tool) {
    case "camera":
      return <CameraHead className={className} />;
    case "sorter":
      return <SorterHead className={className} />;
    case "hold":
      return <HoldHead className={className} />;
    case "brush":
      return <BrushHead className={className} />;
    case "pen":
      return <PenHead className={className} />;
    case "suction":
      return <SuctionHead className={className} />;
    case "led":
      return <LedHead className={className} />;
    case "grip":
    default:
      return <Gripper className={className} />;
  }
}

export function RobotArm({ mode = "hero", tool, toolAnim = "", className = "" }: { mode?: Mode; tool?: Tool; toolAnim?: string; className?: string }) {
  const animate = mode === "hero" || mode === "step1";
  const showTool = tool !== undefined;
  return (
    <svg
      viewBox="0 0 320 300"
      className={`${animate ? "arm-anim" : ""} ${mode === "step3" ? "arm-work" : ""} ${mode === "hero" && !showTool ? "arm-look" : ""} ${className}`}
      role="img"
      aria-label="რობოტი ხელის ილუსტრაცია"
    >
      <MetalDefs />
      <rect x="70" y="262" width="100" height="22" rx="8" fill="url(#mBase)" stroke="oklch(1 0 0 / 0.25)" strokeWidth="1" />
      <rect x="95" y="245" width="50" height="22" rx="6" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />
      <g className="arm-s1">
        <line x1="120" y1="250" x2="120" y2="160" strokeWidth="24" strokeLinecap="round" stroke="#5F6670" />
        <circle cx="120" cy="250" r="14" fill="url(#mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
        <g className="arm-s2">
          <line x1="120" y1="160" x2="210" y2="110" strokeWidth="22" strokeLinecap="round" stroke="url(#m2)" />
          <circle cx="120" cy="160" r="13" fill="url(#mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
          <g className="arm-s3">
            <line x1="210" y1="110" x2="265" y2="118" strokeWidth="18" strokeLinecap="round" stroke="url(#m3)" />
            <circle cx="210" cy="110" r="11" fill="url(#mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />
            {showTool && tool ? (
              <g key={tool} className={toolAnim}>
                <ToolHead tool={tool} />
              </g>
            ) : mode === "step2" ? (
              <>
                <Gripper className="tool-out" />
                <Module className="tool-in" />
              </>
            ) : mode === "step3" ? (
              <>
                <rect x="236" y="150" width="68" height="9" rx="3" fill="url(#mToolDark)" stroke="oklch(1 0 0 / 0.22)" strokeWidth="1" />
                <rect x="258" y="146" width="24" height="5" rx="2" fill="url(#mJoint)" />
                <Module />
                <circle className="work-light" fill="oklch(0.9 0.005 250)" cx="270" cy="116" r="5" />
                <circle className="work-spark" fill="oklch(0.95 0.004 250)" cx="270" cy="162" r="5" />
              </>
            ) : (
              <Gripper />
            )}
          </g>
        </g>
      </g>
    </svg>
  );
}

export type { Tool };
