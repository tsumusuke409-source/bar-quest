import { useState, useEffect, useCallback } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useTrack, audioEngine } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { MasterSprite } from '../pixel/MasterSprite'
import { PlayerSprite } from '../pixel/PlayerSprite'
import { ToolVisual } from '../pixel/ToolVisual'
import { STAGES_FLAT } from '../../data/stages'
import { DIALOGUES } from '../../data/dialogues'
import { QUIZZES } from '../../data/quizzes'
import { COCKTAILS } from '../../data/cocktails'
import { SERVICE_SCENARIOS } from '../../data/characters'
import type { Cocktail, ServiceScenario, LectureSlide } from '../../types'

type Phase = 'intro' | 'lecture' | 'practice' | 'result'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Lecture Phase ─────────────────────────────────────────────────────────────
function LecturePhase({
  slides, player, onComplete,
}: {
  slides: LectureSlide[]
  player: { gender: 'male' | 'female'; hairColor: 'brown' | 'black' | 'blond' | 'red' }
  onComplete: () => void
}) {
  const [idx, setIdx] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [chars, setChars] = useState(0)

  const slide = slides[idx]

  useEffect(() => {
    setRevealed(false)
    setChars(0)
  }, [idx])

  useEffect(() => {
    if (revealed) return
    const len = slide.text.length
    if (chars >= len) { setRevealed(true); return }
    const t = setTimeout(() => setChars(c => c + 1), 28)
    return () => clearTimeout(t)
  }, [chars, revealed, slide.text.length])

  const advance = useCallback(() => {
    if (!revealed) { setRevealed(true); setChars(slide.text.length); return }
    if (idx < slides.length - 1) { setIdx(i => i + 1) }
    else { onComplete() }
  }, [revealed, idx, slides.length, onComplete, slide.text.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') advance()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [advance])

  const displayText = revealed ? slide.text : slide.text.slice(0, chars)

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex',
      flexDirection: 'column', justifyContent: 'center', padding: '0 16px 8px' }}>

      {/* Tool / item illustration */}
      {slide.visual && (
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          marginBottom: 12,
          animation: 'fadeIn 0.3s ease',
        }}>
          <div style={{
            background: 'rgba(10,14,35,0.7)',
            border: '2px solid var(--border)',
            borderRadius: 4,
            padding: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ToolVisual visualKey={slide.visual} size={72} />
          </div>
        </div>
      )}

      {/* Speaker sprite + dialog */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 10 }}>
        <div style={{ flexShrink: 0 }}>
          {slide.speaker === 'master' ? (
            <MasterSprite expression={slide.expression ?? 'normal'} scale={4}
              animate />
          ) : (
            <PlayerSprite gender={player.gender} hairColor={player.hairColor} scale={4} />
          )}
        </div>
        <div className="dialog-box" style={{ flex: 1, position: 'relative', cursor: 'pointer' }}
          onClick={advance}>
          <span className="speaker-name">
            {slide.speaker === 'master' ? 'マスター' : 'あなた'}
          </span>
          <div>
            {slide.highlight
              ? displayText.split(slide.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="dialog-highlight">{slide.highlight}</span>
                    )}
                  </span>
                ))
              : displayText}
            {!revealed && (
              <span style={{ animation: 'cursor-blink 0.8s infinite',
                borderRight: '2px solid var(--cream)', marginLeft: 1 }} />
            )}
          </div>
          {revealed && idx < slides.length - 1 && (
            <div style={{ position: 'absolute', bottom: 8, right: 12,
              fontFamily: "'Press Start 2P', monospace", fontSize: 8,
              color: 'var(--gold)', animation: 'cursor-blink 0.8s infinite' }}>
              ▼
            </div>
          )}
        </div>
      </div>

      {/* Progress dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
        {slides.map((_, i) => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: '50%',
            background: i <= idx ? 'var(--gold)' : '#334',
            transition: 'background 0.2s',
          }} />
        ))}
      </div>

      {idx === slides.length - 1 && revealed && (
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <button className="btn-pixel gold" onClick={onComplete}>
            練習へ進む ▶
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Quiz Practice ─────────────────────────────────────────────────────────────
function QuizPractice({
  category, quizIds, onComplete,
}: {
  category: string
  quizIds?: string[]
  onComplete: (score: number) => void
}) {
  const pool = quizIds
    ? shuffle(QUIZZES.filter(q => quizIds.includes(q.id))).slice(0, 5)
    : category === 'mixed'
    ? shuffle(QUIZZES).slice(0, 5)
    : shuffle(QUIZZES.filter(q => q.category === category)).slice(0, 5)

  const [questions] = useState(pool)
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)

  const q = questions[qIdx]
  if (!q) return null

  const handleAnswer = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    const isCorrect = i === q.correct
    if (isCorrect) {
      setCorrect(c => c + 1)
      audioEngine.sfx('correct')
    } else {
      audioEngine.sfx('wrong')
    }
  }

  const next = () => {
    if (qIdx < questions.length - 1) {
      setQIdx(q => q + 1)
      setSelected(null)
    } else {
      onComplete(Math.round((correct / questions.length) * 100))
    }
  }

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      padding: 20, gap: 14, overflowY: 'auto',
    }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8,
          color: 'var(--gold)' }}>
          Q{qIdx + 1}/{questions.length}
        </div>
        <div style={{ flex: 1, height: 6, background: '#111', border: '1px solid #334' }}>
          <div style={{
            width: `${((qIdx) / questions.length) * 100}%`,
            height: '100%', background: '#44aaff', transition: 'width 0.3s',
          }} />
        </div>
      </div>

      {/* Question */}
      <div className="dialog-box" style={{ fontSize: 14 }}>
        {q.question}
      </div>

      {/* Options */}
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

      {/* Feedback */}
      {selected !== null && (
        <div style={{ animation: 'slideUp 0.3s ease' }}>
          <div style={{
            background: selected === q.correct ? '#0a3a0a' : '#3a0a0a',
            border: `2px solid ${selected === q.correct ? '#44cc44' : '#cc4444'}`,
            padding: '10px 14px',
            fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
            color: 'var(--cream)', lineHeight: 1.7,
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

// ─── Cocktail Practice ─────────────────────────────────────────────────────────
function CocktailPractice({
  cocktail, onComplete,
}: {
  cocktail: Cocktail
  onComplete: (score: number) => void
}) {
  const [shuffledSteps] = useState(() => shuffle(cocktail.steps.map((s, i) => ({ ...s, origIdx: i }))))
  const [done, setDone] = useState<number[]>([])
  const [mistakes, setMistakes] = useState(0)
  const [errorIdx, setErrorIdx] = useState<number | null>(null)

  const handleStep = (origIdx: number, shuffledIdx: number) => {
    const nextExpected = done.length
    if (origIdx === nextExpected) {
      setDone(d => [...d, origIdx])
      audioEngine.sfx('correct')
    } else {
      setMistakes(m => m + 1)
      setErrorIdx(shuffledIdx)
      audioEngine.sfx('wrong')
      setTimeout(() => setErrorIdx(null), 400)
    }
  }

  useEffect(() => {
    if (done.length === cocktail.steps.length) {
      const score = Math.max(0, 100 - mistakes * 20)
      setTimeout(() => onComplete(score), 600)
    }
  }, [done.length, cocktail.steps.length, mistakes, onComplete])

  return (
    <div style={{
      position: 'absolute', inset: 0, overflowY: 'auto',
      padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      {/* Cocktail info */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <div style={{
          width: 48, height: 64, borderRadius: 4,
          background: cocktail.color,
          border: '2px solid rgba(255,255,255,0.2)',
          flexShrink: 0,
          boxShadow: `0 0 12px ${cocktail.color}88`,
        }} />
        <div>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
            color: 'var(--gold)' }}>{cocktail.name}</div>
          <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
            color: '#8090b0', marginTop: 4 }}>{cocktail.nameEn}</div>
          <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
            color: 'var(--cream)', marginTop: 6 }}>{cocktail.description}</div>
        </div>
      </div>

      <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
        color: 'var(--cream)', background: '#111a3a', padding: '8px 12px' }}>
        正しい順番で手順をタップしてください
        {mistakes > 0 && (
          <span style={{ color: '#cc4444', marginLeft: 12 }}>ミス: {mistakes}回</span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {shuffledSteps.map((step, si) => {
          const isDone = done.includes(step.origIdx)
          const isError = errorIdx === si
          return (
            <button
              key={si}
              className={`cocktail-step ${isDone ? 'done' : ''} ${isError ? 'error' : ''}`}
              onClick={() => !isDone && handleStep(step.origIdx, si)}
              disabled={isDone}
            >
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8,
                color: isDone ? '#44cc44' : 'var(--gold)', minWidth: 20 }}>
                {isDone ? '✓' : `${si + 1}`}
              </span>
              {step.action}
            </button>
          )
        })}
      </div>

      <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
        color: '#8090b0', textAlign: 'center' }}>
        進捗: {done.length}/{cocktail.steps.length}
      </div>
    </div>
  )
}

// ─── Service Practice ──────────────────────────────────────────────────────────
function ServicePractice({
  scenario, onComplete,
}: {
  scenario: ServiceScenario
  onComplete: (score: number) => void
}) {
  const [lineIdx, setLineIdx] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [choiceMade, setChoiceMade] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const line = scenario.lines[lineIdx]
  if (!line) return null

  const handleChoice = (ci: number) => {
    if (choiceMade !== null) return
    const choice = line.choices![ci]
    setChoiceMade(ci)
    setTotalScore(s => s + Math.max(0, choice.score))
    setFeedback(choice.feedback)
    setShowFeedback(true)
    if (choice.score > 0) audioEngine.sfx('correct')
    else audioEngine.sfx('wrong')
  }

  const next = () => {
    if (lineIdx < scenario.lines.length - 1) {
      setLineIdx(i => i + 1)
      setChoiceMade(null)
      setFeedback(null)
      setShowFeedback(false)
    } else {
      const maxScore = scenario.lines.reduce((acc, l) => {
        if (!l.choices) return acc
        return acc + Math.max(...l.choices.map(c => Math.max(0, c.score)))
      }, 0)
      const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 100
      onComplete(pct)
    }
  }

  const choiceResponse = choiceMade !== null && line.choices
    ? line.choices[choiceMade].response : null

  return (
    <div style={{
      position: 'absolute', inset: 0, overflowY: 'auto',
      padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      {/* Situation bar */}
      <div style={{
        background: '#111a3a', border: '1px solid #334',
        padding: '8px 12px', fontFamily: "'DotGothic16', sans-serif",
        fontSize: 12, color: '#8090b0',
      }}>
        📍 {scenario.situation}
      </div>

      {/* Speaker label */}
      <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
        color: line.speaker === 'master' ? '#f5c842'
          : line.speaker === 'customer' ? '#80c0ff' : 'var(--cream)' }}>
        [{line.speaker === 'master' ? 'マスター' : line.speaker === 'customer' ? 'お客様' : 'あなた'}]
      </div>

      {/* Line text */}
      <div className="dialog-box" style={{ fontSize: 14 }}>
        {line.text}
      </div>

      {/* Choices or auto-advance */}
      {line.choices && choiceMade === null && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {line.choices.map((ch, i) => (
            <button key={i} className="service-choice" onClick={() => handleChoice(i)}>
              {ch.text}
            </button>
          ))}
        </div>
      )}

      {/* After choice: show response + feedback */}
      {choiceMade !== null && line.choices && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8,
          animation: 'slideUp 0.3s ease' }}>
          {choiceResponse && (
            <div style={{
              background: '#111a3a', border: '1px solid #334',
              padding: '8px 12px', fontFamily: "'DotGothic16', sans-serif",
              fontSize: 13, color: '#80c0ff',
            }}>
              [お客様] {choiceResponse}
            </div>
          )}
          {showFeedback && (
            <div style={{
              background: line.choices[choiceMade].score >= 1 ? '#0a3a0a' : '#3a0a0a',
              border: `2px solid ${line.choices[choiceMade].score >= 1 ? '#44cc44' : '#cc4444'}`,
              padding: '8px 12px', fontFamily: "'DotGothic16', sans-serif",
              fontSize: 12, color: 'var(--cream)',
            }}>
              <span style={{ color: '#f5c842' }}>マスター: </span>
              {feedback}
            </div>
          )}
          <button className="btn-pixel gold" onClick={next}>
            {lineIdx < scenario.lines.length - 1 ? '次へ ▶' : '結果へ ▶'}
          </button>
        </div>
      )}

      {/* No choices - advance button */}
      {!line.choices && (
        <button className="btn-pixel ghost small" style={{ alignSelf: 'flex-end' }} onClick={next}>
          次へ ▶
        </button>
      )}
    </div>
  )
}

// ─── Result Phase ──────────────────────────────────────────────────────────────
function ResultPhase({
  score, xpEarned, goldEarned, unlocks, onBack,
}: {
  score: number
  xpEarned: number
  goldEarned: number
  unlocks: string[]
  onBack: () => void
}) {
  useEffect(() => {
    if (score >= 60) audioEngine.sfx('fanfare')
    else audioEngine.sfx('fail')
  }, [score])

  const grade = score >= 90 ? 'S' : score >= 70 ? 'A' : score >= 50 ? 'B' : 'C'
  const gradeColor = grade === 'S' ? '#f5c842' : grade === 'A' ? '#44cc44'
    : grade === 'B' ? '#44aaff' : '#cc8844'

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: 24, gap: 20,
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 'clamp(40px, 10vw, 64px)',
        color: gradeColor,
        textShadow: `0 0 20px ${gradeColor}88`,
      }}>
        {grade}
      </div>

      <div style={{
        fontFamily: "'DotGothic16', sans-serif", fontSize: 16,
        color: 'var(--cream)',
      }}>
        スコア: {score}%
      </div>

      <div style={{
        background: 'rgba(10,14,35,0.9)',
        border: '2px solid var(--border)',
        padding: '16px 24px',
        display: 'flex', flexDirection: 'column', gap: 10,
        minWidth: 240,
      }}>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 15,
          color: '#f5c842', display: 'flex', justifyContent: 'space-between' }}>
          <span>獲得XP</span>
          <span>+{xpEarned}</span>
        </div>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 15,
          color: '#f5c842', display: 'flex', justifyContent: 'space-between' }}>
          <span>獲得ゴールド</span>
          <span>+{goldEarned}G</span>
        </div>
        {unlocks.length > 0 && (
          <div style={{
            borderTop: '1px solid #334', paddingTop: 8,
            fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
            color: '#80c0ff',
          }}>
            🔓 アンロック: {unlocks.length}件
          </div>
        )}
      </div>

      <button className="btn-pixel large gold" onClick={onBack}>
        マップへもどる
      </button>
    </div>
  )
}

// ─── StageScreen (root) ────────────────────────────────────────────────────────
export function StageScreen() {
  useTrack('game')
  const navigate = useGameStore(s => s.navigate)
  const screenParams = useGameStore(s => s.screenParams)
  const player = useGameStore(s => s.player)
  const completeStage = useGameStore(s => s.completeStage)
  const completedStages = useGameStore(s => s.completedStages)

  const stageId = screenParams?.stageId
  const stage = STAGES_FLAT.find(s => s.id === stageId)

  const [phase, setPhase] = useState<Phase>('intro')
  const [score, setScore] = useState(0)
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    if (phase !== 'intro') return
    if (countdown <= 0) { setPhase('lecture'); return }
    const t = setTimeout(() => setCountdown(c => c - 1), 900)
    return () => clearTimeout(t)
  }, [phase, countdown])

  if (!stage) {
    return (
      <div className="screen" style={{ display: 'flex', alignItems: 'center',
        justifyContent: 'center', color: 'var(--cream)' }}>
        <div>
          ステージが見つかりません
          <button className="btn-pixel" style={{ display: 'block', marginTop: 16 }}
            onClick={() => navigate('stageMap')}>もどる</button>
        </div>
      </div>
    )
  }

  const lectureData = DIALOGUES.find(d => d.key === stage.lectureKey)
  const slides = lectureData?.slides ?? []

  const alreadyDone = completedStages.includes(stage.id)

  const handlePracticeComplete = (practiceScore: number) => {
    setScore(practiceScore)
    const xpEarned = alreadyDone ? 0 : stage.xpReward
    const goldEarned = alreadyDone ? 0 : stage.goldReward
    if (!alreadyDone) {
      completeStage(stage.id, practiceScore, xpEarned, goldEarned, stage.unlocks)
      if (practiceScore >= 60) audioEngine.sfx('unlock')
    }
    setPhase('result')
  }

  const xpEarned = alreadyDone ? 0 : stage.xpReward
  const goldEarned = alreadyDone ? 0 : stage.goldReward

  // find chapter for background
  const chapterVariants: Record<number, 'night' | 'evening' | 'dawn'> = {
    1: 'night', 2: 'night', 3: 'evening', 4: 'evening', 5: 'dawn', 6: 'night',
  }
  const bgVariant = chapterVariants[stage.chapterId] ?? 'night'

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <BarBackground variant={bgVariant} />

      {/* Header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        background: 'rgba(10,14,35,0.9)', borderBottom: '2px solid var(--border)',
        padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <button className="btn-pixel ghost small"
          onClick={() => navigate('stageMap')} style={{ fontSize: 7 }}>
          ← MAP
        </button>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8,
          color: 'var(--gold)' }}>
          {stage.id}: {stage.title}
        </div>
        <div style={{ marginLeft: 'auto', fontFamily: "'DotGothic16', sans-serif",
          fontSize: 11, color: '#8090b0' }}>
          {phase === 'lecture' ? '講義' : phase === 'practice' ? '練習' : ''}
        </div>
      </div>

      {/* Content area */}
      <div style={{ position: 'absolute', top: 40, bottom: 0, left: 0, right: 0 }}>
        {/* Intro countdown */}
        {phase === 'intro' && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 20,
          }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
              color: 'var(--cream)' }}>
              {stage.subtitle}
            </div>
            <div style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(36px, 8vw, 56px)',
              color: 'var(--gold)',
              textShadow: '0 0 20px rgba(245,200,66,0.7)',
            }}>
              {countdown > 0 ? countdown : '!'}
            </div>
          </div>
        )}

        {/* Lecture */}
        {phase === 'lecture' && slides.length > 0 && (
          <LecturePhase
            slides={slides}
            player={{ gender: player.gender, hairColor: player.hairColor }}
            onComplete={() => setPhase('practice')}
          />
        )}
        {phase === 'lecture' && slides.length === 0 && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center' }}>
            <button className="btn-pixel gold" onClick={() => setPhase('practice')}>
              練習へ進む ▶
            </button>
          </div>
        )}

        {/* Practice */}
        {phase === 'practice' && (() => {
          if (stage.practiceType === 'quiz' || stage.practiceType === 'boss') {
            return (
              <QuizPractice
                category={stage.practiceRef === 'final_trial' ? 'mixed' : stage.practiceRef}
                quizIds={stage.quizIds}
                onComplete={handlePracticeComplete}
              />
            )
          }
          if (stage.practiceType === 'cocktail') {
            const cocktail = COCKTAILS.find(c => c.id === stage.practiceRef)
            if (!cocktail) return null
            return <CocktailPractice cocktail={cocktail} onComplete={handlePracticeComplete} />
          }
          if (stage.practiceType === 'service') {
            const scenario = SERVICE_SCENARIOS.find(s => s.id === stage.practiceRef)
            if (!scenario) return null
            return <ServicePractice scenario={scenario} onComplete={handlePracticeComplete} />
          }
          return null
        })()}

        {/* Result */}
        {phase === 'result' && (
          <ResultPhase
            score={score}
            xpEarned={xpEarned}
            goldEarned={goldEarned}
            unlocks={stage.unlocks}
            onBack={() => navigate('stageMap')}
          />
        )}
      </div>
    </div>
  )
}
