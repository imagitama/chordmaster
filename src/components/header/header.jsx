import React from 'react'
import { withRouter } from 'react-router-dom'
import HeaderStyled, { Logo, ReturnToMainAppLink } from './header.styles'
import Filters from '../filters/filters'

export const Header = ({ location: { pathname } }) => (
  <HeaderStyled>
    <Logo href="/" isInternal context="Header">
      chord.guide
    </Logo>
    {pathname === '/' ? (
      <Filters />
    ) : (
      <ReturnToMainAppLink href="/" isInternal>
        Return to main app
      </ReturnToMainAppLink>
    )}
  </HeaderStyled>
)

export default withRouter(Header)
