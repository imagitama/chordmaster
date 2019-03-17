import { CHANGE_SEARCH_TERM } from './actions'

const defaultState = {
  searchTerm: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm
      }
    default:
      return state
  }
}