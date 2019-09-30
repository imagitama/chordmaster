import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '@fortawesome/fontawesome-free/css/all.css'
import * as Sentry from '@sentry/browser'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import createStore from './store'
import history from './history'

const { store, persistor } = createStore()

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://f4afba1340004de7b22b7e7eccbec25c@sentry.io/1427601'
  })
}

const rootElement = document.getElementById('root')

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Component />
        </Router>
      </PersistGate>
    </Provider>,
    rootElement
  )

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
