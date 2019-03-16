import React from 'react'
import { connect } from 'react-redux'
import chordsDefinition from './chords'
import keysDefinition from './keys'
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

  /**
   *     chords: {
      [I]: 'F',
      [ii]: 'Gm',
      [iii]: 'Am',
      [IV]: 'Bb',
      [V]: 'C',
      [vi]: 'Dm',
      [vii]: 'Em'
    },
   */

const sortChordsBySequence = (chords, selectedKeyShortName) => {
  const selectedKey = getKeyFromShortName(selectedKeyShortName)
  const keyChordDefinition = selectedKey.chords

  const chordsInKey = chords.filter(({ shortName: shortNameUnderTest }) => isChordShortNameInKey(selectedKey, shortNameUnderTest))

  const keyNamesInOrder = Object.values(keyChordDefinition)

  console.log('sort', keyNamesInOrder, chordsInKey)

  return chordsInKey.sort((chordA, chordB) => keyNamesInOrder.indexOf(chordA.shortName) - keyNamesInOrder.indexOf(chordB.shortName)) 
}

const App = ({ selectedKeyShortName, sortBySequence }) => {
  let chords = populateCopiedChords(chordsDefinition)

  if (selectedKeyShortName && sortBySequence) {
    chords = sortChordsBySequence(chords, selectedKeyShortName)
  }

  return (
    <div>
      <Header />
      <Chords chords={chords} />
    </div>
  )
}

const mapStateToProps = ({ keys: { selectedKeyShortName, sortBySequence }}) => ({ selectedKeyShortName, sortBySequence })

export default connect(mapStateToProps)(App)
