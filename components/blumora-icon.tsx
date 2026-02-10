export function BlumoraIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lightbulb shape */}
      <path
        d="M50 20C39.5 20 31 28.5 31 39C31 45 33.5 50.5 37.5 54.5V62C37.5 64.5 39.5 67 42 67H58C60.5 67 62.5 64.5 62.5 62V54.5C66.5 50.5 69 45 69 39C69 28.5 60.5 20 50 20Z"
        fill="currentColor"
        className="text-secondary"
        opacity="0.3"
      />
      <path
        d="M50 22C40.6 22 33 29.6 33 39C33 44.5 35.2 49.5 38.5 53V62C38.5 63.9 40.1 65.5 42 65.5H58C59.9 65.5 61.5 63.9 61.5 62V53C64.8 49.5 67 44.5 67 39C67 29.6 59.4 22 50 22Z"
        stroke="currentColor"
        className="text-secondary"
        strokeWidth="2"
        fill="none"
      />
      {/* Base of bulb */}
      <rect x="42" y="67" width="16" height="3" rx="1" fill="currentColor" className="text-secondary" />
      <rect x="44" y="70" width="12" height="2" rx="1" fill="currentColor" className="text-secondary" />

      {/* Filament inside */}
      <path
        d="M47 40 L50 35 L53 40 L50 45 L47 40Z"
        stroke="currentColor"
        className="text-secondary"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Growth arrow overlay */}
      <path
        d="M58 38 L75 21 M75 21 L75 32 M75 21 L64 21"
        stroke="currentColor"
        className="text-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
