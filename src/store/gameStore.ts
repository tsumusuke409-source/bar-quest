import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ScreenName, ScreenParams, PlayerState, PlayerGender, HairColor, PlayerRank } from '../types'
import { RANK_THRESHOLDS } from '../types'

function calcRank(xp: number): PlayerRank {
  for (const [rank, threshold] of RANK_THRESHOLDS) {
    if (xp >= threshold) return rank
  }
  return 'apprentice'
}

const DEFAULT_PLAYER: PlayerState = {
  name: '',
  gender: 'male',
  hairColor: 'brown',
  xp: 0,
  gold: 0,
  rank: 'apprentice',
}

interface GameStore {
  screen: ScreenName
  screenParams: ScreenParams | null
  navigate: (screen: ScreenName, params?: ScreenParams) => void

  player: PlayerState
  setPlayer: (updates: Partial<PlayerState>) => void
  initPlayer: (name: string, gender: PlayerGender, hairColor: HairColor) => void

  completedStages: string[]
  unlockedCocktails: string[]
  unlockedCharacters: string[]
  stageScores: Record<string, number>

  completeStage: (stageId: string, score: number, xp: number, gold: number, unlocks?: string[]) => void
  isStageCompleted: (stageId: string) => boolean
  isStageUnlocked: (stageId: string, prerequisite?: string) => boolean

  isFirstPlay: boolean
  setFirstPlay: (val: boolean) => void
  resetGame: () => void
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      screen: 'title',
      screenParams: null,
      navigate: (screen, params) => set({ screen, screenParams: params ?? null }),

      player: DEFAULT_PLAYER,
      setPlayer: (updates) => {
        const p = { ...get().player, ...updates }
        p.rank = calcRank(p.xp)
        set({ player: p })
      },
      initPlayer: (name, gender, hairColor) => {
        set({
          player: { ...DEFAULT_PLAYER, name, gender, hairColor, rank: 'apprentice' },
          completedStages: [],
          unlockedCocktails: [],
          unlockedCharacters: [],
          stageScores: {},
          isFirstPlay: false,
          screen: 'menu',
          screenParams: null,
        })
      },

      completedStages: [],
      unlockedCocktails: [],
      unlockedCharacters: [],
      stageScores: {},

      completeStage: (stageId, score, xp, gold, unlocks = []) => {
        const s = get()
        const newXp = s.player.xp + xp
        const newGold = s.player.gold + gold
        const newPlayer: PlayerState = { ...s.player, xp: newXp, gold: newGold, rank: calcRank(newXp) }
        const completed = s.completedStages.includes(stageId)
          ? s.completedStages
          : [...s.completedStages, stageId]
        const newCocktails = [...new Set([...s.unlockedCocktails, ...unlocks.filter((id) => !id.startsWith('char_'))])]
        const newChars = [...new Set([...s.unlockedCharacters, ...unlocks.filter((id) => id.startsWith('char_'))])]
        set({
          player: newPlayer,
          completedStages: completed,
          unlockedCocktails: newCocktails,
          unlockedCharacters: newChars,
          stageScores: { ...s.stageScores, [stageId]: Math.max(score, s.stageScores[stageId] ?? 0) },
        })
      },

      isStageCompleted: (stageId) => get().completedStages.includes(stageId),
      isStageUnlocked: (_stageId, prerequisite) => {
        if (!prerequisite) return true
        return get().completedStages.includes(prerequisite)
      },

      isFirstPlay: true,
      setFirstPlay: (val) => set({ isFirstPlay: val }),
      resetGame: () =>
        set({
          player: DEFAULT_PLAYER,
          completedStages: [],
          unlockedCocktails: [],
          unlockedCharacters: [],
          stageScores: {},
          isFirstPlay: true,
          screen: 'title',
          screenParams: null,
        }),
    }),
    {
      name: 'bar-quest-save',
      version: 1,
      partialize: (state) => ({
        player: state.player,
        completedStages: state.completedStages,
        unlockedCocktails: state.unlockedCocktails,
        unlockedCharacters: state.unlockedCharacters,
        stageScores: state.stageScores,
        isFirstPlay: state.isFirstPlay,
      }),
    }
  )
)
