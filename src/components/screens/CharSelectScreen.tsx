import { useState } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useTrack } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { PlayerSprite } from '../pixel/PlayerSprite'
import type { PlayerGender, HairColor } from '../../types'

const HAIR_OPTIONS: { key: HairColor; label: string; color: string }[] = [
  { key: 'brown', label: 'ブラウン', color: '#6b3a10' },
  { key: 'black', label: 'ブラック', color: '#111111' },
  { key: 'blond', label: 'ブロンド', color: '#d4a850' },
  { key: 'red', label: 'レッド', color: '#aa3300' },
]

export function CharSelectScreen() {
  useTrack('title')
  const initPlayer = useGameStore(s => s.initPlayer)
  const [name, setName] = useState('')
  const [gender, setGender] = useState<PlayerGender>('male')
  const [hair, setHair] = useState<HairColor>('brown')
  const [error, setError] = useState('')

  const handleStart = () => {
    const trimmed = name.trim()
    if (!trimmed) { setError('名前を入力してください'); return }
    if (trimmed.length > 12) { setError('名前は12文字以内にしてください'); return }
    initPlayer(trimmed, gender, hair)
  }

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <BarBackground variant="evening" />

      <div style={{
        position: 'absolute', inset: 0,
        overflowY: 'auto',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '12px 0',
      }}>
        <div style={{
          background: 'rgba(10,14,35,0.92)',
          border: '3px solid var(--gold)',
          padding: '20px 24px',
          width: 'min(480px, 92%)',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          {/* Title */}
          <div style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 10, color: 'var(--gold)', textAlign: 'center',
          }}>
            キャラクター作成
          </div>

          {/* Preview */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ animation: 'idle-bob 2s ease-in-out infinite' }}>
              <PlayerSprite gender={gender} hairColor={hair} scale={4} />
            </div>
          </div>

          {/* Name */}
          <div>
            <label style={{
              fontFamily: "'DotGothic16', sans-serif",
              fontSize: 13, color: 'var(--cream)', display: 'block', marginBottom: 6,
            }}>
              バーテンダー名
            </label>
            <input
              value={name}
              onChange={e => { setName(e.target.value); setError('') }}
              maxLength={12}
              placeholder="名前を入力"
              style={{
                width: '100%', background: '#111a3a',
                border: '2px solid var(--border)', color: 'var(--cream)',
                fontFamily: "'DotGothic16', sans-serif", fontSize: 16,
                padding: '10px 12px', outline: 'none',
              }}
              onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />
            {error && (
              <div style={{ fontSize: 11, color: 'var(--error)', marginTop: 4,
                fontFamily: "'DotGothic16', sans-serif" }}>
                {error}
              </div>
            )}
          </div>

          {/* Gender */}
          <div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
              color: 'var(--cream)', marginBottom: 8 }}>性別</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {(['male', 'female'] as PlayerGender[]).map(g => (
                <button
                  key={g}
                  className={`btn-pixel small ${gender === g ? 'gold' : 'ghost'}`}
                  onClick={() => setGender(g)}
                  style={{ flex: 1 }}
                >
                  {g === 'male' ? '♂ 男性' : '♀ 女性'}
                </button>
              ))}
            </div>
          </div>

          {/* Hair color */}
          <div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
              color: 'var(--cream)', marginBottom: 8 }}>髪の色</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {HAIR_OPTIONS.map(h => (
                <button
                  key={h.key}
                  onClick={() => setHair(h.key)}
                  title={h.label}
                  style={{
                    flex: 1, height: 36, background: h.color, border: 'none',
                    cursor: 'pointer',
                    outline: hair === h.key ? '3px solid var(--gold)' : '2px solid #334',
                    outlineOffset: hair === h.key ? 2 : 0,
                    transition: 'outline 0.1s',
                  }}
                />
              ))}
            </div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: 'var(--gold)', marginTop: 6, textAlign: 'center' }}>
              {HAIR_OPTIONS.find(h => h.key === hair)?.label}
            </div>
          </div>

          {/* Start */}
          <button className="btn-pixel large gold" onClick={handleStart}
            style={{ marginTop: 4 }}>
            ▶ はじめる
          </button>
        </div>
      </div>
    </div>
  )
}
