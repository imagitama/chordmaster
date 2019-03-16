import React from 'react'
import ChordsStyled from './chords.styles'
import Chord from '../chord/chord'

export const Chords = ({ chords }) => (
  <ChordsStyled>
    {chords.map(chord => <Chord key={chord.shortName} {...chord} />)}
  </ChordsStyled>
)

export default Chords
