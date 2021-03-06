import keysDefinition from 'guitar-chord-definitions/dist/keys'
import chordsDefinition from 'guitar-chord-definitions/dist/chords'

export const isChordShortNameInKey = (key, chordShortName) =>
  key.chords && Object.values(key.chords).includes(chordShortName)

export const getKeyFromShortName = shortName =>
  keysDefinition.find(
    ({ shortName: shortNameUnderTest }) => shortNameUnderTest === shortName
  )

export const getKeyFromShortNameLowercase = shortNameLowercase =>
  keysDefinition.find(
    ({ shortName: shortNameUnderTest }) =>
      shortNameUnderTest.toLowerCase() === shortNameLowercase
  )

export const cleanNameForSounds = name =>
  name.replace('#', 'sharp').toLowerCase()

export const cleanNameForUrl = name => name.replace('#', 'sharp')

export const reverseCleanNameForUrl = cleanedName =>
  cleanedName.replace('sharp', '#')

export const performFetch = (url, method = 'GET', opts = {}) =>
  fetch(url, {
    method,
    ...opts
  }).then(response => {
    if (!response.ok) {
      throw new Error('Response not ok')
    }
    return response.json()
  })

export const isMobileDevice = 'ontouchstart' in document.documentElement

const cleanUpArtistAndTitleForHref = artistAndTitle =>
  artistAndTitle.replace(/ /g, '+')

export const getLinkToSongWithArtistAndTitle = artistAndTitle =>
  `/song/${cleanUpArtistAndTitleForHref(artistAndTitle)}`

export const getChordFromShortName = shortName =>
  chordsDefinition.find(
    ({ shortName: shortNameUnderTest }) => shortNameUnderTest === shortName
  )
export const getChordFromShortNameLowercase = shortNameLowercase =>
  chordsDefinition.find(
    ({ shortName: shortNameUnderTest }) =>
      shortNameUnderTest.toLowerCase() === shortNameLowercase
  )

export const doesKeyShortNameExist = shortName =>
  keysDefinition.find(
    ({ shortName: shortNameUnderTest }) => shortNameUnderTest === shortName
  ) !== undefined

export const convertToEasierChord = shortName => {
  if (shortName.includes('/')) {
    return convertToEasierChord(shortName.split('/')[0])
  }
  if (shortName.includes('add')) {
    return convertToEasierChord(shortName.split('add')[0])
  }
  if (/[0-9]/.test(shortName)) {
    return convertToEasierChord(shortName.replace(/[0-9]/g, ''))
  }
  if (shortName.includes('maj')) {
    return convertToEasierChord(shortName.replace('maj', ''))
  }
  return shortName
}
