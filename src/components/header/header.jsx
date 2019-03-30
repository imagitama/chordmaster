import React from 'react'
import HeaderStyled, { HeaderSegment } from './header.styles'
import KeySelector from '../key-selector/key-selector'
import ChordProgressionSelector from '../chord-progression-selector/chord-progression-selector'
import MajorMinorChordsOnlyToggle from '../major-minor-chords-only-toggle/major-minor-chords-only-toggle'
import FavouritesOnlyToggle from '../favourites-only-toggle/favourites-only-toggle'
import ResetButton from '../reset-button/reset-button'

export const Header = () => (
  <HeaderStyled>
    <HeaderSegment>
      ChordMaster
    </HeaderSegment>
    <HeaderSegment>
      <MajorMinorChordsOnlyToggle />
    </HeaderSegment>
    <HeaderSegment>
      <KeySelector />
    </HeaderSegment>
    <HeaderSegment>
      <ChordProgressionSelector />
    </HeaderSegment>
    <HeaderSegment>
      <FavouritesOnlyToggle />
    </HeaderSegment>
    <HeaderSegment>
      <ResetButton />
    </HeaderSegment>
  </HeaderStyled>
)

export default Header
