import React from 'react'
import FooterStyled, { FooterSegment } from './footer.styles'
import settings from '../../settings'
import A from '../anchor/anchor'

export const Footer = () => (
  <>
    <FooterStyled>
      <FooterSegment>
        Made by <A href="http://www.jaredwilliams.com.au" context="Footer">Jared Williams</A>
      </FooterSegment>
      <FooterSegment>
        <A href={settings.githubRepoUrl} title="View the GitHub repo" context="Footer">GitHub</A>
      </FooterSegment>
    </FooterStyled>
    <button onClick={() => localStorage.clear()}>Nuke it</button>
  </>
)

export default Footer
