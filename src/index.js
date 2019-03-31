import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '@fortawesome/fontawesome-free/css/all.css'
import * as Sentry from '@sentry/browser'
import App from './App'
import createStore from './store'

const { store, persistor } = createStore()

Sentry.init({
 dsn: 'https://f4afba1340004de7b22b7e7eccbec25c@sentry.io/1427601'
})

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
document.getElementById('root'))