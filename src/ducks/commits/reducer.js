import { GET_COMMITS, GOT_COMMITS } from './actions'

const defaultState = {
  isGettingCommits: false,
  commits: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_COMMITS:
      return {
        ...state,
        isGettingCommits: true,
      }
    
    case GOT_COMMITS: {
      return {
        ...state,
        isGettingCommits: false,
        commits: action.payload.commits
      }
    }

    default:
      return state
  }
}