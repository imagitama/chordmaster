import { TOGGLE_DARK_MODE } from './actions'

const defaultState = {
  isDarkModeEnabled: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        isDarkModeEnabled: !state.isDarkModeEnabled
      }

    default:
      return state
  }
}