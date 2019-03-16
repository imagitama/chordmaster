export const SELECT_KEY = 'SELECT_KEY'
export const selectKey = keyShortName => ({
  type: SELECT_KEY,
  payload: {
    keyShortName
  }
})