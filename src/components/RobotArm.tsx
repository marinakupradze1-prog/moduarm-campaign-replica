type Mode = "hero" | "step1" | "step2" | "step3";

export function RobotArm({ mode = "hero", className = "" }: { mode?: Mode; className?: string }) {
  const animate = mode === "hero" || mode === "step1";
  return (
    <svg
      viewBox="0 0 320 300"
      className={`${animate ? "arm-anim" : ""} ${className}`}
      role="img"
      aria-label="რობოტი ხელის ილუსტრაცია"
    >
      {/* base */}
      <rect x="70" y="262" width="100" height="22" rx="8" className="fill-secondary" />
      <rect x="95" y="245" width="50" height="22" rx="6" className="fill-dark-muted" />
      {(mode === "step3" || mode === "step2") && (
        <rect x="215" y="230" width="90" height="12" rx="3" className="fill-dark-muted" />
      )}
      <g className="arm-s1">
        <rect x="108" y="150" width="24" height="105" rx="12" className="fill-primary" />
        <circle cx="120" cy="250" r="14" className="fill-secondary" />
        <g className="arm-s2">
          <rect x="112" y="98" width="110" height="24" rx="12" transform="rotate(-25 120 160)" className="fill-primary" />
          <circle cx="120" cy="160" r="13" className="fill-secondary" />
          <g className="arm-s3">
            <rect x="200" y="100" width="70" height="20" rx="10" className="fill-primary" />
            <circle cx="210" cy="110" r="11" className="fill-secondary" />
            {mode !== "hero" && mode !== "step1" && (
              <g className={mode === "step2" ? "module-snap" : ""}>
                <rect x="228" y="88" width="30" height="14" rx="4" className="fill-secondary" />
                <circle cx="243" cy="95" r="3" className="fill-primary" />
              </g>
            )}
            <rect x="262" y="104" width="16" height="30" rx="5" className="fill-secondary" />
            <rect className="jaw-l fill-secondary" x="262" y="130" width="6" height="26" rx="3" />
            <rect className="jaw-r fill-secondary" x="272" y="130" width="6" height="26" rx="3" />
          </g>
        </g>
      </g>
    </svg>
  );
}
