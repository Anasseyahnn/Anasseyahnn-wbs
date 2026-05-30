"use client"

import { useState } from "react"

export default function FuturisticMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries = [
    {
      name: "Argentina",
      path: "M280 420 L320 420 L320 480 L280 480 Z",
      center: { x: 300, y: 450 },
    },
    {
      name: "Spain",
      path: "M480 280 L520 280 L520 300 L480 300 Z",
      center: { x: 500, y: 290 },
    },
    {
      name: "Ecuador",
      path: "M240 380 L270 380 L270 400 L240 400 Z",
      center: { x: 255, y: 390 },
    },
  ]

  return (
    <div className="w-full mb-8">
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500/20 shadow-2xl">
        <div
          className="absolute inset-0"
          style={{
            filter: "drop-shadow(0 0 20px rgba(0, 255, 224, 0.3))",
          }}
        >
          <svg
            viewBox="0 0 800 400"
            className="w-full h-full"
            style={{ background: "radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)" }}
          >
            {/* World continents outline */}
            <g stroke="#333" strokeWidth="1" fill="#111">
              {/* North America */}
              <path d="M50 120 L180 120 L200 140 L190 180 L160 200 L120 190 L80 160 L50 140 Z" />
              {/* South America */}
              <path d="M200 300 L240 280 L280 300 L320 350 L300 480 L260 490 L220 460 L200 400 Z" />
              {/* Europe */}
              <path d="M450 200 L550 180 L580 200 L570 240 L520 260 L480 250 L450 220 Z" />
              {/* Africa */}
              <path d="M480 280 L550 270 L580 300 L570 400 L540 450 L500 440 L480 380 Z" />
              {/* Asia */}
              <path d="M580 150 L750 140 L780 180 L760 250 L720 280 L650 270 L580 200 Z" />
              {/* Australia */}
              <path d="M650 350 L720 340 L750 360 L740 390 L700 400 L650 380 Z" />
            </g>

            {/* Highlighted countries with neon glow */}
            {countries.map((country) => (
              <g key={country.name}>
                {/* Glow effect */}
                <path
                  d={country.path}
                  fill="none"
                  stroke="#00FFE0"
                  strokeWidth="3"
                  className="animate-pulse"
                  style={{
                    filter: `drop-shadow(0 0 ${hoveredCountry === country.name ? "15px" : "8px"} #00FFE0)`,
                  }}
                />
                {/* Country fill */}
                <path
                  d={country.path}
                  fill={hoveredCountry === country.name ? "#01D9AA55" : "#09ABE055"}
                  stroke="#00FFE0"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredCountry(country.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                />
                {/* Country label */}
                <text
                  x={country.center.x}
                  y={country.center.y}
                  textAnchor="middle"
                  className="text-xs font-bold fill-cyan-300 pointer-events-none"
                  style={{
                    filter: "drop-shadow(0 0 4px #00FFE0)",
                    fontSize: "12px",
                  }}
                >
                  {country.name}
                </text>
              </g>
            ))}

            {/* Animated grid overlay for cyberpunk effect */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00FFE0" strokeWidth="0.5" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Animated scanning line */}
            <line
              x1="0"
              y1="200"
              x2="800"
              y2="200"
              stroke="#00FFE0"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Futuristic corner decorations */}
        <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>
      </div>

      {/* Legend */}
      <div className="flex justify-center mt-4 space-x-6 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse"></div>
          <span className="text-white/75 font-medium">Speaking Countries</span>
        </div>
        {hoveredCountry && (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-green-400 font-medium">{hoveredCountry}</span>
          </div>
        )}
      </div>
    </div>
  )
}
