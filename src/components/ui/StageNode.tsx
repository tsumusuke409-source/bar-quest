import type { Stage } from '../../types'

interface Props {
  stage: Stage
  isCompleted: boolean
  isUnlocked: boolean
  isCurrent: boolean
  score?: number
  onClick: () => void
}

export function StageNode({ stage, isCompleted, isUnlocked, isCurrent, score, onClick }: Props) {
  const cls = [
    'stage-node',
    stage.isSummary ? 'summary' : '',
    isCompleted ? 'completed' : '',
    !isUnlocked ? 'locked' : '',
    isCurrent ? 'current' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={cls}
      style={{ left: `${stage.mapPos.x}%`, top: `${stage.mapPos.y}%` }}
      onClick={isUnlocked ? onClick : undefined}
      title={isUnlocked ? stage.title : 'ロック中'}
    >
      {!isUnlocked ? (
        <span style={{ fontSize: 16 }}>🔒</span>
      ) : isCompleted ? (
        <span style={{ fontSize: 12, color: '#44cc44' }}>★</span>
      ) : stage.isSummary ? (
        <span style={{ fontSize: 9 }}>BOSS</span>
      ) : (
        <span>{stage.id}</span>
      )}
      {isCompleted && score !== undefined && (
        <div
          style={{
            position: 'absolute',
            bottom: -16,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 7,
            fontFamily: 'Press Start 2P, monospace',
            color: '#44cc44',
            whiteSpace: 'nowrap',
          }}
        >
          {score}%
        </div>
      )}
    </div>
  )
}
