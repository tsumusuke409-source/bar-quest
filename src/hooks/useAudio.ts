import { useEffect, useRef, useCallback } from 'react'

type TrackName = 'title' | 'game' | 'quiz' | 'none'

const NOTE = {
  C3:130.81,D3:146.83,E3:164.81,F3:174.61,G3:196.00,A3:220.00,B3:246.94,
  C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392.00,A4:440.00,B4:493.88,
  C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880.00,
  C6:1046.50,E6:1318.51,G6:1567.98,
  _:0,
}

const TITLE_MELODY: [number, number][] = [
  [NOTE.A4,0.5],[NOTE.C5,0.5],[NOTE.E5,0.5],[NOTE.A5,0.5],
  [NOTE.G5,0.75],[NOTE.E5,0.25],[NOTE.D5,0.5],[NOTE._,0.5],
  [NOTE.F5,0.5],[NOTE.E5,0.5],[NOTE.D5,0.5],[NOTE.C5,0.5],
  [NOTE.E4,0.75],[NOTE.A4,0.25],[NOTE._,1.0],
  [NOTE.A4,0.5],[NOTE.D5,0.5],[NOTE.C5,0.5],[NOTE.B4,0.5],
  [NOTE.A4,0.75],[NOTE.G4,0.25],[NOTE.A4,1.0],
]

const GAME_MELODY: [number, number][] = [
  [NOTE.E5,0.25],[NOTE.D5,0.25],[NOTE.C5,0.5],
  [NOTE.D5,0.25],[NOTE.E5,0.25],[NOTE.G5,0.5],
  [NOTE.A5,0.375],[NOTE.G5,0.125],[NOTE.E5,0.5],
  [NOTE.D5,0.25],[NOTE.C5,0.25],[NOTE._,0.5],
  [NOTE.G4,0.25],[NOTE.A4,0.25],[NOTE.C5,0.5],
  [NOTE.D5,0.375],[NOTE.C5,0.125],[NOTE.A4,0.5],
  [NOTE.G4,0.5],[NOTE._,0.5],[NOTE.G4,0.25],[NOTE.A4,0.25],
  [NOTE.C5,1.0],
]

const QUIZ_MELODY: [number, number][] = [
  [NOTE.C5,0.25],[NOTE.E5,0.25],[NOTE.G5,0.25],[NOTE.E5,0.25],
  [NOTE.D5,0.25],[NOTE.F5,0.25],[NOTE.A5,0.25],[NOTE.F5,0.25],
  [NOTE.E5,0.25],[NOTE.G5,0.25],[NOTE.B4,0.25],[NOTE.G5,0.25],
  [NOTE.C5,0.75],[NOTE._,0.25],
]

const BPM = 120
const BEAT = 60 / BPM

class AudioEngine {
  ctx: AudioContext | null = null
  masterGain: GainNode | null = null
  sfxGain: GainNode | null = null
  private loopTimeout: ReturnType<typeof setTimeout> | null = null
  private currentTrack: TrackName = 'none'
  volume = 0.25
  sfxVolume = 0.45
  enabled = true

  init() {
    if (this.ctx) return
    this.ctx = new AudioContext()
    this.masterGain = this.ctx.createGain()
    this.sfxGain = this.ctx.createGain()
    this.masterGain.gain.value = this.volume
    this.sfxGain.gain.value = this.sfxVolume
    this.masterGain.connect(this.ctx.destination)
    this.sfxGain.connect(this.ctx.destination)
  }

  private playNote(freq: number, dur: number, type: OscillatorType = 'square', gain = 0.2, startTime?: number, gainNode?: GainNode) {
    if (!this.ctx || !this.enabled) return
    const osc = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    osc.connect(g)
    g.connect(gainNode ?? this.masterGain!)
    osc.type = type
    osc.frequency.value = freq
    const t = startTime ?? this.ctx.currentTime
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + dur * 0.92)
    osc.start(t)
    osc.stop(t + dur)
  }

  private playMelody(melody: [number, number][], loopCallback?: () => void) {
    if (!this.ctx || !this.enabled) return 0
    let t = this.ctx.currentTime + 0.05
    for (const [freq, beats] of melody) {
      if (freq > 0) this.playNote(freq, beats * BEAT, 'square', 0.2, t)
      t += beats * BEAT
    }
    const total = melody.reduce((acc, [, b]) => acc + b * BEAT, 0)
    if (loopCallback) this.loopTimeout = setTimeout(loopCallback, total * 1000 - 50)
    return total
  }

  play(track: TrackName) {
    if (this.currentTrack === track) return
    this.stop()
    this.currentTrack = track
    if (!this.enabled || track === 'none') return
    this.init()
    if (this.ctx?.state === 'suspended') this.ctx.resume()
    const melodies: Record<string, [number, number][]> = { title: TITLE_MELODY, game: GAME_MELODY, quiz: QUIZ_MELODY }
    const mel = melodies[track]
    if (!mel) return
    const loop = () => { if (this.currentTrack !== track) return; this.playMelody(mel, loop) }
    loop()
  }

  stop() {
    if (this.loopTimeout) clearTimeout(this.loopTimeout)
    this.loopTimeout = null
    this.currentTrack = 'none'
  }

  sfx(type: 'correct' | 'wrong' | 'click' | 'fanfare' | 'fail' | 'unlock') {
    if (!this.enabled) return
    this.init()
    if (this.ctx?.state === 'suspended') this.ctx.resume()
    if (!this.ctx || !this.sfxGain) return
    const t = this.ctx.currentTime + 0.02
    const seqs: Record<string, [number, number, OscillatorType][]> = {
      correct: [[NOTE.E5,0.1,'square'],[NOTE.G5,0.1,'square'],[NOTE.C6,0.2,'square']],
      wrong: [[NOTE.A3,0.08,'square'],[NOTE.G3,0.08,'square'],[NOTE.F3,0.15,'sawtooth']],
      click: [[NOTE.C5,0.06,'square']],
      fanfare: [[NOTE.C5,0.12,'square'],[NOTE.E5,0.12,'square'],[NOTE.G5,0.12,'square'],[NOTE.C6,0.12,'square'],[NOTE.E6,0.12,'square'],[NOTE.G6,0.25,'square']],
      fail: [[NOTE.G4,0.1,'sawtooth'],[NOTE.F4,0.1,'sawtooth'],[NOTE.D4,0.2,'sawtooth']],
      unlock: [[NOTE.G5,0.1,'square'],[NOTE.A5,0.1,'square'],[NOTE.C6,0.2,'square']],
    }
    let st = t
    for (const [freq, dur, wt] of seqs[type] ?? []) {
      this.playNote(freq, dur, wt, 0.3, st, this.sfxGain)
      st += dur
    }
  }

  setVolume(v: number) { this.volume = v; if (this.masterGain) this.masterGain.gain.value = v }
  setEnabled(v: boolean) { this.enabled = v; if (!v) this.stop() }
}

export const audioEngine = new AudioEngine()

export function useAudio() {
  const engineRef = useRef(audioEngine)
  const playTrack = useCallback((track: TrackName) => engineRef.current.play(track), [])
  const stopMusic = useCallback(() => engineRef.current.stop(), [])
  const playSfx = useCallback((type: Parameters<AudioEngine['sfx']>[0]) => engineRef.current.sfx(type), [])
  return { playTrack, stopMusic, playSfx, engine: engineRef.current }
}

export function useTrack(track: TrackName) {
  const { playTrack, stopMusic } = useAudio()
  useEffect(() => {
    playTrack(track)
    return () => { if (track !== 'none') stopMusic() }
  }, [track, playTrack, stopMusic])
}
