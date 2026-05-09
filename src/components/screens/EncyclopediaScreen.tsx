import { useState } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useTrack } from '../../hooks/useAudio'
import { BarBackground } from '../pixel/BarBackground'
import { COCKTAILS } from '../../data/cocktails'
import { CHARACTERS } from '../../data/characters'
import type { Cocktail, Character } from '../../types'

type Tab = 'cocktails' | 'characters'

function CocktailDetail({ c, onClose }: { c: Cocktail; onClose: () => void }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 100, padding: 16,
    }}>
      <div style={{
        background: '#0d1128', border: '3px solid var(--gold)',
        padding: '20px 24px', maxWidth: 440, width: '100%',
        maxHeight: '85vh', overflowY: 'auto',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14 }}>
          <div style={{
            width: 40, height: 56, borderRadius: 4, background: c.color,
            border: '2px solid rgba(255,255,255,0.15)',
            boxShadow: `0 0 12px ${c.color}88`, flexShrink: 0,
          }} />
          <div>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
              color: 'var(--gold)' }}>{c.name}</div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
              color: '#8090b0' }}>{c.nameEn}</div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: '#f5c842', marginTop: 4 }}>
              {'★'.repeat(c.difficulty)}{'☆'.repeat(3 - c.difficulty)} &nbsp; ABV ~{c.abv}%
            </div>
          </div>
        </div>

        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
          color: 'var(--cream)', lineHeight: 1.8, marginBottom: 12 }}>
          {c.description}
        </div>

        {/* Ingredients */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7,
            color: 'var(--gold)', marginBottom: 8 }}>材料</div>
          {c.ingredients.map((ing, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
              color: 'var(--cream)', padding: '4px 0',
              borderBottom: '1px solid #1a2347',
            }}>
              <span>{ing.item}</span>
              <span style={{ color: '#8090b0' }}>{ing.amount}</span>
            </div>
          ))}
        </div>

        {/* Taste & Technique */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
            color: '#80c0ff', marginBottom: 4 }}>
            技法: {c.technique.toUpperCase()} ｜ グラス: {c.glass}
          </div>
          <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
            color: '#c8a0d0' }}>
            味わい: {c.taste}
          </div>
        </div>

        {/* History */}
        <div style={{
          background: '#111a3a', border: '1px solid #334',
          padding: '10px 12px',
          fontFamily: "'DotGothic16', sans-serif", fontSize: 12,
          color: '#8090b0', lineHeight: 1.7,
        }}>
          {c.history}
        </div>

        <button className="btn-pixel ghost small" onClick={onClose}
          style={{ marginTop: 16, width: '100%' }}>
          閉じる
        </button>
      </div>
    </div>
  )
}

function CharacterDetail({ ch, onClose }: { ch: Character; onClose: () => void }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 100, padding: 16,
    }}>
      <div style={{
        background: '#0d1128', border: '3px solid var(--gold)',
        padding: '24px', maxWidth: 380, width: '100%',
      }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
          color: 'var(--gold)', marginBottom: 16 }}>{ch.name}</div>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 13,
          color: '#8090b0', marginBottom: 12 }}>
          タイプ: {ch.type}
        </div>
        <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 14,
          color: 'var(--cream)', lineHeight: 1.8 }}>
          {ch.description}
        </div>
        <button className="btn-pixel ghost small" onClick={onClose}
          style={{ marginTop: 20, width: '100%' }}>
          閉じる
        </button>
      </div>
    </div>
  )
}

export function EncyclopediaScreen() {
  useTrack('game')
  const navigate = useGameStore(s => s.navigate)
  const unlockedCocktails = useGameStore(s => s.unlockedCocktails)
  const unlockedCharacters = useGameStore(s => s.unlockedCharacters)

  const [tab, setTab] = useState<Tab>('cocktails')
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(null)
  const [selectedChar, setSelectedChar] = useState<Character | null>(null)

  const isCocktailUnlocked = (c: Cocktail) => unlockedCocktails.includes(c.id)
  const isCharUnlocked = (c: Character) => unlockedCharacters.includes(c.id)

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <BarBackground variant="night" />

      {/* Header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        background: 'rgba(10,14,35,0.9)', borderBottom: '2px solid var(--border)',
        padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <button className="btn-pixel ghost small" onClick={() => navigate('menu')}
          style={{ fontSize: 7 }}>←</button>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9,
          color: 'var(--gold)' }}>ENCYCLOPEDIA</div>

        {/* Tabs */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {(['cocktails', 'characters'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                fontFamily: "'Press Start 2P', monospace", fontSize: 7,
                padding: '5px 10px', border: 'none', cursor: 'pointer',
                background: tab === t ? 'var(--gold)' : '#1a2d6b',
                color: tab === t ? '#000' : 'var(--cream)',
              }}
            >
              {t === 'cocktails' ? 'カクテル' : 'キャラ'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{
        position: 'absolute', top: 40, bottom: 0, left: 0, right: 0,
        overflowY: 'auto',
      }}>
        {tab === 'cocktails' && (
          <div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: '#8090b0', padding: '10px 16px' }}>
              {unlockedCocktails.length}/{COCKTAILS.length}種アンロック
            </div>
            <div className="enc-grid">
              {COCKTAILS.map(c => {
                const unlocked = isCocktailUnlocked(c)
                return (
                  <div
                    key={c.id}
                    className={`enc-item ${unlocked ? '' : 'locked'}`}
                    onClick={() => unlocked && setSelectedCocktail(c)}
                  >
                    <div style={{
                      width: '100%', height: 48, borderRadius: 4,
                      background: c.color,
                      boxShadow: unlocked ? `0 0 8px ${c.color}66` : 'none',
                    }} />
                    <div className="enc-item-name">{unlocked ? c.name : '???'}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {tab === 'characters' && (
          <div>
            <div style={{ fontFamily: "'DotGothic16', sans-serif", fontSize: 11,
              color: '#8090b0', padding: '10px 16px' }}>
              {unlockedCharacters.length}/{CHARACTERS.length}人アンロック
            </div>
            <div className="enc-grid">
              {CHARACTERS.map(c => {
                const unlocked = isCharUnlocked(c)
                return (
                  <div
                    key={c.id}
                    className={`enc-item ${unlocked ? '' : 'locked'}`}
                    onClick={() => unlocked && setSelectedChar(c)}
                  >
                    <div style={{
                      width: '100%', height: 48,
                      background: unlocked ? '#1a2d6b' : '#111',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 24,
                    }}>
                      {unlocked ? '👤' : '❓'}
                    </div>
                    <div className="enc-item-name">{unlocked ? c.name : '???'}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {selectedCocktail && (
        <CocktailDetail c={selectedCocktail} onClose={() => setSelectedCocktail(null)} />
      )}
      {selectedChar && (
        <CharacterDetail ch={selectedChar} onClose={() => setSelectedChar(null)} />
      )}
    </div>
  )
}
