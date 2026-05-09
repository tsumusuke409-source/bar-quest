import { useState } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useTrack, audioEngine } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { SERVICE_SCENARIOS, CHARACTERS } from '../../data/characters'
import type { ServiceScenario } from '../../types'

function ServiceRun({
  scenario, onBack,
}: {
  scenario: ServiceScenario
  onBack: () => void
}) {
  const [lineIdx, setLineIdx] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [choiceMade, setChoiceMade] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [maxScore] = useState(() =>
    scenario.lines.reduce((acc, l) => {
      if (!l.choices) return acc
      return acc + Math.max(...l.choices.map(c => Math.max(0, c.score)))
    }, 0)
  )

  const line = scenario.lines[lineIdx]

  const handleChoice = (ci: number) => {
    if (choiceMade !== null) return
    const choice = line.choices![ci]
    setChoiceMade(ci)
    setTotalScore(s => s + Math.max(0, choice.score))
    setFeedback(choice.feedback)
    if (choice.score > 0) audioEngine.sfx('correct')
    else audioEngine.sfx('wrong')
  }

  const next = () => {
    if (lineIdx < scenario.lines.length - 1) {
      setLineIdx(i => i + 1)
      setChoiceMade(null)
      setFeedback(null)
    } else {
      setDone(true)
    }
  }

  if (done) {
    const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 100
    const passed = totalScore >= scenario.passingScore
    return (
      <div style={{
        position: 'absolute', top: 40, bottom: 0, left: 0, right: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 20, padding: 24,
      }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 'clamp(28px, 6vw, 44px)',
          color: passed ? '#44cc44' : '#cc4444',
        }}>
          {passed ? 'PASS!' : 'TRY AGAIN'}
        </div>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 15,
          color: 'var(--cream)' }}>
          スコア: {totalScore} / {maxScore}点 ({pct}%)
        </div>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
          color: passed ? '#44cc44' : '#cc8844' }}>
          {passed
            ? '素晴らしい接客でした！お客様も大満足です。'
            : '練習が必要です。もう一度チャレンジしましょう。'}
        </div>
        <button className="btn-pixel gold" onClick={onBack}>シナリオ選択へ</button>
      </div>
    )
  }

  return (
    <div style={{
      position: 'absolute', top: 40, bottom: 0, left: 0, right: 0,
      overflowY: 'auto', padding: '12px 16px',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{
        background: '#111a3a', border: '1px solid #334',
        padding: '8px 12px', fontFamily: "'DotGothic16', sans-serif",
        fontSize: 12, color: '#8090b0',
      }}>
        📍 {scenario.situation}
      </div>

      <div style={{
        fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
        color: '#8090b0', textAlign: 'right',
      }}>
        {lineIdx + 1} / {scenario.lines.length}
      </div>

      <div style={{
        fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
        color: line.speaker === 'master' ? '#f5c842'
          : line.speaker === 'customer' ? '#80c0ff' : 'var(--cream)',
      }}>
        [{line.speaker === 'master' ? 'マスター' : line.speaker === 'customer' ? 'お客様' : 'あなた'}]
      </div>

      <div className="dialog-box" style={{ fontSize: 14 }}>{line.text}</div>

      {line.choices && choiceMade === null && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {line.choices.map((ch, i) => (
            <button key={i} className="service-choice" onClick={() => handleChoice(i)}>
              {ch.text}
            </button>
          ))}
        </div>
      )}

      {choiceMade !== null && line.choices && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8,
          animation: 'slideUp 0.3s ease' }}>
          <div style={{
            background: '#111a3a', border: '1px solid #334',
            padding: '8px 12px', fontFamily: "'DotGothic16', sans-serif",
            fontSize: 13, color: '#80c0ff',
          }}>
            [お客様] {line.choices[choiceMade].response}
          </div>
          <div style={{
            background: line.choices[choiceMade].score >= 1 ? '#0a3a0a' : '#3a0a0a',
            border: `2px solid ${line.choices[choiceMade].score >= 1 ? '#44cc44' : '#cc4444'}`,
            padding: '8px 12px', fontFamily: "'DotGothic16', sans-serif",
            fontSize: 12, color: 'var(--cream)',
          }}>
            <span style={{ color: '#f5c842' }}>マスター: </span>{feedback}
          </div>
          <button className="btn-pixel gold" onClick={next}>
            {lineIdx < scenario.lines.length - 1 ? '次へ ▶' : '結果へ ▶'}
          </button>
        </div>
      )}

      {!line.choices && (
        <button className="btn-pixel ghost small" style={{ alignSelf: 'flex-end' }}
          onClick={next}>
          次へ ▶
        </button>
      )}
    </div>
  )
}

export function ServiceModeScreen() {
  useTrack('game')
  const navigate = useGameStore(s => s.navigate)
  const unlockedChars = useGameStore(s => s.unlockedCharacters)
  const [selected, setSelected] = useState<ServiceScenario | null>(null)

  const isUnlocked = (s: ServiceScenario) => {
    const char = CHARACTERS.find(c => c.id === s.characterId)
    if (!char) return true
    return unlockedChars.includes(char.id)
  }

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <BarBackground variant="evening" />

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        background: 'rgba(10,14,35,0.9)', borderBottom: '2px solid var(--border)',
        padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <button className="btn-pixel ghost small"
          onClick={() => selected ? setSelected(null) : navigate('menu')}
          style={{ fontSize: 7 }}>←</button>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
          color: 'var(--gold)' }}>
          {selected ? selected.title : 'SERVICE MODE'}
        </div>
      </div>

      {!selected ? (
        <div style={{
          position: 'absolute', top: 40, bottom: 0, left: 0, right: 0,
          overflowY: 'auto', padding: '16px 20px',
        }}>
          <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
            color: '#8090b0', marginBottom: 16 }}>
            シナリオを選んでください
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {SERVICE_SCENARIOS.map(sc => {
              const unlocked = isUnlocked(sc)
              const char = CHARACTERS.find(c => c.id === sc.characterId)
              return (
                <button
                  key={sc.id}
                  onClick={() => unlocked && setSelected(sc)}
                  style={{
                    background: '#111a3a', border: '2px solid #334',
                    padding: '12px 16px', cursor: unlocked ? 'pointer' : 'not-allowed',
                    textAlign: 'left', opacity: unlocked ? 1 : 0.4,
                    transition: 'border-color 0.1s',
                  }}
                  onMouseEnter={e => unlocked && (e.currentTarget.style.borderColor = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#334')}
                >
                  <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 14,
                    color: 'var(--cream)', marginBottom: 4 }}>
                    {unlocked ? sc.title : '🔒 ' + sc.title}
                  </div>
                  <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
                    color: '#8090b0' }}>
                    {char?.name ?? ''} ｜ 合格スコア: {sc.passingScore}点以上
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      ) : (
        <ServiceRun scenario={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  )
}
