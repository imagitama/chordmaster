export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'
export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE
})

export const HIDE_WELCOME_MESSAGE = 'HIDE_WELCOME_MESSAGE'
export const hideWelcomeMessage = () => ({
  type: HIDE_WELCOME_MESSAGE
})

export const SHOW_FEEDBACK_FORM = 'SHOW_FEEDBACK_FORM'
export const showFeedbackForm = () => ({
  type: SHOW_FEEDBACK_FORM
})

export const HIDE_FEEDBACK_FORM = 'HIDE_FEEDBACK_FORM'
export const hideFeedbackForm = () => ({
  type: HIDE_FEEDBACK_FORM
})

export const NAVIGATED_AWAY = 'NAVIGATED_AWAY'
export const navigatedAway = (url, context) => ({
  type: NAVIGATED_AWAY,
  payload: {
    url,
    context
  }
})

export const NAVIGATED_INTERNALLY = 'NAVIGATED_INTERNALLY'
export const navigatedInternally = (url, context) => ({
  type: NAVIGATED_INTERNALLY,
  payload: {
    url,
    context
  }
})
