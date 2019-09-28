import React from 'react'
import FooterStyled, { Navigation, NavigationItem } from './footer.styles'
import settings from '../../settings'
import A from '../anchor/anchor'
import Button from '../button/button'
import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle'
import ShowFeedbackFormButton from '../show-feedback-form-button/show-feedback-form-button'

export const Footer = () => (
  <FooterStyled>
    <Navigation>
      <NavigationItem>
        <A href="/about" isInternal context="Header">
          About
        </A>
      </NavigationItem>
      <NavigationItem>
        <A href="/changes" isInternal context="Header">
          Recent Changes
        </A>
      </NavigationItem>
      <NavigationItem>
        <A href="/songs" isInternal context="Header">
          Songs
        </A>
      </NavigationItem>
    </Navigation>
    <Navigation>
      <NavigationItem>
        Made by{' '}
        <A href={settings.personalSiteUrl} context="Footer">
          Jared Williams
        </A>
      </NavigationItem>
      <NavigationItem>
        <A
          href={settings.githubRepoUrl}
          title="View the GitHub repo"
          context="Footer"
        >
          GitHub
        </A>
      </NavigationItem>
      <NavigationItem>
        <DarkModeToggle />
      </NavigationItem>
      <NavigationItem>
        <ShowFeedbackFormButton />
      </NavigationItem>
      <NavigationItem>
        <Button onClick={() => localStorage.clear()}>Nuke it</Button>
      </NavigationItem>
    </Navigation>
  </FooterStyled>
)

export default Footer
