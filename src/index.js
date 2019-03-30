import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from 'emotion-theming'
import App from './App'
import createStore from './store'
import lightTheme from './themes/light'

const { store, persistor } = createStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
document.getElementById('root'))