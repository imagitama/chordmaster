import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.css'
import mockFetch from 'jest-fetch-mock'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import App from './App'
import createStore from './store'
import HomeContainer from './containers/home/home'
import AboutContainer from './containers/about/about'
import ChangesContainer from './containers/changes/changes'
import SongsContainer from './containers/songs/songs'
import SongContainer from './containers/song/song'

const { store } = createStore()
let changeHistory

const TestWrapper = withRouter(({ children, history }) => {
  changeHistory = (url) => history.push(url)
  return <>{children}</>
})

describe('App', () => {
  let wrapper

  beforeAll(() => {
    global.fetch = mockFetch
    mockFetch.mockResponse(JSON.stringify({}))

    wrapper = mount(
      <Provider store={store}>
        <Router>
          <TestWrapper>
            <App />
          </TestWrapper>
        </Router>
      </Provider>
    )
  })

  describe('Home', () => {
    it('Renders correctly', () => {
      expect(wrapper.find(HomeContainer).exists()).toBe(true)
    })
  })

  describe('About', () => {
    it('Renders correctly', () => {
      changeHistory('/about')
      wrapper.update()

      expect(wrapper.find(AboutContainer).exists()).toBe(true)
    })
  })

  describe('Changes', () => {
    it('Renders correctly', () => {
      changeHistory('/changes')
      wrapper.update()

      expect(wrapper.find(ChangesContainer).exists()).toBe(true)
    })
  })

  describe('Songs', () => {
    it('Renders correctly', () => {
      changeHistory('/songs')
      wrapper.update()

      expect(wrapper.find(SongsContainer).exists()).toBe(true)
    })
  })

  describe('Song', () => {
    it('Renders correctly', () => {
      changeHistory('/song/Oasis+-+Wonderwall')
      wrapper.update()

      expect(wrapper.find(SongContainer).exists()).toBe(true)
    })
  })
})