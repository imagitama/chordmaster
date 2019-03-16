import { SELECT_KEY } from './actions'

const defaultState = {
  selectedKeyShortName: ''
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_KEY:
      return {
        ...state,
        selectedKeyShortName: action.payload.keyShortName
      }
    default: return state
  }
}

export default reducer