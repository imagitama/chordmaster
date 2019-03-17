import { SELECT_KEY, TOGGLE_SORT_BY_SEQUENCE, SELECT_CHORD_PROGRESSION } from './actions'

const defaultState = {
  selectedKeyShortName: '',
  sortBySequence: false,
  selectedChordProgressionIdx: null
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_KEY:
      return {
        ...state,
        selectedKeyShortName: action.payload.keyShortName,
        selectedChordProgressionIdx: null
      }
    case TOGGLE_SORT_BY_SEQUENCE:
      return {
        ...state,
        sortBySequence: !state.sortBySequence
      }
    case SELECT_CHORD_PROGRESSION:
      return {
        ...state,
        selectedChordProgressionIdx: action.payload.chordProgressionIdx
      }
    default: return state
  }
}

export default reducer