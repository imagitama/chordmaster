import React from 'react'
import { connect } from 'react-redux'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import globalStyles from './globalStyles'
import WelcomeMessage from './components/welcome-message/welcome-message'
import FeedbackForm from './components/feedback-form/feedback-form'
import HomeContainer from './containers/home/home'

const App = ({  isDarkModeEnabled }) => (
  <ThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
    <Global styles={globalStyles} />
    <Header />
    <WelcomeMessage />
    <FeedbackForm />
    <Router>
      <Switch>
        <Route match="/" component={HomeContainer} />
      </Switch>
    </Router>
    <Footer />
  </ThemeProvider>
)

const mapStateToProps =
  ({ 
    app: {
      isDarkModeEnabled
    }
  }) =>
  ({ 
    isDarkModeEnabled
  })

export default connect(mapStateToProps)(App)
