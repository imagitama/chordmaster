import { TOGGLE_EASIER_CHORDS } from './actions'
import reducer, { defaultState } from './reducer'

describe('Songs reducer', () => {
  describe('Default state', () => {
    it('Returns it', () => {
      expect(reducer()).toEqual(defaultState)
    })
  })

  describe(TOGGLE_EASIER_CHORDS, () => {
    it('Toggles easier chords', () => {
      const result = reducer(
        {
          ...defaultState,
          easierChordsEnabled: false
        },
        {
          type: TOGGLE_EASIER_CHORDS
        }
      )

      expect(result.easierChordsEnabled).toBe(true)
    })
  })
})
