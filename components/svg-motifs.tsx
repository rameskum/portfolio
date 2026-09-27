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

export function HomelabTopology({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <title>Homelab six-host topology</title>
      
      <rect x="40" y="30" width="720" height="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" rx="4" opacity="0.4" />
      <text x="400" y="50" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.6" fontFamily="monospace">
        Fleet monitoring: Beszel · Dozzle · Homarr
      </text>

      <g opacity="0.8">
        <rect x="40" y="90" width="720" height="130" stroke="#E85A32" strokeWidth="1" fill="none" rx="4" opacity="0.3" />
        <text x="50" y="106" fontSize="10" fill="#E85A32" fontFamily="monospace" fontWeight="bold">
          EDGE PLANE
        </text>
      </g>

      <rect x="60" y="120" width="320" height="80" stroke="currentColor" strokeWidth="2" fill="transparent" rx="4" />
      <text x="220" y="140" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold" fontFamily="monospace">
        hlx-prod-rpi-01
      </text>
      <text x="220" y="160" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
        Traefik · CrowdSec · Authelia · Pangolin
      </text>

      <rect x="420" y="120" width="320" height="80" stroke="currentColor" strokeWidth="2" fill="transparent" rx="4" />
      <text x="580" y="140" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold" fontFamily="monospace">
        hlx-edge-01
      </text>
      <text x="580" y="160" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
        Pangolin/Gerbil · Traefik · SearxNG
      </text>

      <line x1="220" y1="200" x2="220" y2="240" stroke="currentColor" strokeWidth="1.5" />
      <line x1="580" y1="200" x2="580" y2="240" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="220,235 216,227 224,227" fill="currentColor" />
      <polygon points="580,235 576,227 584,227" fill="currentColor" />

      <text x="50" y="256" fontSize="10" fill="currentColor" opacity="0.6" fontFamily="monospace" fontWeight="bold">
        APPS PLANE
      </text>

      <rect x="60" y="240" width="200" height="80" stroke="currentColor" strokeWidth="2" fill="transparent" rx="4" />
      <text x="160" y="260" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold" fontFamily="monospace">
        docker-01
      </text>
      <text x="160" y="280" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
        App workloads
      </text>

      <rect x="290" y="240" width="200" height="80" stroke="currentColor" strokeWidth="2" fill="transparent" rx="4" />
      <text x="390" y="260" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold" fontFamily="monospace">
        docker-02
      </text>
      <text x="390" y="280" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
        App workloads · Unmanic
      </text>

      <rect x="520" y="240" width="200" height="80" stroke="currentColor" strokeWidth="2" fill="transparent" rx="4" />
      <text x="620" y="260" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold" fontFamily="monospace">
        balerion
      </text>
      <text x="620" y="280" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
        App workloads
      </text>

      <line x1="390" y1="320" x2="390" y2="360" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="390,355 386,347 394,347" fill="currentColor" />

      <text x="50" y="376" fontSize="10" fill="currentColor" opacity="0.6" fontFamily="monospace" fontWeight="bold">
        DATA PLANE
      </text>

      <rect x="60" y="360" width="660" height="80" stroke="currentColor" strokeWidth="2" fill="transparent" rx="4" />
      <text x="390" y="380" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold" fontFamily="monospace">
        hlx-prod-nas-01
      </text>
      <text x="390" y="400" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
        Immich+Postgres · Plex/Jellyfin · *arr pipeline
      </text>
      <text x="390" y="420" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.5" fontStyle="italic">
        * Media = workload line
      </text>
    </svg>
  );
}
