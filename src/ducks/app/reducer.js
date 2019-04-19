import { TOGGLE_DARK_MODE, HIDE_WELCOME_MESSAGE, SHOW_FEEDBACK_FORM, HIDE_FEEDBACK_FORM } from './actions'

export const defaultState = {
  isDarkModeEnabled: false,
  isWelcomeMessageHidden: false,
  isFeedbackFormVisible: false
}

export default (state = defaultState, action = {}) => {
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

    case SHOW_FEEDBACK_FORM:
      return {
        ...state,
        isFeedbackFormVisible: true
      }

    case HIDE_FEEDBACK_FORM:
      return {
        ...state,
        isFeedbackFormVisible: false
      }

    default:
      return state
  }
}