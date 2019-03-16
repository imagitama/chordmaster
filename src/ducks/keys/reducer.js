import { SELECT_KEY, TOGGLE_SORT_BY_SEQUENCE } from './actions'

const defaultState = {
  selectedKeyShortName: '',
  sortBySequence: false
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_KEY:
      return {
        ...state,
        selectedKeyShortName: action.payload.keyShortName
      }
    case TOGGLE_SORT_BY_SEQUENCE:
      return {
        ...state,
        sortBySequence: !state.sortBySequence
      }
    default: return state
  }
}

export default reducer