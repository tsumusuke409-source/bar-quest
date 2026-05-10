// ─── Screen / Navigation ────────────────────────────────────────────────────
export type ScreenName =
  | 'title'
  | 'charSelect'
  | 'menu'
  | 'stageMap'
  | 'stage'
  | 'quiz'
  | 'service'
  | 'encyclopedia'
  | 'certificate'

export interface ScreenParams {
  chapterId?: number
  stageId?: string
  quizCategory?: QuizCategory
  fromStage?: boolean
}

// ─── Player ─────────────────────────────────────────────────────────────────
export type PlayerGender = 'male' | 'female'
export type HairColor = 'brown' | 'black' | 'blond' | 'red'

export type PlayerRank =
  | 'apprentice'  // 見習い    0–99 XP
  | 'junior'      // ジュニア  100–299
  | 'bartender'   // 一人前    300–699
  | 'veteran'     // ベテラン  700–1299
  | 'master'      // マスター  1300+

export const RANK_LABELS: Record<PlayerRank, string> = {
  apprentice: '見習い',
  junior: 'ジュニア',
  bartender: '一人前',
  veteran: 'ベテラン',
  master: 'マスター',
}

export const RANK_THRESHOLDS: [PlayerRank, number][] = [
  ['master', 1300],
  ['veteran', 700],
  ['bartender', 300],
  ['junior', 100],
  ['apprentice', 0],
]

export interface PlayerState {
  name: string
  gender: PlayerGender
  hairColor: HairColor
  xp: number
  gold: number
  rank: PlayerRank
}

// ─── Stage ──────────────────────────────────────────────────────────────────
export type PracticeType = 'quiz' | 'cocktail' | 'service' | 'boss'

export interface Stage {
  id: string            // e.g. "1-1"
  chapterId: number
  title: string
  subtitle: string
  lectureKey: string    // key in dialogues data
  practiceType: PracticeType
  practiceRef: string   // quiz category OR cocktailId OR scenarioId
  quizIds?: string[]    // specific quiz IDs; when set, overrides category filter
  xpReward: number
  goldReward: number
  unlocks: string[]     // cocktail / character IDs
  mapPos: { x: number; y: number }  // percent on chapter map
  prerequisite?: string             // stageId that must be completed first
  isSummary?: boolean
}

export interface Chapter {
  id: number
  title: string
  subtitle: string
  stages: Stage[]
  backgroundVariant: 'night' | 'evening' | 'dawn'
}

// ─── Lecture Dialogue ───────────────────────────────────────────────────────
export type SpeakerExpression = 'normal' | 'happy' | 'strict' | 'surprised' | 'thinking' | 'sad'

export interface LectureSlide {
  speaker: 'master' | 'player'
  expression: SpeakerExpression
  text: string
  highlight?: string   // term to highlight in gold
  visual?: string      // sprite key (glass name, tool name, etc.)
}

export interface LectureData {
  key: string
  slides: LectureSlide[]
}

// ─── Quiz ────────────────────────────────────────────────────────────────────
export type QuizCategory =
  | 'basics'
  | 'tools'
  | 'glasses'
  | 'spirits'
  | 'techniques'
  | 'cocktails'
  | 'service'
  | 'mixed'

export interface QuizQuestion {
  id: string
  category: QuizCategory
  question: string
  options: string[]
  correct: number       // 0-indexed
  explanation: string
  chapterRef: number    // which chapter this belongs to
}

// ─── Cocktail ────────────────────────────────────────────────────────────────
export type Technique = 'build' | 'stir' | 'shake' | 'blend'
export type GlassType =
  | 'cocktail'
  | 'rocks'
  | 'highball'
  | 'collins'
  | 'champagne_flute'
  | 'martini'
  | 'margarita'
  | 'mug'
  | 'shot'
  | 'wine'
  | 'goblet'

export interface Ingredient {
  item: string
  amount: string
}

export interface CocktailStep {
  action: string       // e.g. "グラスに氷を入れる"
  item?: string        // item key if applicable
}

export interface Cocktail {
  id: string
  name: string
  nameEn: string
  ingredients: Ingredient[]
  technique: Technique
  glass: GlassType
  garnish: string
  difficulty: 1 | 2 | 3
  unlockedByChapter: number
  description: string
  history: string
  abv: number
  taste: string
  steps: CocktailStep[]
  color: string        // CSS color for the liquid
}

// ─── Service / Customer ──────────────────────────────────────────────────────
export type CustomerType = 'regular' | 'couple' | 'tourist' | 'drunk' | 'vip' | 'newcomer'

export interface Character {
  id: string
  name: string
  type: CustomerType
  description: string
  spriteKey: string
  unlockedByChapter: number
}

export interface ServiceChoice {
  text: string
  score: number         // -2 to +2
  response: string      // what the character says back
  feedback: string      // master's feedback
}

export interface ServiceDialogueLine {
  speaker: 'customer' | 'master' | 'player'
  text: string
  expression?: SpeakerExpression
  choices?: ServiceChoice[]
}

export interface ServiceScenario {
  id: string
  title: string
  characterId: string
  situation: string
  lines: ServiceDialogueLine[]
  passingScore: number
  unlockedByChapter: number
}

// ─── Progress / Save ─────────────────────────────────────────────────────────
export interface SaveData {
  player: PlayerState
  completedStages: string[]
  unlockedCocktails: string[]
  unlockedCharacters: string[]
  stageScores: Record<string, number>   // stageId -> score 0-100
  isFirstPlay: boolean
  version: number
}
