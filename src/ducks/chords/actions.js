export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM'
export const changeSearchTerm = searchTerm => ({
  type: CHANGE_SEARCH_TERM,
  payload: {
    searchTerm
  }
})
