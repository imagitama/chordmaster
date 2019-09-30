import React from 'react'
import { connect } from 'react-redux'
import ChordsStyled from './chords.styles'
import Chord from '../chord/chord'
import OutputMessage from '../output-message/output-message'
import {
  populateCopiedChords,
  filterCommonChordsOnly,
  sortChordsBySequence,
  filterChordsByChordProgression,
  filterChordsBySearchTerm,
  filterFavouriteChordsOnly
} from '../../filters'
import chordsDefinition from 'guitar-chord-definitions/dist/chords'

export const Chords = ({
  selectedKeyShortName,
  sortBySequence,
  selectedChordProgressionIdx,
  searchTerm,
  majorMinorChordsOnly,
  favouriteChords,
  favouritesOnly,
  canFavourite = true
}) => {
  let chords = populateCopiedChords(chordsDefinition)

  if (!favouritesOnly) {
    if (!searchTerm && majorMinorChordsOnly && !selectedKeyShortName) {
      chords = filterCommonChordsOnly(chords)
    }

    if (selectedKeyShortName && sortBySequence) {
      chords = sortChordsBySequence(chords, selectedKeyShortName)
    }

    if (selectedKeyShortName && selectedChordProgressionIdx) {
      chords = filterChordsByChordProgression(
        chords,
        selectedKeyShortName,
        selectedChordProgressionIdx
      )
    }
  }

  if (favouritesOnly) {
    chords = filterFavouriteChordsOnly(chords, favouriteChords)
  }

  if (searchTerm) {
    chords = filterChordsBySearchTerm(chords, searchTerm)
  }

  if (!chords.length) {
    return (
      <OutputMessage>
        No chords found. Maybe try turning off a filter?
      </OutputMessage>
    )
  }

  return (
    <ChordsStyled>
      {chords.map(chord => (
        <Chord key={chord.shortName} {...chord} canFavourite={canFavourite} />
      ))}
    </ChordsStyled>
  )
}

export const ChordsWrapper = ({ children }) => (
  <ChordsStyled>{children}</ChordsStyled>
)

const mapStateToProps = ({
  keys: { selectedKeyShortName, sortBySequence, selectedChordProgressionIdx },
  chords: { searchTerm, majorMinorChordsOnly, favouritesOnly, favouriteChords }
}) => ({
  selectedKeyShortName,
  sortBySequence,
  selectedChordProgressionIdx,
  searchTerm,
  majorMinorChordsOnly,
  favouriteChords,
  favouritesOnly
})

export default connect(mapStateToProps)(Chords)
