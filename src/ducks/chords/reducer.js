import { CHANGE_SEARCH_TERM, SHOW_SEARCH_TERM, HIDE_SEARCH_TERM, TOGGLE_MAJOR_MINOR_CHORDS_ONLY, TOGGLE_FAVOURITE_CHORD, TOGGLE_FAVOURITES_ONLY, CLEAR_FAVOURITES, RESET_CHORDS } from './actions'

const defaultState = {
  searchTerm: '',
  searchTermVisible: true,
  majorMinorChordsOnly: true,
  favouriteChords: [],
  favouritesOnly: false
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

    case TOGGLE_MAJOR_MINOR_CHORDS_ONLY:
      return {
        ...state,
        majorMinorChordsOnly: !state.majorMinorChordsOnly
      }

    case TOGGLE_FAVOURITE_CHORD:
      return {
        ...state,
        favouriteChords: 
          state.favouriteChords.find(chordShortName => chordShortName === action.payload.chordShortName) ? 
            state.favouriteChords.filter(chordShortName => chordShortName !== action.payload.chordShortName) : 
            state.favouriteChords.concat([action.payload.chordShortName])
      }

    case TOGGLE_FAVOURITES_ONLY:
      return {
        ...state,
        favouritesOnly: !state.favouritesOnly
      }

    case CLEAR_FAVOURITES:
      return {
        ...state,
        favouriteChords: []  
      }

    case RESET_CHORDS:
      return defaultState

    default:
      return state
  }
}