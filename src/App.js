import React from 'react'
import { connect } from 'react-redux'
import chordsDefinition from './chords'
import Chords from './components/chords/chords'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import SearchInput from './components/search-input/search-input'
import SearchTerm from './components/search-term/search-term'
import OutputMessage from './components/output-message/output-message'
import { getKeyFromShortName, isChordShortNameInKey, isFullNameMajorMinor } from './utils'

const populateCopiedChords = chords => chords.map(chordDefinition => {
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

const sortChordsBySequence = (chords, selectedKeyShortName) => {
  const selectedKey = getKeyFromShortName(selectedKeyShortName)
  const keyChordDefinition = selectedKey.chords

  const chordsInKey = chords.filter(({ shortName: shortNameUnderTest }) => isChordShortNameInKey(selectedKey, shortNameUnderTest))

  const keyNamesInOrder = Object.values(keyChordDefinition)

  return chordsInKey.sort((chordA, chordB) => keyNamesInOrder.indexOf(chordA.shortName) - keyNamesInOrder.indexOf(chordB.shortName)) 
}

const filterChordsByChordProgression = (chords, selectedKeyShortName, selectedChordProgressionIdx) => {
  const selectedKey = getKeyFromShortName(selectedKeyShortName)
  const keyChordProgressions = selectedKey.chordProgressions
  const keyChordDefinition = selectedKey.chords
  
  const selectedChordProgression = keyChordProgressions[selectedChordProgressionIdx]

  const chordProgressionShortNames = selectedChordProgression.map(romanNumeral => keyChordDefinition[romanNumeral])

  return chords
    .filter(({ shortName: shortNameUnderTest }) => chordProgressionShortNames.includes(shortNameUnderTest))
    .sort((chordA, chordB) => chordProgressionShortNames.indexOf(chordA.shortName) - chordProgressionShortNames.indexOf(chordB.shortName))
}

const filterChordsBySearchTerm = (chords, searchTerm) =>
  chords.filter(({ shortName }) =>
    shortName.toLowerCase().includes(searchTerm.toLowerCase())
  )

const filterMajorMinorChordsOnly = chords => chords.filter(({ fullName }) => isFullNameMajorMinor(fullName))

const filterFavouriteChordsOnly = (chords, favouriteChords) => chords.filter(({ shortName }) => favouriteChords.includes(shortName))

const App = ({ selectedKeyShortName, sortBySequence, selectedChordProgressionIdx, searchTerm, majorMinorChordsOnly, favouriteChords, favouritesOnly }) => {
  let chords = populateCopiedChords(chordsDefinition)

  if (majorMinorChordsOnly) {
    chords = filterMajorMinorChordsOnly(chords)
  }

  if (selectedKeyShortName && sortBySequence) {
    chords = sortChordsBySequence(chords, selectedKeyShortName)
  }

  if (selectedKeyShortName && selectedChordProgressionIdx) {
    chords = filterChordsByChordProgression(chords, selectedKeyShortName, selectedChordProgressionIdx)
  }

  if (searchTerm) {
    chords = filterChordsBySearchTerm(chords, searchTerm)
  }

  if (favouritesOnly) {
    chords = filterFavouriteChordsOnly(chords, favouriteChords)
  }

  return (
    <div>
      <Header />
      <SearchInput />
      <SearchTerm />
      {chords.length ? <Chords chords={chords} /> : <OutputMessage>No chords found</OutputMessage>}
      <Footer />
    </div>
  )
}

const mapStateToProps =
  ({ 
    keys: {
      selectedKeyShortName,
      sortBySequence,
      selectedChordProgressionIdx
    },
    chords: {
      searchTerm,
      majorMinorChordsOnly,
      favouritesOnly,
      favouriteChords
    }
  }) =>
  ({ 
    selectedKeyShortName, 
    sortBySequence, 
    selectedChordProgressionIdx,
    searchTerm,
    majorMinorChordsOnly,
    favouriteChords,
    favouritesOnly
  })

export default connect(mapStateToProps)(App)
