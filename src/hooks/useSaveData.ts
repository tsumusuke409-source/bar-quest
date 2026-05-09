import { useGameStore } from '../store/gameStore'

export function useSaveData() {
  const store = useGameStore()
  const hasSave = store.player.name !== ''
  const deleteSave = () => {
    store.resetGame()
    localStorage.removeItem('bar-quest-save')
  }
  return { hasSave, deleteSave }
}
