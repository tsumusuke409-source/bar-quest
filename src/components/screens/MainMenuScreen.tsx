import { useGameStore } from '../../store/gameStore'
import { useTrack, audioEngine } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { MasterSprite } from '../pixel/MasterSprite'
import { PlayerSprite } from '../pixel/PlayerSprite'
import { RANK_LABELS } from '../../types'
import { useState } from 'react'

export function MainMenuScreen() {
  useTrack('game')
  const navigate = useGameStore(s => s.navigate)
  const player = useGameStore(s => s.player)
  const completedStages = useGameStore(s => s.completedStages)
  const [musicOn, setMusicOn] = useState(audioEngine.enabled)
  const isMobile = window.innerWidth < window.innerHeight

  const toggleMusic = () => {
    const v = !musicOn
    setMusicOn(v)
    audioEngine.setEnabled(v)
    if (v) audioEngine.play('game')
  }

  const totalStages = 29
  const progress = Math.round((completedStages.length / totalStages) * 100)

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <BarBackground variant="evening" />

      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        background: 'rgba(10,14,35,0.85)',
        borderBottom: '2px solid var(--border)',
        padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{ animation: 'idle-bob 2s ease-in-out infinite' }}>
          <PlayerSprite gender={player.gender} hairColor={player.hairColor} scale={3} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
            color: 'var(--gold)' }}>{player.name}</div>
          <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
            color: 'var(--cream)' }}>
            {RANK_LABELS[player.rank]} &nbsp;｜&nbsp;
            <span style={{ color: '#f5c842' }}>✦ {player.gold}G</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
            <span style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: '#8090b0' }}>PROGRESS</span>
            <div style={{ flex: 1, height: 6, background: '#111', border: '1px solid #334' }}>
              <div style={{ width: `${progress}%`, height: '100%',
                background: 'var(--gold)', transition: 'width 0.5s' }} />
            </div>
            <span style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: 'var(--cream)' }}>{progress}%</span>
          </div>
        </div>
        <button className="btn-pixel ghost small" onClick={toggleMusic}>
          {musicOn ? '♪' : '♪✕'}
        </button>
      </div>

      {/* Master speech bubble */}
      <div style={isMobile ? {
        position: 'absolute', top: '18%', left: '4%',
        display: 'flex', alignItems: 'flex-end', gap: 10, maxWidth: '88%',
      } : {
        position: 'absolute', bottom: '26%', left: '6%',
        display: 'flex', alignItems: 'flex-end', gap: 12,
      }}>
        <div style={{ animation: 'idle-bob 2.4s ease-in-out infinite', flexShrink: 0 }}>
          <MasterSprite expression="happy" scale={isMobile ? 3 : 4} />
        </div>
        <div className="dialog-box" style={{ maxWidth: isMobile ? 240 : 220, fontSize: 13 }}>
          <span className="speaker-name">マスター</span>
          {completedStages.length === 0
            ? 'まずはステージマップから基礎を学ぼう。一歩一歩確実に覚えていくんだ。'
            : `よくやってる。引き続き頑張れよ、${player.name}。`}
        </div>
      </div>

      {/* Main menu buttons */}
      <div style={isMobile ? {
        position: 'absolute', bottom: '5%', left: '4%', right: '4%',
        display: 'flex', flexDirection: 'column', gap: 10,
      } : {
        position: 'absolute', top: '50%', right: '6%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: 12,
        width: 'min(220px, 40%)',
      }}>
        <button className="btn-pixel large gold" onClick={() => navigate('stageMap')}
          style={{ width: '100%' }}>
          🗺 STAGE MAP
        </button>
        <button className="btn-pixel" onClick={() => navigate('quiz')}
          style={{ width: '100%' }}>
          📝 QUIZ
        </button>
        <button className="btn-pixel" onClick={() => navigate('service')}
          style={{ width: '100%' }}>
          🍸 SERVICE
        </button>
        <button className="btn-pixel" onClick={() => navigate('encyclopedia')}
          style={{ width: '100%' }}>
          📖 ENCYCLOPEDIA
        </button>
        {completedStages.length >= 29 && (
          <button className="btn-pixel gold" onClick={() => navigate('certificate')}
            style={{ width: '100%' }}>
            🏆 CERTIFICATE
          </button>
        )}
      </div>

      {/* XP display - only landscape */}
      {!isMobile && (
        <div style={{
          position: 'absolute', bottom: '6%', right: '6%',
          fontFamily: "'Press Start 2P', monospace", fontSize: 9,
          color: '#8090b0',
        }}>
          XP {player.xp}
        </div>
      )}
    </div>
  )
}
