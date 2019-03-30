import { getKeyFromShortName, isChordShortNameInKey, isFullNameMajorMinor } from './utils'

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

  const chordsInKey = chords.filter(({ shortName: shortNameUnderTest }) => isChordShortNameInKey(selectedKey, shortNameUnderTest))

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

export const filterChordsBySearchTerm = (chords, searchTerm) =>
  chords.filter(({ shortName }) =>
    shortName.toLowerCase().includes(searchTerm.toLowerCase())
  )

export const filterMajorMinorChordsOnly = chords => chords.filter(({ fullName }) => isFullNameMajorMinor(fullName))

export const filterFavouriteChordsOnly = (chords, favouriteChords) => chords.filter(({ shortName }) => favouriteChords.includes(shortName))
