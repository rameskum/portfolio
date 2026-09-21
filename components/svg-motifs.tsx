export function PlatformGrid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="50" y="50" width="120" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="230" y="50" width="120" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="50" y="170" width="120" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="230" y="170" width="120" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="140" y="290" width="120" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="110" y1="130" x2="110" y2="170" stroke="currentColor" strokeWidth="2" />
      <line x1="290" y1="130" x2="290" y2="170" stroke="currentColor" strokeWidth="2" />
      <line x1="110" y1="250" x2="180" y2="290" stroke="currentColor" strokeWidth="2" />
      <line x1="290" y1="250" x2="220" y2="290" stroke="currentColor" strokeWidth="2" />
      <circle cx="110" cy="90" r="4" fill="currentColor" />
      <circle cx="290" cy="90" r="4" fill="currentColor" />
      <circle cx="110" cy="210" r="4" fill="currentColor" />
      <circle cx="290" cy="210" r="4" fill="currentColor" />
      <circle cx="200" cy="330" r="4" fill="currentColor" />
    </svg>
  );
}

export function PipelineFlow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="50" y="180" width="80" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="160" y="180" width="80" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="270" y="180" width="80" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="130" y1="200" x2="160" y2="200" stroke="currentColor" strokeWidth="2" />
      <line x1="240" y1="200" x2="270" y2="200" stroke="currentColor" strokeWidth="2" />
      <polygon points="155,200 145,195 145,205" fill="currentColor" />
      <polygon points="265,200 255,195 255,205" fill="currentColor" />
      <path d="M 90 140 L 90 180" stroke="currentColor" strokeWidth="2" />
      <path d="M 200 140 L 200 180" stroke="currentColor" strokeWidth="2" />
      <path d="M 310 140 L 310 180" stroke="currentColor" strokeWidth="2" />
      <circle cx="90" cy="135" r="6" fill="currentColor" />
      <circle cx="200" cy="135" r="6" fill="currentColor" />
      <circle cx="310" cy="135" r="6" fill="currentColor" />
      <path d="M 90 220 L 90 260" stroke="currentColor" strokeWidth="2" />
      <path d="M 200 220 L 200 260" stroke="currentColor" strokeWidth="2" />
      <path d="M 310 220 L 310 260" stroke="currentColor" strokeWidth="2" />
      <rect x="60" y="260" width="60" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="170" y="260" width="60" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="280" y="260" width="60" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function RecoveryLoop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M 200 100 L 220 130 L 180 130 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M 300 200 L 270 220 L 270 180 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M 200 300 L 180 270 L 220 270 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M 100 200 L 130 180 L 130 220 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="200" cy="200" r="12" fill="currentColor" />
      <path
        d="M 250 150 Q 280 120 250 90"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <polygon points="255,88 245,95 250,100" fill="currentColor" />
    </svg>
  );
}

export function HomelabRack({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="100" y="80" width="200" height="240" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="120" y="100" width="160" height="30" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="120" y="140" width="160" height="30" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="120" y="180" width="160" height="30" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="120" y="220" width="160" height="30" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="120" y="260" width="160" height="30" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="135" cy="115" r="3" fill="currentColor" />
      <circle cx="150" cy="115" r="3" fill="currentColor" />
      <circle cx="135" cy="155" r="3" fill="currentColor" />
      <circle cx="150" cy="155" r="3" fill="currentColor" />
      <circle cx="135" cy="195" r="3" fill="currentColor" />
      <circle cx="150" cy="195" r="3" fill="currentColor" />
      <circle cx="135" cy="235" r="3" fill="currentColor" />
      <circle cx="150" cy="235" r="3" fill="currentColor" />
      <circle cx="135" cy="275" r="3" fill="currentColor" />
      <circle cx="150" cy="275" r="3" fill="currentColor" />
      <line x1="200" y1="110" x2="260" y2="110" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="120" x2="260" y2="120" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="150" x2="260" y2="150" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="160" x2="260" y2="160" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="190" x2="260" y2="190" stroke="currentColor" strokeWidth="1" />
      <line x1="200" y1="200" x2="260" y2="200" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
