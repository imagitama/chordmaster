import { GET_COMMITS, GOT_COMMITS, gotCommits } from './actions'
import reducer, { defaultState } from './reducer'

describe('Commits reducer', () => {
  describe('Default state', () => {
    it('Returns it', () => {
      expect(reducer()).toEqual(defaultState)
    })
  })

  describe(GET_COMMITS, () => {
    it('Stores that it gets commits', () => {
      const result = reducer(
        {
          ...defaultState,
          isGettingCommits: false
        },
        {
          type: GET_COMMITS
        }
      )

      expect(result.isGettingCommits).toBe(true)
    })
  })

  describe(GOT_COMMITS, () => {
    it('Stores the commits', () => {
      const commits = [{ author: 'me', message: 'Changed something' }]

      const result = reducer(
        {
          ...defaultState,
          commits: ['a', 'b', 'c']
        },
        gotCommits(commits)
      )

      expect(result.commits).toEqual(commits)
    })
  })
})
