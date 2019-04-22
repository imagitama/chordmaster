export const INCREASE_BASE_FRET = 'INCREASE_BASE_FRET'
export const increaseBaseFret = () => ({
  type: INCREASE_BASE_FRET
})

export const TOGGLE_DO_NOT_PLAY_STRING = 'TOGGLE_DO_NOT_PLAY_STRING'
export const toggleDoNotPlayString = stringNumber => ({
  type: TOGGLE_DO_NOT_PLAY_STRING,
  payload: {
    stringNumber
  }
})

export const TOGGLE_FINGER_ON_STRING = 'TOGGLE_FINGER_ON_STRING'
export const toggleFingerOnString = (fretNumber, stringNumber) => ({
  type: TOGGLE_FINGER_ON_STRING,
  payload: {
    fretNumber,
    stringNumber
  }
})

export const INCREASE_FINGER_ON_STRING = 'INCREASE_FINGER_ON_STRING'
export const increaseFingerOnString = (fretNumber, stringNumber) => ({
  type: INCREASE_FINGER_ON_STRING,
  payload: {
    fretNumber,
    stringNumber
  }
})
