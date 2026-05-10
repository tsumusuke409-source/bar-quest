import React from 'react'

// Pixel-art SVG illustrations for bar tools and glasses.
// Each component uses a 64×80 viewBox for consistent display.

function ShakerVisual() {
  return (
    <g>
      {/* Cap */}
      <rect x="22" y="4" width="20" height="8" fill="#c8c8d8" />
      <rect x="20" y="11" width="24" height="3" fill="#9090a0" />
      {/* Strainer */}
      <rect x="18" y="14" width="28" height="10" fill="#d8d8e8" />
      <rect x="21" y="17" width="4" height="3" fill="#9090a0" opacity="0.6" />
      <rect x="28" y="17" width="4" height="3" fill="#9090a0" opacity="0.6" />
      <rect x="35" y="17" width="4" height="3" fill="#9090a0" opacity="0.6" />
      {/* Body */}
      <rect x="16" y="24" width="32" height="36" fill="#e0e0f0" />
      {/* Shine */}
      <rect x="18" y="26" width="5" height="32" fill="white" opacity="0.35" />
      {/* Shadow */}
      <rect x="41" y="26" width="4" height="32" fill="#8080a0" opacity="0.25" />
      {/* Bottom taper */}
      <rect x="18" y="60" width="28" height="5" fill="#c8c8d8" />
      <rect x="21" y="65" width="22" height="4" fill="#b0b0c8" />
      {/* Label stripe */}
      <rect x="20" y="36" width="24" height="10" fill="#4466aa" opacity="0.5" />
      <rect x="22" y="38" width="20" height="6" fill="#6688cc" opacity="0.4" />
    </g>
  )
}

function BarSpoonVisual() {
  return (
    <g>
      {/* Spoon bowl at bottom */}
      <ellipse cx="32" cy="68" rx="7" ry="4" fill="#c8c8d8" />
      <ellipse cx="32" cy="67" rx="5" ry="3" fill="#e8e8f8" opacity="0.7" />
      {/* Handle - spiral effect with alternating segments */}
      {Array.from({ length: 18 }, (_, i) => (
        <rect
          key={i}
          x={i % 2 === 0 ? 30 : 31}
          y={8 + i * 3}
          width="4"
          height="3"
          fill={i % 2 === 0 ? '#c8c8d8' : '#a0a0b8'}
        />
      ))}
      {/* Top decorative end */}
      <rect x="28" y="4" width="8" height="6" fill="#d8d8e8" />
      <rect x="29" y="5" width="6" height="4" fill="#a0a0b8" opacity="0.7" />
    </g>
  )
}

function JiggerVisual() {
  return (
    <g>
      {/* Top (larger measure - 45ml) */}
      <polygon points="18,8 46,8 40,32 24,32" fill="#d8d8e8" />
      <polygon points="19,9 45,9 40,30 24,30" fill="#e8e8f8" opacity="0.6" />
      {/* Connection */}
      <rect x="28" y="32" width="8" height="4" fill="#b0b0c8" />
      {/* Bottom (smaller measure - 30ml) */}
      <polygon points="24,36 40,36 36,58 28,58" fill="#c8c8d8" />
      <polygon points="25,37 39,37 35,56 29,56" fill="#d8d8e8" opacity="0.6" />
      {/* Measure lines */}
      <line x1="22" y1="20" x2="42" y2="20" stroke="#9090a0" strokeWidth="1" opacity="0.5" />
      <line x1="26" y1="46" x2="38" y2="46" stroke="#9090a0" strokeWidth="1" opacity="0.5" />
    </g>
  )
}

function MixingGlassVisual() {
  return (
    <g>
      {/* Glass body - slightly tapered */}
      <polygon points="18,8 46,8 42,68 22,68" fill="#aaccee" opacity="0.35" />
      <polygon points="19,9 45,9 41,67 23,67" fill="#cce4ff" opacity="0.25" />
      {/* Left edge */}
      <rect x="17" y="8" width="3" height="60" fill="#88aacc" opacity="0.5" />
      {/* Right edge */}
      <rect x="44" y="8" width="3" height="60" fill="#88aacc" opacity="0.5" />
      {/* Top rim */}
      <rect x="16" y="6" width="32" height="4" fill="#aaccee" opacity="0.7" />
      {/* Bottom base */}
      <rect x="20" y="66" width="24" height="4" fill="#88aacc" opacity="0.7" />
      {/* Pour spout notch */}
      <rect x="14" y="6" width="6" height="6" fill="#aaccee" opacity="0.8" />
      {/* Ice cubes inside */}
      <rect x="22" y="30" width="8" height="8" fill="white" opacity="0.4" />
      <rect x="32" y="40" width="8" height="8" fill="white" opacity="0.4" />
      <rect x="24" y="50" width="7" height="7" fill="white" opacity="0.3" />
    </g>
  )
}

function HawthornStrainerVisual() {
  return (
    <g>
      {/* Handle */}
      <rect x="10" y="36" width="28" height="7" fill="#c8c8d8" />
      <rect x="10" y="37" width="26" height="5" fill="#d8d8e8" opacity="0.7" />
      {/* Round disk head */}
      <circle cx="46" cy="40" r="16" fill="#d0d0e0" />
      <circle cx="46" cy="40" r="14" fill="#e0e0f0" opacity="0.7" />
      {/* Perforations */}
      {[[-6,-6],[-6,0],[-6,6],[0,-6],[0,0],[0,6],[6,-6],[6,0],[6,6]].map(([dx,dy],i) => (
        <circle key={i} cx={46+dx} cy={40+dy} r="2" fill="#9090a0" opacity="0.5" />
      ))}
      {/* Spring coil around edge */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = 46 + Math.cos(angle) * 15
        const y = 40 + Math.sin(angle) * 15
        return <circle key={i} cx={x} cy={y} r="2" fill="#9090a0" opacity="0.6" />
      })}
    </g>
  )
}

function MuddlerVisual() {
  return (
    <g>
      {/* Handle */}
      <rect x="28" y="4" width="8" height="44" fill="#8b5a2b" />
      <rect x="29" y="5" width="3" height="42" fill="#a06820" opacity="0.5" />
      {/* Neck */}
      <rect x="26" y="46" width="12" height="6" fill="#7a4a1a" />
      {/* Flat head */}
      <rect x="22" y="52" width="20" height="14" fill="#5a3010" rx="2" />
      <rect x="23" y="53" width="18" height="12" fill="#7a4a20" opacity="0.6" />
      {/* Grip texture */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="30" y={14+i*6} width="2" height="3" fill="#6a4010" opacity="0.4" />
      ))}
    </g>
  )
}

function IcePickVisual() {
  return (
    <g>
      {/* Handle */}
      <rect x="26" y="4" width="12" height="26" fill="#5a3010" rx="2" />
      <rect x="27" y="5" width="5" height="24" fill="#7a4a20" opacity="0.5" />
      {/* Handle grooves */}
      {[0,1,2].map(i => (
        <rect key={i} x="26" y={10+i*6} width="12" height="2" fill="#3a1800" opacity="0.4" />
      ))}
      {/* Metal collar */}
      <rect x="28" y="28" width="8" height="5" fill="#c8c8d8" />
      {/* Spike */}
      <polygon points="32,33 31,72 33,72" fill="#a0a0b0" />
      <polygon points="32,33 31.5,40 32.5,40" fill="#d0d0e0" opacity="0.7" />
    </g>
  )
}

function CocktailPickVisual() {
  return (
    <g>
      {/* Decorative top */}
      <circle cx="32" cy="8" r="6" fill="#f5c842" />
      <circle cx="32" cy="8" r="4" fill="#ffe080" opacity="0.8" />
      <polygon points="32,4 33,7 32,6 31,7" fill="#f5c842" />
      {/* Stick */}
      <rect x="31" y="12" width="2" height="52" fill="#d0d0d0" />
      {/* Olive on stick */}
      <ellipse cx="32" cy="50" rx="6" ry="5" fill="#4a8020" />
      <ellipse cx="32" cy="49" rx="5" ry="4" fill="#5a9830" opacity="0.7" />
      <circle cx="32" cy="50" r="2" fill="#cc4400" />
    </g>
  )
}

function ZesterVisual() {
  return (
    <g>
      {/* Handle */}
      <rect x="10" y="34" width="30" height="10" fill="#e8c090" rx="2" />
      <rect x="11" y="35" width="28" height="8" fill="#f0d0a0" opacity="0.7" />
      {/* Zester head - flat with holes */}
      <rect x="38" y="28" width="20" height="22" fill="#d0d0e0" rx="2" />
      <rect x="39" y="29" width="18" height="20" fill="#e0e0f0" opacity="0.6" />
      {/* Micro-grating dots */}
      {[0,1,2,3].map(row =>
        [0,1,2,3,4].map(col => (
          <circle key={`${row}-${col}`} cx={41+col*3.5} cy={31+row*4} r="1" fill="#8090a0" opacity="0.6" />
        ))
      )}
    </g>
  )
}

// Glass visuals
function CocktailGlassVisual() {
  return (
    <g>
      {/* V-shaped bowl */}
      <polygon points="14,8 50,8 38,42 26,42" fill="#aaddff" opacity="0.4" />
      <polygon points="15,9 49,9 37,41 27,41" fill="#cceeff" opacity="0.3" />
      {/* Rim */}
      <rect x="13" y="6" width="38" height="4" fill="#88bbdd" opacity="0.6" />
      {/* Liquid (slightly below rim) */}
      <polygon points="17,12 47,12 37,40 27,40" fill="#ddeeff" opacity="0.35" />
      {/* Stem */}
      <rect x="30" y="42" width="4" height="20" fill="#88bbdd" opacity="0.6" />
      {/* Base */}
      <rect x="22" y="62" width="20" height="4" fill="#88bbdd" opacity="0.7" />
      {/* Shine */}
      <polygon points="16,10 20,10 32,40 28,40" fill="white" opacity="0.25" />
    </g>
  )
}

function RocksGlassVisual() {
  return (
    <g>
      {/* Thick-walled low glass */}
      <rect x="16" y="24" width="32" height="36" fill="#aaddff" opacity="0.4" />
      <rect x="17" y="25" width="30" height="34" fill="#cceeff" opacity="0.25" />
      {/* Walls */}
      <rect x="15" y="24" width="4" height="36" fill="#88bbdd" opacity="0.5" />
      <rect x="45" y="24" width="4" height="36" fill="#88bbdd" opacity="0.5" />
      {/* Bottom */}
      <rect x="15" y="57" width="34" height="5" fill="#88bbdd" opacity="0.7" />
      {/* Rim */}
      <rect x="14" y="22" width="36" height="4" fill="#aaccee" opacity="0.6" />
      {/* Ice cubes */}
      <rect x="18" y="34" width="10" height="10" fill="white" opacity="0.5" />
      <rect x="32" y="40" width="10" height="10" fill="white" opacity="0.45" />
      {/* Liquid */}
      <rect x="17" y="44" width="30" height="12" fill="#d4a017" opacity="0.35" />
      {/* Shine */}
      <rect x="17" y="26" width="4" height="30" fill="white" opacity="0.2" />
    </g>
  )
}

function HighballGlassVisual() {
  return (
    <g>
      {/* Tall cylinder */}
      <rect x="20" y="10" width="24" height="56" fill="#aaddff" opacity="0.35" />
      {/* Walls */}
      <rect x="19" y="10" width="3" height="56" fill="#88bbdd" opacity="0.5" />
      <rect x="42" y="10" width="3" height="56" fill="#88bbdd" opacity="0.5" />
      {/* Bottom */}
      <rect x="19" y="63" width="26" height="5" fill="#88bbdd" opacity="0.7" />
      {/* Rim */}
      <rect x="18" y="8" width="28" height="4" fill="#aaccee" opacity="0.6" />
      {/* Liquid (carbonated - light color) */}
      <rect x="21" y="20" width="22" height="42" fill="#cceeff" opacity="0.3" />
      {/* Bubbles */}
      <circle cx="28" cy="50" r="2" fill="white" opacity="0.4" />
      <circle cx="36" cy="40" r="1.5" fill="white" opacity="0.4" />
      <circle cx="30" cy="30" r="2" fill="white" opacity="0.35" />
      {/* Ice */}
      <rect x="22" y="12" width="9" height="7" fill="white" opacity="0.5" />
      <rect x="33" y="14" width="8" height="6" fill="white" opacity="0.45" />
      {/* Shine */}
      <rect x="21" y="12" width="3" height="50" fill="white" opacity="0.2" />
    </g>
  )
}

function ChampagneFluteVisual() {
  return (
    <g>
      {/* Very narrow flute */}
      <polygon points="26,8 38,8 36,50 28,50" fill="#ffe8a0" opacity="0.4" />
      <polygon points="27,9 37,9 35,49 29,49" fill="#fff0c0" opacity="0.3" />
      {/* Rim */}
      <rect x="25" y="6" width="14" height="4" fill="#d4b060" opacity="0.6" />
      {/* Bubbles rising */}
      <circle cx="32" cy="42" r="1.5" fill="white" opacity="0.5" />
      <circle cx="30" cy="34" r="1" fill="white" opacity="0.5" />
      <circle cx="34" cy="26" r="1.5" fill="white" opacity="0.5" />
      <circle cx="31" cy="18" r="1" fill="white" opacity="0.4" />
      {/* Stem */}
      <rect x="30" y="50" width="4" height="14" fill="#d4b060" opacity="0.6" />
      {/* Base */}
      <rect x="24" y="64" width="16" height="4" fill="#d4b060" opacity="0.7" />
      {/* Shine */}
      <polygon points="27,9 29,9 31,48 29,48" fill="white" opacity="0.25" />
    </g>
  )
}

function ShotGlassVisual() {
  return (
    <g>
      {/* Short, thick shot glass */}
      <rect x="22" y="34" width="20" height="28" fill="#aaddff" opacity="0.4" />
      {/* Walls - thick at bottom */}
      <rect x="21" y="34" width="3" height="28" fill="#88bbdd" opacity="0.5" />
      <rect x="40" y="34" width="3" height="28" fill="#88bbdd" opacity="0.5" />
      {/* Bottom thick base */}
      <rect x="21" y="58" width="22" height="6" fill="#88bbdd" opacity="0.7" />
      {/* Rim */}
      <rect x="20" y="32" width="24" height="4" fill="#aaccee" opacity="0.6" />
      {/* Liquid */}
      <rect x="23" y="40" width="18" height="17" fill="#d4a017" opacity="0.5" />
      {/* Shine */}
      <rect x="23" y="35" width="3" height="22" fill="white" opacity="0.25" />
    </g>
  )
}

function WineGlassVisual() {
  return (
    <g>
      {/* Bowl */}
      <ellipse cx="32" cy="32" rx="16" ry="20" fill="#cc3333" opacity="0.35" />
      <ellipse cx="32" cy="32" rx="14" ry="18" fill="#ee5555" opacity="0.2" />
      {/* Rim */}
      <ellipse cx="32" cy="14" rx="16" ry="3" fill="#cc4444" opacity="0.5" />
      {/* Stem */}
      <rect x="30" y="52" width="4" height="14" fill="#aaccee" opacity="0.6" />
      {/* Base */}
      <rect x="22" y="66" width="20" height="4" fill="#aaccee" opacity="0.7" />
      {/* Shine */}
      <ellipse cx="24" cy="26" rx="4" ry="8" fill="white" opacity="0.2" />
    </g>
  )
}

function MargaritaGlassVisual() {
  return (
    <g>
      {/* Wide saucer top */}
      <polygon points="8,20 56,20 48,42 16,42" fill="#aaddff" opacity="0.4" />
      {/* Rim - wide */}
      <rect x="7" y="17" width="50" height="5" fill="#88bbdd" opacity="0.6" />
      {/* Salt on rim */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={10+i*7} y="15" width="3" height="3" fill="white" opacity="0.7" />
      ))}
      {/* Liquid (margarita green-yellow) */}
      <polygon points="12,22 52,22 46,40 18,40" fill="#aadd44" opacity="0.4" />
      {/* Stem */}
      <rect x="30" y="42" width="4" height="16" fill="#88bbdd" opacity="0.6" />
      {/* Base */}
      <rect x="22" y="58" width="20" height="5" fill="#88bbdd" opacity="0.7" />
    </g>
  )
}

function CopperMugVisual() {
  return (
    <g>
      {/* Copper mug body */}
      <rect x="14" y="18" width="32" height="40" fill="#b87333" />
      <rect x="15" y="19" width="30" height="38" fill="#d4914a" opacity="0.7" />
      {/* Handle */}
      <rect x="44" y="26" width="8" height="5" fill="#a06020" />
      <rect x="44" y="46" width="8" height="5" fill="#a06020" />
      <rect x="48" y="29" width="4" height="20" fill="#a06020" />
      {/* Rim */}
      <rect x="13" y="15" width="34" height="5" fill="#c88040" />
      {/* Bottom */}
      <rect x="15" y="56" width="30" height="5" fill="#a06020" />
      {/* Shine */}
      <rect x="16" y="20" width="5" height="34" fill="white" opacity="0.2" />
      {/* Liquid (moscow mule - dark) */}
      <rect x="16" y="30" width="28" height="24" fill="#ddeecc" opacity="0.3" />
      {/* Lime garnish */}
      <ellipse cx="38" cy="18" rx="8" ry="5" fill="#66aa22" opacity="0.8" />
    </g>
  )
}

function IrishCoffeeMugVisual() {
  return (
    <g>
      {/* Glass body with handle */}
      <rect x="18" y="10" width="26" height="52" fill="#332200" opacity="0.6" />
      <rect x="19" y="11" width="24" height="50" fill="#553300" opacity="0.5" />
      {/* Handle */}
      <rect x="42" y="24" width="8" height="5" fill="#553300" />
      <rect x="42" y="40" width="8" height="5" fill="#553300" />
      <rect x="46" y="27" width="4" height="16" fill="#553300" />
      {/* Rim */}
      <rect x="17" y="8" width="28" height="4" fill="#553300" opacity="0.8" />
      {/* Coffee layer */}
      <rect x="20" y="30" width="22" height="30" fill="#4a2200" opacity="0.7" />
      {/* Cream top */}
      <rect x="19" y="13" width="24" height="18" fill="#f5ead0" opacity="0.9" />
      <rect x="20" y="14" width="22" height="16" fill="white" opacity="0.5" />
    </g>
  )
}

// Spirit bottle visual (generic bottle with color)
function SpiritBottleVisual({ color, labelColor }: { color: string; labelColor: string; label: string }) {
  return (
    <g>
      {/* Cap */}
      <rect x="27" y="4" width="10" height="6" fill="#333" />
      {/* Neck */}
      <rect x="26" y="9" width="12" height="12" fill={color} />
      {/* Shoulder */}
      <polygon points="20,21 44,21 26,9 38,9" fill={color} opacity="0.9" />
      {/* Body */}
      <rect x="18" y="21" width="28" height="40" fill={color} />
      {/* Label */}
      <rect x="20" y="28" width="24" height="22" fill={labelColor} opacity="0.85" />
      <rect x="22" y="30" width="20" height="3" fill="white" opacity="0.6" />
      <rect x="23" y="35" width="18" height="2" fill="white" opacity="0.4" />
      <rect x="24" y="39" width="16" height="2" fill="white" opacity="0.3" />
      {/* Shine */}
      <rect x="19" y="22" width="4" height="38" fill="white" opacity="0.25" />
      {/* Bottom */}
      <rect x="19" y="60" width="26" height="5" fill={color} opacity="0.8" />
      {/* Label text placeholder */}
      <rect x="22" y="33" width="20" height="1" fill="white" opacity="0.5" />
    </g>
  )
}

const SPIRIT_COLORS: Record<string, { color: string; labelColor: string; label: string }> = {
  gin:     { color: '#e8e8f0', labelColor: '#cc4444', label: 'GIN' },
  vodka:   { color: '#f0f0f8', labelColor: '#2244aa', label: 'VODKA' },
  rum:     { color: '#d4a017', labelColor: '#8b4010', label: 'RUM' },
  tequila: { color: '#e8d880', labelColor: '#226622', label: 'TEQUILA' },
  whiskey: { color: '#c87820', labelColor: '#4a2000', label: 'WHISKEY' },
  brandy:  { color: '#aa5010', labelColor: '#2a0a00', label: 'BRANDY' },
}

const VISUAL_MAP: Record<string, React.ReactElement> = {
  shaker:        <ShakerVisual />,
  bar_spoon:     <BarSpoonVisual />,
  jigger:        <JiggerVisual />,
  mixing_glass:  <MixingGlassVisual />,
  strainer:      <HawthornStrainerVisual />,
  muddler:       <MuddlerVisual />,
  ice_pick:      <IcePickVisual />,
  cocktail_pick: <CocktailPickVisual />,
  zester:        <ZesterVisual />,
  cocktail:      <CocktailGlassVisual />,
  rocks:         <RocksGlassVisual />,
  highball:      <HighballGlassVisual />,
  champagne_flute: <ChampagneFluteVisual />,
  shot:          <ShotGlassVisual />,
  wine:          <WineGlassVisual />,
  margarita:     <MargaritaGlassVisual />,
  copper_mug:    <CopperMugVisual />,
  irish_coffee:  <IrishCoffeeMugVisual />,
  gin:           <SpiritBottleVisual {...SPIRIT_COLORS.gin} />,
  gin_bottle:    <SpiritBottleVisual {...SPIRIT_COLORS.gin} />,
  vodka:         <SpiritBottleVisual {...SPIRIT_COLORS.vodka} />,
  vodka_bottle:  <SpiritBottleVisual {...SPIRIT_COLORS.vodka} />,
  rum:           <SpiritBottleVisual {...SPIRIT_COLORS.rum} />,
  rum_bottle:    <SpiritBottleVisual {...SPIRIT_COLORS.rum} />,
  tequila:       <SpiritBottleVisual {...SPIRIT_COLORS.tequila} />,
  whiskey:       <SpiritBottleVisual {...SPIRIT_COLORS.whiskey} />,
  whiskey_bottle:<SpiritBottleVisual {...SPIRIT_COLORS.whiskey} />,
  brandy:        <SpiritBottleVisual {...SPIRIT_COLORS.brandy} />,
  cognac_bottle: <SpiritBottleVisual {...SPIRIT_COLORS.brandy} />,
}

export function ToolVisual({ visualKey, size = 80 }: { visualKey: string; size?: number }) {
  const content = VISUAL_MAP[visualKey]
  if (!content) return null
  return (
    <svg
      viewBox="0 0 64 80"
      className="pixel-art"
      style={{ width: size, height: size, display: 'block' }}
      aria-hidden="true"
    >
      {content}
    </svg>
  )
}
