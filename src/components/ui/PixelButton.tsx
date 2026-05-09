import type { CSSProperties, ReactNode } from 'react'
import { audioEngine } from '../../hooks/useAudio'

type Variant = 'default' | 'gold' | 'danger' | 'ghost'
type Size = 'small' | 'medium' | 'large'

interface Props {
  children: ReactNode
  onClick?: () => void
  variant?: Variant
  size?: Size
  disabled?: boolean
  style?: CSSProperties
  className?: string
  fullWidth?: boolean
}

export function PixelButton({
  children,
  onClick,
  variant = 'default',
  size = 'medium',
  disabled = false,
  style,
  className = '',
  fullWidth = false,
}: Props) {
  const handleClick = () => {
    if (disabled) return
    audioEngine.sfx('click')
    onClick?.()
  }

  const cls = [
    'btn-pixel',
    variant === 'gold' ? 'gold' : '',
    variant === 'danger' ? 'danger' : '',
    variant === 'ghost' ? 'ghost' : '',
    size === 'small' ? 'small' : '',
    size === 'large' ? 'large' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={cls}
      onClick={handleClick}
      disabled={disabled}
      style={{ width: fullWidth ? '100%' : undefined, ...style }}
    >
      {children}
    </button>
  )
}
