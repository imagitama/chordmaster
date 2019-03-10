export const doNotPlayString = 'DoNotPlayString'
export const barFret = 'BarFret'

export const Chords = [
  {
    fullName: 'A major',
    shortName: 'A',
    strings: {
      6: doNotPlayString
    },
    frets: {
      1: {},
      2: {
        2: 3,
        3: 2,
        4: 1
      }
    }
  },

  {
    fullName: 'A minor',
    shortName: 'Am',
    strings: {
      6: doNotPlayString
    },
    frets: {
      1: {
        2: 1
      },
      2: {
        4: 2,
        3: 3
      }
    }
  },

  {
    fullName: 'A flat',
    shortName: 'Ab',
    alternativeShortName: 'G#',
    frets: {
      4: barFret,
      5: {
        3: 2,
      },
      6: {
        4: 3,
        5: 4
      }
    }
  }
]

export default Chords
