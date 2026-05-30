export default function WorldMap() {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <svg viewBox="0 0 1000 500" className="w-full h-auto" style={{ maxHeight: "300px" }}>
        {/* Background */}
        <rect width="1000" height="500" fill="transparent" />

        {/* World map simplified paths */}
        {/* North America */}
        <path
          d="M150 100 L300 80 L320 120 L280 180 L200 200 L150 150 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />

        {/* South America */}
        <path
          d="M250 250 L300 240 L320 300 L310 400 L280 420 L260 400 L240 350 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />

        {/* Argentina - Highlighted */}
        <path
          d="M270 350 L290 340 L300 380 L295 420 L280 425 L275 400 L270 370 Z"
          fill="rgba(59, 130, 246, 0.8)"
          stroke="rgba(59, 130, 246, 1)"
          strokeWidth="2"
          className="animate-pulse"
        />

        {/* Europe */}
        <path
          d="M450 120 L550 110 L580 140 L560 180 L480 190 L450 160 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />

        {/* Spain - Highlighted */}
        <path
          d="M450 160 L480 155 L485 170 L475 180 L455 175 Z"
          fill="rgba(34, 197, 94, 0.8)"
          stroke="rgba(34, 197, 94, 1)"
          strokeWidth="2"
          className="animate-pulse"
        />

        {/* Africa */}
        <path
          d="M480 200 L580 190 L600 250 L590 350 L520 380 L480 320 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />

        {/* Asia */}
        <path
          d="M600 100 L800 90 L850 150 L820 200 L750 220 L600 180 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />

        {/* Ecuador - Highlighted */}
        <path
          d="M220 280 L235 275 L240 290 L235 300 L225 295 Z"
          fill="rgba(168, 85, 247, 0.8)"
          stroke="rgba(168, 85, 247, 1)"
          strokeWidth="2"
          className="animate-pulse"
        />

        {/* Australia */}
        <path
          d="M750 350 L850 340 L870 380 L840 400 L760 390 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />

        {/* Country labels */}
        <text x="280" y="390" fill="rgba(59, 130, 246, 1)" fontSize="12" fontWeight="bold" textAnchor="middle">
          Argentina
        </text>
        <text x="467" y="175" fill="rgba(34, 197, 94, 1)" fontSize="12" fontWeight="bold" textAnchor="middle">
          España
        </text>
        <text x="232" y="315" fill="rgba(168, 85, 247, 1)" fontSize="12" fontWeight="bold" textAnchor="middle">
          Ecuador
        </text>

        {/* Legend */}
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="200" height="80" fill="rgba(0,0,0,0.3)" rx="8" />
          <text x="10" y="20" fill="white" fontSize="14" fontWeight="bold">
            Countries I've spoken in:
          </text>

          <circle cx="20" cy="35" r="4" fill="rgba(59, 130, 246, 0.8)" />
          <text x="30" y="40" fill="white" fontSize="12">
            Argentina
          </text>

          <circle cx="20" cy="50" r="4" fill="rgba(34, 197, 94, 0.8)" />
          <text x="30" y="55" fill="white" fontSize="12">
            España
          </text>

          <circle cx="20" cy="65" r="4" fill="rgba(168, 85, 247, 0.8)" />
          <text x="30" y="70" fill="white" fontSize="12">
            Ecuador
          </text>
        </g>
      </svg>
    </div>
  )
}
