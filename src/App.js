import React from 'react'
import { connect } from 'react-redux'
import chordsDefinition from './chords'
import Chords from './components/chords/chords'
import Header from './components/header/header'
import { getKeyFromShortName, isChordShortNameInKey } from './utils'

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

const App = ({ selectedKeyShortName, sortBySequence, selectedChordProgressionIdx }) => {
  let chords = populateCopiedChords(chordsDefinition)

  if (selectedKeyShortName && sortBySequence) {
    chords = sortChordsBySequence(chords, selectedKeyShortName)
  }

  if (selectedKeyShortName && selectedChordProgressionIdx) {
    chords = filterChordsByChordProgression(chords, selectedKeyShortName, selectedChordProgressionIdx)
  }

  return (
    <div>
      <Header />
      <Chords chords={chords} />
    </div>
  )
}

const mapStateToProps =
  ({ 
    keys: {
      selectedKeyShortName,
      sortBySequence,
      selectedChordProgressionIdx
    }
  }) =>
  ({ 
    selectedKeyShortName, 
    sortBySequence, 
    selectedChordProgressionIdx
  })

export default connect(mapStateToProps)(App)
