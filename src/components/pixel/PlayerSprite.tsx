import { PixelCanvas } from './PixelCanvas'
import { PLAYER_MALE, PLAYER_FEMALE, HAIR_COLORS } from './sprites'
import type { PlayerGender, HairColor } from '../../types'

interface Props {
  gender?: PlayerGender
  hairColor?: HairColor
  scale?: number
  style?: React.CSSProperties
  className?: string
  animate?: boolean
}

export function PlayerSprite({ gender = 'male', hairColor = 'brown', scale = 4, style, className = '', animate = false }: Props) {
  const base = gender === 'female' ? PLAYER_FEMALE : PLAYER_MALE
  const palette = { ...base.palette, H: HAIR_COLORS[hairColor] ?? HAIR_COLORS.brown }

  return (
    <PixelCanvas
      data={base.data}
      palette={palette}
      scale={scale}
      className={className + (animate ? ' idle-bob' : '')}
      style={style}
    />
  )
}
