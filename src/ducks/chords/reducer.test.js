import { CHANGE_SEARCH_TERM, SHOW_SEARCH_TERM, HIDE_SEARCH_TERM, TOGGLE_MAJOR_MINOR_CHORDS_ONLY, TOGGLE_FAVOURITE_CHORD, TOGGLE_FAVOURITES_ONLY, CLEAR_FAVOURITES, RESET_CHORDS, toggleFavouriteChord, changeSearchTerm } from './actions'
import reducer, { defaultState } from './reducer'

describe('Chords reducer', () => {
  describe('Default state', () => {
    it('Returns it', () => {
      expect(reducer()).toEqual(defaultState)
    })
  })
  
  describe(CHANGE_SEARCH_TERM, () => {
    it('Saves the new search term', () => {
      const result = reducer(defaultState, changeSearchTerm('C#'))
      expect(result.searchTerm).toBe('C#')
    })
  })

  describe(SHOW_SEARCH_TERM, () => {
    it('Shows the search term', () => {
      const result = reducer({
        ...defaultState,
        searchTermVisible: false
      }, {
        type: SHOW_SEARCH_TERM
      })

      expect(result.searchTermVisible).toBe(true)
    })
  })

  describe(HIDE_SEARCH_TERM, () => {
    it('Hides the search term', () => {
      const result = reducer({
        ...defaultState,
        searchTermVisible: true
      }, {
        type: HIDE_SEARCH_TERM
      })

      expect(result.searchTermVisible).toBe(false)
    })
  })

  describe(TOGGLE_MAJOR_MINOR_CHORDS_ONLY, () => {
    it('Toggles the minor and major chords only', () => {
      const result = reducer({
        ...defaultState,
        majorMinorChordsOnly: true
      }, {
        type: TOGGLE_MAJOR_MINOR_CHORDS_ONLY
      })

      expect(result.majorMinorChordsOnly).toBe(false)
    })
  })

  describe(TOGGLE_FAVOURITE_CHORD, () => {
    const chordShortName = 'Abm'

    describe('When it is not a favourite', () => {
      it('Adds the chord to favourites', () => {
        const result = reducer({
          ...defaultState,
          favouriteChords: ['Bm', 'D#']
        }, toggleFavouriteChord(chordShortName))

        expect(result.favouriteChords).toEqual(['Bm', 'D#', chordShortName])
      })
    })

    describe('When it is already a favourite', () => {
      it('Removes the chord to favourites', () => {
        const result = reducer({
          ...defaultState,
          favouriteChords: ['Bm', 'D#', chordShortName]
        }, toggleFavouriteChord(chordShortName))

        expect(result.favouriteChords).toEqual(['Bm', 'D#'])
      })
    })
  })

  describe(TOGGLE_FAVOURITES_ONLY, () => {
    it('Toggles favourites only', () => {
      const result = reducer({
        ...defaultState,
        favouritesOnly: true
      }, {
        type: TOGGLE_FAVOURITES_ONLY
      })

      expect(result.favouritesOnly).toBe(false)
    })
  })

  describe(CLEAR_FAVOURITES, () => {
    it('Clears favourites', () => {
      const result = reducer({
        ...defaultState,
        favouriteChords: ['a', 'b', 'c']
      }, {
        type: CLEAR_FAVOURITES
      })

      expect(result.favouriteChords).toEqual([])
    })
  })

  describe(RESET_CHORDS, () => {
    it('Resets to default state', () => {
      const result = reducer({
        ...defaultState,
        searchTermVisible: false,
        favouriteChords: ['a', 'b', 'c']
      }, {
        type: RESET_CHORDS
      })

      expect(result).toEqual(defaultState)
    })
  })
})