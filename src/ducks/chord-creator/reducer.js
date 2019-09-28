import { doNotPlayString, barFret } from 'guitar-chord-definitions/dist/chords'
import {
  TOGGLE_DO_NOT_PLAY_STRING,
  TOGGLE_FINGER_ON_STRING,
  INCREASE_BASE_FRET,
  INCREASE_FINGER_ON_STRING
} from './actions'

const defaultState = {
  strings: {
    1: doNotPlayString,
    6: doNotPlayString
  },
  frets: {
    8: {
      5: 1
    },
    9: {
      4: 2,
      2: 3
    },
    10: {
      3: 4
    }
  }
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case TOGGLE_DO_NOT_PLAY_STRING:
      return {
        ...state,
        strings: {
          ...state.strings,
          [action.payload.stringNumber]:
            state.strings[action.payload.stringNumber] === doNotPlayString
              ? null
              : doNotPlayString
        }
      }

    case TOGGLE_FINGER_ON_STRING:
      let newState = { ...state }

      if (newState.frets[action.payload.fretNumber] === barFret) {
        newState = {
          ...newState,
          frets: {
            ...newState.frets,
            [action.payload.fretNumber]: []
          }
        }
      }

      newState = {
        ...newState,
        frets: {
          ...newState.frets,
          [action.payload.fretNumber]: {
            ...newState.frets[action.payload.fretNumber],
            [action.payload.stringNumber]: newState.frets[
              action.payload.fretNumber
            ][action.payload.stringNumber]
              ? null
              : 1
          }
        }
      }

      return {
        ...newState,
        frets: {
          ...newState.frets,
          [action.payload.fretNumber]:
            Object.values(newState.frets[action.payload.fretNumber]).length ===
              6 &&
            Object.values(newState.frets[action.payload.fretNumber]).every(
              fingerNumber => parseInt(fingerNumber) === 1
            )
              ? barFret
              : newState.frets[action.payload.fretNumber]
        }
      }

    case INCREASE_FINGER_ON_STRING:
      let newState2 = { ...state }

      if (newState2.frets[action.payload.fretNumber] === barFret) {
        newState2 = {
          ...newState2,
          frets: {
            ...newState2.frets,
            [action.payload.fretNumber]: {}
          }
        }
      }

      return {
        ...newState2,
        frets: {
          ...newState2.frets,
          [action.payload.fretNumber]: {
            ...newState2.frets[action.payload.fretNumber],
            [action.payload.stringNumber]:
              newState2.frets[action.payload.fretNumber][
                action.payload.stringNumber
              ] === 6
                ? null
                : newState2.frets[action.payload.fretNumber][
                    action.payload.stringNumber
                  ] + 1
          }
        }
      }

    case INCREASE_BASE_FRET:
      return {
        ...state,
        frets: Object.entries(state.frets).reduce(
          (allFrets, [fretNumber, fingers]) => {
            return {
              ...allFrets,
              [parseInt(Object.keys(state.frets)[0]) === 10
                ? parseInt(fretNumber) - 9
                : parseInt(fretNumber) + 1]: fingers
            }
          },
          {}
        )
      }

    default:
      return state
  }
}
