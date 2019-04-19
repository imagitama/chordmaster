import { SELECT_KEY, TOGGLE_SORT_BY_SEQUENCE, SELECT_CHORD_PROGRESSION, RESET_KEYS, selectKey, selectChordProgression } from './actions'
import reducer, { defaultState } from './reducer'

describe('Keys reducer', () => {
  describe('Default state', () => {
    it('Returns it', () => {
      expect(reducer()).toEqual(defaultState)
    })
  })
  
  describe(SELECT_KEY, () => {
    it('Selects the key', () => {
      const result = reducer({
        ...defaultState,
        selectedKeyShortName: 'A#'
      }, selectKey('Dbm'))

      expect(result.selectedKeyShortName).toBe('Dbm')
    })
  })

  describe(TOGGLE_SORT_BY_SEQUENCE, () => {
    it('Toggles to sort by sequence', () => {
      const result = reducer({
        ...defaultState,
        sortBySequence: false
      }, {
        type: TOGGLE_SORT_BY_SEQUENCE
      })

      expect(result.sortBySequence).toBe(true)
    })
  })

  describe(SELECT_CHORD_PROGRESSION, () => {
    it('Selects the chord progression index', () => {
      const result = reducer({
        ...defaultState,
        selectedChordProgressionIdx: 1
      }, selectChordProgression(2))

      expect(result.selectedChordProgressionIdx).toBe(2)
    })
  })

  describe(RESET_KEYS, () => {
    it('Resets to default state', () => {
      const result = reducer({
        ...defaultState,
        selectedKeyShortName: 'A#'
      }, {
        type: RESET_KEYS
      })

      expect(result).toEqual(defaultState)
    })
  })
})