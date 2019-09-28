export const SELECT_KEY = 'SELECT_KEY'
export const selectKey = keyShortName => ({
  type: SELECT_KEY,
  payload: {
    keyShortName
  }
})

export const TOGGLE_SORT_BY_SEQUENCE = 'TOGGLE_SORT_BY_SEQUENCE'
export const toggleSortBySequence = () => ({
  type: TOGGLE_SORT_BY_SEQUENCE
})

export const SELECT_CHORD_PROGRESSION = 'SELECT_CHORD_PROGRESSION'
export const selectChordProgression = chordProgressionIdx => ({
  type: SELECT_CHORD_PROGRESSION,
  payload: {
    chordProgressionIdx
  }
})

export const RESET_KEYS = 'RESET_KEYS'
export const resetKeys = () => ({
  type: RESET_KEYS
})
