import { createStore, combineReducers } from 'redux'
import keysReducer from './ducks/keys/reducer'
import chordsReducer from './ducks/chords/reducer'

export default createStore(combineReducers({
  keys: keysReducer,
  chords: chordsReducer
}))
