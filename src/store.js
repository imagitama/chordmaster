import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import keysReducer from './ducks/keys/reducer'
import chordsReducer from './ducks/chords/reducer'
import appReducer from './ducks/app/reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  keys: keysReducer,
  chords: chordsReducer,
  app: appReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(logger))
  let persistor = persistStore(store)
  return { store, persistor }
}