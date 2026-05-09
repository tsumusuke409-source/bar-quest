// Hand-crafted SVG bar background in pixel-art style.
// viewBox: 320×180 (16:9). Display: 100% of game container.

const BOTTLE_COLORS = [
  { c: '#d4a017', l: '#f0c840' }, // amber whiskey
  { c: '#228844', l: '#44cc66' }, // green gin
  { c: '#7a3010', l: '#aa5030' }, // brown rum
  { c: '#e0e0e0', l: '#ffffff' }, // clear vodka
  { c: '#881a1a', l: '#cc3333' }, // dark red vermouth
  { c: '#5522aa', l: '#8844cc' }, // purple liqueur
  { c: '#1a4488', l: '#3366bb' }, // blue curaçao
  { c: '#c48020', l: '#e0a040' }, // golden cognac
  { c: '#1a8888', l: '#33aaaa' }, // teal absinthe
  { c: '#cc5500', l: '#ee7722' }, // orange aperol
  { c: '#113322', l: '#226644' }, // dark green
  { c: '#cc2244', l: '#ee4466' }, // bright red campari
]

interface Bottle {
  x: number
  c: string // body color
  l: string // label color
}

function makeBottles(count: number, startX: number, spacing: number, offset = 0): Bottle[] {
  return Array.from({ length: count }, (_, i) => ({
    x: startX + i * spacing,
    ...BOTTLE_COLORS[(i + offset) % BOTTLE_COLORS.length],
  }))
}

function BottleSVG({ x, y, c, l }: Bottle & { y: number }) {
  // y = shelf top (body sits ON shelf, neck above shelf, cap above neck)
  const bodyY = y - 14
  const neckY = y - 18
  const capY = y - 20
  return (
    <g>
      {/* Cap */}
      <rect x={x + 2} y={capY} width={3} height={2} fill="#333" />
      {/* Neck */}
      <rect x={x + 2} y={neckY} width={3} height={4} fill={c} />
      {/* Body */}
      <rect x={x} y={bodyY} width={7} height={14} fill={c} />
      {/* Label */}
      <rect x={x + 1} y={bodyY + 4} width={5} height={5} fill={l} opacity={0.8} />
      {/* Shine */}
      <rect x={x + 1} y={bodyY + 1} width={1} height={6} fill="white" opacity={0.3} />
    </g>
  )
}

const UPPER_BOTTLES = makeBottles(30, 5, 10, 0)
const LOWER_BOTTLES = makeBottles(28, 8, 11, 4)

export function BarBackground({ variant = 'night' }: { variant?: 'night' | 'evening' | 'dawn' }) {
  const ceilColor = variant === 'dawn' ? '#1a1430' : '#080b18'
  const wallColor = variant === 'evening' ? '#1e1008' : '#140a04'
  const glowColor = variant === 'dawn' ? '#cc7733' : variant === 'evening' ? '#dd6600' : '#cc5500'

  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMax meet"
      className="pixel-art"
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, display: 'block' }}
      aria-hidden="true"
    >
      <defs>
        {/* Ambient warm light from bar area */}
        <radialGradient id="barGlow" cx="50%" cy="80%" r="55%">
          <stop offset="0%" stopColor={glowColor} stopOpacity="0.25" />
          <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
        </radialGradient>
        {/* Window night sky gradient */}
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#030814" />
          <stop offset="100%" stopColor="#0a1a3a" />
        </linearGradient>
        {/* Counter top gloss */}
        <linearGradient id="counterGloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a3a10" />
          <stop offset="30%" stopColor="#2a1600" />
          <stop offset="100%" stopColor="#1a0c00" />
        </linearGradient>
        {/* Wood pattern for wall */}
        <pattern id="woodPattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <rect width="40" height="20" fill={wallColor} />
          <line x1="0" y1="0" x2="40" y2="0" stroke="#0a0500" strokeWidth="0.5" opacity="0.4" />
          <line x1="0" y1="8" x2="40" y2="8" stroke="#200e04" strokeWidth="0.3" opacity="0.25" />
        </pattern>
      </defs>

      {/* ── Ceiling ── */}
      <rect x="0" y="0" width="320" height="52" fill={ceilColor} />
      {/* Ceiling trim */}
      <rect x="0" y="50" width="320" height="3" fill="#2a1800" />
      <rect x="0" y="53" width="320" height="1" fill="#5a3a10" />

      {/* ── Left window ── */}
      <rect x="15" y="4" width="68" height="45" fill="url(#skyGrad)" />
      {/* Stars in left window */}
      {[[22,8],[30,12],[45,7],[60,15],[70,9],[35,20],[55,22],[25,30]].map(([sx,sy],i) => (
        <rect key={i} x={sx} y={sy} width={i%3===0?2:1} height={i%3===0?2:1}
          fill="white" opacity={0.5 + (i * 0.06)} />
      ))}
      {/* Moon in left window */}
      <circle cx="65" cy="14" r="7" fill="#fffbe8" opacity="0.9" />
      <circle cx="68" cy="11" r="6" fill="url(#skyGrad)" opacity="0.7" />
      {/* Window frames */}
      <rect x="15" y="4" width="68" height="3" fill="#3d1f0a" />
      <rect x="15" y="46" width="68" height="3" fill="#3d1f0a" />
      <rect x="15" y="4" width="3" height="45" fill="#3d1f0a" />
      <rect x="80" y="4" width="3" height="45" fill="#3d1f0a" />
      {/* Window cross */}
      <rect x="15" y="24" width="68" height="2" fill="#3d1f0a" />
      <rect x="48" y="4" width="2" height="45" fill="#3d1f0a" />

      {/* ── Right window ── */}
      <rect x="237" y="4" width="68" height="45" fill="url(#skyGrad)" />
      {[[244,8],[255,14],[268,9],[278,20],[255,26],[270,32],[245,35]].map(([sx,sy],i) => (
        <rect key={i} x={sx} y={sy} width={i%3===0?2:1} height={i%3===0?2:1}
          fill="white" opacity={0.5 + (i * 0.07)} />
      ))}
      <rect x="237" y="4" width="68" height="3" fill="#3d1f0a" />
      <rect x="237" y="46" width="68" height="3" fill="#3d1f0a" />
      <rect x="237" y="4" width="3" height="45" fill="#3d1f0a" />
      <rect x="302" y="4" width="3" height="45" fill="#3d1f0a" />
      <rect x="237" y="24" width="68" height="2" fill="#3d1f0a" />
      <rect x="269" y="4" width="2" height="45" fill="#3d1f0a" />

      {/* ── Wall ── */}
      <rect x="0" y="53" width="320" height="62" fill="url(#woodPattern)" />

      {/* ── Bar sign / decoration between windows ── */}
      <rect x="95" y="8" width="140" height="32" fill="#1a0a02" opacity="0.7" />
      <rect x="96" y="9" width="138" height="30" fill="none" stroke="#d4a017" strokeWidth="1.5" />
      {/* "Bar Quest" text placeholder - rendered as simple pixel blocks */}
      <rect x="108" y="15" width="104" height="3" fill="#d4a017" opacity="0.6" />
      <rect x="116" y="21" width="88" height="2" fill="#d4a017" opacity="0.4" />
      <rect x="124" y="26" width="72" height="2" fill="#d4a017" opacity="0.3" />
      {/* Bar name decorative stars */}
      <polygon points="100,23 102,18 104,23 99,20 105,20" fill="#d4a017" opacity="0.8" />
      <polygon points="216,23 218,18 220,23 215,20 221,20" fill="#d4a017" opacity="0.8" />

      {/* ── Upper shelf board ── */}
      <rect x="0" y="61" width="320" height="5" fill="#5a3010" />
      <rect x="0" y="61" width="320" height="1" fill="#7a5020" />

      {/* ── Bottles on upper shelf ── */}
      {UPPER_BOTTLES.map((b, i) => (
        <BottleSVG key={i} {...b} y={61} />
      ))}

      {/* ── Lower shelf board ── */}
      <rect x="0" y="94" width="320" height="5" fill="#5a3010" />
      <rect x="0" y="94" width="320" height="1" fill="#7a5020" />

      {/* ── Bottles on lower shelf ── */}
      {LOWER_BOTTLES.map((b, i) => (
        <BottleSVG key={i} {...b} y={94} />
      ))}

      {/* ── Vintage clock on wall ── */}
      <circle cx="160" cy="76" r="10" fill="#2a1600" stroke="#d4a017" strokeWidth="1.5" />
      <circle cx="160" cy="76" r="8" fill="#f5e8c8" opacity="0.9" />
      {/* Clock hands */}
      <line x1="160" y1="76" x2="160" y2="70" stroke="#1a0a00" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="160" y1="76" x2="164" y2="77" stroke="#1a0a00" strokeWidth="1" strokeLinecap="round" />
      <circle cx="160" cy="76" r="1" fill="#1a0a00" />

      {/* ── Bar counter ── */}
      {/* Counter highlight top edge */}
      <rect x="0" y="115" width="320" height="3" fill="#7a4a20" />
      {/* Counter top surface */}
      <rect x="0" y="118" width="320" height="18" fill="url(#counterGloss)" />
      {/* Counter face */}
      <rect x="0" y="136" width="320" height="44" fill="#120a00" />
      {/* Decorative counter face panels */}
      {[20, 60, 100, 140, 180, 220, 260].map((px, i) => (
        <rect key={i} x={px} y="140" width="30" height="30" fill="none"
          stroke="#2a1800" strokeWidth="1" opacity="0.5" />
      ))}

      {/* ── Some glasses/items on counter ── */}
      {/* Stemware */}
      {[50, 80, 260, 285].map((gx, i) => (
        <g key={i}>
          <polygon points={`${gx},119 ${gx+10},119 ${gx+8},128 ${gx+2},128`} fill="#aaddff" opacity="0.4" />
          <rect x={gx + 4} y="128" width="2" height="4" fill="#aaddff" opacity="0.4" />
          <rect x={gx + 1} y="132" width="8" height="1" fill="#aaddff" opacity="0.4" />
        </g>
      ))}

      {/* Candle on counter */}
      <rect x="155" y="108" width="6" height="12" fill="#f5e0a0" />
      <rect x="157" y="106" width="2" height="3" fill="#e8a020" opacity="0.9" />
      <ellipse cx="158" cy="106" rx="3" ry="4" fill="#ffdd44" opacity="0.3" />
      <rect x="148" y="118" width="20" height="2" fill="#4a2a0a" />

      {/* Mat on counter */}
      <rect x="100" y="115" width="120" height="4" fill="#1a1a1a" opacity="0.6" />
      <rect x="102" y="116" width="116" height="2" fill="#333333" opacity="0.4" />

      {/* ── Ambient warm glow overlay ── */}
      <rect x="0" y="0" width="320" height="180" fill="url(#barGlow)" />

      {/* Subtle vignette */}
      <rect x="0" y="0" width="20" height="180" fill="black" opacity="0.2" />
      <rect x="300" y="0" width="20" height="180" fill="black" opacity="0.2" />
      <rect x="0" y="0" width="320" height="10" fill="black" opacity="0.15" />
    </svg>
  )
}
