import { useGameStore } from '../../store/gameStore'
import { useTrack, audioEngine } from '../../hooks/useAudio'
import { MasterSprite } from '../pixel/MasterSprite'
import { PlayerSprite } from '../pixel/PlayerSprite'
import { RANK_LABELS } from '../../types'
import { useEffect } from 'react'

export function CertificateScreen() {
  useTrack('none')
  const navigate = useGameStore(s => s.navigate)
  const player = useGameStore(s => s.player)
  const completedStages = useGameStore(s => s.completedStages)

  useEffect(() => {
    audioEngine.sfx('fanfare')
  }, [])

  const today = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="screen" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#0a0a14',
    }}>
      {/* Stars background */}
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${(i * 43 + 7) % 98}%`,
          top: `${(i * 31 + 5) % 95}%`,
          width: i % 3 === 0 ? 4 : 2, height: i % 3 === 0 ? 4 : 2,
          background: '#ffe0a0',
          animation: `twinkle ${1.2 + (i % 6) * 0.3}s ${i * 0.15}s ease-in-out infinite`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Certificate card */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(160deg, #0e1535 0%, #1a2347 50%, #0e1535 100%)',
        border: '4px solid var(--gold)',
        boxShadow: '0 0 40px rgba(245,200,66,0.3), inset 0 0 60px rgba(245,200,66,0.04)',
        padding: 'clamp(16px, 4vw, 32px) clamp(18px, 5vw, 36px)',
        maxWidth: 520, width: '92%',
        maxHeight: '92svh', overflowY: 'auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        zIndex: 1,
      }}>
        {/* Corner decorations */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            position: 'absolute',
            top: i < 2 ? 8 : 'auto', bottom: i >= 2 ? 8 : 'auto',
            left: i % 2 === 0 ? 8 : 'auto', right: i % 2 === 1 ? 8 : 'auto',
            width: 20, height: 20,
            borderTop: i < 2 ? '2px solid var(--gold)' : 'none',
            borderBottom: i >= 2 ? '2px solid var(--gold)' : 'none',
            borderLeft: i % 2 === 0 ? '2px solid var(--gold)' : 'none',
            borderRight: i % 2 === 1 ? '2px solid var(--gold)' : 'none',
          }} />
        ))}

        {/* Title */}
        <div style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 10,
          color: '#8090b0', letterSpacing: 2,
        }}>
          BAR QUEST
        </div>

        <div style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 'clamp(12px, 2.5vw, 18px)',
          color: 'var(--gold)',
          textShadow: '0 0 16px rgba(245,200,66,0.6)',
          textAlign: 'center', lineHeight: 1.6,
          animation: 'gold-shimmer 2.5s ease-in-out infinite',
        }}>
          修了証明書
        </div>

        {/* Divider */}
        <div style={{
          width: '100%', height: 1,
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
        }} />

        {/* Player preview */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', gap: 20,
          marginBottom: 8,
        }}>
          <MasterSprite expression="happy" scale={4} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <PlayerSprite gender={player.gender} hairColor={player.hairColor} scale={4} />
            <div style={{
              fontFamily: "'Press Start 2P', monospace", fontSize: 8,
              color: 'var(--gold)', marginTop: 4,
            }}>
              {player.name}
            </div>
          </div>
        </div>

        {/* Certificate text */}
        <div style={{
          fontFamily: "'DotGothic16', sans-serif", fontSize: 15,
          color: 'var(--cream)', textAlign: 'center', lineHeight: 2.0,
        }}>
          上記の者は<br />
          バー「ムーンライト」にて<br />
          バーテンダー修行の全課程を修了し<br />
          <span style={{ color: 'var(--gold)', fontFamily: "'Press Start 2P', monospace",
            fontSize: 10 }}>
            {RANK_LABELS[player.rank]}
          </span>
          の称号を得たことを<br />
          ここに証明します
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 24, width: '100%', justifyContent: 'center',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 16,
              color: 'var(--gold)' }}>{player.xp}</div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: '#8090b0', marginTop: 4 }}>総XP</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 16,
              color: 'var(--gold)' }}>{completedStages.length}</div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: '#8090b0', marginTop: 4 }}>クリアステージ</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 16,
              color: 'var(--gold)' }}>{player.gold}</div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: '#8090b0', marginTop: 4 }}>獲得ゴールド</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: '100%', height: 1,
          background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
        }} />

        {/* Date and master signature */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end' }}>
          <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
            color: '#8090b0' }}>
            {today}
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
              color: 'var(--cream)' }}>バー「ムーンライト」</div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: '#8090b0' }}>マスター（師匠）</div>
          </div>
        </div>

        {/* Back button */}
        <button className="btn-pixel ghost small" onClick={() => navigate('menu')}
          style={{ marginTop: 8 }}>
          ← メニューへ
        </button>
      </div>
    </div>
  )
}
