import { useState } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useSaveData } from '../../hooks/useSaveData'
import { useTrack } from '../../hooks/useAudio'
import { audioEngine } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { MasterSprite } from '../pixel/MasterSprite'

export function TitleScreen() {
  useTrack('title')
  const navigate = useGameStore(s => s.navigate)
  const { hasSave, deleteSave } = useSaveData()
  const [showConfirm, setShowConfirm] = useState(false)
  const [musicOn, setMusicOn] = useState(audioEngine.enabled)

  const handleNewGame = () => {
    if (hasSave) { setShowConfirm(true); return }
    navigate('charSelect')
  }
  const confirmNew = () => { deleteSave(); setShowConfirm(false); navigate('charSelect') }
  const toggleMusic = () => {
    const v = !musicOn
    setMusicOn(v)
    audioEngine.setEnabled(v)
    if (v) audioEngine.play('title')
  }

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <BarBackground variant="night" />

      {/* Stars */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(18)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${(i * 37 + 5) % 95}%`,
            top: `${(i * 23 + 3) % 30}%`,
            width: 3, height: 3,
            background: '#ffe0a0',
            animation: `twinkle ${1.4 + (i % 5) * 0.4}s ${i * 0.2}s ease-in-out infinite`,
          }} />
        ))}
      </div>

      {/* Master sprite */}
      <div style={{
        position: 'absolute', bottom: '28%', left: '8%',
        animation: 'idle-bob 2.2s ease-in-out infinite',
      }}>
        <MasterSprite expression="happy" scale={5} />
      </div>

      {/* Title block */}
      <div style={{
        position: 'absolute', top: '12%', left: 0, right: 0,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 'clamp(18px, 4vw, 32px)',
          color: '#f5c842',
          textShadow: '0 0 20px rgba(245,200,66,0.7), 4px 4px 0 #3d2a00',
          animation: 'gold-shimmer 2.5s ease-in-out infinite',
          letterSpacing: 2,
        }}>
          BAR QUEST
        </div>
        <div style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 'clamp(8px, 1.5vw, 12px)',
          color: '#c8a0d0',
          marginTop: 10,
          letterSpacing: 1,
          textShadow: '2px 2px 0 #200030',
        }}>
          ─ SPIRITS OF THE NIGHT ─
        </div>
      </div>

      {/* Buttons */}
      <div style={{
        position: 'absolute', bottom: '14%', left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      }}>
        {hasSave ? (
          <>
            <button className="btn-pixel large gold" onClick={() => navigate('menu')}>
              ▶ CONTINUE
            </button>
            <button className="btn-pixel" onClick={handleNewGame}>
              + NEW GAME
            </button>
          </>
        ) : (
          <button className="btn-pixel large gold" onClick={handleNewGame}
            style={{ animation: 'gold-shimmer 2s ease-in-out infinite' }}>
            ▶ START GAME
          </button>
        )}
        <button className="btn-pixel ghost small" onClick={toggleMusic}>
          {musicOn ? '♪ MUSIC ON' : '♪ MUSIC OFF'}
        </button>
      </div>

      {/* Age disclaimer */}
      <div style={{
        position: 'absolute', bottom: '4%', left: 0, right: 0,
        textAlign: 'center', fontFamily: "'DotGothic16', sans-serif",
        fontSize: 11, color: '#7080a0',
      }}>
        このゲームは20歳以上の方を対象としたお酒の学習ゲームです。未成年の飲酒は法律で禁止されています。
      </div>

      {/* Confirm new game overlay */}
      {showConfirm && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 50,
        }}>
          <div className="dialog-box" style={{ maxWidth: 360, textAlign: 'center' }}>
            <div style={{ marginBottom: 16, fontSize: 14 }}>
              既存のセーブデータが見つかりました。<br />
              新しいゲームを始めるとデータが消えます。
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn-pixel danger small" onClick={confirmNew}>はじめから</button>
              <button className="btn-pixel ghost small" onClick={() => setShowConfirm(false)}>もどる</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
