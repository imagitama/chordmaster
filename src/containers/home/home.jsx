import React from 'react'
import { connect } from 'react-redux'
import SearchInput from '../../components/search-input/search-input'
import SearchTerm from '../../components/search-term/search-term'
import OutputMessage from '../../components/output-message/output-message'
import Chords from '../../components/chords/chords'
import { populateCopiedChords, filterCommonChordsOnly, sortChordsBySequence, filterChordsByChordProgression, filterChordsBySearchTerm, filterFavouriteChordsOnly } from '../../filters'
import chordsDefinition from '../../chords'

const HomeContainer = ({ selectedKeyShortName, sortBySequence, selectedChordProgressionIdx, searchTerm, majorMinorChordsOnly, favouriteChords, favouritesOnly }) => {
  let chords = populateCopiedChords(chordsDefinition)

  if (!favouritesOnly) {
    if (!searchTerm && majorMinorChordsOnly && !selectedKeyShortName) {
      chords = filterCommonChordsOnly(chords)
    }

    if (selectedKeyShortName && sortBySequence) {
      chords = sortChordsBySequence(chords, selectedKeyShortName)
    }

    if (selectedKeyShortName && selectedChordProgressionIdx) {
      chords = filterChordsByChordProgression(chords, selectedKeyShortName, selectedChordProgressionIdx)
    }
  }

  if (favouritesOnly) {
    chords = filterFavouriteChordsOnly(chords, favouriteChords)
  }

  if (searchTerm) {
    chords = filterChordsBySearchTerm(chords, searchTerm)
  }

  return (
    <>
      <SearchInput />
      <SearchTerm />
      {chords.length ? <Chords chords={chords} /> : <OutputMessage>No chords found</OutputMessage>}
    </>
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

export default connect(mapStateToProps)(HomeContainer)