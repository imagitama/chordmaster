import { SELECT_SONG, UNSELECT_SONG } from './actions'

const defaultState = {
  selectedSong: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        selectedSong: `${action.payload.artist} - ${action.payload.title}`
      }
    
    case UNSELECT_SONG:
      return {
        ...state,
        selectedSong: ''
      }

    default:
      return state
  }
}