import React from 'react'
import { connect } from 'react-redux'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import globalStyles from './globalStyles'
import WelcomeMessage from './components/welcome-message/welcome-message'
import FeedbackForm from './components/feedback-form/feedback-form'
import HomeContainer from './containers/home/home'
import AboutContainer from './containers/about/about'
import ChangesContainer from './containers/changes/changes'
import SongContainer from './containers/song/song'
import ChordContainer from './containers/chord/chord'
import KeyContainer from './containers/key/key'
import SongsContainer from './containers/songs/songs'
import ChordCreatorContainer from './containers/chord-creator/chord-creator'
import PrintModeHandler from './components/print-mode-handler/print-mode-handler'

const parseArtistAndTitle = artistAndTitleFromUrl =>
  artistAndTitleFromUrl.replace(/\+/g, ' ')

export const App = ({ isDarkModeEnabled }) => (
  <ThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
    <Global styles={globalStyles} />
    <Helmet>
      <title>{process.env.REACT_APP_DEFAULT_DOCUMENT_TITLE}</title>
      <meta
        name="description"
        content={process.env.REACT_APP_DEFAULT_DOCUMENT_DESCRIPTION}
      />
    </Helmet>
    <Header />
    <div>
      <WelcomeMessage />
      <FeedbackForm />
      <Switch>
        <Route
          path="/"
          exact
          component={({ location: { search } }) => (
            <HomeContainer search={search} />
          )}
        />
        <Route path="/about" component={AboutContainer} />
        <Route path="/changes" component={ChangesContainer} />
        <Route path="/songs" component={SongsContainer} />
        <Route path="/chord-creator" component={ChordCreatorContainer} />
        <Route
          path="/song/:artistAndTitle"
          component={({
            match: {
              params: { artistAndTitle }
            }
          }) => (
            <SongContainer
              artistAndTitle={parseArtistAndTitle(artistAndTitle)}
            />
          )}
        />
        <Route
          path="/chord/:chordShortName"
          component={({
            match: {
              params: { chordShortName }
            }
          }) => (
            <ChordContainer chordShortName={chordShortName.toLowerCase()} />
          )}
        />
        <Route
          path="/key/:keyShortName"
          component={({
            match: {
              params: { keyShortName }
            }
          }) => <KeyContainer keyShortName={keyShortName.toLowerCase()} />}
        />
      </Switch>
    </div>
    <Footer />
    <PrintModeHandler />
  </ThemeProvider>
)

const mapStateToProps = ({ app: { isDarkModeEnabled } }) => ({
  isDarkModeEnabled
})

export default connect(mapStateToProps)(App)
