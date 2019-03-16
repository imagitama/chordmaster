import { createStore, combineReducers } from 'redux'
import keysReducer from './ducks/keys/reducer'

export default createStore(combineReducers({ keys: keysReducer }))