export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM'
export const changeSearchTerm = searchTerm => ({
  type: CHANGE_SEARCH_TERM,
  payload: {
    searchTerm
  }
})

export const SHOW_SEARCH_TERM = 'SHOW_SEARCH_TERM'
export const showSearchTerm = () => ({
  type: SHOW_SEARCH_TERM
})

export const HIDE_SEARCH_TERM = 'HIDE_SEARCH_TERM'
export const hideSearchTerm = () => ({
  type: HIDE_SEARCH_TERM
})

export const TOGGLE_MAJOR_MINOR_CHORDS_ONLY = 'TOGGLE_MAJOR_MINOR_CHORDS_ONLY'
export const toggleMinorMajorChordsOnly = () => ({
  type: TOGGLE_MAJOR_MINOR_CHORDS_ONLY
})

export const TOGGLE_FAVOURITE_CHORD = 'TOGGLE_FAVOURITE_CHORD'
export const toggleFavouriteChord = chordShortName => ({
  type: TOGGLE_FAVOURITE_CHORD,
  payload: {
    chordShortName
  }
})

export const TOGGLE_FAVOURITES_ONLY = 'TOGGLE_FAVOURITES_ONLY'
export const toggleFavouritesOnly = () => ({
  type: TOGGLE_FAVOURITES_ONLY
})
