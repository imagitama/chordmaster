import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import keysReducer from './ducks/keys/reducer'
import chordsReducer from './ducks/chords/reducer'

export default createStore(combineReducers({
  keys: keysReducer,
  chords: chordsReducer
}), applyMiddleware(logger))
