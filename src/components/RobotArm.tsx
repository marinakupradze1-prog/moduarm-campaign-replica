type Mode = "hero" | "step1" | "step2" | "step3";

function Gripper({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="262" y="104" width="16" height="30" rx="5" className="fill-secondary" />
      <rect className="jaw-l fill-secondary" x="262" y="130" width="6" height="26" rx="3" />
      <rect className="jaw-r fill-secondary" x="272" y="130" width="6" height="26" rx="3" />
    </g>
  );
}

function Module({ className = "" }: { className?: string }) {
  return (
    <g className={className}>
      <rect x="258" y="104" width="24" height="24" rx="5" className="fill-secondary" />
      <circle cx="270" cy="116" r="4" className="fill-primary" />
      <rect x="252" y="128" width="36" height="8" rx="3" className="fill-secondary" />
      <rect x="252" y="136" width="6" height="16" rx="2" className="fill-secondary" />
      <rect x="282" y="136" width="6" height="16" rx="2" className="fill-secondary" />
    </g>
  );
}

export function RobotArm({ mode = "hero", className = "" }: { mode?: Mode; className?: string }) {
  const animate = mode === "hero" || mode === "step1";
  return (
    <svg
      viewBox="0 0 320 300"
      className={`${animate ? "arm-anim" : ""} ${mode === "hero" ? "arm-look" : ""} ${className}`}
      role="img"
      aria-label="რობოტი ხელის ილუსტრაცია"
    >
      <rect x="70" y="262" width="100" height="22" rx="8" className="fill-secondary" />
      <rect x="95" y="245" width="50" height="22" rx="6" className="fill-dark-muted" />
      {mode === "step3" && (
        <rect x="235" y="152" width="70" height="10" rx="3" className="fill-dark-muted" />
      )}
      <g className="arm-s1">
        <line x1="120" y1="250" x2="120" y2="160" strokeWidth="24" strokeLinecap="round" className="stroke-primary" />
        <circle cx="120" cy="250" r="14" className="fill-secondary" />
        <g className="arm-s2">
          <line x1="120" y1="160" x2="210" y2="110" strokeWidth="22" strokeLinecap="round" className="stroke-primary" />
          <circle cx="120" cy="160" r="13" className="fill-secondary" />
          <g className="arm-s3">
            <line x1="210" y1="110" x2="265" y2="118" strokeWidth="18" strokeLinecap="round" className="stroke-primary" />
            <circle cx="210" cy="110" r="11" className="fill-secondary" />
            {(mode === "hero" || mode === "step1") && <Gripper />}
            {mode === "step2" && (
              <>
                <Gripper className="tool-out" />
                <Module className="tool-in" />
              </>
            )}
            {mode === "step3" && <Module />}
          </g>
        </g>
      </g>
    </svg>
  );
}
