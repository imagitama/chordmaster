import React from 'react'
import './App.css';
import chordsDefinition from './chords'
import Chords from './components/chords/chords'
import Header from './components/header/header'

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

const App = () => (
  <div>
    <Header />
    <Chords chords={populateCopiedChords(chordsDefinition)} />
  </div>
)

export default App
