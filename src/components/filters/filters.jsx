import React from 'react'
import KeySelector from '../key-selector/key-selector'
import ChordProgressionSelector from '../chord-progression-selector/chord-progression-selector'
import MajorMinorChordsOnlyToggle from '../major-minor-chords-only-toggle/major-minor-chords-only-toggle'
import FavouritesOnlyToggle from '../favourites-only-toggle/favourites-only-toggle'
import ResetButton from '../reset-button/reset-button'
import FiltersStyled, { Filter } from './filters.styles'

export default () => (
  <FiltersStyled>
    <Filter>
      <MajorMinorChordsOnlyToggle />
    </Filter>
    <Filter>
      <KeySelector />
    </Filter>
    <Filter>
      <ChordProgressionSelector />
    </Filter>
    <Filter>
      <FavouritesOnlyToggle />
    </Filter>
    <Filter>
      <ResetButton />
    </Filter>
  </FiltersStyled>
)