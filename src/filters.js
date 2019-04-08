import { getKeyFromShortName, isChordShortNameInKey } from './utils'

export const populateCopiedChords = chords => chords.map(chordDefinition => {
  const copyFromName = chordDefinition.copyFrom

  const sourceChord = chords.find(item => item.shortName === copyFromName)

  if (sourceChord) {
    return {
      ...chordDefinition,
      frets: sourceChord.frets,
      strings: sourceChord.strings
    }
  }
  return chordDefinition
})

export const sortChordsBySequence = (chords, selectedKeyShortName) => {
  const selectedKey = getKeyFromShortName(selectedKeyShortName)
  const keyChordDefinition = selectedKey.chords

  if (!keyChordDefinition) {
    return []
  }

  const chordsInKey = chords.filter(({ shortName: shortNameUnderTest }) => isChordShortNameInKey(selectedKey, shortNameUnderTest))

  Object.values(keyChordDefinition).forEach(
    shortName => chords.find(({ shortName: shortNameUnderTest }) => shortNameUnderTest === shortName) === undefined ?
    chordsInKey.push({
      shortName,
      fullName: `Unknown chord ${shortName}`
    })
    : null
  )

  const keyNamesInOrder = Object.values(keyChordDefinition)

  return chordsInKey.sort((chordA, chordB) => keyNamesInOrder.indexOf(chordA.shortName) - keyNamesInOrder.indexOf(chordB.shortName)) 
}

export const filterChordsByChordProgression = (chords, selectedKeyShortName, selectedChordProgressionIdx) => {
  const selectedKey = getKeyFromShortName(selectedKeyShortName)
  const keyChordProgressions = selectedKey.chordProgressions
  const keyChordDefinition = selectedKey.chords
  
  const selectedChordProgression = keyChordProgressions[selectedChordProgressionIdx]

  const chordProgressionShortNames = selectedChordProgression.map(romanNumeral => keyChordDefinition[romanNumeral])

  return chords
    .filter(({ shortName: shortNameUnderTest }) => chordProgressionShortNames.includes(shortNameUnderTest))
    .sort((chordA, chordB) => chordProgressionShortNames.indexOf(chordA.shortName) - chordProgressionShortNames.indexOf(chordB.shortName))
}

const replaceCommonTerms = searchTerm => searchTerm
  .replace('sharp', '#')
  .replace('shar', '#')
  .replace('sha', '#')
  .replace('sh', '#')
  .replace('s', '#')
  .replace('flat', 'b')
  .replace('fla', 'b')
  .replace('fl', 'b')
  .replace('f', 'b')
  .replace('minor', 'm')
  .replace('mino', 'm')
  .replace('min', 'm')
  .replace('mi', 'm')

const cleanUpSearchTerm = searchTerm => searchTerm.replace(/ /g, '').toLowerCase()

export const filterChordsBySearchTerm = (chords, searchTerm) => 
  chords.filter(({ shortName }) =>
    shortName.toLowerCase().includes(cleanUpSearchTerm(replaceCommonTerms(searchTerm)))
  )

export const filterCommonChordsOnly = chords => chords.filter(({ isCommonChord }) => isCommonChord === true)

export const filterFavouriteChordsOnly = (chords, favouriteChords) => chords.filter(({ shortName }) => favouriteChords.includes(shortName))
