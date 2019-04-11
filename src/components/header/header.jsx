import React from 'react'
import HeaderStyled, { HeaderSegment, LogoSegment, LogoLink, LogoLabel, LogoBackground, NavigationSegment,  PrimaryHeaderStyled, Navigation, NavigationLink } from './header.styles'
import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle'
import ShowFeedbackFormButton from '../show-feedback-form-button/show-feedback-form-button'
import A from '../anchor/anchor'

export const Header = () => (
  <HeaderStyled>
    <PrimaryHeaderStyled>
      <LogoSegment>
        <LogoLink href="/" isInternal context="Header">
          <LogoLabel>
            ChordMaster
          </LogoLabel>
          <LogoBackground />
        </LogoLink>
      </LogoSegment>
      <NavigationSegment>
        <Navigation>
          <NavigationLink>
            <A href="/about" isInternal context="Header">About</A>
          </NavigationLink>
          <NavigationLink>
            <A href="/changes" isInternal context="Header">Recent Changes</A>
          </NavigationLink>
          <NavigationLink>
            <A href="/songs" isInternal context="Header">Songs</A>
          </NavigationLink>
        </Navigation>
      </NavigationSegment>
      <HeaderSegment>
        <DarkModeToggle />
      </HeaderSegment>
      <HeaderSegment>
        <ShowFeedbackFormButton />
      </HeaderSegment>
    </PrimaryHeaderStyled>
  </HeaderStyled>
)

export default Header
