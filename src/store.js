import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import keysReducer from './ducks/keys/reducer'
import chordsReducer from './ducks/chords/reducer'
import appReducer from './ducks/app/reducer'
import commitsReducer from './ducks/commits/reducer'
import analyticsMiddleware from './analytics'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({
  keys: keysReducer,
  chords: chordsReducer,
  app: appReducer,
  commits: commitsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = process.env.NODE_ENV !== 'test' ? createStore(persistedReducer, applyMiddleware(logger, analyticsMiddleware)) : createStore(rootReducer)
  const persistor = persistStore(store)
  return { store, persistor }
}