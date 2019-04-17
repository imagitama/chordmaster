import React from 'react'
import { ChordsWrapper } from '../chords/chords'
import { Chord } from '../chord/chord'
import { getChordFromShortName } from '../../utils'

export default ({ chordShortNames }) => (
  <ChordsWrapper>
      {chordShortNames.map(chordShortName => {
      const chord = getChordFromShortName(chordShortName)
      return <Chord key={chordShortName} {...chord} shortName={chordShortName} canFavourite={false} displayNotDefinedMessage={false} />
    })}
  </ChordsWrapper>
)
