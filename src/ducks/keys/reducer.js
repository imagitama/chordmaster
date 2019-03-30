import { SELECT_KEY, TOGGLE_SORT_BY_SEQUENCE, SELECT_CHORD_PROGRESSION, RESET_KEYS } from './actions'

const defaultState = {
  selectedKeyShortName: '',
  sortBySequence: true,
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
      
    case RESET_KEYS:
      return defaultState

    default: return state
  }
}

export default reducer