import { useState } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useTrack } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { CHAPTERS } from '../../data/stages'
import type { Stage } from '../../types'

export function StageMapScreen() {
  useTrack('game')
  const navigate = useGameStore(s => s.navigate)
  const completedStages = useGameStore(s => s.completedStages)
  const isStageUnlocked = useGameStore(s => s.isStageUnlocked)

  // find which chapter to start on (first chapter with incomplete stages)
  const defaultChapter = () => {
    for (const ch of CHAPTERS) {
      if (ch.stages.some(st => !completedStages.includes(st.id))) return ch.id
    }
    return CHAPTERS.length
  }
  const [activeChapter, setActiveChapter] = useState(defaultChapter())

  const chapter = CHAPTERS.find(c => c.id === activeChapter)!
  const stages = chapter.stages

  const getNodeState = (st: Stage) => {
    if (completedStages.includes(st.id)) return 'completed'
    if (isStageUnlocked(st.id, st.prerequisite)) return 'current'
    return 'locked'
  }

  const handleNodeClick = (st: Stage) => {
    if (getNodeState(st) === 'locked') return
    navigate('stage', { stageId: st.id })
  }

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <BarBackground variant={chapter.backgroundVariant} />

      {/* Chapter tabs */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        background: 'rgba(10,14,35,0.9)',
        borderBottom: '2px solid var(--border)',
        display: 'flex', alignItems: 'stretch',
        padding: '0 8px',
      }}>
        <button className="btn-pixel ghost small" onClick={() => navigate('menu')}
          style={{ marginRight: 8, fontSize: 8 }}>
          ← MENU
        </button>
        <div style={{ display: 'flex', gap: 4, padding: '6px 0' }}>
          {CHAPTERS.map(ch => {
            const done = ch.stages.every(s => completedStages.includes(s.id))
            const active = ch.id === activeChapter
            return (
              <button
                key={ch.id}
                onClick={() => setActiveChapter(ch.id)}
                style={{
                  fontFamily: "'Press Start 2P', monospace", fontSize: 7,
                  padding: '6px 10px', border: 'none', cursor: 'pointer',
                  background: active ? 'var(--gold)' : done ? '#1a4a1a' : '#111a3a',
                  color: active ? '#000' : done ? '#44cc44' : 'var(--cream)',
                  transition: 'background 0.15s',
                }}
              >
                CH{ch.id}
              </button>
            )
          })}
        </div>
      </div>

      {/* Chapter title */}
      <div style={{
        position: 'absolute', top: 44, left: 0, right: 0,
        textAlign: 'center', padding: '8px 0',
      }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
          color: 'var(--gold)' }}>
          CHAPTER {chapter.id}: {chapter.title}
        </div>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
          color: 'var(--cream)', marginTop: 4 }}>
          {chapter.subtitle}
        </div>
      </div>

      {/* Map area */}
      <div style={{
        position: 'absolute', top: 90, bottom: 50, left: 0, right: 0,
        overflow: 'hidden',
      }}>
        {/* Decorative background stars */}
        {[...Array(24)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${(i * 41 + 7) % 97}%`,
            top: `${(i * 29 + 11) % 90}%`,
            width: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
            height: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
            background: i % 5 === 0 ? '#f5c842' : i % 3 === 0 ? '#aaccff' : '#ffe0a0',
            opacity: 0.3 + (i % 5) * 0.1,
            animation: `twinkle ${1.5 + (i % 7) * 0.3}s ${i * 0.13}s ease-in-out infinite`,
            pointerEvents: 'none',
          }} />
        ))}
        {/* Subtle chapter background glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(245,200,66,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          {/* Connection lines */}
          {stages.map((st) => {
            if (!st.prerequisite) return null
            const prev = stages.find(s => s.id === st.prerequisite)
            if (!prev) return null
            const done = completedStages.includes(prev.id)
            return (
              <line
                key={`line-${st.id}`}
                x1={prev.mapPos.x} y1={prev.mapPos.y}
                x2={st.mapPos.x} y2={st.mapPos.y}
                stroke={done ? '#44cc44' : '#2a3060'}
                strokeWidth={0.8}
                strokeDasharray={done ? 'none' : '3,2'}
              />
            )
          })}
        </svg>

        {/* Stage nodes */}
        {stages.map(st => {
          const state = getNodeState(st)
          return (
            <button
              key={st.id}
              onClick={() => handleNodeClick(st)}
              className={`stage-node ${state} ${st.isSummary ? 'summary' : ''}`}
              style={{ left: `${st.mapPos.x}%`, top: `${st.mapPos.y}%` }}
              title={state === 'locked' ? '前のステージをクリアしてください' : st.title}
            >
              <div style={{ textAlign: 'center', lineHeight: 1.3 }}>
                {state === 'locked' ? '🔒' : state === 'completed' ? '✓' : st.id}
              </div>
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div style={{
        position: 'absolute', bottom: 8, left: 12,
        display: 'flex', gap: 14,
        fontFamily: "'DotGothic16', sans-serif", fontSize: 10, color: '#8090b0',
      }}>
        <span style={{ color: '#44cc44' }}>■ クリア済</span>
        <span style={{ color: 'var(--gold)' }}>■ 挑戦可能</span>
        <span style={{ color: '#333' }}>■ ロック中</span>
      </div>
    </div>
  )
}
