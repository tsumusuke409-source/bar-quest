import { useState } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useTrack, audioEngine } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { QUIZZES } from '../../data/quizzes'
import type { QuizCategory } from '../../types'

const CATEGORIES: { key: QuizCategory; label: string; desc: string }[] = [
  { key: 'basics', label: 'バーテンダー基礎', desc: 'バーの基本知識' },
  { key: 'tools', label: 'ツール', desc: 'バーテンダーの道具' },
  { key: 'glasses', label: 'グラス', desc: 'グラスの種類と用途' },
  { key: 'spirits', label: 'スピリッツ', desc: '世界の蒸留酒' },
  { key: 'techniques', label: 'テクニック', desc: 'カクテル技法' },
  { key: 'cocktails', label: 'カクテル', desc: '定番カクテル知識' },
  { key: 'service', label: 'サービス', desc: '接客・マナー' },
  { key: 'mixed', label: 'ミックス', desc: '全ジャンルランダム' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function QuizRun({
  category, onBack,
}: {
  category: QuizCategory
  onBack: () => void
}) {
  const pool = category === 'mixed'
    ? shuffle(QUIZZES).slice(0, 10)
    : shuffle(QUIZZES.filter(q => q.category === category)).slice(0, 10)

  const [questions] = useState(pool)
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[qIdx]

  const handleAnswer = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    const isCorrect = i === q.correct
    if (isCorrect) { setCorrect(c => c + 1); audioEngine.sfx('correct') }
    else audioEngine.sfx('wrong')
  }

  const next = () => {
    if (qIdx < questions.length - 1) {
      setQIdx(i => i + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  if (done) {
    const pct = Math.round((correct / questions.length) * 100)
    const grade = pct >= 90 ? 'S' : pct >= 70 ? 'A' : pct >= 50 ? 'B' : 'C'
    const gradeColor = grade === 'S' ? '#f5c842' : grade === 'A' ? '#44cc44'
      : grade === 'B' ? '#44aaff' : '#cc8844'
    return (
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 20, padding: 24,
      }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace",
          fontSize: 'clamp(36px, 8vw, 56px)', color: gradeColor }}>
          {grade}
        </div>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 16,
          color: 'var(--cream)' }}>
          {correct}/{questions.length}問正解 ({pct}%)
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn-pixel gold" onClick={onBack}>カテゴリーへもどる</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      position: 'absolute', top: 40, bottom: 0, left: 0, right: 0,
      overflowY: 'auto', padding: '16px 20px',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8,
          color: 'var(--gold)' }}>
          Q{qIdx + 1}/{questions.length}
        </div>
        <div style={{ flex: 1, height: 6, background: '#111', border: '1px solid #334' }}>
          <div style={{
            width: `${(qIdx / questions.length) * 100}%`,
            height: '100%', background: '#44aaff', transition: 'width 0.3s',
          }} />
        </div>
      </div>

      <div className="dialog-box" style={{ fontSize: 14 }}>{q.question}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {q.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (selected !== null) {
            if (i === q.correct) cls += ' correct'
            else if (i === selected) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} onClick={() => handleAnswer(i)}
              disabled={selected !== null}>
              {String.fromCharCode(65 + i)}. {opt}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div style={{ animation: 'slideUp 0.3s ease' }}>
          <div style={{
            background: selected === q.correct ? '#0a3a0a' : '#3a0a0a',
            border: `2px solid ${selected === q.correct ? '#44cc44' : '#cc4444'}`,
            padding: '10px 14px',
            fontFamily: "'DotGothic16', sans-serif", fontSize: 13, color: 'var(--cream)',
            lineHeight: 1.7,
          }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8,
              color: selected === q.correct ? '#44cc44' : '#cc4444', marginBottom: 6 }}>
              {selected === q.correct ? '✓ CORRECT!' : '✗ WRONG'}
            </div>
            {q.explanation}
          </div>
          <button className="btn-pixel gold" style={{ marginTop: 12, width: '100%' }}
            onClick={next}>
            {qIdx < questions.length - 1 ? '次の問題 ▶' : '結果へ ▶'}
          </button>
        </div>
      )}
    </div>
  )
}

export function QuizModeScreen() {
  useTrack('quiz')
  const navigate = useGameStore(s => s.navigate)
  const [selectedCat, setSelectedCat] = useState<QuizCategory | null>(null)

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <BarBackground variant="night" />

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        background: 'rgba(10,14,35,0.9)', borderBottom: '2px solid var(--border)',
        padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <button className="btn-pixel ghost small"
          onClick={() => selectedCat ? setSelectedCat(null) : navigate('menu')}
          style={{ fontSize: 7 }}>
          ←
        </button>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
          color: 'var(--gold)' }}>
          {selectedCat
            ? CATEGORIES.find(c => c.key === selectedCat)?.label ?? 'QUIZ'
            : 'QUIZ MODE'}
        </div>
      </div>

      {!selectedCat ? (
        <div style={{
          position: 'absolute', top: 40, bottom: 0, left: 0, right: 0,
          overflowY: 'auto', padding: '16px 20px',
        }}>
          <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
            color: '#8090b0', marginBottom: 16 }}>
            カテゴリーを選んでください
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 12,
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelectedCat(cat.key)}
                style={{
                  background: '#111a3a', border: '2px solid #334',
                  padding: '14px 16px', cursor: 'pointer',
                  textAlign: 'left', transition: 'border-color 0.1s',
                  fontFamily: "'DotGothic16', sans-serif",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#334')}
              >
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8,
                  color: 'var(--gold)', marginBottom: 8 }}>
                  {cat.label}
                </div>
                <div style={{ fontSize: 12, color: 'var(--cream)' }}>
                  {cat.desc}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <QuizRun category={selectedCat} onBack={() => setSelectedCat(null)} />
      )}
    </div>
  )
}
