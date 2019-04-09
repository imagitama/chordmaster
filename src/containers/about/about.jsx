import React from 'react'
import settings from '../../settings'
import A from '../../components/anchor/anchor'
import ContentArea from '../../components/content-area/content-area'

export default () => (
  <ContentArea>
    <h1>About Chordmaster</h1>
    <p>
      This web app was created by <A href={settings.personalSiteUrl}>Jared Williams</A> in 2019
      because there is no simple, fast list of all chords, keys and key progressions that you can 
      search and filter.
    </p>
    <p>
      Although the creator actively maintains and improves it, he relies on community contribution as it is an <A href={settings.githubRepoUrl}>open source project</A>.
      If you can code, he appreciates your contribution. Otherwise you can send feedback using the
      feedback button at the top right of the page. 
    </p>
    <p>
      Thanks for using Chordmaster!
    </p>
    <br />
    <p>
      <A href="/" isInternal context="About container">Return to app</A>
    </p>
  </ContentArea>
)