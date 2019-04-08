import keys from './keys'

export const isChordShortNameInKey = (key, chordShortName) => Object.values(key.chords).includes(chordShortName)

export const getKeyFromShortName = shortName => keys.find(({ shortName: shortNameUnderTest }) => shortNameUnderTest === shortName)

export const cleanNameForSounds = name => name.replace('#', 'sharp').toLowerCase()

export const performFetch = (url, method = 'GET', opts = {}) => fetch(url, {
  method,
  ...opts
}).then(response => {
  if (!response.ok) {
    throw new Error('Response not ok')
  }
  return response.json()
})