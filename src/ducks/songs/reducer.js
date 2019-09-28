import { TOGGLE_EASIER_CHORDS } from './actions'

export const defaultState = {
  easierChordsEnabled: false
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case TOGGLE_EASIER_CHORDS:
      return {
        ...state,
        easierChordsEnabled: !state.easierChordsEnabled
      }

    default:
      return state
  }
}
