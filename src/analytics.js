import { TOGGLE_DARK_MODE, HIDE_WELCOME_MESSAGE } from './ducks/app/actions'
import { TOGGLE_FAVOURITE_CHORD, CHANGE_SEARCH_TERM, TOGGLE_FAVOURITES_ONLY, TOGGLE_MAJOR_MINOR_CHORDS_ONLY, CLEAR_FAVOURITES, RESET_CHORDS } from './ducks/chords/actions'
import { SELECT_KEY, TOGGLE_SORT_BY_SEQUENCE, SELECT_CHORD_PROGRESSION, RESET_KEYS } from './ducks/keys/actions'
import { SELECT_INSTRUMENT } from './ducks/instruments/actions'

const allowedActions = [
  TOGGLE_DARK_MODE,
  HIDE_WELCOME_MESSAGE,

  TOGGLE_FAVOURITE_CHORD,
  TOGGLE_FAVOURITES_ONLY,
  TOGGLE_MAJOR_MINOR_CHORDS_ONLY,
  CLEAR_FAVOURITES,
  RESET_CHORDS,
  CHANGE_SEARCH_TERM,

  SELECT_KEY,
  TOGGLE_SORT_BY_SEQUENCE,
  SELECT_CHORD_PROGRESSION,
  RESET_KEYS,

  SELECT_INSTRUMENT
]

const analyticsMiddleware = store => next => action => {
  if (window.gtag && allowedActions.includes(action.type)) {
    window.gtag('event', 'action', {
      event_category: action.type,
      event_label: JSON.stringify(action.payload)
    })
  }
  return next(action)
}

export default analyticsMiddleware
