import { useGameStore } from '../../store/gameStore'
import { RANK_LABELS, RANK_THRESHOLDS } from '../../types'
import { ProgressBar } from './ProgressBar'

function getXpProgress(xp: number): { current: number; next: number } {
  for (let i = 0; i < RANK_THRESHOLDS.length - 1; i++) {
    const [, hi] = RANK_THRESHOLDS[i]
    const [, lo] = RANK_THRESHOLDS[i + 1]
    if (xp >= lo && xp < hi) {
      return { current: xp - lo, next: hi - lo }
    }
  }
  return { current: 1, next: 1 } // max rank
}

export function HUD() {
  const player = useGameStore((s) => s.player)
  const { current, next } = getXpProgress(player.xp)

  return (
    <div className="hud">
      <div className="hud-name">{player.name || 'Player'}</div>
      <div className="hud-rank">{RANK_LABELS[player.rank]}</div>
      <ProgressBar value={current / next} variant="xp" style={{ width: 120 }} />
      <div className="hud-gold">G {player.gold}</div>
    </div>
  )
}
