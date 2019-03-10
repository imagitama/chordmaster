import React from 'react'
import HeaderStyled, { HeaderPullLeft, HeaderPullRight, HeaderButton } from './header.styles'

export const Header = () => (
  <HeaderStyled>
    <HeaderPullLeft>
      Chords
    </HeaderPullLeft>
    <HeaderPullRight>
      <HeaderButton>
        Made by <a href="https://www.jaredwilliams.com.au">Jared Williams</a>
      </HeaderButton>
      <HeaderButton>
        <a href="https://github.com/imagitama/chords" title="View the GitHub repo">GitHub</a>
      </HeaderButton>
    </HeaderPullRight>
  </HeaderStyled>
)

export default Header
