import { useGameStore } from './store/gameStore'
import { TitleScreen } from './components/screens/TitleScreen'
import { CharSelectScreen } from './components/screens/CharSelectScreen'
import { MainMenuScreen } from './components/screens/MainMenuScreen'
import { StageMapScreen } from './components/screens/StageMapScreen'
import { StageScreen } from './components/screens/StageScreen'
import { QuizModeScreen } from './components/screens/QuizModeScreen'
import { ServiceModeScreen } from './components/screens/ServiceModeScreen'
import { EncyclopediaScreen } from './components/screens/EncyclopediaScreen'
import { CertificateScreen } from './components/screens/CertificateScreen'

export default function App() {
  const screen = useGameStore(s => s.screen)

  return (
    <div className="game-wrap">
      {screen === 'title' && <TitleScreen />}
      {screen === 'charSelect' && <CharSelectScreen />}
      {screen === 'menu' && <MainMenuScreen />}
      {screen === 'stageMap' && <StageMapScreen />}
      {screen === 'stage' && <StageScreen />}
      {screen === 'quiz' && <QuizModeScreen />}
      {screen === 'service' && <ServiceModeScreen />}
      {screen === 'encyclopedia' && <EncyclopediaScreen />}
      {screen === 'certificate' && <CertificateScreen />}
    </div>
  )
}
