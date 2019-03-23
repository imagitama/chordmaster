import { CHANGE_SEARCH_TERM, SHOW_SEARCH_TERM, HIDE_SEARCH_TERM, TOGGLE_MAJOR_MINOR_CHORDS_ONLY } from './actions'

const defaultState = {
  searchTerm: '',
  searchTermVisible: true,
  majorMinorChordsOnly: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm
      }

    case SHOW_SEARCH_TERM:
      return {
        ...state,
        searchTermVisible: true
      }

    case HIDE_SEARCH_TERM:
      return {
        ...state,
        searchTermVisible: false
      }

    case TOGGLE_MAJOR_MINOR_CHORDS_ONLY:
      return {
        ...state,
        majorMinorChordsOnly: !state.majorMinorChordsOnly
      }

    default:
      return state
  }
}