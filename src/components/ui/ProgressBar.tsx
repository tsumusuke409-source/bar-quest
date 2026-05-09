interface Props {
  value: number      // 0–1
  variant?: 'xp' | 'health' | 'score' | 'timer'
  label?: string
  showPercent?: boolean
  style?: React.CSSProperties
}

const COLORS: Record<string, string> = {
  xp: '#f5c842',
  health: '#44cc44',
  score: '#44aaff',
  timer: '#cc4444',
}

export function ProgressBar({ value, variant = 'xp', label, showPercent = false, style }: Props) {
  const pct = Math.max(0, Math.min(1, value)) * 100

  return (
    <div style={style}>
      {(label || showPercent) && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'DotGothic16, sans-serif',
            fontSize: 11,
            color: '#aaa',
            marginBottom: 3,
          }}
        >
          {label && <span>{label}</span>}
          {showPercent && <span>{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="prog-bar-wrap">
        <div
          className={`prog-bar-fill ${variant}`}
          style={{
            width: `${pct}%`,
            background: COLORS[variant] ?? COLORS.xp,
          }}
        />
      </div>
    </div>
  )
}
