import { useRef, useState, type ReactNode } from "react";

type Vec = { x: number; y: number };

const BASE: Vec = { x: 120, y: 250 };
const L1 = 90;
const L2 = 95;
const L3 = 50;
const BOARD_HOME: Vec = { x: 232, y: 262 };
const BOARD_W = 26;
const BOARD_H = 8;
const ZONE: Vec = { x: 180, y: 140 };
const ZONE_R = 26;
const GRAB_RANGE = 30;
const ZONE_RANGE = 26;

function fwd(rot1: number, rot2: number, rot3: number) {
  const a1 = (rot1 * Math.PI) / 180;
  const j1: Vec = { x: BASE.x + L1 * Math.sin(a1), y: BASE.y - L1 * Math.cos(a1) };
  const a2 = a1 + (rot2 * Math.PI) / 180;
  const j2: Vec = { x: j1.x + L2 * Math.sin(a2), y: j1.y - L2 * Math.cos(a2) };
  const a3 = a2 + (rot3 * Math.PI) / 180;
  const tip: Vec = { x: j2.x + L3 * Math.sin(a3), y: j2.y - L3 * Math.cos(a3) };
  return { j1, j2, tip, a3 };
}

function MetalDefs() {
  return (
    <defs>
      <linearGradient id="sim-m2" x1="0" y1="0" x2="0.45" y2="1">
        <stop offset="0%" stopColor="oklch(0.42 0.012 258)" />
        <stop offset="25%" stopColor="oklch(0.86 0.006 250)" />
        <stop offset="50%" stopColor="oklch(0.58 0.01 253)" />
        <stop offset="100%" stopColor="oklch(0.28 0.012 258)" />
      </linearGradient>
      <linearGradient id="sim-m3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="oklch(0.44 0.012 258)" />
        <stop offset="25%" stopColor="oklch(0.84 0.006 250)" />
        <stop offset="55%" stopColor="oklch(0.56 0.01 253)" />
        <stop offset="100%" stopColor="oklch(0.3 0.012 258)" />
      </linearGradient>
      <linearGradient id="sim-mTool" x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="oklch(0.9 0.005 250)" />
        <stop offset="45%" stopColor="oklch(0.64 0.01 253)" />
        <stop offset="100%" stopColor="oklch(0.36 0.012 258)" />
      </linearGradient>
      <linearGradient id="sim-mToolDark" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="oklch(0.58 0.01 255)" />
        <stop offset="100%" stopColor="oklch(0.3 0.012 258)" />
      </linearGradient>
      <linearGradient id="sim-mBase" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="oklch(0.72 0.008 252)" />
        <stop offset="55%" stopColor="oklch(0.46 0.01 255)" />
        <stop offset="100%" stopColor="oklch(0.32 0.012 258)" />
      </linearGradient>
      <radialGradient id="sim-mJoint" cx="0.35" cy="0.35" r="0.85">
        <stop offset="0%" stopColor="oklch(0.93 0.005 250)" />
        <stop offset="45%" stopColor="oklch(0.68 0.008 252)" />
        <stop offset="100%" stopColor="oklch(0.32 0.01 258)" />
      </radialGradient>
    </defs>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function ArmSimulator() {
  const [rot1, setRot1] = useState(20);
  const [rot2, setRot2] = useState(50);
  const [rot3, setRot3] = useState(20);
  const [gripOpen, setGripOpen] = useState(true);
  const [holding, setHolding] = useState(false);
  const [success, setSuccess] = useState(false);

  const { j1, j2, tip, a3 } = fwd(rot1, rot2, rot3);

  const gripMid: Vec = { x: tip.x + 6 * Math.sin(a3), y: tip.y + 6 * Math.cos(a3) };
  const boardPos: Vec = holding ? gripMid : BOARD_HOME;
  const distToBoard = Math.hypot(gripMid.x - BOARD_HOME.x, gripMid.y - BOARD_HOME.y);
  const distToZone = Math.hypot(boardPos.x - ZONE.x, boardPos.y - ZONE.y);

  const canGrab = !holding && distToBoard < GRAB_RANGE && !gripOpen;
  const inZone = holding && distToZone < ZONE_RANGE;

  const grab = () => {
    if (holding) {
      setHolding(false);
    } else if (distToBoard < GRAB_RANGE) {
      setHolding(true);
      if (distToZone < ZONE_RANGE) setSuccess(true);
    }
  };

  const reset = () => {
    setSuccess(false);
    setHolding(false);
    setRot1(20);
    setRot2(50);
    setRot3(20);
    setGripOpen(true);
  };

  const jawSpread = gripOpen ? 7 : 2;

  const check1 = distToBoard < GRAB_RANGE;
  const check2 = holding;
  const check3 = inZone;

  const CheckItem = ({ done, label }: { done: boolean; label: string }) => (
    <li className={`flex items-center gap-3 rounded-2xl border-2 p-4 transition-colors ${done ? "border-primary bg-primary/10" : "border-transparent bg-dark-muted/40"}`}>
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${done ? "bg-primary text-primary-foreground" : "bg-dark-muted text-dark-muted-foreground"}`}>{done ? "✓" : "•"}</span>
      <span className={`text-base font-semibold ${done ? "text-primary" : "text-dark-muted-foreground"}`}>{label}</span>
    </li>
  );

  return (
    <section className="bg-gunmetal px-6 py-24 text-secondary-foreground">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">სიმულაცია</p>
          <h2 className="mt-1 text-4xl font-extrabold md:text-5xl">სცადე ხელი</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-silver p-6">
            <svg viewBox="0 0 320 300" className="sim-svg mx-auto h-72 w-full md:h-96" role="img" aria-label="რობოტი ხელის სიმულაცია">
              <MetalDefs />
              {/* holding zone */}
              <circle cx={ZONE.x} cy={ZONE.y} r={ZONE_R} fill="oklch(0.8 0.012 245 / 0.06)" stroke="oklch(0.8 0.012 245 / 0.5)" strokeWidth="1.5" strokeDasharray="5 4" />
              <text x={ZONE.x} y={ZONE.y - ZONE_R - 4} textAnchor="middle" fontSize="8" fill="oklch(0.72 0.01 250)" className="font-sans font-semibold">სამუშაო ზონა</text>

              {/* table */}
              <rect x="0" y="272" width="320" height="4" fill="oklch(0.3 0.012 258)" />

              {/* base */}
              <rect x="70" y="262" width="100" height="22" rx="8" fill="url(#sim-mBase)" stroke="oklch(1 0 0 / 0.25)" strokeWidth="1" />
              <rect x="95" y="245" width="50" height="22" rx="6" fill="url(#sim-mToolDark)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" />

              {/* arm segment 1 */}
              <line x1={BASE.x} y1={BASE.y} x2={j1.x} y2={j1.y} strokeWidth="24" strokeLinecap="round" stroke="#5F6670" />
              <circle cx={BASE.x} cy={BASE.y} r="14" fill="url(#sim-mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />

              {/* arm segment 2 */}
              <line x1={j1.x} y1={j1.y} x2={j2.x} y2={j2.y} strokeWidth="22" strokeLinecap="round" stroke="url(#sim-m2)" />
              <circle cx={j1.x} cy={j1.y} r="13" fill="url(#sim-mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />

              {/* arm segment 3 */}
              <line x1={j2.x} y1={j2.y} x2={tip.x} y2={tip.y} strokeWidth="18" strokeLinecap="round" stroke="url(#sim-m3)" />
              <circle cx={j2.x} cy={j2.y} r="11" fill="url(#sim-mJoint)" stroke="oklch(1 0 0 / 0.3)" strokeWidth="1" />

              {/* circuit board */}
              <g transform={`translate(${boardPos.x - BOARD_W / 2} ${boardPos.y - BOARD_H / 2}) rotate(${holding ? (a3 * 180) / Math.PI : 0})`}>
                <rect width={BOARD_W} height={BOARD_H} rx="2" fill="oklch(0.3 0.08 150)" stroke="oklch(0.7 0.1 150)" strokeWidth="0.8" />
                <rect x="2" y="2" width="6" height="4" rx="0.5" fill="oklch(0.85 0.05 90)" />
                <circle cx="16" cy="4" r="1.5" fill="oklch(0.8 0.08 200)" />
                <circle cx="22" cy="4" r="1.2" fill="oklch(0.7 0.06 30)" />
                <rect x="8" y="5" width="14" height="1.5" rx="0.5" fill="oklch(0.9 0.04 90 / 0.6)" />
              </g>

              {/* gripper */}
              <g transform={`translate(${tip.x} ${tip.y}) rotate(${(a3 * 180) / Math.PI})`}>
                <rect x="0" y="-8" width="16" height="14" rx="4" fill="url(#sim-mTool)" stroke="oklch(1 0 0 / 0.28)" strokeWidth="1" />
                <rect className="sim-jaw-l" x="12" y="-8" width="5" height="16" rx="2.5" fill="url(#sim-mToolDark)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" transform={`translate(0 ${-jawSpread})`} />
                <rect className="sim-jaw-r" x="12" y="3" width="5" height="16" rx="2.5" fill="url(#sim-mToolDark)" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8" transform={`translate(0 ${jawSpread})`} />
              </g>

              {/* grab range hint */}
              {!holding && distToBoard < GRAB_RANGE && (
                <circle cx={BOARD_HOME.x} cy={BOARD_HOME.y} r={GRAB_RANGE} fill="none" stroke="oklch(0.8 0.012 245 / 0.4)" strokeWidth="1" strokeDasharray="3 3" className="sim-hint" />
              )}
            </svg>

            <div className="mt-6 space-y-5">
              {([
                { label: "ბრუნვა", val: rot1, set: setRot1, min: -60, max: 60 },
                { label: "იდაყვი", val: rot2, set: setRot2, min: -120, max: 120 },
                { label: "მაჯა", val: rot3, set: setRot3, min: -120, max: 120 },
              ] as const).map((s) => (
                <label key={s.label} className="block">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{s.label}</span>
                    <span className="text-sm text-dark-muted-foreground">{s.val}°</span>
                  </div>
                  <input
                    type="range"
                    min={s.min}
                    max={s.max}
                    value={s.val}
                    onChange={(e) => s.set(Number(e.currentTarget.value))}
                    className="sim-slider mt-2 w-full"
                    aria-label={s.label}
                  />
                </label>
              ))}
              <div className="flex gap-3">
                <button
                  onClick={grab}
                  className="flex-1 rounded-full bg-metal px-6 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                >
                  {gripOpen ? "დაიჭირე" : "გაუშვი"}
                </button>
                <button
                  onClick={reset}
                  className="rounded-full border-2 border-dark-muted px-6 py-4 text-lg font-semibold text-secondary-foreground transition-colors hover:border-primary"
                >
                  თავიდან
                </button>
              </div>
              <p className="text-sm text-dark-muted-foreground">
                {!holding && distToBoard < GRAB_RANGE && "დაფა ახლოა — დააჭირე „დაიჭირე“-ს"}
                {!holding && distToBoard >= GRAB_RANGE && "მიიყვანე ხელი დაფასთან, რომ დაიჭირო"}
                {holding && !inZone && "აწიე დაფა სამუშაო ზონაში"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal className="rounded-3xl bg-dark-muted p-6">
              <h3 className="text-xl font-semibold">მისია</h3>
              <ul className="mt-4 space-y-3">
                <CheckItem done={check1} label="მოხვდი დაფასთან" />
                <CheckItem done={check2} label="დაიჭირე" />
                <CheckItem done={check3} label="აწიე სამუშაო ზონაში" />
              </ul>
            </Reveal>

            {success ? (
              <Reveal className="rounded-3xl bg-primary p-8 text-primary-foreground">
                <h3 className="text-2xl font-extrabold">შენი ორივე ხელი თავისუფალია! 🎉</h3>
                <p className="mt-2 text-primary-foreground/80">ModuArm უძრავად იჭერს დაფას — შენ აგრძელებ მუშაობას.</p>
                <a
                  href="#waitlist"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-metal px-6 py-3 text-lg font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  შემატყობინე გაშვებისას
                </a>
              </Reveal>
            ) : (
              <Reveal className="rounded-3xl border-2 border-dashed border-dark-muted p-6 text-center">
                <p className="text-dark-muted-foreground">მიზანს მიაღწევ, როცა დაფა სამუშაო ზონაში აღმოჩნდება.</p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
