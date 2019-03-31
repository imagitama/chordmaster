import React from 'react'
import FooterStyled, { FooterSegment } from './footer.styles'
import settings from '../../settings'

export const Footer = () => (
  <FooterStyled>
    <FooterSegment>
      Made by <a href="http://www.jaredwilliams.com.au">Jared Williams</a>
    </FooterSegment>
    <FooterSegment>
      <a href={settings.githubRepoUrl} title="View the GitHub repo">GitHub</a>
    </FooterSegment>
    <FooterSegment>
      Version {'COMMIT_REF' in process.env ? process.env.COMMIT_REF : 'Unknown'}
    </FooterSegment>
  </FooterStyled>
)

export default Footer
