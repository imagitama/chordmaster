export const SELECT_KEY = 'SELECT_KEY'
export const selectKey = keyShortName => ({
  type: SELECT_KEY,
  payload: {
    keyShortName
  }
})

export const TOGGLE_SORT_BY_SEQUENCE = 'TOGGLE_SORT_BY_SEQUENCE'
export const toggleSortBySequence = () => ({
  type: TOGGLE_SORT_BY_SEQUENCE
})
