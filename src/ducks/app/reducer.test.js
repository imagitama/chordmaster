import {
  TOGGLE_DARK_MODE,
  HIDE_WELCOME_MESSAGE,
  SHOW_FEEDBACK_FORM,
  HIDE_FEEDBACK_FORM
} from './actions'
import reducer, { defaultState } from './reducer'

describe('App reducer', () => {
  describe('Default state', () => {
    it('Returns it', () => {
      expect(reducer()).toEqual(defaultState)
    })
  })

  describe(TOGGLE_DARK_MODE, () => {
    it('Toggles dark mode', () => {
      const result = reducer(
        {
          ...defaultState,
          isDarkModeEnabled: false
        },
        {
          type: TOGGLE_DARK_MODE
        }
      )

      expect(result.isDarkModeEnabled).toBe(true)
    })
  })

  describe(HIDE_WELCOME_MESSAGE, () => {
    it('Hides the welcome message', () => {
      const result = reducer(
        {
          ...defaultState,
          isWelcomeMessageHidden: false
        },
        {
          type: HIDE_WELCOME_MESSAGE
        }
      )

      expect(result.isWelcomeMessageHidden).toBe(true)
    })
  })

  describe(SHOW_FEEDBACK_FORM, () => {
    it('Shows the feedback form', () => {
      const result = reducer(
        {
          ...defaultState,
          isFeedbackFormVisible: false
        },
        {
          type: SHOW_FEEDBACK_FORM
        }
      )

      expect(result.isFeedbackFormVisible).toBe(true)
    })
  })

  describe(HIDE_FEEDBACK_FORM, () => {
    it('Hides the feedback form', () => {
      const result = reducer(
        {
          ...defaultState,
          isFeedbackFormVisible: true
        },
        {
          type: HIDE_FEEDBACK_FORM
        }
      )

      expect(result.isFeedbackFormVisible).toBe(false)
    })
  })
})
