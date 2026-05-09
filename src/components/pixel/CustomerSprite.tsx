import { PixelCanvas } from './PixelCanvas'
import { CUST_SALARYMAN, CUST_COUPLE, CUST_TOURIST, CUST_DRUNK, CUST_VIP } from './sprites'

type SpriteKey = 'salaryman' | 'couple' | 'tourist' | 'drunk' | 'vip' | 'master'

const SPRITE_MAP: Record<SpriteKey, { palette: Record<string, string>; data: string[] }> = {
  salaryman: CUST_SALARYMAN,
  couple: CUST_COUPLE,
  tourist: CUST_TOURIST,
  drunk: CUST_DRUNK,
  vip: CUST_VIP,
  master: CUST_SALARYMAN, // fallback
}

interface Props {
  spriteKey: string
  scale?: number
  style?: React.CSSProperties
  className?: string
  animate?: boolean
}

export function CustomerSprite({ spriteKey, scale = 4, style, className = '', animate = false }: Props) {
  const sprite = SPRITE_MAP[spriteKey as SpriteKey] ?? CUST_SALARYMAN
  return (
    <PixelCanvas
      data={sprite.data}
      palette={sprite.palette}
      scale={scale}
      className={className + (animate ? ' idle-bob' : '')}
      style={style}
    />
  )
}
