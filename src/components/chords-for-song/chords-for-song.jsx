import React from 'react'
import { connect } from 'react-redux'
import { ChordsWrapper } from '../chords/chords'
import { Chord } from '../chord/chord'
import { getChordFromShortName, convertToEasierChord } from '../../utils'

const ChordsForSong = ({ chordShortNames, easierChordsEnabled }) => (
  <ChordsWrapper>
      {chordShortNames
        .map(chordShortName => easierChordsEnabled ? convertToEasierChord(chordShortName) : chordShortName)
        .filter((chordShortName, index) => chordShortNames.indexOf(chordShortName) === -1 || chordShortNames.indexOf(chordShortName) === index)
        .map(chordShortName => {
          const chord = getChordFromShortName(chordShortName)
          return <Chord key={chordShortName} {...chord} shortName={chordShortName} canFavourite={false} displayNotDefinedMessage={false} />
        })}
  </ChordsWrapper>
)

const mapStateToProps = ({ songs: { easierChordsEnabled } }) => ({ easierChordsEnabled })

export default connect(mapStateToProps)(ChordsForSong)
