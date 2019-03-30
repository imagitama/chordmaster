const I = 'I'
// const II = 'II'
const III = 'III'
const IV = 'IV'
const V = 'V'
const VI = 'VI'
const VII = 'VII'

const i = 'i'
const ii = 'ii'
const iii = 'iii'
const iv = 'iv'
const v = 'v'
const vi = 'vi'
const vii = 'vii'

export const keys = [
  {
    fullName: 'Key of A major',
    shortName: 'A',
    chords: {
      [I]: 'A', 
      [ii]: 'Bm',
      [iii]: 'C#m',
      [IV]: 'D',
      [V]: 'E',
      [vi]: 'F#m',
      [vii]: 'G#dim'
    },
    chordProgressions: [
      [I, IV, V],
      [I, vi, IV, V],
      [ii, V, I]
    ]
  },

  {
    fullName: 'Key of A minor',
    shortName: 'Am',
    chords: {
      [i]: 'Am',
      [ii]: 'Bdim',
      [III]: 'C',
      [iv]: 'Dm',
      [v]: 'Em',
      [VI]: 'F',
      [VII]: 'G'
    },
    chordProgressions: [
      [i, VI, VII],
      [i, iv, VII],
      [i, iv, v],
      [i, VI, III, VII],
      [ii, v, i]
    ]
  },

  {
    fullName: 'Key of B major',
    shortName: 'B',
    chords: {
      [I]: 'B',
      [ii]: 'C#m',
      [iii]: 'D#m',
      [IV]: 'E',
      [V]: 'F#',
      [vi]: 'G#m',
      [vii]: 'A#dim'
    },
    chordProgressions: [
      [I, IV, V],
      [I, vi, IV, V],
      [ii, V, I]
    ]
  },

  {
    fullName: 'Key of C major',
    shortName: 'C',
    chords: {
      [I]: 'C',
      [ii]: 'Dm',
      [iii]: 'Em',
      [IV]: 'F',
      [V]: 'G',
      [vi]: 'Am',
      [vii]: 'Bdim'
    },
    chordProgressions: [
      [I, IV, V],
      [I, vi, IV, V],
      [ii, V, I]
    ]
  },

  {
    fullName: 'Key of D major',
    shortName: 'D',
    chords: {
      [I]: 'D',
      [ii]: 'Em',
      [iii]: 'F#m',
      [IV]: 'G',
      [V]: 'A',
      [vi]: 'Bm',
      [vii]: 'C#dim'
    },
    chordProgressions: [
      [I, IV, V],
      [I, vi, IV, V],
      [ii, V, I]
    ]
  },

  {
    fullName: 'Key of E major',
    shortName: 'E',
    chords: {
      [I]: 'E',
      [ii]: 'F#m',
      [iii]: 'G#m',
      [IV]: 'A',
      [V]: 'B',
      [vi]: 'C#m',
      [vii]: 'D#dim'
    },
    chordProgressions: [
      [I, IV, V],
      [I, vi, IV, V],
      [ii, V, I]
    ]
  },

  {
    fullName: 'Key of E minor',
    shortName: 'Em',
    chords: {
      [i]: 'Em',
      [ii]: 'F#dim',
      [III]: 'G',
      [iv]: 'Am',
      [v]: 'Bm',
      [VI]: 'C',
      [VII]: 'D'
    },
    chordProgressions: [
      [i, VI, VII],
      [i, iv, VII],
      [i, iv, v],
      [i, VI, III, VII],
      [i, VI, III, VII],
      [ii, v, i]
    ]
  },

  {
    fullName: 'Key of F major',
    shortName: 'F',
    chords: {
      [I]: 'F',
      [ii]: 'Gm',
      [iii]: 'Am',
      [IV]: 'Bb',
      [V]: 'C',
      [vi]: 'Dm',
      [vii]: 'Edim'
    },
    chordProgressions: [
      [I, IV, V],
      [I, vi, IV, V],
      [ii, V, I]
    ]
  },

  {
    fullName: 'Key of G major',
    shortName: 'G',
    chords: {
      [I]: 'G',
      [ii]: 'Am',
      [iii]: 'Bm',
      [IV]: 'C',
      [V]: 'D',
      [vi]: 'Em',
      [vii]: 'F#dim'
    },
    chordProgressions: [
      [I, IV, V],
      [I, vi, IV, V],
      [ii, V, I]
    ]
  }
]

export default keys
