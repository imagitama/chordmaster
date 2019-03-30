import { TOGGLE_DARK_MODE, HIDE_WELCOME_MESSAGE } from './actions'

const defaultState = {
  isDarkModeEnabled: false,
  isWelcomeMessageHidden: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkModeEnabled: !state.isDarkModeEnabled
      }
    
    case HIDE_WELCOME_MESSAGE:
      return {
        ...state,
        isWelcomeMessageHidden: true
      }

    default:
      return state
  }
}