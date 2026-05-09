import { useState, useEffect, useCallback } from 'react'
import type { LectureSlide, SpeakerExpression } from '../../types'
import { MasterSprite } from '../pixel/MasterSprite'
import { PlayerSprite } from '../pixel/PlayerSprite'
import { useGameStore } from '../../store/gameStore'
import { PixelButton } from './PixelButton'

interface Props {
  slides: LectureSlide[]
  onComplete: () => void
}

const SPEAKER_LABELS: Record<string, string> = {
  master: 'マスター',
  player: 'あなた',
}

function Typewriter({ text, onDone }: { text: string; onDone: () => void }) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setShown('')
    setDone(false)
    let i = 0
    const timer = setInterval(() => {
      setShown(text.slice(0, ++i))
      if (i >= text.length) {
        clearInterval(timer)
        setDone(true)
        onDone()
      }
    }, 30)
    return () => clearInterval(timer)
  }, [text]) // eslint-disable-line react-hooks/exhaustive-deps

  const skip = () => {
    setShown(text)
    setDone(true)
    onDone()
  }

  return (
    <span onClick={done ? undefined : skip} style={{ cursor: done ? 'default' : 'pointer' }}>
      {shown}
      {!done && <span style={{ animation: 'cursor-blink 0.7s infinite', marginLeft: 2 }}>▌</span>}
    </span>
  )
}

export function DialogBox({ slides, onComplete }: Props) {
  const [idx, setIdx] = useState(0)
  const [textDone, setTextDone] = useState(false)
  const player = useGameStore((s) => s.player)

  const slide = slides[idx]

  const advance = useCallback(() => {
    if (!textDone) {
      setTextDone(true)
      return
    }
    if (idx + 1 >= slides.length) {
      onComplete()
    } else {
      setIdx((i) => i + 1)
      setTextDone(false)
    }
  }, [idx, slides.length, textDone, onComplete])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') advance()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [advance])

  if (!slide) return null

  const isMaster = slide.speaker === 'master'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: '12px 16px',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
        {slides.map((_, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: i === idx ? '#f5c842' : i < idx ? '#44cc44' : '#333',
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>

      {/* Speaker + sprite */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
        {isMaster ? (
          <MasterSprite expression={slide.expression as SpeakerExpression} scale={3} animate />
        ) : (
          <PlayerSprite
            gender={player.gender}
            hairColor={player.hairColor}
            scale={3}
            animate
          />
        )}

        {/* Dialog box */}
        <div className="dialog-box" style={{ flex: 1, minHeight: 80, animation: 'slideUp 0.2s' }}>
          <span className="speaker-name">{SPEAKER_LABELS[slide.speaker] ?? slide.speaker}</span>
          <div className="lecture-text">
            <Typewriter
              key={`${idx}-${slide.text}`}
              text={slide.text}
              onDone={() => setTextDone(true)}
            />
            {/* Highlight explanation below text if visual present */}
            {slide.visual && textDone && (
              <div style={{ marginTop: 6, fontSize: 12, color: '#aabbcc' }}>
                ▸ {slide.visual}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Highlighted term callout */}
      {slide.highlight && textDone && (
        <div
          style={{
            background: 'rgba(245,200,66,0.08)',
            border: '1px solid #d4a017',
            padding: '6px 12px',
            fontFamily: 'DotGothic16, sans-serif',
            fontSize: 13,
            color: '#f5c842',
            animation: 'slideUp 0.2s',
          }}
        >
          📌 キーワード：{slide.highlight}
        </div>
      )}

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
        <PixelButton onClick={advance} size="small">
          {idx + 1 >= slides.length ? '実践へ ▶' : '次へ ▶'}
        </PixelButton>
      </div>
    </div>
  )
}
