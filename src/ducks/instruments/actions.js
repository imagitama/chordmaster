export const SELECT_INSTRUMENT = 'SELECT_INSTRUMENT'
export const selectInstrument = instrumentShortName => ({
  type: SELECT_INSTRUMENT,
  payload: {
    instrumentShortName
  }
})
