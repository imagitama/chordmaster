import React from 'react'
import HeaderStyled, { HeaderSegment } from './header.styles'
import KeySelector from '../key-selector/key-selector'
import ChordProgressionSelector from '../chord-progression-selector/chord-progression-selector'

export const Header = () => (
  <HeaderStyled>
    <HeaderSegment>
      ChordMaster
    </HeaderSegment>
    <HeaderSegment>
      <KeySelector />
    </HeaderSegment>
    <HeaderSegment>
      <ChordProgressionSelector />
    </HeaderSegment>
  </HeaderStyled>
)

export default Header
