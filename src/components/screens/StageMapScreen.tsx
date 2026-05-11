import { useState } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useTrack } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { CHAPTERS } from '../../data/stages'
import type { Stage } from '../../types'

const EX_UNLOCK_STAGE = 'F-1' // EX chapter requires final stage complete

export function StageMapScreen() {
  useTrack('game')
  const navigate = useGameStore(s => s.navigate)
  const completedStages = useGameStore(s => s.completedStages)
  const isStageUnlocked = useGameStore(s => s.isStageUnlocked)
  const exUnlocked = completedStages.includes(EX_UNLOCK_STAGE)

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
            const isEX = ch.isExtra
            const locked = isEX && !exUnlocked
            const tabLabel = ch.label ?? `CH${ch.id}`
            return (
              <button
                key={ch.id}
                onClick={() => !locked && setActiveChapter(ch.id)}
                style={{
                  fontFamily: "'Press Start 2P', monospace", fontSize: 7,
                  padding: '6px 10px',
                  border: isEX ? `1px solid ${locked ? '#222' : '#6a4a00'}` : 'none',
                  cursor: locked ? 'not-allowed' : 'pointer',
                  background: locked ? '#0a0a14'
                    : active ? (isEX ? '#c07800' : 'var(--gold)')
                    : done ? (isEX ? '#2a1800' : '#1a4a1a')
                    : (isEX ? '#1a0f00' : '#111a3a'),
                  color: locked ? '#33334a'
                    : active ? '#000'
                    : done ? (isEX ? '#d4a017' : '#44cc44')
                    : (isEX ? '#c07800' : 'var(--cream)'),
                  transition: 'background 0.15s',
                  opacity: locked ? 0.6 : 1,
                }}
                title={locked ? 'メインストーリーをクリアするとアンロックされます' : undefined}
              >
                {locked ? '🔒' : tabLabel}
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
          color: chapter.isExtra ? '#d4a017' : 'var(--gold)' }}>
          {chapter.isExtra ? `✦ ${chapter.title} ✦` : `CHAPTER ${chapter.id}: ${chapter.title}`}
        </div>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
          color: chapter.isExtra ? '#c07800' : 'var(--cream)', marginTop: 4 }}>
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
          background: chapter.isExtra
            ? 'radial-gradient(ellipse at 50% 50%, rgba(180,100,0,0.08) 0%, rgba(20,10,0,0.3) 100%)'
            : 'radial-gradient(ellipse at 50% 50%, rgba(245,200,66,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* EX chapter: amber mist overlay */}
        {chapter.isExtra && (
          <>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(40,20,0,0.6) 0%, transparent 40%, rgba(40,20,0,0.4) 100%)',
              pointerEvents: 'none',
            }} />
            {[...Array(6)].map((_, i) => (
              <div key={`mist-${i}`} style={{
                position: 'absolute',
                left: `${(i * 18 + 5) % 90}%`,
                top: `${(i * 23 + 10) % 70}%`,
                width: `${80 + i * 30}px`,
                height: `${20 + i * 8}px`,
                background: 'rgba(180,130,40,0.06)',
                borderRadius: '50%',
                filter: 'blur(12px)',
                animation: `twinkle ${4 + i * 0.8}s ${i * 0.5}s ease-in-out infinite`,
                pointerEvents: 'none',
              }} />
            ))}
          </>
        )}
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
