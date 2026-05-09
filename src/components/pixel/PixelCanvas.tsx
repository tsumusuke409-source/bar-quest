import type { CSSProperties } from 'react'

interface PixelCanvasProps {
  data: string[]
  palette: Record<string, string>
  scale?: number
  className?: string
  style?: CSSProperties
}

export function PixelCanvas({ data, palette, scale = 4, className = '', style }: PixelCanvasProps) {
  const h = data.length
  const w = Math.max(...data.map((r) => r.length))

  return (
    <svg
      width={w * scale}
      height={h * scale}
      viewBox={`0 0 ${w * scale} ${h * scale}`}
      className={`pixel-art ${className}`}
      style={style}
      aria-hidden="true"
    >
      {data.flatMap((row, y) =>
        [...row].map((ch, x) => {
          const fill = palette[ch]
          if (!fill || ch === '.') return null
          return (
            <rect
              key={`${x}-${y}`}
              x={x * scale}
              y={y * scale}
              width={scale}
              height={scale}
              fill={fill}
            />
          )
        })
      )}
    </svg>
  )
}
