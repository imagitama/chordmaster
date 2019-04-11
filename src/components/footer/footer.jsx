import React from 'react'
import FooterStyled, { FooterSegment } from './footer.styles'
import settings from '../../settings'
import A from '../anchor/anchor'

export const Footer = () => (
  <>
    <FooterStyled>
      <FooterSegment>
        Made by <A href={settings.personalSiteUrl} context="Footer">Jared Williams</A>
      </FooterSegment>
      <FooterSegment>
        <A href={settings.githubRepoUrl} title="View the GitHub repo" context="Footer">GitHub</A>
      </FooterSegment>
      <button style={{ position: 'absolute', bottom: 0, left: '50%' }} onClick={() => localStorage.clear()}>Nuke it</button>
    </FooterStyled>
  </>
)

export default Footer
