import type { ReactNode } from "react";

type IconProps = { className?: string };

const base = "h-7 w-7";

function Svg({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className ?? ""}`} aria-hidden>
      {children}
    </svg>
  );
}

export function IconPrice({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 8.5h-3a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3" />
      <line x1="12" y1="6.5" x2="12" y2="8.5" />
      <line x1="12" y1="15.5" x2="12" y2="17.5" />
    </Svg>
  );
}

export function IconHand({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 13V5.5a1.3 1.3 0 0 1 2.6 0V11" />
      <path d="M10.6 11V4.2a1.3 1.3 0 0 1 2.6 0V11" />
      <path d="M13.2 11V5.5a1.3 1.3 0 0 1 2.6 0v6" />
      <path d="M16 7.5a1.3 1.3 0 0 1 2.6 0V14c0 3.5-2.4 6.5-6 6.5s-5-2-6-4l-2-3.5c-.4-.8.3-1.8 1.2-1.5l1.8.7" />
    </Svg>
  );
}

export function IconGear({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12h2.5M19 12h2.5M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
    </Svg>
  );
}

export function IconGrip({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 3v7a3 3 0 0 0 3 3h2" />
      <path d="M19 3v7a3 3 0 0 1-3 3h-2" />
      <path d="M10 13v6a2 2 0 0 0 4 0v-6" />
      <line x1="12" y1="13" x2="12" y2="9" />
    </Svg>
  );
}

export function IconCamera({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7l1.5-2.5h5L16 7" />
      <circle cx="12" cy="13.5" r="3.5" />
    </Svg>
  );
}

export function IconSorter({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M8 11v6.5M16 11v6.5" />
      <path d="M5 18h6M14 18h6" />
    </Svg>
  );
}

export function IconHold({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 4v10a2 2 0 0 0 2 2h12" />
      <path d="M4 4h4M4 8h4" />
      <path d="M18 12v6M15 15h6" />
    </Svg>
  );
}

export function IconBrush({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14 3l7 7-3 3-7-7z" />
      <path d="M11 6L4 13a2 2 0 0 0 0 3l1 1a2 2 0 0 0 3 0l7-7" />
      <path d="M3 21c1.5 0 2.5-1 2.5-2.5" />
    </Svg>
  );
}

export function IconPen({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M16 3l5 5-11 11H5v-5z" />
      <path d="M14 5l5 5" />
      <path d="M5 19h6" />
    </Svg>
  );
}

export function IconSuction({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12h14v3a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <ellipse cx="12" cy="12" rx="7" ry="2.5" />
      <path d="M9 4.5c0-1 1.3-1.5 3-1.5s3 .5 3 1.5c0 1-1.3 1-3 1s-3 0-3-1z" />
      <line x1="12" y1="5.5" x2="12" y2="9.5" />
    </Svg>
  );
}

export function IconLed({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z" />
      <line x1="9.5" y1="18.5" x2="14.5" y2="18.5" />
      <line x1="10" y1="21" x2="14" y2="21" />
      <path d="M12 3v-1" />
    </Svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5 5.5-5.5" />
    </Svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
    </Svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8.5l1.5 2 2 1.5-2 1.5-1.5 2-1.5-2-2-1.5 2-1.5z" />
    </Svg>
  );
}

export const moduleIcons = {
  grip: IconGrip,
  camera: IconCamera,
  sorter: IconSorter,
  hold: IconHold,
  brush: IconBrush,
  pen: IconPen,
  suction: IconSuction,
  led: IconLed,
} as const;
