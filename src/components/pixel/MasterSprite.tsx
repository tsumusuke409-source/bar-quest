import { PixelCanvas } from './PixelCanvas'
import { MASTER } from './sprites'

type Expression = 'normal' | 'happy' | 'strict' | 'surprised' | 'thinking' | 'sad'

const EXPRESSIONS: Record<Expression, string[]> = {
  normal: MASTER.data,
  happy: (() => {
    const d = [...MASTER.data]
    // Wider eye row = happy squinting
    d[5] = '..WSSESSESSSSW..'
    return d
  })(),
  strict: (() => {
    const d = [...MASTER.data]
    d[5] = '..WSSESSESSSSW..'
    return d
  })(),
  surprised: (() => {
    const d = [...MASTER.data]
    d[5] = '..WSSESSESSSSW..'
    d[6] = '..WSSSSSSSSSSW..'
    return d
  })(),
  thinking: MASTER.data,
  sad: MASTER.data,
}

interface Props {
  expression?: Expression
  scale?: number
  style?: React.CSSProperties
  className?: string
  animate?: boolean
}

export function MasterSprite({ expression = 'normal', scale = 4, style, className = '', animate = false }: Props) {
  const data = EXPRESSIONS[expression] ?? MASTER.data
  return (
    <PixelCanvas
      data={data}
      palette={MASTER.palette}
      scale={scale}
      className={className + (animate ? ' idle-bob' : '')}
      style={style}
    />
  )
}
