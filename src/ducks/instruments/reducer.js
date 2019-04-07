import { SELECT_INSTRUMENT } from './actions'

const defaultState = {
  selectedInstrumentShortName: '',
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_INSTRUMENT:
      return {
        ...state,
        selectedInstrumentShortName: action.payload.instrumentShortName,
      }

    default: return state
  }
}

export default reducer
