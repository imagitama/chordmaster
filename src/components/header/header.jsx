import React from 'react'
import HeaderStyled, { HeaderPullLeft, HeaderPullRight, HeaderButton } from './header.styles'
import KeySelector from '../key-selector/key-selector'
import ChordProgressionSelector from '../chord-progression-selector/chord-progression-selector'

export const Header = () => (
  <HeaderStyled>
    <HeaderPullLeft>
      <HeaderButton>
        ChordMaster
      </HeaderButton>
      <HeaderButton>
        <KeySelector />
      </HeaderButton>
      <HeaderButton>
        <ChordProgressionSelector />
      </HeaderButton>
    </HeaderPullLeft>
    <HeaderPullRight>
      <HeaderButton>
        Made by <a href="http://www.jaredwilliams.com.au">Jared Williams</a>
      </HeaderButton>
      <HeaderButton>
        <a href="https://github.com/imagitama/chords" title="View the GitHub repo">GitHub</a>
      </HeaderButton>
    </HeaderPullRight>
  </HeaderStyled>
)

export default Header
