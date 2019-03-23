import { CHANGE_SEARCH_TERM, SHOW_SEARCH_TERM, HIDE_SEARCH_TERM } from './actions'

const defaultState = {
  searchTerm: '',
  searchTermVisible: true,
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

    default:
      return state
  }
}